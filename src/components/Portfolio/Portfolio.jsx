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
    <section className="flex flex-col items-center justify-center gap-8 text-center my-25 px-4 sm:px-6">
      <h2 className="section__subtitle text-accent">Portfolio</h2>
      <h3 className="section__title text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Check our latest work</h3>

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
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      )}
      {error && <p className="text-red-500 py-8">{error}</p>}

      {/* Portfolio items grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8">
        {filteredItems.map(item => (
          <div
            key={`${item.category}-${item.id}`}
            className="group relative overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-5 bg-white">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-heading text-lg sm:text-xl font-nunito font-bold">{item.productName}</h4>
                <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent uppercase">{item.category}</span>
              </div>
              <p className="text-cuGray text-sm sm:text-base">{item.productDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show message when no items are found */}
      {data && filteredItems.length === 0 && <div className="py-12 text-cuGray text-lg">No items found in this category.</div>}
    </section>
  );
}
