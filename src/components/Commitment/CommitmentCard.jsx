export default function CommitmentCard({ imgSrc, title, desc, freePikUrl }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center p-5 rounded-xl group max-w-[336px] bg-accent-light  xl:max-w-none 2xl:max-w-[380px]">
      <div className="relative pt-3 mb-5">
        <img
          className="w-[250px] h-[200px] rounded-md xl:w-[297px] xl:h-[240px] object-cover "
          src={imgSrc}
          alt={title}
        />
        <figcaption
          className="absolute left-2 -bottom-3 font-nunito text-sm text-accent-light bg-accent/70 px-1.5 py-0.5 rounded-md 
            opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a href={freePikUrl} target="_blank" rel="noreferrer">
            Image by Freepik
          </a>
        </figcaption>
      </div>
      <h3 className="text-heading font-nunito text-2xl font-bold">{title}</h3>
      <p className="font-roboto text-base text-gray-600">{desc}</p>
    </div>
  );
}
