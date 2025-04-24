import React from 'react';

export default function Value() {
  return (
    <section id="value" className="mt-25 flex flex-col items-center justify-center gap-5">
      <h2 className="section__subtitle">Our Commitment</h2>
      <h3 className="section__title max-w-80 text-center">What We Prioritize in Our Services</h3>
      <div
        className="grid grid-cols-1 grid-rows-3 gap-5 mt-10
        lg:grid-cols-2 lg:grid-rows-2
        xl:grid-cols-3 xl:grid-rows-1
        2xl:[grid-template-columns:repeat(3,360px)] 2xl:justify-between 2xl:gap-0 2xl:w-full"
      >
        <div
          className="flex flex-col items-center gap-2 text-center p-5 rounded-xl group max-w-[336px] xl:max-w-none
          bg-accent-light 2xl:max-w-[380px]"
        >
          <div className="relative pt-3 mb-5">
            <img
              className="w-[250px] h-[200px] rounded-md xl:w-[297px] xl:h-[240px] object-cover "
              src="/images/values/Professional.webp"
              alt="Professional Web Development"
            />
            <figcaption
              className="absolute left-2 -bottom-3 font-nunito text-sm text-accent-light bg-accent/70 px-1.5 py-0.5 rounded-md 
            opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <a
                href="https://www.freepik.com/free-vector/desktop-smartphone-app-development_10276838.htm#fromView=search&page=1&position=1&uuid=8b4a73de-03f0-4d9e-bf21-1c779d6995e0&query=illustration+webdevelopment"
                target="_blank"
              >
                Image by Freepik
              </a>
            </figcaption>
          </div>
          <h3 className="text-heading font-nunito text-2xl font-bold">Professional Web Development</h3>
          <p className="font-roboto text-base text-gray-600">
            We focus on creating modern, responsive, and user-friendly websites tailored to your business needs.
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-2 text-center p-5 rounded-xl group max-w-[336px] xl:max-w-none
         bg-accent-light 2xl:max-w-[380px]"
        >
          <div className="relative pt-3 mb-5">
            <img
              className="w-[250px] h-[200px] rounded-md xl:w-[297px] xl:h-[240px] object-cover"
              src="/images/values/support.webp"
              alt="Reliable Support"
            />
            <figcaption
              className="absolute left-2 -bottom-3 font-nunito text-sm text-accent-light bg-accent/70 px-1.5 py-0.5 rounded-md 
            opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <a
                href="https://www.freepik.com/free-vector/contact-us-concept-landing-page_4663671.htm#fromView=search&page=1&position=38&uuid=c054e3e6-bad0-4d1c-a1fc-2bd2bf999528&query=illustration+support"
                target="_blank"
              >
                Image by Freepik
              </a>
            </figcaption>
          </div>
          <h3 className="text-heading font-nunito text-2xl font-bold">Reliable Support</h3>
          <p className="text-pretty font-roboto text-base text-gray-600">
            Our team is dedicated to providing exceptional support to ensure your website runs smoothly at all times.
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-2 text-center p-5 rounded-xl group max-w-[336px] 
          bg-accent-light
          lg:col-span-2 lg:row-start-2 lg:justify-self-center
          xl:max-w-none xl:col-auto xl:row-auto xl:justify-self-start 2xl:max-w-[380px]"
        >
          <div className="relative pt-3 mb-5">
            <img
              className="w-[250px] h-[200px] rounded-md xl:w-[297px] xl:h-[240px] object-cover"
              src="/images/values/Satisfaction.webp"
              alt="Customer Satisfaction"
            />
            <figcaption
              className="absolute left-2 -bottom-3 font-nunito text-sm text-accent-light bg-accent/70 px-1.5 py-0.5 rounded-md 
            opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <a
                href="https://www.freepik.com/free-vector/emotional-feedback-concept-illustration_82648090.htm#fromView=search&page=1&position=3&uuid=127ba229-6c1e-4f54-a3b9-aa7df638d5d7&query=illustration+Satisfaction"
                target="_blank"
              >
                Image by Freepik
              </a>
            </figcaption>
          </div>
          <h3 className="text-heading font-nunito text-2xl font-bold">Customer Satisfaction</h3>
          <p className="text-pretty font-roboto text-base text-gray-600">
            We prioritize your satisfaction by delivering high-quality services that exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
