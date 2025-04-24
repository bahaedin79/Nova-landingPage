import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import { BsDisplay } from 'react-icons/bs';
import { BsLaptop } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { BsPencilSquare } from 'react-icons/bs';
import { BsLightbulb } from 'react-icons/bs';
import { BsLayoutWtf } from 'react-icons/bs';

export default function Services() {
  return (
    <section className="my-25 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="section__subtitle hover:scale-105 mb-2 transition-transform duration-300 transform">Services</h2>
      <h3 className="section__title max-w-xl mb-6">Check Our Professional Services</h3>
      <ul className="lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 grid max-w-6xl grid-cols-1 grid-rows-6 gap-8 mx-auto">
        <li className="group hover:shadow-xl hover:-translate-y-1 rounded-xl relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left transition-all duration-300 bg-white shadow-lg cursor-pointer">
          <div className="bg-cu-cyan absolute top-0 bottom-0 left-0 w-1.5 group-hover:w-2 transition-all duration-300"></div>
          <div className="bg-cu-cyan-shade group-hover:shadow group-hover:scale-105 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 transform rounded-lg shadow-sm">
            <BsDisplay className="text-cu-cyan text-xl" />
          </div>
          <h4 className="text-heading font-nunito text-xl font-bold">UI/UX Design</h4>
          <p className="text-cuGray text-base">Create intuitive and engaging user experiences with our expert UI/UX design services.</p>
          <div className="text-cu-cyan group-hover:translate-x-1 flex items-center gap-2 mt-1 font-bold transition-all duration-300">
            <a href="#">Learn more</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="group hover:shadow-xl hover:-translate-y-1 rounded-xl relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left transition-all duration-300 bg-white shadow-lg cursor-pointer">
          <div className="bg-cu-orange absolute top-0 bottom-0 left-0 w-1.5 group-hover:w-2 transition-all duration-300"></div>
          <div className="bg-cu-orange-shade group-hover:shadow group-hover:scale-105 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 transform rounded-lg shadow-sm">
            <BsLaptop className="text-cu-orange text-xl" />
          </div>
          <h4 className="text-heading font-nunito text-xl font-bold">Application Design</h4>
          <p className="text-cuGray text-base">Build powerful applications with modern interfaces and seamless functionality.</p>
          <div className="text-cu-orange group-hover:translate-x-1 flex items-center gap-2 mt-1 font-bold transition-all duration-300">
            <a href="#">Learn more</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="group hover:shadow-xl hover:-translate-y-1 rounded-xl relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left transition-all duration-300 bg-white shadow-lg cursor-pointer">
          <div className="bg-cu-green absolute top-0 bottom-0 left-0 w-1.5 group-hover:w-2 transition-all duration-300"></div>
          <div className="bg-cu-green-shade group-hover:shadow group-hover:scale-105 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 transform rounded-lg shadow-sm">
            <BsGlobe className="text-cu-green text-xl" />
          </div>
          <h4 className="text-heading font-nunito text-xl font-bold">Website Design</h4>
          <p className="text-cuGray text-base">Develop responsive websites that look great on all devices and drive results.</p>
          <div className="text-cu-green group-hover:translate-x-1 flex items-center gap-2 mt-1 font-bold transition-all duration-300">
            <a href="#">Learn more</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="group hover:shadow-xl hover:-translate-y-1 rounded-xl relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left transition-all duration-300 bg-white shadow-lg cursor-pointer">
          <div className="bg-cu-red absolute top-0 bottom-0 left-0 w-1.5 group-hover:w-2 transition-all duration-300"></div>
          <div className="bg-cu-red-shade group-hover:shadow group-hover:scale-105 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 transform rounded-lg shadow-sm">
            <BsPencilSquare className="text-cu-red text-xl" />
          </div>
          <h4 className="text-heading font-nunito text-xl font-bold">UI Design</h4>
          <p className="text-cuGray text-base">Create visually stunning interfaces that enhance user experience and engagement.</p>
          <div className="text-cu-red group-hover:translate-x-1 flex items-center gap-2 mt-1 font-bold transition-all duration-300">
            <a href="#">Learn more</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="group hover:shadow-xl hover:-translate-y-1 rounded-xl relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left transition-all duration-300 bg-white shadow-lg cursor-pointer">
          <div className="bg-cu-purple absolute top-0 bottom-0 left-0 w-1.5 group-hover:w-2 transition-all duration-300"></div>
          <div className="bg-cu-purple-shade group-hover:shadow group-hover:scale-105 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 transform rounded-lg shadow-sm">
            <BsLightbulb className="text-cu-purple text-xl" />
          </div>
          <h4 className="text-heading font-nunito text-xl font-bold">Design System</h4>
          <p className="text-cuGray text-base">Implement consistent design systems that scale with your product and brand.</p>
          <div className="text-cu-purple group-hover:translate-x-1 flex items-center gap-2 mt-1 font-bold transition-all duration-300">
            <a href="#">Learn more</a>
            <HiArrowRight size={20} />
          </div>
        </li>
        <li className="group hover:shadow-xl hover:-translate-y-1 rounded-xl relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left transition-all duration-300 bg-white shadow-lg cursor-pointer">
          <div className="bg-cu-pink absolute top-0 bottom-0 left-0 w-1.5 group-hover:w-2 transition-all duration-300"></div>
          <div className="bg-cu-pink-shade group-hover:shadow group-hover:scale-105 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 transform rounded-lg shadow-sm">
            <BsLayoutWtf className="text-cu-pink text-xl" />
          </div>
          <h4 className="text-heading font-nunito text-xl font-bold">Wireframing</h4>
          <p className="text-cuGray text-base">Plan your digital products with detailed wireframes that outline structure and flow.</p>
          <div className="text-cu-pink group-hover:translate-x-1 flex items-center gap-2 mt-1 font-bold transition-all duration-300">
            <a href="#">Learn more</a>
            <HiArrowRight size={20} />
          </div>
        </li>
      </ul>
    </section>
  );
}
