import background from "../assets/images/home/background_img.webp";
import mobileBackground from "../assets/images/home/mobile_background_img.webp";
import cloudImg from "../assets/images/home/cloud_img.webp";
import personImg from "../assets/images/home/person_img.webp";
import lanternImg from "../assets/images/home/lantern_img.webp";

import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import useScrollToSection from "../hooks/useScrollToSection";

function HeroSection() {
  const { isMobile } = useIsMobile();
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden scroll-mt-16  pt-16"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${isMobile ? mobileBackground : background})`,
        }}
      />

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
          initial={{ opacity: 1, translateY: 1000 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <img
        src={cloudImg}
        alt="Cloud"
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 w-full
                   object-fill select-none pointer-events-none"
      />

      <motion.img
        src={lanternImg}
        alt="Lantern"
        aria-hidden="true"
        className="absolute top-0 md:top-0 right-5 z-30 select-none pointer-events-none
                  w-[20%] md:w-[10%] lg:w-[8%]"
        initial={{ opacity: 1, translateY: -1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      />

      <div
        className="content relative z-40 flex w-full min-h-screen items-center justify-center pb-32 bg-black/0
                md:items-center md:justify-end md:pt-0"
      >
        <motion.div
          className="w-full h-full 
                  flex flex-col items-center justify-center text-center text-white 
                  md:w-1/2 md:items-start md:justify-center md:text-left lg:pl-16
                  xl:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
        >
          <h2 className="text-lg font-bold md:text-2xl xl:text-3xl">
            Kedai Takjil
          </h2>
          <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl">
            Aneka Es Takjil!
          </h1>
          <p className="text-sm font-medium mt-4 mb-6 max-w-xs md:text-base opacity-90">
            Setelah kamu menahan haus dan lapar seharian, tenggorokanmu pasti
            ingin merasakan kesegaran yang menyegarkan.
          </p>
          <button
            onClick={() => scrollToSection("product")}
            className="cursor-pointer bg-white border border-white/40
                      text-[var(--color-primary)] font-bold px-6 py-2.5 text-md 
                      shadow-[0_4px_3px_0px_var(--color-primary)] rounded-full
                    hover:bg-white/40  hover:text-white
                      transition-all"
          >
            Order Sekarang &#8594;
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
