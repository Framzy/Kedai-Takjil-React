import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopupCart from "../components/PopupCart";
import PopupCheckout from "../components/PopupCheckout";
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const {
    carts,
    addToCart,
    changeQuantity,
    clearCart,
    getTotalQuantity,
    showPopup,
    setShowPopup,
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const getTotalPrice = () => {
    return carts.reduce((total, cart) => {
      const product = products.find((p) => p.id == cart.product_id);
      return total + (product?.price || 0) * cart.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div className="product-body">
      <Navbar
        cartCount={getTotalQuantity()}
        onCartClick={() => window.scrollTo(0, 0)}
      />

      <div className="product-small-container" id="section2">
        <h1 className="product-title">Semua Produk</h1>
        <div className="productTab">
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

      <Footer variant="product" />
      <PopupCart show={showPopup} onClose={() => setShowPopup(false)} />
      <PopupCheckout
        show={showCheckout}
        onClose={() => setShowCheckout(false)}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Products;
