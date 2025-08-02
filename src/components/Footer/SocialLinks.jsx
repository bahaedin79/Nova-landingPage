import { LuLinkedin, LuInstagram, LuFacebook, LuTwitter } from 'react-icons/lu';

const socialLinks = [
  { href: '#', icon: LuLinkedin },
  { href: '#', icon: LuInstagram },
  { href: '#', icon: LuFacebook },
  { href: '#', icon: LuTwitter },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-2 justify-start items-start lg:col-span-2 xl:col-auto">
      <h4 className="text-base font-nunito text-heading font-bold">Follow Us</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quaerat</p>
      <ul className="flex items-center justify-start gap-2 mt-2">
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className=" rounded-md bg-accent-light flex items-center justify-center text-accent hover:scale-110 transition-transform">
            <a href={link.href} className="p-3">
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
