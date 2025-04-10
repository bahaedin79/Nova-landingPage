import React from 'react';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import { HiArrowRight } from 'react-icons/hi2';

export default function Hero() {
  return (
    <div id="hero" className="container-fluid">
      <img className="hero__img" src="/images/hero-img.png" alt="hero section image" />
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">We offer modern solutions for growing your business</h1>
          <p className="hero__description">We are team of talented designers making websites with Bootstrap</p>
        </div>
        <div className="hero__cta">
          <a href="#" className="hero__cta-btn">
            <span>Get Started</span>
            <HiArrowRight className="hero__cta-icon" />
          </a>
          <a href="#" className="hero__cta-btn hero__cta-btn--transparent">
            <HiOutlinePlayCircle className="hero__cta-icon " />
            <span>Watch Video</span>
          </a>
        </div>
      </div>
    </div>
  );
}
