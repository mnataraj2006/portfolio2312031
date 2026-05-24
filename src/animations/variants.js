// Framer Motion animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(124, 58, 237, 0.3)",
      "0 0 40px rgba(124, 58, 237, 0.6)",
      "0 0 20px rgba(124, 58, 237, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.2,
};
