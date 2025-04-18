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
      <h2 className="section__subtitle">Team</h2>
      <h3 className="section__title">Our hard working team</h3>
      <ul
        className="grid grid-cols-1 grid-rows-4 gap-7 min-w-full mt-7
        lg:grid-cols-2 lg:grid-rows-2
        xl:grid-cols-4 xl:grid-rows-1"
      >
        <li className="flex flex-col justify-center items-center gap-4 shadow-value-card rounded-md overflow-hidden transition-all duration-300 hover:scale-110 hover:cursor-pointer">
          <div>
            <img src="/images/team/team-12.JPG" alt="Team Member" className="masked-img" />
            asas
          </div>
        </li>
      </ul>
    </section>
  );
}
