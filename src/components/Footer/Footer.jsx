import ContactInfo from './ContactInfo';
import Copyright from './Copyright';
import FooterColumn from './FooterColumn';
import SocialLinks from './SocialLinks';

const usefulLinks = [
  { href: '#', text: 'Home' },
  { href: '#', text: 'About us' },
  { href: '#', text: 'Services' },
  { href: '#', text: 'Terms of Services' },
];

const ourServices = [
  { href: '#', text: 'Web Design' },
  { href: '#', text: 'Web Development' },
  { href: '#', text: 'Product Management' },
  { href: '#', text: 'Marketing' },
];

export default function Footer() {
  return (
    <>
      <section
        id="contact"
        className="mt-15 grid grid-cols-1 gap-10 border-b-2 border-accent/20 pb-5 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4">
        <ContactInfo />
        <FooterColumn title="Useful Links" links={usefulLinks} />
        <FooterColumn title="Our Services" links={ourServices} />
        <SocialLinks />
      </section>
      <Copyright />
    </>
  );
}
