import { formatPrice } from "./formatPrice";

export const getTotalPrice = (carts, products) => {
  const totalPrice = carts.reduce((total, cart) => {
    const product = products.find((p) => p.id === cart.product_id);
    return total + (product?.price || 0) * cart.quantity;
  }, 0);

  return formatPrice(totalPrice);
};
