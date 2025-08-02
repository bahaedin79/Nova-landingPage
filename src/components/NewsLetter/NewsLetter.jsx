import React from 'react';

export default function NewsLetter() {
  return (
    <section className=" bg-accent-light py-[50px] px-2 rounded-lg">
      <div className=" flex flex-col justify-center gap-4 xl:max-w-[480px] xl:m-auto xl:gap-7">
        <div className="text-center">
          <h4 className="font-nunito text-heading mb-4 text-2xl font-bold xl:text-4xl 2xl:text-5xl">
            Join Our Newsletter
          </h4>
          <p
            className="font-roboto text-default text-pretty text-sm text-center 
            xl:max-w-[350px] xl:m-auto 2xl:text-base">
            Subscribe to our newsletter and receive the latest news about our products and services!
          </p>
        </div>
        <form>
          <div className=" sm:mx-4 flex justify-between overflow-hidden text-sm bg-white rounded-sm">
            <input
              type="email"
              placeholder="example@example.com"
              className="text-default outline-0 border-1 focus:border-accent w-full py-3 pl-2 text-sm transition-all border-white rounded-l-sm
              2xl:py-4"
            />
            <input type="submit" value="Subscribe" className="bg-accent px-2 py-3 text-white 2xl:px-4" />
          </div>
        </form>
      </div>
    </section>
  );
}
