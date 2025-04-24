import React from 'react';
import clsx from 'clsx';

export default function PricingCard({
  selected,
  title,
  price,
  description,
  featuresTitle,
  features,
  iconBgColor,
  iconColor,
  borderColor,
  className,
}) {
  return (
    <li
      className={clsx(
        `flex flex-col bg-white rounded-2xl shadow-lg px-8 py-10 border-2 relative w-full max-w-[350px] min-h-[540px] xl:px-7`,
        selected ? borderColor : 'border-gray-200',
        className
      )}
    >
      <span className={clsx('w-7 h-7 flex items-center justify-center mb-2 rounded-md', iconBgColor)}>
        <span className={clsx('w-3 h-3 rounded', iconColor)}></span>
      </span>
      <h3 className="font-nunito mb-2 text-4xl font-bold text-gray-900">{title}</h3>
      <p className="font-roboto mt-1 mb-6 text-sm text-gray-500">{description}</p>
      <div className="font-roboto mb-1 text-4xl font-extrabold text-gray-900">${price}</div>
      <button className="hover:bg-gray-50 font-roboto w-full py-2 mt-2 mb-6 font-semibold text-gray-900 transition border border-gray-300 rounded-lg">
        Get started
      </button>
      <div className="font-roboto mb-2 text-xs text-gray-400">{featuresTitle}</div>
      <ul className="space-y-2 text-sm text-gray-700">
        {features.map(feature => (
          <li key={feature} className="font-roboto flex items-center gap-2">
            <span className="text-green-500">●</span>
            {feature}
          </li>
        ))}
      </ul>
    </li>
  );
}
