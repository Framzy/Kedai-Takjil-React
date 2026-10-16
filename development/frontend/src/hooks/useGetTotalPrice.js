import { formatPrice } from "../utils/formatPrice";

const useGetTotalPrice = (carts, products) => {
  const totalAmount = carts.reduce((total, cart) => {
    const product = products.find((item) => item.id === cart.product_id);

    return total + (Number(product?.price) || 0) * cart.quantity;
  }, 0);

  return formatPrice(totalAmount);
};

export default useGetTotalPrice;
