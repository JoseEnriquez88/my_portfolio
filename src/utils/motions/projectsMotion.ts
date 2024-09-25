export const projectVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: -25,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Variantes para los hijos
export const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
