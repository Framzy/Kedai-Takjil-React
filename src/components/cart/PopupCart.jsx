import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion"; // ← tambah AnimatePresence
import SuccessIcon from "../../assets/icons/cart/success_icon.webp";
import CartIcon from "../../assets/icons/cart/cart_icon.webp";

const PopupCart = ({ show, onClose }) => {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate("/cart");
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-[999] flex justify-center items-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          >
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.5,
                opacity: 0,
              }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="bg-white w-xs md:w-md rounded-2xl shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className=" w-full flex justify-end px-4 py-2 md:px-4 md:py-4 text-3xl md:text-5xl leading-none font-regular text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors cursor-pointer"
                onClick={onClose}
              >
                &times;
              </button>
              <div className="w-fit flex flex-col justify-center items-center pb-6 md:pb-10 gap-6">
                <img
                  src={SuccessIcon}
                  alt="success"
                  className=" w-12 md:w-18 h-auto  object-contain"
                />
                <p className="font-semibold text-sm md:text-lg text-center text-gray-600">
                  Berhasil Dimasukkan ke Keranjang!
                </p>
                <button
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-[var(--color-primary)] text-white rounded-3xl
                shadow-[0_4px_0px_0px_rgba(209,209,209,1)] cursor-pointer
                hover:bg-[var(--color-secondary)] transition-colors duration-300"
                  onClick={handleNavigateToCart}
                >
                  <img
                    src={CartIcon}
                    alt="cart"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="font-semibold text-sm md:text-lg">
                    Lihat Keranjang
                  </p>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>,
    document.body,
  );
};

export default PopupCart;
