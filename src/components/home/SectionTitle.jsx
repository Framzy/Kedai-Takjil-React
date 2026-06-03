import { motion } from "framer-motion";

function SectionTitle({ label, color }) {
  const textColor =
    color === "white" ? "text-white" : "text-[var(--color-primary)]";

  const shadowColor =
    color === "white"
      ? "shadow-[0_8px_10px_-10px_rgba(255,255,255,0.5)]"
      : "shadow-[0_8px_10px_-10px_rgba(0,0,0,0.4)]";

  return (
    <>
      <div className="w-full flex justify-center items-center pb-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={`w-fit font-bold text-center text-xl sm:text-3xl md:text-4xl ${textColor} 
            px-5 sm:px-10 md:px-15  py-2 ${shadowColor}`}
        >
          {label}
        </motion.h1>
      </div>
    </>
  );
}

export default SectionTitle;
