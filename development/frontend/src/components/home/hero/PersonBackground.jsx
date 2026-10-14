import { motion } from "framer-motion";
import personImg from "../../../assets/images/home/hero_person_img.webp";

function PersonBackground() {
  return (
    <>
      <div
        className="
                  absolute z-10
                  bottom-0 md:bottom-20
                  left-[5%] w-[50%] sm:w-[40%] 
                  md:left-0 md:w-[42%]
                  lg:left-[5%] lg:w-[35%]
                  xl:left-[10%] xl:w-[30%]
                "
      >
        <motion.img
          src={personImg}
          alt="Person"
          className="w-full h-auto object-contain object-bottom select-none"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
    </>
  );
}

export default PersonBackground;
