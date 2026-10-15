<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Throwable;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $products = Product::query()
                ->where('is_available', true)
                ->orderBy('id')
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
            $product = Product::query()
                ->where('is_available', true)
                ->findOrFail($id);

            return response()->json([
                'data' => $product,
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
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