import React from 'react';
import ServicesCard from './ServicesCard';
import { BsDisplay } from 'react-icons/bs';
import { BsLaptop } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { BsPencilSquare } from 'react-icons/bs';
import { BsLightbulb } from 'react-icons/bs';
import { BsLayoutWtf } from 'react-icons/bs';

export default function Services() {
  const servicesData = [
    {
      id: 1,
      icon: <BsDisplay className="text-cu-cyan text-xl" />,
      textColor: 'text-cu-cyan',
      bgColor: 'bg-cu-cyan',
      colorShade: 'bg-cu-cyan-shade',
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences with our expert UI/UX design services.',
    },
    {
      id: 2,
      icon: <BsLaptop className="text-cu-orange text-xl" />,
      textColor: 'text-cu-orange',
      bgColor: 'bg-cu-orange',
      colorShade: 'bg-cu-orange-shade',
      title: 'Application Design',
      description: 'Build powerful applications with modern interfaces and seamless functionality.',
    },
    {
      id: 3,
      icon: <BsGlobe className="text-cu-green text-xl" />,
      textColor: 'text-cu-green',
      bgColor: 'bg-cu-green',
      colorShade: 'bg-cu-green-shade',
      title: 'Website Design',
      description: 'Develop responsive websites that look great on all devices and drive results.',
    },
    {
      id: 4,
      icon: <BsPencilSquare className="text-cu-red text-xl" />,
      textColor: 'text-cu-red',
      bgColor: 'bg-cu-red',
      colorShade: 'bg-cu-red-shade',
      title: 'UI Design',
      description: 'Create visually stunning interfaces that enhance user experience and engagement.',
    },
    {
      id: 5,
      icon: <BsLightbulb className="text-cu-purple text-xl" />,
      textColor: 'text-cu-purple',
      bgColor: 'bg-cu-purple',
      colorShade: 'bg-cu-purple-shade',
      title: 'Design System',
      description: 'Implement consistent design systems that scale with your product and brand.',
    },
    {
      id: 6,
      icon: <BsLayoutWtf className="text-cu-pink text-xl" />,
      textColor: 'text-cu-pink',
      bgColor: 'bg-cu-pink',
      colorShade: 'bg-cu-pink-shade',
      title: 'Wireframe',
      description: 'Plan your digital products with detailed wireframes that outline structure and flow.',
    },
  ];

  return (
    <section className="my-25 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="section__subtitle mb-2">Services</h2>
      <h3 className="section__title max-w-xl mb-6">Check Our Professional Services</h3>
      <ul className="lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 grid max-w-6xl grid-cols-1 grid-rows-6 gap-8 mx-auto">
        {servicesData.map(service => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </ul>
    </section>
  );
}
