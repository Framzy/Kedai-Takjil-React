function CartEmpty({ navigateTo }) {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-6 p-2">
        <h2 className="font-bold text-2xl text-gray-600">
          Keranjang Anda Kosong
        </h2>
        <p className="font-semibold text-md text-gray-600">
          Keranjangmu kosong, ayo pesan sekarang!
        </p>
        <button
          className="w-fit px-12 py-2 text-white rounded-3xl shadow-[0_8px_8px_-8px_rgba(0,0,0,0.8)] cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-colors duration-300"
          onClick={() => navigateTo("/products")}
        >
          Lihat Produk
        </button>
      </div>
    </>
  );
}

export default CartEmpty;
