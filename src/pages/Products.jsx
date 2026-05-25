import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../hooks/useCart";
import PopupCart from "../components/PopupCart";
import PopupCheckout from "../components/PopupCheckout";
import ProductList from "../components/ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const { addToCart, clearCart, showPopup, setShowPopup } = useCart();

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div className="min-h-screen bg-[var(--background)] overflow-hidden px-8 py-12 md:p-12">
      <div className="w-full flex justify-center items-center pb-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-fit font-bold text-center text-3xl sm:text-4xl text-[var(--color-primary)] 
        px-15 py-2 shadow-[0_10px_8px_-10px_rgba(0,0,0,0.3)]"
        >
          Semua Produk
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex flex-col justify-center items-center bg-[white] rounded-3xl shadow-lg"
        id="section2"
      >
        <div className="w-full p-12">
          <ProductList products={products} onAddToCart={addToCart} />
        </div>
      </motion.div>

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
