import CommitmentCard from './CommitmentCard';

const commitmentData = [
  {
    title: 'Professional Web Development',
    desc: 'We focus on creating modern, responsive, and user-friendly websites tailored to your business needs.',
    imgSrc: '/images/values/Professional.webp',
    freePikUrl:
      'https://www.freepik.com/free-vector/desktop-smartphone-app-development_10276838.htm#fromView=search&page=1&position=1&uuid=8b4a73de-03f0-4d9e-bf21-1c779d6995e0&query=illustration+webdevelopment',
  },
  {
    title: 'Reliable Support',
    desc: 'Our team is dedicated to providing exceptional support to ensure your website runs smoothly at all times.',
    imgSrc: '/images/values/support.webp',
    freePikUrl:
      'https://www.freepik.com/free-vector/contact-us-concept-landing-page_4663671.htm#fromView=search&page=1&position=38&uuid=c054e3e6-bad0-4d1c-a1fc-2bd2bf999528&query=illustration+support',
  },
  {
    title: 'Customer Satisfaction',
    desc: 'We prioritize your satisfaction by delivering high-quality services that exceed your expectations.',
    imgSrc: '/images/values/Satisfaction.webp',
    freePikUrl:
      'https://www.freepik.com/free-vector/emotional-feedback-concept-illustration_82648090.htm#fromView=search&page=1&position=3&uuid=127ba229-6c1e-4f54-a3b9-aa7df638d5d7&query=illustration+Satisfaction',
  },
];

export default function Value() {
  return (
    <section id="value" className="mt-25 flex flex-col items-center justify-center gap-5">
      <h2 className="section__subtitle">Our Commitment</h2>
      <h3 className="section__title max-w-80 text-center">What We Prioritize in Our Services</h3>
      <div
        className="grid grid-cols-1 grid-rows-3 gap-5 mt-10
        lg:grid-cols-2 lg:grid-rows-2
        xl:grid-cols-3 xl:grid-rows-1
        2xl:[grid-template-columns:repeat(3,360px)] 2xl:justify-between 2xl:gap-0 2xl:w-full">
        {commitmentData.map(data => (
          <CommitmentCard
            key={data.title}
            imgSrc={data.imgSrc}
            title={data.title}
            desc={data.desc}
            freePikUrl={data.freePikUrl}
          />
        ))}
      </div>
    </section>
  );
}
