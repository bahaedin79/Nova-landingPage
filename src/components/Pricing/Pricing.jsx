import PricingCard from './PricingCard';
import { useFetch } from '../../hooks/useFetch';

export default function Pricing() {
  const { data: priceData, loading: isPending, error } = useFetch('/pricing.json');
  return (
    <section className="my-25 flex flex-col items-center justify-center gap-8 text-center">
      <h2 className="section__subtitle">Pricing</h2>
      <h3 className="section__title">Check Our Affordable Pricing</h3>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="mt-7 lg:grid-cols-2 lg:justify-items-center xl:grid-cols-3 xl:grid-rows-1 grid justify-between w-full grid-cols-1 gap-8">
        {priceData &&
          priceData.map((price, idx) => (
            <PricingCard key={price.id} {...price} className={idx === 2 ? 'lg:col-span-2 xl:col-auto mx-auto' : ''} />
          ))}
      </ul>
    </section>
  );
}
