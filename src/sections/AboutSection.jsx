import cloudImg from "../assets/images/home/about_cloud_img.webp";

import { motion } from "framer-motion";
import SectionTitle from "../components/home/SectionTitle";
import ShopBackground from "../components/home/about/ShopBackground";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="2xl:min-h-screen scroll-mt-16 bg-[var(--color-primary)] px-8 py-12 md:pt-8 md:pb-12 xl:pt-10 overflow-hidden"
    >
      <SectionTitle label="Tentang Kami" color="white" />

      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-start items-center px-6 md:p-8 ">
        <ShopBackground />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center items-center md:items-start text-start mb-10 md:mb-0 gap-4 md:gap-8 "
        >
          <img
            src={cloudImg}
            alt="about_cloud"
            className=" w-18 md:w-24 xl:w-38 select-none"
          />
          <div className="max-w-lg flex flex-col gap-4 text-white text-center md:text-left ">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold md:pb-4 text-white ">
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
