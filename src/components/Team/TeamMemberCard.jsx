import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function TeamMemberCard({ imgSrc, name, role, socialLinks }) {
  return (
    <li className="shadow-value-card hover:scale-105 group flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white rounded-lg">
      <div className="relative w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={`Team Member - ${name}`}
          className="group-hover:scale-110 object-cover w-full transition-transform duration-500"
        />
        <div className="bg-gradient-to-t from-accent/80 to-transparent group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 opacity-0"></div>
        <div className="group-hover:translate-y-0 absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-4 transition-transform duration-300 translate-y-full">
          {socialLinks.map(link => (
            <a
              key={link.icon}
              href={link.href}
              className="text-accent hover:bg-accent hover:text-white p-2 transition-colors duration-300 bg-white rounded-full">
              {link.icon === 'FaTwitter' && <FaTwitter />}
              {link.icon === 'FaFacebookF' && <FaFacebookF />}
              {link.icon === 'FaInstagram' && <FaInstagram />}
              {link.icon === 'FaLinkedinIn' && <FaLinkedinIn />}
            </a>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-nunito text-heading text-lg font-bold">{name}</h3>
        <p className="font-nunito mt-1 text-sm text-gray-500">{role}</p>
      </div>
    </li>
  );
}
