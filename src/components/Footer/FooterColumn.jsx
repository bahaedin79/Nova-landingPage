import { HiChevronRight } from 'react-icons/hi2';

export default function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col justify-start items-start">
      <h4 className="text-base font-nunito text-heading font-bold">{title}</h4>
      <ul className="flex flex-col gap-4 text-default font-roboto text-sm mt-2">
        {links.map(link => (
          <li key={link.text}>
            <a href={link.href} className="footer__link flex items-center gap-1">
              <HiChevronRight className="text-accent" />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
