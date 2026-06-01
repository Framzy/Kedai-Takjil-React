import { formatPrice } from "../../utils/formatPrice";

const CartList = ({ products, carts, onChangeQuantity }) => {
  const getProductInfo = (productId) => {
    return products.find((p) => p.id == productId);
  };

  const getTotalPrice = () => {
    return carts.reduce((total, cart) => {
      const product = getProductInfo(cart.product_id);
      return total + (product?.price || 0) * cart.quantity;
    }, 0);
  };

  if (carts.length === 0) {
    return (
      <div
        className="listCart"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <p style={{ color: "#555", fontSize: "18px" }}>Keranjang Anda Kosong</p>
      </div>
    );
  }

  return (
    <div className="listCart">
      {carts.map((cart, index) => {
        const product = getProductInfo(cart.product_id);
        if (!product) return null;

        const totalPrice = product.price * cart.quantity;
        return (
          <div key={index} className="items">
            <div className="image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
              <div className="name">{product.name}</div>
              <div className="totalPrice">{formatPrice(totalPrice)}</div>
              <div className="quantity">
                <span
                  className="minus"
                  onClick={() => onChangeQuantity(cart.product_id, "minus")}
                >
                  -
                </span>
                <span>{cart.quantity}</span>
                <span
                  className="plus"
                  onClick={() => onChangeQuantity(cart.product_id, "plus")}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px 60px",
          borderTop: "1px solid #ddd",
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "700", color: "#04605D" }}>
          Total: {formatPrice(getTotalPrice())}
        </div>
      </div>
    </div>
  );
};

export default CartList;
