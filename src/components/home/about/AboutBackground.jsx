import { motion } from "framer-motion";
import shopImg from "../../../assets/images/home/about_shop_img.webp";
import { fadeInRight } from "../../../utils/motionVariants";

function ShopBackground() {
  return (
    <>
      <div className="w-[60vw] md:w-[65vw] lg:w-[40vw] max-w-7xl ">
        <motion.img
          {...fadeInRight}
          src={shopImg}
          alt="about_shop"
          className="w-full select-none"
        />
      </div>
    </>
  );
}

export default ShopBackground;
