import React, { useState } from 'react';
import { cars, categories, sortOptions } from '../../data/cars';
import CarCard from '../ui/CarCard';
import { SortOption, CategoryFilter } from '../../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CarList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('price-low');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = cars.filter(car => 
    selectedCategory === 'all' || car.category === selectedCategory
  );

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our Rental Fleet
            </h2>
            <p className="text-gray-600">
              Choose from our wide range of well-maintained vehicles
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center space-x-2 mt-4 text-blue-600"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filter & Sort</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={category.id}
                        name="category"
                        checked={selectedCategory === category.value}
                        onChange={() => setSelectedCategory(category.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor={category.id} className="ml-2 text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Filters - Mobile */}
          {showFilters && (
            <div className="md:hidden w-full mb-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Category</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          id={`mobile-${category.id}`}
                          name="mobile-category"
                          checked={selectedCategory === category.value}
                          onChange={() => setSelectedCategory(category.value)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`mobile-${category.id}`} className="ml-2 text-gray-700">
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Car Grid */}
          <div className="flex-grow">
            {sortedCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <p className="text-gray-600">No cars match your current filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarList;