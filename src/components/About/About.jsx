import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function About() {
  return (
    <section className="mt-25 flex flex-col justify-center xl:flex-row xl:items-center">
      <div className="flex flex-col justify-center gap-3 bg-accent-light p-8 xl:flex-2/3">
        <h3 className="text-accent font-nunito font-bold">WHO WE ARE</h3>
        <h2 className="text-heading font-nunito text-2xl font-bold leading-7">Empowering Your Online Presence with Custom Website Solutions</h2>
        <p className="text-default font-roboto text-base">
          We specialize in creating tailored websites that meet your unique business needs. From design to deployment, our team ensures a seamless
          experience to help you stand out in the digital world.
        </p>
        <a className="primary__btn-icon py-3 px-8 self-center xl:self-start mt-4" href="#">
          <span>Read More</span>
          <HiArrowRight className="text-2xl" />
        </a>
      </div>
      <div className='className="flex-1/2"'>
        <img src="/images/about/about.jpg" alt="About Section image about Who We Are" />
      </div>
    </section>
  );
}
