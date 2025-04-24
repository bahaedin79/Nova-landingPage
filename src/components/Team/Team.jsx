import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Team() {
  return (
    <section className="my-25 flex flex-col items-center justify-center gap-8 text-center">
      <h2 className="section__subtitle">Team</h2>
      <h3 className="section__title">Our hard working team</h3>
      <ul className="gap-7 mt-7 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 grid min-w-full grid-cols-1 grid-rows-4">
        {/* Team Member 1 */}
        <li className="shadow-value-card hover:scale-105 group flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white rounded-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/team/team-1.jpg"
              alt="Team Member - Sarah Johnson"
              className="group-hover:scale-110 object-cover w-full transition-transform duration-500"
            />
            <div className="bg-gradient-to-t from-accent/80 to-transparent group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 opacity-0"></div>
            <div className="group-hover:translate-y-0 absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-4 transition-transform duration-300 translate-y-full">
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-nunito text-heading text-lg font-bold">Sarah Johnson</h3>
            <p className="font-nunito mt-1 text-sm text-gray-500">Web Designer</p>
          </div>
        </li>

        {/* Team Member 2 */}
        <li className="shadow-value-card hover:scale-105 group flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white rounded-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/team/team-2.jpg"
              alt="Team Member - Michael Chen"
              className="group-hover:scale-110 object-cover w-full transition-transform duration-500"
            />
            <div className="bg-gradient-to-t from-accent/80 to-transparent group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 opacity-0"></div>
            <div className="group-hover:translate-y-0 absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-4 transition-transform duration-300 translate-y-full">
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-nunito text-heading text-lg font-bold">Michael Chen</h3>
            <p className="font-nunito mt-1 text-sm text-gray-500">Frontend Developer</p>
          </div>
        </li>

        {/* Team Member 3 */}
        <li className="shadow-value-card hover:scale-105 group flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white rounded-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/team/team-3.jpg"
              alt="Team Member - Emily Rodriguez"
              className="group-hover:scale-110 object-cover w-full transition-transform duration-500"
            />
            <div className="bg-gradient-to-t from-accent/80 to-transparent group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 opacity-0"></div>
            <div className="group-hover:translate-y-0 absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-4 transition-transform duration-300 translate-y-full">
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-nunito text-heading text-lg font-bold">Emily Rodriguez</h3>
            <p className="font-nunito mt-1 text-sm text-gray-500">UX/UI Designer</p>
          </div>
        </li>

        {/* Team Member 4 */}
        <li className="shadow-value-card hover:scale-105 group flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white rounded-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/team/team-4.jpg"
              alt="Team Member - David Wilson"
              className="group-hover:scale-110 object-cover w-full transition-transform duration-500"
            />
            <div className="bg-gradient-to-t from-accent/80 to-transparent group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 opacity-0"></div>
            <div className="group-hover:translate-y-0 absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-4 transition-transform duration-300 translate-y-full">
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-nunito text-heading text-lg font-bold">David Wilson</h3>
            <p className="font-nunito mt-1 text-sm text-gray-500">Backend Developer</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
