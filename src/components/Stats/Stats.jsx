import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

export default function Stats() {
  return (
    <section
      id="stats"
      className="grid grid-cols-1 grid-rows-3 gap-5 mt-25
    lg:grid-cols-2 lg:grid-rows-2
    2xl:grid-cols-4 2xl:grid-rows-1"
    >
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-md p-8">
        <RiEmotionHappyLine className="text-6xl text-accent" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">150</span>
          <span className="text-cuGray font-nunito">Happy Clients</span>
        </div>
      </div>
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-md p-8">
        <HiOutlineClipboardDocumentList className="text-6xl text-cu-orange" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">205</span>
          <span className="text-cuGray font-nunito">Projects</span>
        </div>
      </div>
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-md p-8">
        <BiSupport className="text-6xl text-cu-green" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">1405</span>
          <span className="text-cuGray font-nunito">Hours Of Support</span>
        </div>
      </div>
      <div className="flex items-center bg-white gap-5 shadow-value-card rounded-md p-8">
        <HiOutlineUsers className="text-6xl text-cu-red" />
        <div className="flex flex-col">
          <span className="text-heading font-roboto text-4xl font-bold">15</span>
          <span className="text-cuGray font-nunito">Hard Workers</span>
        </div>
      </div>
    </section>
  );
}
