import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: '-100%', transition: { duration: 0.9 } },

};

export default function Animate({ children }:{children:ReactNode}) {
  return (
    <motion.div
      initial={variants.hidden}
      animate={variants.visible}
    >
      {children}
    </motion.div>
  );
}
