import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StatsCard from './statsCard';

const stats = [
  {
    amount: 150,
    title: 'Happy Clients',
    icon: 'heroicons:face-smile',
    iconColor: 'text-accent',
  },
  {
    amount: 205,
    title: 'Projects Successfully Completed',
    icon: 'heroicons:clipboard-document-list',
    iconColor: 'text-cu-orange',
  },
  {
    amount: 1405,
    title: 'Hours of Expert Support',
    icon: 'heroicons:lifebuoy',
    iconColor: 'text-cu-green',
  },
  {
    amount: 15,
    title: 'Skilled Team Members',
    icon: 'heroicons:users',
    iconColor: 'text-cu-red',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      ref={ref}
      id="stats"
      className="rounded-xl lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-1 bg-accent-light grid grid-cols-1 grid-rows-3 gap-5 p-5 mt-20"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}>
      {stats.map(stat => (
        <StatsCard
          key={stat.title}
          amount={stat.amount}
          title={stat.title}
          icon={stat.icon}
          iconColor={stat.iconColor}
        />
      ))}
    </motion.section>
  );
}
