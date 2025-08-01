import { HiChevronDown } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export default function FaqItem({ faq, isOpen, onClick }) {
  return (
    <li className="pb-4 text-left border-gray-300 hover:cursor-pointer border-b-1" onClick={onClick}>
      <div className="flex items-start justify-between">
        <h3 className="flex-1 text-base font-semibold text-accent font-nunito pe-4">{faq.question}</h3>
        <HiChevronDown
          className={`text-2xl text-accent transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <p
        className={`text-base font-roboto text-default mt-2.5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        {faq.answer}
      </p>
    </li>
  );
}
