import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

export default function Stats() {
  return (
    <section
      id="stats"
      className="rounded-xl lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-1 bg-accent-light grid grid-cols-1 grid-rows-3 gap-5 p-5 mt-20"
    >
      <div className="shadow-value-card rounded-xl h-30 flex items-center gap-5 px-8 bg-white">
        <RiEmotionHappyLine className="text-accent text-6xl" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">150</span>
          <span className="text-cuGray font-nunito">Happy Clients</span>
        </div>
      </div>
      <div className="shadow-value-card rounded-xl h-30 flex items-center gap-5 px-8 bg-white">
        <HiOutlineClipboardDocumentList className="text-cu-orange text-6xl" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">205</span>
          <span className="text-cuGray font-nunito">Projects Successfully Completed</span>
        </div>
      </div>
      <div className="shadow-value-card rounded-xl h-30 flex items-center gap-5 px-8 bg-white">
        <BiSupport className="text-cu-green text-6xl" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">1405</span>
          <span className="text-cuGray font-nunito">Hours of Expert Support</span>
        </div>
      </div>
      <div className="shadow-value-card rounded-xl h-30 flex items-center gap-5 px-8 bg-white">
        <HiOutlineUsers className="text-cu-red text-6xl" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">15</span>
          <span className="text-cuGray font-nunito">Skilled Team Members</span>
        </div>
      </div>
    </section>
  );
}
