import { motion } from 'framer-motion';
import NavLinkItem from './NavLinkItem';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: 'about', text: 'About', isScrollLink: true },
  { to: 'services', text: 'Services', isScrollLink: true },
  { to: 'portfolio', text: 'Portfolio', isScrollLink: true },
  { to: 'team', text: 'Team', isScrollLink: true },
  { to: '/blog', text: 'Blog' },
  { to: 'contact', text: 'Contact', isScrollLink: true },
];

export default function DesktopMenu() {
  return (
    <ul className="hidden xl:flex justify-center items-center gap-8 text-heading font-Poppins-SemiBold 2xl:gap-10">
      {navLinks.map(link => (
        <motion.li
          key={link.to}
          className="relative hover:cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}>
          <NavLinkItem
            to={link.to}
            isScrollLink={link.isScrollLink}
            activeClass="text-accent"
            spy={true}
            className="pb-1">
            {link.text}
          </NavLinkItem>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.li>
      ))}
    </ul>
  );
}
