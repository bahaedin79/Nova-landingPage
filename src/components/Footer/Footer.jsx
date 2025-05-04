import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi2';
import { LuLinkedin } from 'react-icons/lu';
import { LuInstagram } from 'react-icons/lu';
import { LuFacebook } from 'react-icons/lu';
import { LuTwitter } from 'react-icons/lu';

export default function Footer() {
  return (
    <>
      <section
        id="footer"
        className="mt-15 grid grid-cols-1 gap-10 border-b-2 border-accent/20 pb-5 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4">
        {/* Address Part */}
        <div className="flex flex-col items-start gap-2">
          <Link to="/" className="flex items-center ">
            <span className="text-heading text-3xl font-nunito font-bold">Nova</span>
          </Link>
          <div className="flex flex-col gap-2 text-default font-roboto text-sm mt-2">
            <span>125 High Street</span>
            <span>Barnet, Hertfordshire</span>
            <span>
              <b>Phone: </b> 020 8440 5737
            </span>
            <span>
              <b>Email:</b> Nova@gmail.com
            </span>
          </div>
        </div>
        {/* Useful Links */}
        <div className="flex flex-col justify-start items-start">
          <h4 className="text-base font-nunito text-heading font-bold">Useful Links</h4>
          <ul className="flex flex-col gap-4 text-default font-roboto text-sm mt-2">
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Services
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Terms of Services
              </a>
            </li>
          </ul>
        </div>
        {/* Our Services */}
        <div className="flex flex-col justify-start items-start">
          <h4 className="text-base font-nunito text-heading font-bold">Our Services</h4>
          <ul className="flex flex-col gap-4 text-default font-roboto text-sm mt-2">
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Product Management
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <HiChevronRight className="text-accent" />
                Marketing
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div className="flex flex-col gap-2 justify-start items-start lg:col-span-2 xl:col-auto">
          <h4 className="text-base font-nunito text-heading font-bold">Follow Us</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quaerat</p>
          <ul className="flex items-center justify-start gap-2 mt-2">
            <li className="w-10 h-10 rounded-md bg-accent-light flex items-center justify-center text-accent">
              <LuLinkedin />
            </li>
            <li className="w-10 h-10 rounded-md bg-accent-light flex items-center justify-center text-accent">
              <LuInstagram />
            </li>
            <li className="w-10 h-10 rounded-md bg-accent-light flex items-center justify-center text-accent">
              <LuFacebook />
            </li>
            <li className="w-10 h-10 rounded-md bg-accent-light flex items-center justify-center text-accent">
              <LuTwitter />
            </li>
          </ul>
        </div>
      </section>

      <div className="text-center text-sm text-gray-400 my-5 font-roboto">
        © {new Date().getFullYear()} Nova. All rights reserved. coded with ❤️ by{' '}
        <a href="" className="text-accent font-nunito text-md font-bold">
          Bahaedin
        </a>
      </div>
    </>
  );
}
