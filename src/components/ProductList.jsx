import { formatPrice } from "../utils/formatPrice";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-60 h-auto gap-2 rounded-xl shadow-lg p-3 flex flex-col justify-between"
          data-id={product.id}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full bg-black/10 h-40 object-cover rounded-lg"
          />
          <div className="w-full h-30 gap-1 flex flex-col justify-center">
            <p className="font-bold text-lg">{product.name}</p>
            <p className="font-extrabold text-lg text-[var(--color-primary)]">
              {formatPrice(product.price)}
            </p>
            <button
              className="w-full py-2 text-white rounded-3xl shadow-[0_8px_8px_-8px_rgba(0,0,0,0.8)] cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-colors duration-300"
              onClick={() => onAddToCart(product.id)}
            >
              Pesan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
