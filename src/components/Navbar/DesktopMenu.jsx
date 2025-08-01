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
    <ul
      className="hidden 
    xl:flex justify-center items-center gap-8 text-heading font-Poppins-SemiBold
    2xl:gap-10
    ">
      {navLinks.map(link => (
        <li key={link.to} className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
          <NavLinkItem to={link.to} isScrollLink={link.isScrollLink} activeClass="text-accent" spy={true}>
            {link.text}
          </NavLinkItem>
        </li>
      ))}
    </ul>
  );
}
