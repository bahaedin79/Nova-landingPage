import React from 'react';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import { HiArrowRight } from 'react-icons/hi2';

export default function Hero() {
  return (
    <section className="mt-10 flex flex-col justify-center xl:flex-row-reverse xl:items-center xl:my-40">
      <img
        className=" lg:m-auto xl:w-1/2 xl:max-w-none"
        src="/images/development-animate.svg"
        alt="Professional Website Development Services"
      />
      <div className="xl:w-1/2">
        <div className="hero__text">
          <h1 className="text-heading text-[28px] font-nunito font-bold leading-8 mb-5 md:text-4xl md:leading-10">
            Build Stunning Websites to Elevate Your Business
          </h1>
          <p className="text-cuGray text-lg font-roboto">
            Partner with our expert team to create modern, responsive, and SEO-friendly websites tailored to your business needs.
          </p>
        </div>
        <div
          className="flex flex-col justify-center gap-2 mt-5
          lg:flex-row lg:justify-start lg:items-center">
          <a href="#" className="primary__btn-icon py-3 lg:px-12 ">
            <span>Get Started</span>
            <HiArrowRight className=" text-2xl" />
          </a>
          <a href="#" className="transparent__btn-icon py-1.5 lg:px-9">
            <HiOutlinePlayCircle className="text-accent text-4xl " />
            <span>Watch Video</span>
          </a>
        </div>
      </div>
    </section>
  );
}
