import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function About() {
  return (
    <div id="about">
      <div className="about__content">
        <h3 className="about__subtitle">WHO WE ARE</h3>
        <h2 className="about__title">
          Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.
        </h2>
        <p className="about__description">
          Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam
          ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
        <a href="#">
          <span>Read More</span>
          <HiArrowRight />
        </a>
      </div>
      <img className="about__img" src="" alt="" />
    </div>
  );
}
