import React from 'react';

export default function Portfolio() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 text-center my-25">
      <h2 className="section__subtitle">Portfolio</h2>
      <h3 className="section__title">Check our latest work</h3>
      <ul
        className="flex justify-center items-center gap-4
      font-roboto text-[14px] font-medium text-default"
      >
        <li className="hover:text-accent transition-all cursor-pointer">All</li>
        <li className="hover:text-accent transition-all cursor-pointer">App</li>
        <li className="hover:text-accent transition-all cursor-pointer">Product</li>
        <li className="hover:text-accent transition-all cursor-pointer">Branding</li>
        <li className="hover:text-accent transition-all cursor-pointer">Books</li>
      </ul>
    </section>
  );
}
