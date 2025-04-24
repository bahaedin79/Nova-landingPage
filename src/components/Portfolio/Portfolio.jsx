import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export default function Portfolio() {
  const { data, error, loading } = useFetch('./PortfolioItems.json', null);
  const categories = ['All', 'App', 'Product', 'Branding', 'Books'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to get filtered items based on selected category
  const getFilteredItems = () => {
    if (!data) return [];

    if (selectedCategory === 'All') {
      // For "All" category, flatten all items from all categories
      return Object.entries(data).flatMap(([category, items]) => {
        return items.map(item => ({
          ...item,
          category, // Add category info to each item
        }));
      });
    } else {
      // For specific categories, get items from that category
      const categoryKey = selectedCategory.toLowerCase();
      return data[categoryKey]
        ? data[categoryKey].map(item => ({
            ...item,
            category: categoryKey,
          }))
        : [];
    }
  };

  // Calculate filtered items once
  const filteredItems = getFilteredItems();

  return (
    <section className="my-25 sm:px-6 flex flex-col items-center justify-center gap-8 px-4 text-center">
      <h2 className="section__subtitle text-accent">Portfolio</h2>
      <h3 className="section__title sm:text-4xl md:text-5xl mb-8 text-3xl font-bold">Check our latest work</h3>

      {/* Category filter tabs */}
      <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 font-roboto text-sm sm:text-[14px] font-medium">
        {categories.map(category => (
          <li
            key={category}
            className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer
              ${category === selectedCategory ? 'bg-accent text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-default'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Loading and error states */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin border-accent w-12 h-12 border-t-2 border-b-2 rounded-full"></div>
        </div>
      )}
      {error && <p className="py-8 text-red-500">{error}</p>}

      {/* Portfolio items grid */}
      <div className="sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid w-full grid-cols-1 gap-6 mt-8">
        {filteredItems.map(item => (
          <div
            key={`${item.category}-${item.id}`}
            className="group hover:shadow-xl relative overflow-hidden transition-all duration-300 rounded-md shadow-lg"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={item.productImage}
                alt={item.productName}
                className="group-hover:scale-105 object-cover w-full h-full transition-transform duration-500"
                loading="lazy"
              />
              <div className="group-hover:bg-opacity-20 absolute inset-0 transition-all duration-300 bg-opacity-0"></div>
            </div>
            <div className="p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-heading sm:text-xl font-nunito text-lg font-bold">{item.productName}</h4>
                <span className="bg-accent/10 text-accent px-2 py-1 text-xs uppercase rounded-md">{item.category}</span>
              </div>
              <p className="text-cuGray sm:text-base text-sm">{item.productDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show message when no items are found */}
      {data && filteredItems.length === 0 && <div className="text-cuGray py-12 text-lg">No items found in this category.</div>}
    </section>
  );
}
