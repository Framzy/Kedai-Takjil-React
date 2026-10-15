const ProductSkeleton = () => {
  return (
    <div className="w-60 h-auto gap-2 rounded-xl shadow-lg p-3 flex flex-col justify-between animate-pulse">
      {/* Area gambar */}
      <div className="aspect-square w-full rounded-xl bg-gray-200 flex items-center justify-center">
        <p className="font-bold text-regular text-gray-600">Memuat...</p>
      </div>
      {/* Informasi produk */}
      <div className="mt-4 space-y-3">
        <div className="h-5 w-3/4 rounded bg-gray-200" />

        <div className="h-4 w-1/2 rounded bg-gray-200" />
        <div className="h-6 w-2/5 rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
