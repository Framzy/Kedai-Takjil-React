import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopupCart from "../components/PopupCart";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, getTotalQuantity, showPopup, setShowPopup } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div className="home-body">
      <Navbar
        cartCount={getTotalQuantity()}
        onCartClick={() => navigate("/products")}
      />

      <div className="header" id="section1">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="fadeInUp">
                <h2>Kedai Takjil</h2>
                <h1>Aneka Es Takjil!</h1>
                <p>
                  Setelah kamu menahan haus dan lapar seharian,
                  <br />
                  tenggorokanmu pasti ingin merasakan
                  <br />
                  kesegaran yang menyegarkan.
                </p>
                <a href="#section2" className="btn_link" id="product-move">
                  Order Sekarang &#8594;
                </a>
              </div>
            </div>
            <div className="orang">
              <img
                src="/images/home/orang.png"
                alt="orang"
                className="fadeInUp"
              />
            </div>
            <div className="awan">
              <img src="/images/home/cloud_homepage.png" alt="cloud" />
            </div>
            <div className="lentera">
              <img
                src="/images/home/lampu.png"
                alt="lampu"
                className="bounceInDown"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container" id="section2">
        <h1 className="title">Produk Kami</h1>
        <div className="row-2">
          <div className="information">
            <h3>| Produk Rekomendasi</h3>
            <h3>
              <a href="/products" className="full-product">
                Lihat Semua
              </a>
            </h3>
          </div>
          <div className="product">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="col-3">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="star">
                      <img src="/images/icons/star.png" alt="star" />
                    </i>
                  ))}
                </div>
                <p>Rp {(product.price / 1000).toFixed(0)},000</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer variant="home" />
      <PopupCart show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Home;
