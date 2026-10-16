<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use \Illuminate\Database\Eloquent\ModelNotFoundException;
use Throwable;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $sales = DB::table('order_items')
                ->select('product_id')
                ->selectRaw('SUM(quantity) AS sold')
                ->groupBy('product_id');

            $products = Product::query()
                ->where('products.is_available', true)
                ->leftJoinSub($sales, 'sales', function ($join) {
                    $join->on('products.id', '=', 'sales.product_id');
                })
                ->select('products.*')
                ->selectRaw('COALESCE(sales.sold, 0) AS sold')
                ->orderBy('products.id')
                ->get();

            return response()->json([
                'data' => $products,
            ]);
        } catch (Throwable $e) {
            Log::error('Gagal mengambil daftar produk.', [
                'exception' => $e,
            ]);

            return response()->json([
                'message' => 'Terjadi kesalahan pada server.',
            ], 500);
        }
    }

    public function show(int $id): JsonResponse
    {
        try {
            $sales = DB::table('order_items')
                ->select('product_id')
                ->selectRaw('SUM(quantity) AS sold')
                ->groupBy('product_id');

            $product = Product::query()
                ->where('products.is_available', true)
                ->leftJoinSub($sales, 'sales', function ($join) {
                    $join->on('products.id', '=', 'sales.product_id');
                })
                ->select('products.*')
                ->selectRaw('COALESCE(sales.sold, 0) AS sold')
                ->findOrFail($id);

            return response()->json([
                'data' => $product,
            ]);
        } catch (ModelNotFoundException $e) {
            throw $e;
        } catch (Throwable $e) {
            Log::error('Gagal mengambil detail produk.', [
                'product_id' => $id,
                'exception' => $e,
            ]);

            return response()->json([
                'message' => 'Terjadi kesalahan pada server.',
            ], 500);
        }
    }
}