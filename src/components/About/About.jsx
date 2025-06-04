import { HiArrowRight } from 'react-icons/hi2';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className='mt-25 bg-accent-light rounded-xl xl:mt-62 xl:flex-row xl:items-center xl:p-6 xl:gap-5 flex flex-col justify-center overflow-hidden'>
      <div className='lg:mb-10 xl:flex-1/2 xl:p-0 xl:mb-0 flex flex-col justify-center gap-3 p-5'>
        <h3 className='text-accent font-nunito font-bold'>WHO WE ARE</h3>
        <h2 className='text-heading font-nunito lg:text-4xl lg:leading-11 xl:text-2xl xl:leading-7 2xl:text-4xl 2xl:leading-10 text-2xl font-extrabold leading-7'>
          Empowering Your Online Presence with Custom Website Solutions
        </h2>
        <p className='text-default font-roboto lg:text-lg lg:mt-2 text-base'>
          We specialize in creating tailored websites that meet your unique business needs. From design to deployment, our team
          ensures a seamless experience to help you stand out in the digital world.
        </p>
        <a className='primary__btn-icon xl:self-start self-center px-8 py-3 mt-4' href='#'>
          <span>Read More</span>
          <HiArrowRight className='text-2xl' />
        </a>
      </div>
      <div className='lg:max-h-[400px]  xl:flex-1/2 xl:rounded-md xl:max-h-[450px] overflow-hidden'>
        <img src='/images/about/about.webp' className='w-full' alt='About Section image about Who We Are' />
      </div>
    </section>
  );
}
