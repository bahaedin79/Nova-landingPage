import React from 'react';
import PricingCard from './PricingCard';

export default function Pricing() {
  const priceData = [
    {
      id: 1,
      selected: false,
      title: 'Free',
      price: 0,
      description: 'For individuals and small teams',
      featuresTitle: 'Plan includes:',
      features: [
        'Unlimited databases',
        '3,000 rows per workspace',
        '2GB of storage per workspace',
        'Grid, Form & Gallery views',
        'Library of 65+ templates',
      ],
      iconBgColor: 'bg-slate-100',
      iconColor: 'bg-slate-400',
      borderColor: 'border-yellow-500',
    },
    {
      id: 2,
      selected: true,
      title: 'Premium',
      price: 10,
      description: 'For growing teams',
      featuresTitle: 'Everything in Free, plus:',
      features: [
        '10,000 rows per workspace',
        '20GB of storage per workspace',
        'Kanban, Survey & Calendar views',
        'XML & JSON export',
        'Row comments & coloring',
      ],
      iconBgColor: 'bg-sky-100',
      iconColor: 'bg-sky-400',
      borderColor: 'border-sky-400',
    },
    {
      id: 3,
      selected: false,
      title: 'Advanced',
      price: 20,
      description: 'For scaling businesses',
      featuresTitle: 'Everything in Premium, plus:',
      features: ['250,000 rows per workspace', '100GB of storage per workspace', 'Role based permissions', 'Free read/comment users', 'Audit logs'],
      iconBgColor: 'bg-pink-100',
      iconColor: 'bg-pink-400',
      borderColor: 'border-pink-500',
    },
  ];

  return (
    <section className="my-25 flex flex-col items-center justify-center gap-8 text-center">
      <h2 className="section__subtitle">Pricing</h2>
      <h3 className="section__title">Check Our Affordable Pricing</h3>
      <ul className="mt-7 lg:grid-cols-2 lg:justify-items-center xl:grid-cols-3 xl:grid-rows-1 grid justify-between w-full grid-cols-1 gap-8">
        {priceData.map((price, idx) => (
          <PricingCard key={price.id} {...price} className={idx === 2 ? 'lg:col-span-2 xl:col-auto mx-auto' : ''} />
        ))}
      </ul>
    </section>
  );
}
