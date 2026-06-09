import { formatPrice } from "../../utils/formatPrice";

const CartItem = ({
  product,
  cart,
  totalPrice,
  onChangeQuantity,
  removeItem,
}) => {
  return (
    <div
      key={cart.product_id}
      className="w-full h-fit flex flex-row p-10 gap-8 odd:bg-gray-100 rounded-xl"
    >
      <div className=" w-56 aspect-square rounded-xl shadow-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover drop-shadow-lg brightness-90 hover:scale-105 hover:brightness-100 transition-all duration-300"
        />
      </div>
      <div className="w-fit gap-4 flex flex-col justify-center items-left">
        <h2 className="font-bold text-xl text-gray-600">{product.name}</h2>
        <h2 className="font-bold text-2xl text-[var(--color-primary)]">
          {formatPrice(totalPrice)}
        </h2>
        <div className=" w-46 flex justify-center items-center  border-2 border-gray-200 bg-gray-200">
          <p
            className="px-4 py-2 font-bold text-2xl text-[var(--color-primary)] cursor-pointer hover:bg-gray-100 "
            onClick={() => onChangeQuantity(cart.product_id, "minus")}
          >
            -
          </p>
          <p className="w-full h-full flex justify-center items-center  font-bold text-xl text-gray-500 bg-gray-100">
            {cart.quantity}
          </p>
          <p
            className="px-4 py-2 font-bold text-2xl text-[var(--color-primary)] cursor-pointer hover:bg-gray-100 hover:border-gray-200 "
            onClick={() => onChangeQuantity(cart.product_id, "plus")}
          >
            +
          </p>
        </div>
        <button
          className="w-fit px-18 py-3 font-bold text-gray-600 rounded-3xl  shadow-[0_4px_0px_0px_rgba(209,209,209,1)] cursor-pointer 
                      bg-gray-200 hover:bg-gray-100 transition-colors duration-300 "
          onClick={() => removeItem(cart.product_id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default CartItem;
