import getProductCart from "../../utils/getProductCart";
import CartItem from "./CartItem";

const CartList = ({ products, carts, removeItem, onChangeQuantity }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8">
      {carts.map((cart) => {
        const cartItem = getProductCart(cart, products);
        if (!cartItem) return null;
        const { product, totalPrice } = cartItem;

        return (
          <CartItem
            key={cart.product_id}
            product={product}
            cart={cart}
            totalPrice={totalPrice}
            onChangeQuantity={onChangeQuantity}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default CartList;
