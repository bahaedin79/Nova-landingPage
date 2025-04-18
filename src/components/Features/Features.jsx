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
    <section className="flex flex-col items-center justify-center gap-5 mt-25 text-center">
      <h2 className="section__subtitle">features</h2>
      <h3 className="section__title">Our Advanced Features</h3>
      {/* First Section of Page */}
      <div
        className="flex flex-col justify-center gap-4
      2xl:flex-row 2xl:justify-between 2xl:mt-6"
      >
        <div className="2xl:max-w-1/2">
          <img className="w-full 2xl:w-4/5" src="/images/features/features.png" alt="our features section image" />
        </div>
        <ul
          className="grid grid-cols-1 grid-rows-6 gap-6
        lg:grid-cols-2 lg:grid-rows-3
        2xl:max-w-1/2 gap-x-8"
        >
          <li className="py-6 px-5 flex justify-center items-center gap-4 shadow-value-card rounded-sm">
            <FaCheck className="text-lg text-accent bg-accent-light p-1 w-7 h-7 rounded-sm" />
            <h3 className="text-heading font-nunito text-lg font-bold">Eos aspernatur rem</h3>
          </li>
          <li className="py-6 px-5 flex justify-center items-center gap-4 shadow-value-card rounded-sm">
            <FaCheck className="text-lg text-accent bg-accent-light p-1 w-7 h-7 rounded-sm" />
            <h3 className="text-heading font-nunito text-lg font-bold">Eos aspernatur rem</h3>
          </li>
          <li className="py-6 px-5 flex justify-center items-center gap-4 shadow-value-card rounded-sm">
            <FaCheck className="text-lg text-accent bg-accent-light p-1 w-7 h-7 rounded-sm" />
            <h3 className="text-heading font-nunito text-lg font-bold">Eos aspernatur rem</h3>
          </li>
          <li className="py-6 px-5 flex justify-center items-center gap-4 shadow-value-card rounded-sm">
            <FaCheck className="text-lg text-accent bg-accent-light p-1 w-7 h-7 rounded-sm" />
            <h3 className="text-heading font-nunito text-lg font-bold">Eos aspernatur rem</h3>
          </li>
          <li className="py-6 px-5 flex justify-center items-center gap-4 shadow-value-card rounded-sm">
            <FaCheck className="text-lg text-accent bg-accent-light p-1 w-7 h-7 rounded-sm" />
            <h3 className="text-heading font-nunito text-lg font-bold">Eos aspernatur rem</h3>
          </li>
          <li className="py-6 px-5 flex justify-center items-center gap-4 shadow-value-card rounded-sm">
            <FaCheck className="text-lg text-accent bg-accent-light p-1 w-7 h-7 rounded-sm" />
            <h3 className="text-heading font-nunito text-lg font-bold">Eos aspernatur rem</h3>
          </li>
        </ul>
      </div>
      {/* Second Section Of Page */}
      <div className="flex flex-col gap-5 mt-25 2xl:flex-row-reverse">
        <div className="m-auto xl:flex-1/3">
          <img className="w-full " src="/images/features/features2.png" alt="" />
        </div>
        <ul
          className="grid grid-cols-1 grid-rows-6 gap-5 mt-10 
        lg:grid-cols-2 lg:grid-rows-3
        xl:flex-1/2
        2xl:items-center
        "
        >
          <li className="flex gap-4">
            <BsAward className="min-w-[45px] min-h-[45px] text-accent" />
            <div className="flex flex-col gap-1 justify-start text-left">
              <h6 className="text-heading font-nunito font-bold text-xl">Corporis voluptates sit</h6>
              <p className="text-cuGray text-[15px] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <BsDribbble className="min-w-[45px] min-h-[45px] text-accent" />
            <div className="flex flex-col gap-1 justify-start text-left">
              <h6 className="text-heading font-nunito font-bold text-xl">Corporis voluptates sit</h6>
              <p className="text-cuGray text-[15px] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <BsCardChecklist className="min-w-[45px] min-h-[45px] text-accent" />
            <div className="flex flex-col gap-1 justify-start text-left">
              <h6 className="text-heading font-nunito font-bold text-xl">Corporis voluptates sit</h6>
              <p className="text-cuGray text-[15px] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <BsBoxes className="min-w-[45px] min-h-[45px] text-accent" />
            <div className="flex flex-col gap-1 justify-start text-left">
              <h6 className="text-heading font-nunito font-bold text-xl">Corporis voluptates sit</h6>
              <p className="text-cuGray text-[15px] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <BsDisc className="min-w-[45px] min-h-[45px] text-accent" />
            <div className="flex flex-col gap-1 justify-start text-left">
              <h6 className="text-heading font-nunito font-bold text-xl">Corporis voluptates sit</h6>
              <p className="text-cuGray text-[15px] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <BsFileEarmarkLock className="min-w-[45px] min-h-[45px] text-accent" />
            <div className="flex flex-col gap-1 justify-start text-left">
              <h6 className="text-heading font-nunito font-bold text-xl">Corporis voluptates sit</h6>
              <p className="text-cuGray text-[15px] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
