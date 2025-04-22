import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { BsAward } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';
import { BsCardChecklist } from 'react-icons/bs';
import { BsBoxes } from 'react-icons/bs';
import { BsDisc } from 'react-icons/bs';
import { BsFileEarmarkLock } from 'react-icons/bs';

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 text-center mt-25">
      <h2 className="section__subtitle">Key Features</h2>
      <h3 className="section__title">Explore Our Cutting-Edge Features</h3>
      <div className="px-5 rounded-xl">
        {/* First Section of Page */}
        <div className="flex flex-col justify-center gap-4 2xl:flex-row 2xl:justify-between 2xl:mt-6">
          <div className=" lg:max-w-[472px] lg:m-auto 2xl:max-w-1/2">
            <img className="w-full " src="/images/features/features.webp" alt="our features section image" />
          </div>
          <ul className="grid grid-cols-1 grid-rows-6 gap-6 gap-x-8 lg:grid-cols-2 lg:grid-rows-3 2xl:max-w-1/2 2xl:justify-center 2xl:items-center">
            <li className="flex items-center justify-between gap-4 px-5 py-5 rounded-lg shadow-value-card">
              <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
              <h3 className="text-lg font-bold text-heading font-nunito">Unmatched Reliability</h3>
            </li>
            <li className="flex items-center justify-between gap-4 px-3 py-3 rounded-lg shadow-value-card">
              <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
              <h3 className="text-lg font-bold text-heading font-nunito">Exceptional Performance</h3>
            </li>
            <li className="flex items-center justify-between gap-4 px-3 py-3 rounded-lg shadow-value-card">
              <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
              <h3 className="text-lg font-bold text-heading font-nunito">Innovative Solutions</h3>
            </li>
            <li className="flex items-center justify-between gap-4 px-3 py-3 rounded-lg shadow-value-card">
              <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
              <h3 className="text-lg font-bold text-heading font-nunito">Seamless Integration</h3>
            </li>
            <li className="flex items-center justify-between gap-4 px-3 py-3 rounded-lg shadow-value-card">
              <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
              <h3 className="text-lg font-bold text-heading font-nunito">Advanced Security</h3>
            </li>
            <li className="flex items-center justify-between gap-4 px-3 py-3 rounded-lg shadow-value-card">
              <FaCheck className="p-1 text-lg rounded-sm text-accent bg-accent-light w-7 h-7" />
              <h3 className="text-lg font-bold text-heading font-nunito">User-Friendly Design</h3>
            </li>
          </ul>
        </div>
        {/* Second Section Of Page */}
        <div className="flex flex-col gap-5 mt-25 2xl:flex-row-reverse">
          <div className="lg:max-w-[472px] lg:m-auto xl:flex-1/3">
            <img className="w-full " src="/images/features/features2.png" alt="" />
          </div>
          <ul className="grid grid-cols-1 grid-rows-6 gap-5 mt-10 lg:grid-cols-2 lg:grid-rows-3 xl:flex-1/2 2xl:items-center ">
            <li className="flex gap-4">
              <BsAward className="min-w-[45px] min-h-[45px] text-accent" />
              <div className="flex flex-col justify-start gap-1 text-left">
                <h6 className="text-xl font-bold text-heading font-nunito">Award-Winning Services</h6>
                <p className="text-cuGray text-[15px] font-roboto">Experience unparalleled quality and dedication with our award-winning services.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <BsDribbble className="min-w-[45px] min-h-[45px] text-accent" />
              <div className="flex flex-col justify-start gap-1 text-left">
                <h6 className="text-xl font-bold text-heading font-nunito">Creative Excellence</h6>
                <p className="text-cuGray text-[15px] font-roboto">
                  Unlock your potential with our innovative and creative solutions tailored for success.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <BsCardChecklist className="min-w-[45px] min-h-[45px] text-accent" />
              <div className="flex flex-col justify-start gap-1 text-left">
                <h6 className="text-xl font-bold text-heading font-nunito">Comprehensive Planning</h6>
                <p className="text-cuGray text-[15px] font-roboto">Achieve your goals with our meticulous and comprehensive planning strategies.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <BsBoxes className="min-w-[45px] min-h-[45px] text-accent" />
              <div className="flex flex-col justify-start gap-1 text-left">
                <h6 className="text-xl font-bold text-heading font-nunito">Efficient Management</h6>
                <p className="text-cuGray text-[15px] font-roboto">
                  Streamline your operations with our efficient and effective management solutions.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <BsDisc className="min-w-[45px] min-h-[45px] text-accent" />
              <div className="flex flex-col justify-start gap-1 text-left">
                <h6 className="text-xl font-bold text-heading font-nunito">Dynamic Adaptability</h6>
                <p className="text-cuGray text-[15px] font-roboto">Stay ahead with our dynamic and adaptable solutions for a changing world.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <BsFileEarmarkLock className="min-w-[45px] min-h-[45px] text-accent" />
              <div className="flex flex-col justify-start gap-1 text-left">
                <h6 className="text-xl font-bold text-heading font-nunito">Data Protection</h6>
                <p className="text-cuGray text-[15px] font-roboto">Safeguard your information with our state-of-the-art data protection measures.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
