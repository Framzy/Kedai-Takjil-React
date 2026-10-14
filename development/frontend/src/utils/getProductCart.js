function getProductCart(cart, products) {
  const product = products.find((p) => p.id == cart.product_id);

  if (!product) return null;

  const totalPrice = product.price * cart.quantity;

  return { product, totalPrice };
}

export default getProductCart;
