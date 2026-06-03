import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

function ProductItem({ product }) {
  const { addToCart } = useCart();

  return (
    <>
      <div
        key={product.id}
        className="w-60 h-auto gap-2 rounded-xl shadow-lg p-3 flex flex-col justify-between"
        data-id={product.id}
      >
        <div className="w-full h-40 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover drop-shadow-lg brightness-90
                 hover:scale-105 hover:brightness-100
                 transition-all duration-300"
          />
        </div>
        <div className="w-full h-30 gap-1 flex flex-col justify-center">
          <p className="font-bold text-lg">{product.name}</p>
          <p className="font-extrabold text-lg text-[var(--color-primary)]">
            {formatPrice(product.price)}
          </p>
          <button
            className="w-full py-2 text-white rounded-3xl shadow-[0_8px_8px_-8px_rgba(0,0,0,0.8)] cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-colors duration-300"
            onClick={() => addToCart(product.id)}
          >
            Pesan
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
