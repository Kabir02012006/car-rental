import React from 'react';
import { Car } from '../../types';
import { Users, Fuel, Calendar, Zap } from 'lucide-react';
import Button from './Button';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Car Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        {/* Category Tag */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
          {car.category}
        </div>
      </div>

      {/* Car Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">per day</span>
            <span className="text-xl font-bold text-blue-600">${car.price}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">{car.brand} • {car.transmission}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Fuel className="h-4 w-4 mr-2 text-gray-500" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Zap className="h-4 w-4 mr-2 text-gray-500" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="pt-3 mt-2 border-t border-gray-100">
          <Button
            variant="primary"
            isFullWidth
            size="md"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;