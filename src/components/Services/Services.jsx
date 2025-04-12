import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import { BsAward } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';
import { BsCardChecklist } from 'react-icons/bs';
import { BsBoxes } from 'react-icons/bs';
import { BsDisc } from 'react-icons/bs';
import { BsFileEarmarkLock } from 'react-icons/bs';

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 text-center my-25">
      <h2 className="section__subtitle">Services</h2>
      <h3 className="section__title">Check Our Services</h3>
      <ul
        className="grid grid-cols-1 grid-rows-6 gap-7
        lg:grid-cols-2 lg:grid-rows-3
        xl:grid-cols-3 xl:grid-rows-2"
      >
        <li className="flex flex-col gap-5 items-center text-center shadow-value-card py-15 px-5 group hover:cursor-pointer hover:bg-cu-cyan transition-all duration-300 rounded-md border-b-4 border-cu-cyan">
          <BsAward className="p-5 min-w-[80px] min-h-[80px] rounded-md text-cu-cyan bg-cu-cyan-shade group-hover:bg-white" />
          <h4 className="text-heading text-2xl font-nunito font-bold group-hover:text-white">Dolori Architecto</h4>
          <p className="text-base text-cuGray group-hover:text-white">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <div className="flex justify-center items-center gap-2 font-bold text-cu-cyan group-hover:text-white">
            <a href="#">Read More</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="flex flex-col gap-5 items-center text-center shadow-value-card py-15 px-5 group hover:cursor-pointer hover:bg-cu-orange transition-all duration-300 rounded-md border-b-4 border-cu-orange">
          <BsDribbble className="p-5 min-w-[80px] min-h-[80px] rounded-md text-cu-orange bg-cu-orange-shade group-hover:bg-white" />
          <h4 className="text-heading text-2xl font-nunito font-bold group-hover:text-white">Dolori Architecto</h4>
          <p className="text-base text-cuGray group-hover:text-white">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <div className="flex justify-center items-center gap-2 font-bold text-cu-orange group-hover:text-white">
            <a href="#">Read More</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="flex flex-col gap-5 items-center text-center shadow-value-card py-15 px-5 group hover:cursor-pointer hover:bg-cu-green transition-all duration-300 rounded-md border-b-4 border-cu-green">
          <BsAward className="p-5 min-w-[80px] min-h-[80px] rounded-md text-cu-green bg-cu-green-shade group-hover:bg-white" />
          <h4 className="text-heading text-2xl font-nunito font-bold group-hover:text-white">Dolori Architecto</h4>
          <p className="text-base text-cuGray group-hover:text-white">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <div className="flex justify-center items-center gap-2 font-bold text-cu-green group-hover:text-white">
            <a href="#">Read More</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="flex flex-col gap-5 items-center text-center shadow-value-card py-15 px-5 group hover:cursor-pointer hover:bg-cu-red transition-all duration-300 rounded-md border-b-4 border-cu-red">
          <BsBoxes className="p-5 min-w-[80px] min-h-[80px] rounded-md text-cu-red bg-cu-red-shade group-hover:bg-white" />
          <h4 className="text-heading text-2xl font-nunito font-bold group-hover:text-white">Dolori Architecto</h4>
          <p className="text-base text-cuGray group-hover:text-white">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <div className="flex justify-center items-center gap-2 font-bold text-cu-red group-hover:text-white">
            <a href="#">Read More</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="flex flex-col gap-5 items-center text-center shadow-value-card py-15 px-5 group hover:cursor-pointer hover:bg-cu-purple transition-all duration-300 rounded-md border-b-4 border-cu-purple">
          <BsDisc className="p-5 min-w-[80px] min-h-[80px] rounded-md text-cu-purple bg-cu-purple-shade group-hover:bg-white" />
          <h4 className="text-heading text-2xl font-nunito font-bold group-hover:text-white">Dolori Architecto</h4>
          <p className="text-base text-cuGray group-hover:text-white">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <div className="flex justify-center items-center gap-2 font-bold text-cu-purple group-hover:text-white">
            <a href="#">Read More</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="flex flex-col gap-5 items-center text-center shadow-value-card py-15 px-5 group hover:cursor-pointer hover:bg-cu-pink transition-all duration-300 rounded-md border-b-4 border-cu-pink">
          <BsFileEarmarkLock className="p-5 min-w-[80px] min-h-[80px] rounded-md text-cu-pink bg-cu-pink-shade group-hover:bg-white" />
          <h4 className="text-heading text-2xl font-nunito font-bold group-hover:text-white">Dolori Architecto</h4>
          <p className="text-base text-cuGray group-hover:text-white">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <div className="flex justify-center items-center gap-2 font-bold text-cu-pink group-hover:text-white">
            <a href="#">Read More</a>
            <HiArrowRight size={20} />
          </div>
        </li>
      </ul>
    </section>
  );
}
