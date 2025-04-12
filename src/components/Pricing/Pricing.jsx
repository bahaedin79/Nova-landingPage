import React from 'react';
import { BsAward } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';
import { BsCardChecklist } from 'react-icons/bs';
import { BsBoxes } from 'react-icons/bs';
import { BsDisc } from 'react-icons/bs';
import { BsFileEarmarkLock } from 'react-icons/bs';

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center my-25">
      <h2 className="section__subtitle">Pricing</h2>
      <h3 className="section__title">Check Our Affordable Pricing</h3>
      <ul
        className="grid grid-cols-1 grid-rows-4 gap-7 min-w-full mt-7
        lg:grid-cols-2 lg:grid-rows-2
        xl:grid-cols-4 xl:grid-rows-1"
      >
        <li className="flex flex-col justify-center items-center gap-4 shadow-value-card py-10 px-5 rounded-md transition-all duration-300 hover:scale-110 hover:cursor-pointer">
          <h3 className="text-lg font-nunito font-bold text-cu-green">Free Plan</h3>
          <div className="flex justify-center items-center">
            <div className="text-4xl text-heading font-nunito font-semibold mt-2">
              <sup>$</sup>0
            </div>
            <span className="text-gray-300">&nbsp; / mo</span>
          </div>
          <BsAward className="min-w-[100px] min-h-[100px] py-5 text-cu-green" />
          <ul className="flex flex-col justify-center items-center gap-2 text-base font-roboto text-default ">
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="line-through text-gray-300">Pharetra massa</li>
            <li className="line-through text-gray-300">Massa ultricies mi</li>
          </ul>
          <a
            href="#"
            className="text-accent border-2 border-accent px-10 py-2 rounded-full font-base font-nunito font-semibold hover:bg-accent hover:text-white transition-all mt-5"
          >
            Buy Now
          </a>
        </li>
        <li className="flex flex-col justify-center items-center gap-4 shadow-value-card py-10 px-5 rounded-md transition-all duration-300 hover:scale-110 hover:cursor-pointer">
          <h3 className="text-lg font-nunito font-bold text-cu-cyan">Free Plan</h3>
          <div className="flex justify-center items-center">
            <div className="text-4xl text-heading font-nunito font-semibold mt-2">
              <sup>$</sup>0
            </div>
            <span className="text-gray-300">&nbsp; / mo</span>
          </div>
          <BsDribbble className="min-w-[100px] min-h-[100px] py-5 text-cu-cyan" />
          <ul className="flex flex-col justify-center items-center gap-2 text-base font-roboto text-default ">
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="line-through text-gray-300">Pharetra massa</li>
            <li className="line-through text-gray-300">Massa ultricies mi</li>
          </ul>
          <a
            href="#"
            className="text-accent border-2 border-accent px-10 py-2 rounded-full font-base font-nunito font-semibold hover:bg-accent hover:text-white transition-all mt-5"
          >
            Buy Now
          </a>
        </li>
        <li className="flex flex-col justify-center items-center gap-4 shadow-value-card py-10 px-5 rounded-md transition-all duration-300 hover:scale-110 hover:cursor-pointer">
          <h3 className="text-lg font-nunito font-bold text-cu-orange">Free Plan</h3>
          <div className="flex justify-center items-center">
            <div className="text-4xl text-heading font-nunito font-semibold mt-2">
              <sup>$</sup>0
            </div>
            <span className="text-gray-300">&nbsp; / mo</span>
          </div>
          <BsCardChecklist className="min-w-[100px] min-h-[100px] py-5 text-cu-orange" />
          <ul className="flex flex-col justify-center items-center gap-2 text-base font-roboto text-default ">
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="line-through text-gray-300">Pharetra massa</li>
            <li className="line-through text-gray-300">Massa ultricies mi</li>
          </ul>
          <a
            href="#"
            className="text-accent border-2 border-accent px-10 py-2 rounded-full font-base font-nunito font-semibold hover:bg-accent hover:text-white transition-all mt-5"
          >
            Buy Now
          </a>
        </li>
        <li className="flex flex-col justify-center items-center gap-4 shadow-value-card py-10 px-5 rounded-md transition-all duration-300 hover:scale-110 hover:cursor-pointer">
          <h3 className="text-lg font-nunito font-bold text-cu-blue">Free Plan</h3>
          <div className="flex justify-center items-center">
            <div className="text-4xl text-heading font-nunito font-semibold mt-2">
              <sup>$</sup>0
            </div>
            <span className="text-gray-300">&nbsp; / mo</span>
          </div>
          <BsDisc className="min-w-[100px] min-h-[100px] py-5 text-cu-blue" />
          <ul className="flex flex-col justify-center items-center gap-2 text-base font-roboto text-default ">
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="line-through text-gray-300">Pharetra massa</li>
            <li className="line-through text-gray-300">Massa ultricies mi</li>
          </ul>
          <a
            href="#"
            className="text-accent border-2 border-accent px-10 py-2 rounded-full font-base font-nunito font-semibold hover:bg-accent hover:text-white transition-all mt-5"
          >
            Buy Now
          </a>
        </li>
      </ul>
    </section>
  );
}
