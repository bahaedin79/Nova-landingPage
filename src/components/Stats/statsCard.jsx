import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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

export default function StatsCard({ amount, title, icon, iconColor }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      className="shadow-value-card rounded-xl h-30 flex items-center gap-5 px-8 bg-white"
      variants={itemVariants}>
      <Icon icon={icon} className={`${iconColor} text-6xl`} />
      <div className="flex flex-col">
        <span className="text-heading font-roboto text-4xl font-bold">
          {inView && <CountUp end={amount} duration={2.75} />}
        </span>
        <span className="text-cuGray font-nunito">{title}</span>
      </div>
    </motion.div>
  );
}
