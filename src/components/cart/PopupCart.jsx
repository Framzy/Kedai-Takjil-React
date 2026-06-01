import { useNavigate } from "react-router-dom";

const PopupCart = ({ show, onClose }) => {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate("/products");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="popupCart show">
      <div className="popupCart-content">
        <span className="close-popupCart" onClick={onClose}>
          &times;
        </span>
        <div className="popupCart-pemesanan">
          <img src="/images/icons/ceklis.png" alt="success" />
          <p>Berhasil Dimasukkan Ke Keranjang</p>
          <button
            className="popupCart-btn-pesan"
            onClick={handleNavigateToCart}
          >
            <img src="/images/icons/cart-icon.png" alt="cart" />
            <p>Lihat Keranjang</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;
