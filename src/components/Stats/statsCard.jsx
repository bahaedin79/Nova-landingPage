import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export default function StatsCard({ amount, title, icon, iconColor }) {
  return (
    <div className="shadow-value-card rounded-xl h-30 flex items-center gap-5 px-8 bg-white">
      <Icon icon={icon} className={`${iconColor} text-6xl`} />
      <div className="flex flex-col">
        <span className="text-heading font-roboto text-4xl font-bold">{amount}</span>
        <span className="text-cuGray font-nunito">{title}</span>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  amount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};
