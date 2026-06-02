import { motion } from "framer-motion";
import useScrollToSection from "../hooks/useScrollToSection";

import HeroBackground from "../components/home/hero/HeroBackground";
import PersonBackground from "../components/home/hero/PersonBackground";
import CloudBackground from "../components/home/hero/CloudBackground";
import LanternBackground from "../components/home/hero/LanternBackground";

function HeroSection() {
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden scroll-mt-16 pt-16"
    >
      <HeroBackground />

      <PersonBackground />

      <CloudBackground />

      <LanternBackground />

      <div
        className="content relative z-40 flex w-full min-h-screen items-center justify-center pb-32 bg-black/0
                md:items-center md:justify-end md:pt-0"
      >
        <motion.div
          className="w-full h-full 
                  flex flex-col items-center justify-center text-center text-white 
                  md:w-1/2 md:items-start md:justify-center md:text-left lg:pl-16
                  xl:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
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
