import React from 'react';
import Button from '../ui/Button';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeIn">
            Discover the Perfect Car for Your Journey
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Premium vehicles at competitive rates, with flexible options to meet all your travel needs.
          </p>
          
          {/* Booking Form Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-gray-800 font-semibold text-xl mb-4">
              Find Your Ideal Rental Car
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Location */}
                <div className="relative">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </span>
                    <select
                      id="location"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    >
                      <option value="">Select location</option>
                      <option value="new-york">New York</option>
                      <option value="los-angeles">Los Angeles</option>
                      <option value="chicago">Chicago</option>
                      <option value="miami">Miami</option>
                    </select>
                  </div>
                </div>

                {/* Car Type */}
                <div>
                  <label htmlFor="car-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Type
                  </label>
                  <select
                    id="car-type"
                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="">All Types</option>
                    <option value="economy">Economy</option>
                    <option value="standard">Standard</option>
                    <option value="luxury">Luxury</option>
                    <option value="suv">SUV</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pickup Date */}
                <div className="relative">
                  <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      type="date"
                      id="pickup-date"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div className="relative">
                  <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      type="date"
                      id="return-date"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <Button 
                variant="primary" 
                isFullWidth 
                className="mt-2"
                size="lg"
              >
                Search Available Cars
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;