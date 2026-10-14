import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/hooks/useCart";
import motorIcon from "../../assets/icons/cart/motor_icon.webp";
import { fadeInRight, fadePopUp } from "../../utils/motionVariants";

const PopupCheckout = ({ show, onClose }) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const { clearCart, carts } = useCart();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!nama.trim() || !alamat.trim()) {
      setError("Nama dan alamat wajib diisi.");
      return;
    }

    const order = {
      id: Date.now(),
      nama,
      alamat,
      items: carts,
      status: "Menunggu Konfirmasi",
      createdAt: new Date().toLocaleString("id-ID"),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    clearCart();
    setError("");

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setNama("");
      setAlamat("");
      navigate("/");
    }, 2500);
  };

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/40 flex justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={!showSuccess ? onClose : undefined}
        >
          {!showSuccess ? (
            <motion.div
              className="w-sm md:w-xl bg-white rounded-3xl overflow-hidden"
              {...fadePopUp}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col p-8 gap-4"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl text-gray-700">
                      Alamat Pengantaran
                    </h2>
                    <button
                      className="text-2xl md:text-3xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                      onClick={onClose}
                    >
                      &times;
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="nama"
                      className="text-sm font-semibold text-gray-600"
                    >
                      Nama Pembeli
                    </label>
                    <input
                      type="text"
                      id="nama"
                      placeholder="Nama Anda"
                      value={nama}
                      onChange={(e) => {
                        setNama(e.target.value);
                        setError("");
                      }}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="alamat"
                      className="text-sm font-semibold text-gray-600"
                    >
                      Alamat
                    </label>
                    <textarea
                      id="alamat"
                      placeholder="Alamat lengkap Anda"
                      value={alamat}
                      onChange={(e) => {
                        setAlamat(e.target.value);
                        setError("");
                      }}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                      {error}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-[var(--color-primary)] text-white font-semibold rounded-3xl shadow-[0_4px_0px_0px_rgba(200,200,200,0.8)] hover:bg-[var(--color-secondary)] transition-colors duration-300 cursor-pointer"
                  >
                    Kirim Pesanan
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    *Jenis Pembayaran: Cash on Delivery
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              className="w-sm md:w-xl aspect-video bg-white rounded-2xl shadow-2xl flex flex-col items-center overflow-hidden"
              {...fadePopUp}
              onClick={(e) => e.stopPropagation()}
              key="success"
            >
              <button
                className="w-full flex justify-end px-4 pt-2 md:px-4 md:pt-4 text-3xl md:text-5xl leading-none font-regular text-[var(--color-primary)] 
                        hover:text-[var(--color-secondary)] transition-colors cursor-pointer"
                onClick={onClose}
              >
                &times;
              </button>
              <div className="w-full h-full flex flex-col justify-start items-center gap-2 md:gap-6 py-2 md:py-4">
                <motion.img
                  {...fadeInRight}
                  src={motorIcon}
                  alt="motor"
                  className="w-16 md:w-24 h-auto object-contain"
                />
                <p className="font-bold text-lg md:text-2xl text-gray-700">
                  Pesanan Berhasil Dikirim!
                </p>
                <div className="w-2/3 md:w-full flex flex-col items-center">
                  <p className="text-xs md:text-base text-gray-400 text-center">
                    Terima kasih, {nama}! Pesanan anda akan segera diproses.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default PopupCheckout;
