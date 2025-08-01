import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function NavLinkItem({ to, isScrollLink, children, ...props }) {
  if (isScrollLink) {
    return (
      <ScrollLink to={to} smooth={true} duration={500} offset={-90} {...props}>
        {children}
      </ScrollLink>
    );
  }

  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'text-accent' : '')} {...props}>
      {children}
    </NavLink>
  );
}
