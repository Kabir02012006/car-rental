import React from 'react';
import { cars } from '../../data/cars';
import CarCard from '../ui/CarCard';
import { ArrowRight } from 'lucide-react';

const FeaturedCars: React.FC = () => {
  // Show only 4 featured cars
  const featuredCars = cars.slice(0, 4);

  return (
    <section id="cars" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our selection of top-rated vehicles, from economical daily drivers to luxury experiences.
            </p>
          </div>
          <a 
            href="#cars" 
            className="group flex items-center mt-4 md:mt-0 text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <span>View all cars</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;