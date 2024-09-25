export const cardsContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const cardsVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};
