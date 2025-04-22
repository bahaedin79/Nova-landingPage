import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function About() {
  return (
    <section
      className="mt-25 flex flex-col justify-center bg-gradient-to-r from-accent-light to-accent/50 rounded-xl overflow-hidden
      xl:flex-row xl:items-center xl:p-6 xl:gap-5"
    >
      <div className="flex flex-col justify-center gap-3 p-5 lg:mb-10 xl:flex-1/2 xl:p-0 xl:mb-0">
        <h3 className="text-accent font-nunito font-bold">WHO WE ARE</h3>
        <h2
          className="text-heading font-nunito text-2xl font-extrabold leading-7 lg:text-4xl lg:leading-11 
         xl:text-2xl xl:leading-7 2xl:text-4xl 2xl:leading-10 "
        >
          Empowering Your Online Presence with Custom Website Solutions
        </h2>
        <p className="text-default font-roboto text-base lg:text-lg lg:mt-2">
          We specialize in creating tailored websites that meet your unique business needs. From design to deployment, our team ensures a seamless
          experience to help you stand out in the digital world.
        </p>
        <a className="primary__btn-icon py-3 px-8 self-center xl:self-start mt-4" href="#">
          <span>Read More</span>
          <HiArrowRight className="text-2xl" />
        </a>
      </div>
      <div className="lg:max-h-[400px]  xl:flex-1/2 xl:rounded-md xl:max-h-[450px] overflow-hidden">
        <img src="/images/about/about.webp" className="w-full" alt="About Section image about Who We Are" />
      </div>
    </section>
  );
}
