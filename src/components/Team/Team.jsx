import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    imgSrc: '/images/team/team-1.jpg',
    name: 'Sarah Johnson',
    role: 'Web Designer',
    socialLinks: [
      { href: '#', icon: 'FaTwitter' },
      { href: '#', icon: 'FaFacebookF' },
      { href: '#', icon: 'FaInstagram' },
      { href: '#', icon: 'FaLinkedinIn' },
    ],
  },
  {
    imgSrc: '/images/team/team-2.jpg',
    name: 'Michael Chen',
    role: 'Frontend Developer',
    socialLinks: [
      { href: '#', icon: 'FaTwitter' },
      { href: '#', icon: 'FaFacebookF' },
      { href: '#', icon: 'FaInstagram' },
      { href: '#', icon: 'FaLinkedinIn' },
    ],
  },
  {
    imgSrc: '/images/team/team-3.jpg',
    name: 'Emily Rodriguez',
    role: 'UX/UI Designer',
    socialLinks: [
      { href: '#', icon: 'FaTwitter' },
      { href: '#', icon: 'FaFacebookF' },
      { href: '#', icon: 'FaInstagram' },
      { href: '#', icon: 'FaLinkedinIn' },
    ],
  },
  {
    imgSrc: '/images/team/team-4.jpg',
    name: 'David Wilson',
    role: 'Backend Developer',
    socialLinks: [
      { href: '#', icon: 'FaTwitter' },
      { href: '#', icon: 'FaFacebookF' },
      { href: '#', icon: 'FaInstagram' },
      { href: '#', icon: 'FaLinkedinIn' },
    ],
  },
];

export default function Team() {
  return (
    <section className="my-25 flex flex-col items-center justify-center gap-8 text-center">
      <h2 className="section__subtitle">Team</h2>
      <h3 className="section__title">Our hard working team</h3>
      <ul className="gap-7 mt-7 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 grid min-w-full grid-cols-1 grid-rows-4">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </ul>
    </section>
  );
}
