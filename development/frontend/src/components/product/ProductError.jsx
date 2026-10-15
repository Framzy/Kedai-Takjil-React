function ProductError({ refetch, isLoading }) {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-3 py-8 px-4 bg-[var(--background-white)] rounded-2xl">
        <p className="font-bold text-sm text-[var(--color-primary)]">
          Produk gagal dimuat. Silakan coba lagi.
        </p>

        <button
          onClick={refetch}
          disabled={isLoading}
          className="bg-white px-4 py-2 rounded-2xl shadow-[0_2px_0px_0px_rgba(210,210,210,0.8)] 
                text-sm font-semibold text-[var(--color-primary)] 
                disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
                hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-colors duration-300
                "
        >
          {isLoading ? "Memuat ulang..." : "Coba Lagi"}
        </button>
      </div>
    </>
  );
}

export default ProductError;
