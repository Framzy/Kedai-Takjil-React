import { motion } from "framer-motion";
import PersonImage from "../../../assets/images/home/person_img.webp";

function PersonBackground() {
  return (
    <>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.img
          src={PersonImage}
          alt="Person"
          className="absolute pointer-events-none"
          initial={{ y: 20, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  );
}

export default PersonBackground;
