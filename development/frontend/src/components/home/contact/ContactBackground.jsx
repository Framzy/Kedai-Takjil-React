import { motion } from "framer-motion";
import personImg from "../../../assets/images/home/contact_person_img.webp";
import { fadeInRight } from "../../../utils/motionVariants";

function ContactBackground() {
  return (
    <div className="w-[60vw] md:w-[45vw] xl:w-[38vw] max-w-lg xl:max-w-6xl self-center md:self-end">
      <motion.img
        {...fadeInRight}
        src={personImg}
        alt="about_shop"
        className="w-full select-none"
      />
    </div>
  );
}

export default ContactBackground;
