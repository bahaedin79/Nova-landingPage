import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function About() {
  return (
    <section
      className="mt-25 flex flex-col justify-center
    xl:flex-row xl:items-center"
    >
      <div
        className="flex flex-col justify-center gap-3 bg-accent-light p-8 
      xl:flex-2/3"
      >
        <h3 className="text-accent font-nunito font-bold">WHO WE ARE</h3>
        <h2 className="text-heading font-nunito text-2xl font-bold leading-7">
          Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.
        </h2>
        <p className="text-default font-roboto text-base">
          Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam
          ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
        <a className="primary__btn-icon py-3 px-8 self-center xl:self-start mt-4" href="#">
          <span>Read More</span>
          <HiArrowRight className="text-2xl" />
        </a>
      </div>
      <div className='className="flex-1/2"'>
        <img src="/images/about.jpg" alt="About Section image about Who We Are" />
      </div>
    </section>
  );
}
