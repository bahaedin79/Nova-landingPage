import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsAward, BsDribbble, BsCardChecklist, BsBoxes, BsDisc, BsFileEarmarkLock } from 'react-icons/bs';
import FeatureItem from './FeatureItem';
import FeatureItem2 from './FeatureItem2';

const features1 = [
  'Unmatched Reliability',
  'Exceptional Performance',
  'Innovative Solutions',
  'Seamless Integration',
  'Advanced Security',
  'User-Friendly Design',
];

const features2 = [
  {
    icon: BsAward,
    title: 'Award-Winning Services',
    description: 'Experience unparalleled quality and dedication with our award-winning services.',
  },
  {
    icon: BsDribbble,
    title: 'Creative Excellence',
    description: 'Unlock your potential with our innovative and creative solutions tailored for success.',
  },
  {
    icon: BsCardChecklist,
    title: 'Comprehensive Planning',
    description: 'Achieve your goals with our meticulous and comprehensive planning strategies.',
  },
  {
    icon: BsBoxes,
    title: 'Efficient Management',
    description: 'Streamline your operations with our efficient and effective management solutions.',
  },
  {
    icon: BsDisc,
    title: 'Dynamic Adaptability',
    description: 'Stay ahead with our dynamic and adaptable solutions for a changing world.',
  },
  {
    icon: BsFileEarmarkLock,
    title: 'Data Protection',
    description: 'Safeguard your information with our state-of-the-art data protection measures.',
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

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center gap-5 text-center mt-25"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}>
      <motion.h2 className="section__subtitle" variants={itemVariants}>
        Key Features
      </motion.h2>
      <motion.h3 className="section__title" variants={itemVariants}>
        Explore Our Cutting-Edge Features
      </motion.h3>
      <div className="px-5 rounded-xl">
        {/* First Section of Page */}
        <div className="flex flex-col justify-center  gap-4 2xl:flex-row 2xl:justify-between 2xl:mt-6 2xl:items-center">
          <motion.div className=" lg:max-w-[472px] lg:m-auto 2xl:max-w-1/2" variants={itemVariants}>
            <img className="w-full " src="/images/features/features.webp" alt="our features section image" />
          </motion.div>
          <motion.ul
            className="grid grid-cols-1 grid-rows-6 gap-6 gap-x-8 lg:grid-cols-2 lg:grid-rows-3 2xl:max-w-1/2 2xl:justify-center 2xl:items-center"
            variants={containerVariants}>
            {features1.map(feature => (
              <FeatureItem key={feature} text={feature} />
            ))}
          </motion.ul>
        </div>
        {/* Second Section Of Page */}
        <div className="flex flex-col gap-5 mt-25 2xl:flex-row-reverse">
          <motion.div className="lg:max-w-[472px] lg:m-auto xl:flex-1/3" variants={itemVariants}>
            <img className="w-full " src="/images/features/features2.webp" alt="" />
          </motion.div>
          <motion.ul
            className="grid grid-cols-1 grid-rows-6 gap-5 mt-10 lg:grid-cols-2 lg:grid-rows-3 xl:flex-1/2 2xl:items-center "
            variants={containerVariants}>
            {features2.map(feature => (
              <FeatureItem2
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}
