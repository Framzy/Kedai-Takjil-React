export const fadeInLeft = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
  viewport: { once: true, amount: 0.3 },
};

export const fadePopUp = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
  },
  transition: { duration: 0.2, ease: "easeInOut" },
};
