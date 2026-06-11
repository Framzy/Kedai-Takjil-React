import cloudImg from "../assets/images/home/about_cloud_img.webp";

import { motion } from "framer-motion";
import SectionTitle from "../components/home/SectionTitle";
import AboutBackground from "../components/home/about/AboutBackground";
import { fadeInLeft } from "../utils/motionVariants";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[var(--color-primary)] px-8 py-12 md:pt-8 md:pb-12 xl:pt-10 overflow-hidden"
    >
      <SectionTitle label="Tentang Kami" color="white" />
      <div className="w-full h-full flex justify-center items-center md:py-12  ">
        <div className="w-fit h-full flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-16 ">
          <AboutBackground />

          <motion.div
            {...fadeInLeft}
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
              <div className="flex flex-col gap-4">
                <p className="text-xs md:text-sm xl:text-lg">
                  Kedai takjil merupakan tempat yang sangat pas untuk anda yang
                  kangen atau sedang ingin merasakan minuman yang selalu hadir
                  pada bulan Ramadhan.
                </p>
                <p className="text-xs md:text-sm xl:text-lg">
                  Kedai takjil merupakan tempat yang sangat pas untuk anda yang
                  kangen atau sedang ingin merasakan minuman yang selalu hadir
                  pada bulan Ramadhan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
