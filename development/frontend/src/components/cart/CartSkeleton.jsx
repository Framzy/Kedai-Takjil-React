const CartSkeleton = () => {
  return (
    <div className="w-full h-fit even:bg-gray-100 sm:even:bg-white odd:bg-gray-100 rounded-xl">
      <div className="w-full h-full flex flex-col sm:flex-row justify-start items-center p-6 gap-8 animate-pulse">
        {/* Area gambar */}
        <div className="bg-white w-full h-40 sm:h-auto sm:w-56 aspect-square rounded-xl shadow-lg overflow-hidden flex justify-center items-center">
          <p className="font-bold text-regular text-gray-600">Memuat...</p>
        </div>
        {/* Informasi produk */}
        <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-2">
          <div className="h-5 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-1/2 rounded bg-gray-200" />
          <div className="h-5 w-3/5 rounded bg-gray-200" />
          <div className="h-6 w-2/5 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
