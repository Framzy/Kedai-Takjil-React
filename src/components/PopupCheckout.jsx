import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopupCheckout = ({ show, onClose, onCheckout }) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!nama.trim()) newErrors.nama = "Masukan nama anda";
    if (!alamat.trim()) newErrors.alamat = "Masukan alamat anda";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (validate()) {
      onCheckout();
      setShowSuccess(true);
      setNama("");
      setAlamat("");
      setErrors({});
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        navigate("/");
      }, 2000);
    }
  };

  const handleClose = () => {
    setNama("");
    setAlamat("");
    setErrors({});
    onClose();
  };

  if (!show) return null;

  return (
    <>
      <div className={`popupCheckOut ${show ? "show" : ""}`}>
        <div className="popupCheckOut-content">
          <span className="close-popupCheckOut" onClick={handleClose}>
            &times;
          </span>
          <div className="popupCheckOut-pemesanan">
            <div className="popupCheckOut-pemesanan-title">
              <p>Alamat Pengantaran</p>
            </div>
            <label htmlFor="nama">Nama Pembeli</label>
            <input
              type="text"
              id="nama"
              placeholder="Nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            {errors.nama && (
              <p className="nama-required" style={{ display: "block" }}>
                {errors.nama}
              </p>
            )}

            <label htmlFor="alamat">Alamat</label>
            <textarea
              id="alamat"
              cols="30"
              rows="10"
              placeholder="Alamat Anda"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            ></textarea>
            {errors.alamat && (
              <p className="alamat-required" style={{ display: "block" }}>
                {errors.alamat}
              </p>
            )}

            <button
              type="submit"
              className="popupCheckOut-btn"
              onClick={handleCheckout}
            >
              <p>kirim</p>
            </button>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className={`popupCheckOutSuccess ${showSuccess ? "show" : ""}`}>
          <div className="popupCheckOutSuccess-content">
            <div className="popupCheckOutSuccess-pemesanan">
              <img src="/images/icons/ceklis.png" alt="success" />
              <p>Pesanan Berhasil Dikirim!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupCheckout;
