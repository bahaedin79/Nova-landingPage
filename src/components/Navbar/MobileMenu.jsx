import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';
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

const menuVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[9998] xl:hidden"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.ul
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-[9999] flex flex-col items-center justify-center gap-8 font-Poppins-Medium text-2xl text-dark"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <FaXmark
              className="absolute top-8 right-8 text-3xl text-gray-500 cursor-pointer hover:text-accent transition-colors"
              onClick={toggleMenu}
            />
            {navLinks.map((link, index) => (
              <motion.li
                key={link.to}
                className="mobile-nav__list-item"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * index }}>
                <NavLinkItem
                  to={link.to}
                  isScrollLink={link.isScrollLink}
                  activeClass="text-accent"
                  onClick={toggleMenu}>
                  {link.text}
                </NavLinkItem>
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </AnimatePresence>
  );
}
