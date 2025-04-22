import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

export default function Stats() {
  return (
    <section
      id="stats"
      className="grid grid-cols-1 grid-rows-3 gap-5 mt-20 p-5 rounded-xl
    lg:grid-cols-2 lg:grid-rows-2
    2xl:grid-cols-4 2xl:grid-rows-1
    bg-gradient-to-b from-accent/50 to-accent-light "
    >
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-xl px-8 h-30">
        <RiEmotionHappyLine className="text-6xl text-accent" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">150</span>
          <span className="text-cuGray font-nunito">Happy Clients</span>
        </div>
      </div>
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-xl px-8 h-30">
        <HiOutlineClipboardDocumentList className="text-6xl text-cu-orange" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">205</span>
          <span className="text-cuGray font-nunito">Projects Successfully Completed</span>
        </div>
      </div>
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-xl px-8 h-30">
        <BiSupport className="text-6xl text-cu-green" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">1405</span>
          <span className="text-cuGray font-nunito">Hours of Expert Support</span>
        </div>
      </div>
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-xl px-8 h-30">
        <HiOutlineUsers className="text-6xl text-cu-red" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">15</span>
          <span className="text-cuGray font-nunito">Skilled Team Members</span>
        </div>
      </div>
    </section>
  );
}
