import { motion } from "framer-motion";
import shopImg from "../../../assets/images/home/about_shop_img.webp";

function ShopBackground() {
  return (
    <>
      <div className="w-[60vw] md:w-[75vw] lg:w-[50vw] max-w-7xl ">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          src={shopImg}
          alt="about_shop"
          className="w-full select-none"
        />
      </div>
    </>
  );
}

export default ShopBackground;
