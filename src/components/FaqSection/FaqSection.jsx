import React, { useState, useMemo } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { useFetch } from '../../hooks/useFetch';

const localFaqs = [
  {
    id: 1,
    question: 'Is it really possible to receive the product the next day?',
    answer:
      'You can log in to your account and check the "My Orders" section to see the status of your order. An email with a tracking code will also be sent to you.',
  },
  {
    id: 2,
    question: 'Can I return the product?',
    answer:
      'Yes, you can return the product within 7 days of receiving it, provided it is unused and undamaged. You can initiate the return process through your user panel.',
  },
  {
    id: 3,
    question: 'What are the payment methods?',
    answer:
      'We support various payment methods, including bank cards, online payments, and cash on delivery. You can choose your preferred method at the final stage of the shopping cart.',
  },
  {
    id: 4,
    question: 'How much is the shipping cost?',
    answer:
      'The shipping cost depends on the destination, package weight, and selected shipping method. For orders over $500, shipping is free. The exact cost will be calculated at the final stage of the shopping cart.',
  },
  {
    id: 5,
    question: 'How can I track my order?',
    answer:
      'After placing your order, you will receive an email with a tracking code. You can use this code to track your order on our website or through the courier service.',
  },
  {
    id: 6,
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer international shipping to selected countries. Shipping costs and delivery times vary depending on the destination. Please check the shipping options during checkout.',
  },
];

const initialFaqData = { faqs: localFaqs };

export default function FaqAccordion() {
  const { data, error, loading } = useFetch('./faqs.json', initialFaqData);
  const [activeId, setActiveId] = useState(null);
  const readyFaq = data?.faqs || localFaqs;

  const toggleFaq = id => {
    setActiveId(activeId === id ? null : id);
  };

  // تقسیم آیتم‌ها به دو ستون مجزا
  const leftColumnFaqs = readyFaq.slice(0, Math.ceil(readyFaq.length / 2));
  const rightColumnFaqs = readyFaq.slice(Math.ceil(readyFaq.length / 2));

  // رندر آیتم‌های FAQ
  const renderFaqItem = faq => (
    <li key={faq.id} className="text-left hover:cursor-pointer pb-4 border-b-1 border-gray-300" onClick={() => toggleFaq(faq.id)}>
      <div className="flex items-start justify-between">
        <h3 className="text-accent text-base font-nunito font-semibold flex-1 pe-4">{faq.question}</h3>
        <HiChevronDown
          className={`text-2xl text-accent transition-transform duration-300 flex-shrink-0 ${activeId === faq.id ? 'rotate-180' : ''}`}
        />
      </div>
      <p
        className={`text-base font-roboto text-default mt-2.5 overflow-hidden transition-all duration-300 ease-in-out
        ${activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {faq.answer}
      </p>
    </li>
  );

  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center my-25">
      <h2 className="section__subtitle">F.A.Q</h2>
      <h3 className="section__title">Frequently Asked Questions</h3>

      <div>
        {error && <div className="text-base font-nunito font-semibold mb-4 p-3 bg-yellow-100 text-yellow-800 rounded">{error}</div>}
        {loading && <div className="text-base font-nunito font-semibold mb-4 p-3 bg-cyan-100 text-blue-800 rounded">Data is Loading ...</div>}
        {readyFaq.length === 0 ? (
          <div className="text-base font-nunito font-semibold mb-4 p-3 bg-red-100 text-red-800 rounded">No data available</div>
        ) : null}
      </div>

      {/* نمایش موبایل - همه آیتم‌ها در یک ستون */}
      <div className="w-full xl:hidden">
        <ul className="w-full flex flex-col gap-7">
          {readyFaq.map(faq => (
            <li key={faq.id} className="text-left hover:cursor-pointer pb-4 border-b-1 border-gray-300" onClick={() => toggleFaq(faq.id)}>
              <div className="flex items-start justify-between">
                <h3 className="text-accent text-base font-nunito font-semibold flex-1 pe-4">{faq.question}</h3>
                <HiChevronDown
                  className={`text-2xl text-accent transition-transform duration-300 flex-shrink-0 ${activeId === faq.id ? 'rotate-180' : ''}`}
                />
              </div>
              <p
                className={`text-base font-roboto text-default mt-2.5 overflow-hidden transition-all duration-300 ease-in-out
                ${activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* نمایش دسکتاپ - دو ستون مجزا */}
      <div className="w-full hidden xl:flex xl:flex-row xl:gap-16">
        {/* ستون اول */}
        <div className="w-full">
          <ul className="w-full flex flex-col gap-7">
            {leftColumnFaqs.map(faq => (
              <li key={faq.id} className="text-left hover:cursor-pointer pb-4 border-b-1 border-gray-300" onClick={() => toggleFaq(faq.id)}>
                <div className="flex items-start justify-between">
                  <h3 className="text-accent text-base font-nunito font-semibold flex-1 pe-4">{faq.question}</h3>
                  <HiChevronDown
                    className={`text-2xl text-accent transition-transform duration-300 flex-shrink-0 ${activeId === faq.id ? 'rotate-180' : ''}`}
                  />
                </div>
                <p
                  className={`text-base font-roboto text-default mt-2.5 overflow-hidden transition-all duration-300 ease-in-out
                  ${activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ستون دوم */}
        <div className="w-full">
          <ul className="w-full flex flex-col gap-7">
            {rightColumnFaqs.map(faq => (
              <li key={faq.id} className="text-left hover:cursor-pointer pb-4 border-b-1 border-gray-300" onClick={() => toggleFaq(faq.id)}>
                <div className="flex items-start justify-between">
                  <h3 className="text-accent text-base font-nunito font-semibold flex-1 pe-4">{faq.question}</h3>
                  <HiChevronDown
                    className={`text-2xl text-accent transition-transform duration-300 flex-shrink-0 ${activeId === faq.id ? 'rotate-180' : ''}`}
                  />
                </div>
                <p
                  className={`text-base font-roboto text-default mt-2.5 overflow-hidden transition-all duration-300 ease-in-out
                  ${activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
