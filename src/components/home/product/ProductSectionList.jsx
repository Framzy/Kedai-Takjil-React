import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductList from "../../product/ProductList";

function ProductSectionList({ label, productListOptions }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex flex-col justify-center items-center py-12 px-10 md:px-16  gap-6 bg-[white] rounded-3xl shadow-lg"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-[var(--color-gray)] text-base md:text-lg font-bold">
            | {label}
          </h3>
          <Link
            to="/products"
            className="text-[var(--color-primary)] text-base md:text-lg font-bold hover:text-[var(--color-secondary)] transition-colors duration-300"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="w-full">
          <ProductList productListOptions={productListOptions} />
        </div>
      </motion.div>
    </>
  );
}

export default ProductSectionList;
