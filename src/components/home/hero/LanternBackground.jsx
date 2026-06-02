import { motion } from "framer-motion";
import lanternImg from "../../../assets/images/home/hero_lantern_img.webp";
function LanternBackground() {
  return (
    <>
      <motion.img
        src={lanternImg}
        alt="Lantern"
        aria-hidden="true"
        className="absolute top-0 md:top-0 right-5 z-30 select-none pointer-events-none
                  w-[20%] md:w-[10%] lg:w-[8%]"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}

export default LanternBackground;
