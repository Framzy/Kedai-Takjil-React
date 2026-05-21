import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-body">
      <Navbar
        cartCount={getTotalQuantity()}
        onCartClick={() => navigate("/products")}
      />

      <div className="contact-small-container">
        <h1 className="contact-title">
          <div className="bounceInDown">Hubungi Kami</div>
        </h1>
        <div className="contact-row">
          <div className="contact-kedai">
            <img
              src="/images/contact/banner.png"
              alt="banner"
              className="fadeInLeft"
            />
          </div>
          <div className="contact-col-2">
            <div className="contact-information">
              <div className="fadeInRight">
                <p>Anda bisa menghubungi kami melalui:</p>
                <div className="contact-info">
                  <div className="email-img">
                    <img src="/images/contact/logo-email.png" alt="email" />
                  </div>
                  <div className="contact-info-sub">
                    <h2>Email</h2>
                    <p>Melayani Anda pada 08.00 - 17.00 WIB</p>
                    <p style={{ color: "#04605D" }}>cskedaitakjil@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="wa-img">
                    <img
                      src="/images/contact/logo-whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <div className="contact-info-sub">
                    <h2>Whatsapp</h2>
                    <p>Melayani Anda pada 08.00 - 17.00 WIB</p>
                    <p style={{ color: "#04605D" }}>08951234567</p>
                  </div>
                </div>
                <h2>Ikuti Kami</h2>
                <div className="social-media">
                  <div className="instagram">
                    <a href="#">
                      <img
                        src="/images/contact/logo-instagram.png"
                        alt="instagram"
                      />
                      <p>@kedaitakjil</p>
                    </a>
                  </div>
                  <div className="twitter">
                    <a href="#">
                      <img
                        src="/images/contact/logo-twitter.png"
                        alt="twitter"
                      />
                      <p>@kedaitakjil</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer variant="contact" />
    </div>
  );
};

export default Contact;
