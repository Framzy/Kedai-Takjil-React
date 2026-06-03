import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import PopupCart from "../components/cart/PopupCart";
import PopupCheckout from "../components/product/PopupCheckout";
import ProductList from "../components/product/ProductList";
import CartList from "../components/cart/CartList";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const {
    carts,
    addToCart,
    changeQuantity,
    clearCart,
    showPopup,
    setShowPopup,
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Gagal load produk:", err));
  }, []);

  const getTotalPrice = () => {
    return carts.reduce((total, cart) => {
      const product = products.find((p) => p.id === cart.product_id);
      return total + (product?.price || 0) * cart.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    clearCart();
    setShowCheckout(false);
  };

  return (
    <div className="cart min-h-screen bg-[var(--background-white)] overflow-hidden px-8 py-12 md:p-10 md:pt-28">
      <div className="product-small-container" id="section2">
        <h1 className="product-title">Semua Produk</h1>
        <div className="productTab grid grid-cols-1 md:grid-cols-5 gap-5">
          <ProductList products={products} onAddToCart={addToCart} />
        </div>

        <div className="cartTab">
          <CartList
            products={products}
            carts={carts}
            onChangeQuantity={changeQuantity}
          />
          <div className="btn">
            <button className="close" onClick={() => navigate("/")}></button>
            <div className="btn-info">
              <div className="totalAllPrice">
                <p>Total</p>
                <p className="allPrice">{formatPrice(getTotalPrice())}</p>
              </div>
              <button
                className="checkOut"
                onClick={() => carts.length > 0 && setShowCheckout(true)}
              >
                Check Out
              </button>
              <p className="buyOption">*Jenis Pembayaran: Cash on Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <PopupCart show={showPopup} onClose={() => setShowPopup(false)} />
      <PopupCheckout
        show={showCheckout}
        onClose={() => setShowCheckout(false)}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Cart;
