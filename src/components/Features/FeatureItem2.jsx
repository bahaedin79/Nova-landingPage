import { motion } from 'framer-motion';

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

export default function FeatureItem2({ icon, title, description }) {
  const IconComponent = icon;
  return (
    <motion.li className="flex gap-4" variants={itemVariants}>
      <IconComponent className="min-w-[45px] min-h-[45px] text-accent" />
      <div className="flex flex-col justify-start gap-1 text-left">
        <h6 className="text-xl font-bold text-heading font-nunito">{title}</h6>
        <p className="text-cuGray text-[15px] font-roboto">{description}</p>
      </div>
    </motion.li>
  );
}
