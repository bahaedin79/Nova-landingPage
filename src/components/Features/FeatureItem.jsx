import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FeatureItem({ text }) {
  return (
    <motion.li
      className="flex items-center justify-between gap-7 px-5 py-7 rounded-lg shadow-value-card"
      variants={itemVariants}>
      <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
      <h3 className="text-lg font-bold text-heading font-nunito">{text}</h3>
    </motion.li>
  );
}
