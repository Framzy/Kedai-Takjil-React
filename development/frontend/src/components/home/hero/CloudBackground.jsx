import { motion } from "framer-motion";
import cloudImg from "../../../assets/images/home/hero_cloud_img.webp";

function CloudBackground() {
  return (
    <>
      <motion.img
        src={cloudImg}
        alt="Cloud"
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 w-full
                  object-fill select-none pointer-events-none"
        initial={{ opacity: 0, scale: 2, y: "100vh" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}

export default CloudBackground;
