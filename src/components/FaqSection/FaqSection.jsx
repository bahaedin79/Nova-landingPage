import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import FaqItem from './FaqItem';

export default function FaqAccordion() {
  const { data, error, loading } = useFetch('./faqs.json');
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = id => {
    setActiveId(activeId === id ? null : id);
  };

  const faqs = data?.faqs || [];
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center my-25">
      <h2 className="section__subtitle">F.A.Q</h2>
      <h3 className="section__title">Frequently Asked Questions</h3>

      <div>
        {error && (
          <div className="p-3 mb-4 text-base font-semibold text-yellow-800 bg-yellow-100 rounded font-nunito">
            {error}
          </div>
        )}
        {loading && (
          <div className="p-3 mb-4 text-base font-semibold text-blue-800 rounded font-nunito bg-cyan-100">
            Data is Loading ...
          </div>
        )}
        {faqs.length === 0 && !loading && (
          <div className="p-3 mb-4 text-base font-semibold text-red-800 bg-red-100 rounded font-nunito">
            No data available
          </div>
        )}
      </div>

      <div className="hidden w-full xl:flex xl:flex-row xl:gap-16">
        <div className="w-full">
          <ul className="flex flex-col w-full gap-7">
            {leftColumnFaqs.map(faq => (
              <FaqItem key={faq.id} faq={faq} isOpen={activeId === faq.id} onClick={() => toggleFaq(faq.id)} />
            ))}
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex flex-col w-full gap-7">
            {rightColumnFaqs.map(faq => (
              <FaqItem key={faq.id} faq={faq} isOpen={activeId === faq.id} onClick={() => toggleFaq(faq.id)} />
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full xl:hidden">
        <ul className="flex flex-col w-full gap-7">
          {faqs.map(faq => (
            <FaqItem key={faq.id} faq={faq} isOpen={activeId === faq.id} onClick={() => toggleFaq(faq.id)} />
          ))}
        </ul>
      </div>
    </section>
  );
}
