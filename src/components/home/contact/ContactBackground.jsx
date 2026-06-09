import { motion } from "framer-motion";
import personImg from "../../../assets/images/home/contact_person_img.webp";

function ContactBackground() {
  return (
    <div className=" w-[60vw] md:w-[45vw] xl:w-[38vw] max-w-lg xl:max-w-6xl">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        src={personImg}
        alt="about_shop"
        className="w-full select-none"
      />
    </div>
  );
}

export default ContactBackground;
