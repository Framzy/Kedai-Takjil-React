import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/hooks/useCart";
import { useNavigate } from "react-router-dom";
import PopupCheckout from "../components/cart/PopupCheckout";
import CartList from "../components/cart/CartList";
import CartEmpty from "../components/cart/CartEmpty";
import useGetDataProducts from "../hooks/useGetDataProducts";
import CartPayment from "../components/cart/CartPayment";

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { carts, removeItem, changeQuantity, clearCart } = useCart();
  const { products, isLoading, error } = useGetDataProducts();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    setShowCheckout(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--background-white)] flex items-center justify-center">
        <p className="text-gray-400 text-sm animate-pulse">Memuat produk...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[var(--background-white)] flex items-center justify-center">
        <p className="text-red-400 text-sm">Gagal memuat produk: {error}</p>
      </div>
    );
  }

  const isEmptyCart = carts.length === 0;

  return (
    <>
      <PopupCheckout
        show={showCheckout}
        onClose={() => setShowCheckout(false)}
        onCheckout={handleCheckout}
      />
      <div className="cart min-h-screen bg-[var(--background-white)] overflow-hidden px-8 py-12 md:p-10 md:pt-28">
        {isEmptyCart ? (
          <CartEmpty navigateTo={navigate} />
        ) : (
          <div className="flex flex-col justify-start items-start bg-white rounded-3xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              className="w-full flex flex-col justify-center items-start p-12 rounded-t-3xl"
            >
              <CartList
                products={products}
                carts={carts}
                removeItem={removeItem}
                onChangeQuantity={changeQuantity}
              />
            </motion.div>

            <div className="w-full flex flex-col justify-center items-end rounded-b-3xl border-t-2 border-gray-200 ">
              <CartPayment
                carts={carts}
                products={products}
                setShowCheckout={setShowCheckout}
                navigateTo={navigate}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
