import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: '-100%', transition: { duration: 0.9 } },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.9 },
  },
};

export function Animate({ children }:{children:any}) {
  return (
    <motion.div
      initial={variants.hidden}
      animate={variants.visible}
      exit={variants.exit}
    >
      {children}

    </motion.div>
  );
}

export function AnimateParent({ children }:{children:any}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.9,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial={container.hidden}
      animate={container.show}
    >
      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </motion.div>
  );
}
