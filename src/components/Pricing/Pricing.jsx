import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PricingCard from './PricingCard';
import { useFetch } from '../../hooks/useFetch';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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

export default function Pricing() {
  const { data: priceData, loading: isPending, error } = useFetch('/pricing.json');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      ref={ref}
      className="my-25 flex flex-col items-center justify-center gap-8 text-center"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}>
      <motion.h2 className="section__subtitle" variants={itemVariants}>
        Pricing
      </motion.h2>
      <motion.h3 className="section__title" variants={itemVariants}>
        Check Our Affordable Pricing
      </motion.h3>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <motion.ul
        className="mt-7 lg:grid-cols-2 lg:justify-items-center xl:grid-cols-3 xl:grid-rows-1 grid justify-between w-full grid-cols-1 gap-8"
        variants={containerVariants}>
        {priceData &&
          priceData.map((price, idx) => (
            <PricingCard key={price.id} {...price} className={idx === 2 ? 'lg:col-span-2 xl:col-auto mx-auto' : ''} />
          ))}
      </motion.ul>
    </motion.section>
  );
}
