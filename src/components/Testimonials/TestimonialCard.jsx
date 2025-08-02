import { HiMiniStar } from 'react-icons/hi2';

export default function TestimonialCard({ rating, quote, imgSrc, name, role }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <HiMiniStar key={i} className={`testimonials__star ${i < rating ? 'active' : ''}`} />
        ))}
      </div>
      <p>{quote}</p>
      <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
        <img className="w-full" src={imgSrc} alt="testimonials user Avatar" />
      </div>
      <div>
        <h3 className="font-nunito text-lg font-bold text-heading">{name}</h3>
        <h4 className="text-sm font-nunito text-gray-400 mt-1">{role}</h4>
      </div>
    </div>
  );
}
