import shopImg from "../assets/images/home/about_shop_img.webp";
import cloudImg from "../assets/images/home/about_cloud_img.webp";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[var(--color-primary)] px-8 py-12 md:py-16 overflow-hidden"
    >
      <div className="w-full flex justify-center items-center pb-10">
        <h1
          className="w-fit font-bold text-center text-2xl sm:text-4xl text-[white] 
        px-15 py-2 shadow-[0_10px_8px_-10px_rgba(255,255,255,0.3)]"
        >
          Tentang Kami
        </h1>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row justify-start items-center px-6 md:px-8">
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

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className=" flex flex-col justify-center items-start text-start mt-10 md:mt-0 gap-8 "
        >
          <img
            src={cloudImg}
            alt="about_cloud"
            className="hidden md:block select-none"
          />
          <div className="max-w-lg flex flex-col gap-4 text-white text-center md:text-left ">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold pb-4 text-white ">
              Kedai Takjil
            </h2>
            <div className="text-xs md:text-sm flex flex-col gap-4">
              <p>
                Kedai takjil merupakan tempat yang sangat pas untuk anda yang
                kangen atau sedang ingin merasakan minuman yang selalu hadir
                pada bulan Ramadhan.
              </p>
              <p>
                Kedai takjil merupakan tempat yang sangat pas untuk anda yang
                kangen atau sedang ingin merasakan minuman yang selalu hadir
                pada bulan Ramadhan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
