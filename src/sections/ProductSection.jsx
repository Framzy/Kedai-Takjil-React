import { motion } from "framer-motion";
import ProductSectionList from "../components/home/product/ProductSectionList";

const productListContent = [
  { label: "Produk Rekomendasi", value: "recommended" },
  { label: "Produk Terbaru", value: "newest" },
];

function ProductSection() {
  return (
    <>
      <section
        id="product"
        className="scroll-mt-16 bg-[var(--background-white)] px-8 py-12 md:px-10 md:py-14"
      >
        <div className="w-full flex justify-center items-center pb-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-fit font-bold text-center text-3xl sm:text-4xl text-[var(--color-primary)] 
        px-15 py-2 shadow-[0_10px_8px_-10px_rgba(0,0,0,0.5)]"
          >
            Produk Kami
          </motion.h1>
        </div>

        <div className="w-full flex flex-col gap-10 justify-center items-center ">
          {productListContent.map((item, index) => (
            <ProductSectionList
              key={index}
              label={item.label}
              productListOptions={item.value}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default ProductSection;
