import { Car } from '../types';

// Sample data for car rental website
export const cars: Car[] = [
  {
    id: 1,
    name: 'Toyota Corolla',
    brand: 'Toyota',
    category: 'economy',
    price: 45,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'gasoline',
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Bluetooth', 'Backup Camera', 'Cruise Control', 'USB Ports'],
    availability: true,
    year: 2022,
    description: 'The Toyota Corolla is a reliable and fuel-efficient compact car, perfect for city driving and everyday use. With its comfortable interior and modern features, it offers great value for money.'
  },
  {
    id: 2,
    name: 'Honda Civic',
    brand: 'Honda',
    category: 'economy',
    price: 48,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'gasoline',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Bluetooth', 'Backup Camera', 'Cruise Control', 'USB Ports', 'Lane Assist'],
    availability: true,
    year: 2023,
    description: 'The Honda Civic offers excellent fuel economy, a comfortable interior, and reliable performance. It comes equipped with modern safety features and technology for an enjoyable driving experience.'
  },
  {
    id: 3,
    name: 'BMW 3 Series',
    brand: 'BMW',
    category: 'luxury',
    price: 85,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'gasoline',
    images: [
      'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Leather Seats', 'Navigation System', 'Bluetooth', 'Backup Camera', 'Heated Seats', 'Sunroof'],
    availability: true,
    year: 2022,
    description: 'The BMW 3 Series offers a perfect blend of luxury, performance, and handling. With its premium features and powerful engine, it provides an exceptional driving experience for those seeking luxury and comfort.'
  },
  {
    id: 4,
    name: 'Mercedes-Benz C-Class',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    price: 90,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'diesel',
    images: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Leather Seats', 'Navigation System', 'Bluetooth', 'Backup Camera', 'Heated Seats', 'Sunroof', 'Premium Sound System'],
    availability: true,
    year: 2023,
    description: 'The Mercedes-Benz C-Class epitomizes luxury and sophistication. With its elegant design, premium materials, and advanced technology, it offers a refined driving experience for the discerning driver.'
  },
  {
    id: 5,
    name: 'Ford Mustang',
    brand: 'Ford',
    category: 'sports',
    price: 75,
    seats: 4,
    transmission: 'automatic',
    fuelType: 'gasoline',
    images: [
      'https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Leather Seats', 'Bluetooth', 'Backup Camera', 'Premium Sound System', 'Sport Mode'],
    availability: true,
    year: 2023,
    description: 'The Ford Mustang is an iconic American muscle car that combines powerful performance with head-turning style. Its robust engine and responsive handling make every drive an exhilarating experience.'
  },
  {
    id: 6,
    name: 'Toyota RAV4',
    brand: 'Toyota',
    category: 'suv',
    price: 65,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'hybrid',
    images: [
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/257345/pexels-photo-257345.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Bluetooth', 'Backup Camera', 'Cruise Control', 'USB Ports', 'Lane Assist', 'All-Wheel Drive'],
    availability: true,
    year: 2022,
    description: 'The Toyota RAV4 is a versatile and reliable SUV with excellent fuel efficiency and ample cargo space. Its comfortable interior and advanced safety features make it ideal for family trips and everyday driving.'
  },
  {
    id: 7,
    name: 'Jeep Wrangler',
    brand: 'Jeep',
    category: 'suv',
    price: 70,
    seats: 5,
    transmission: 'manual',
    fuelType: 'gasoline',
    images: [
      'https://images.pexels.com/photos/2399095/pexels-photo-2399095.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['4x4 Capability', 'Removable Top', 'Bluetooth', 'Off-Road Ready', 'Tow Package'],
    availability: true,
    year: 2023,
    description: 'The Jeep Wrangler is the ultimate off-road vehicle with its rugged design and exceptional capability. Whether navigating city streets or venturing off the beaten path, it offers an adventurous driving experience.'
  },
  {
    id: 8,
    name: 'Audi A4',
    brand: 'Audi',
    category: 'standard',
    price: 75,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'gasoline',
    images: [
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/170740/pexels-photo-170740.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    features: ['Leather Seats', 'Navigation System', 'Bluetooth', 'Backup Camera', 'Heated Seats', 'Parking Sensors'],
    availability: true,
    year: 2022,
    description: 'The Audi A4 combines sophisticated design with cutting-edge technology. Its refined interior, smooth ride, and excellent build quality make it a standout choice in the premium sedan segment.'
  }
];

export const categories: CategoryFilter[] = [
  { id: 'all', name: 'All Cars', value: 'all' },
  { id: 'economy', name: 'Economy', value: 'economy' },
  { id: 'standard', name: 'Standard', value: 'standard' },
  { id: 'luxury', name: 'Luxury', value: 'luxury' },
  { id: 'suv', name: 'SUVs', value: 'suv' },
  { id: 'sports', name: 'Sports', value: 'sports' }
];

export const sortOptions = [
  { label: 'Price (Low to High)', value: 'price-low' },
  { label: 'Price (High to Low)', value: 'price-high' },
  { label: 'Name (A-Z)', value: 'name-asc' },
  { label: 'Name (Z-A)', value: 'name-desc' }
];

export const faqData = [
  {
    question: "What documents do I need to rent a car?",
    answer: "You'll need a valid driver's license, a major credit card in your name, and proof of insurance. International renters may require additional documentation."
  },
  {
    question: "Is there a minimum age requirement to rent a car?",
    answer: "Yes, renters must be at least 21 years old. Drivers under 25 may be subject to a young driver surcharge."
  },
  {
    question: "Can I add an additional driver to my rental?",
    answer: "Yes, additional drivers can be added to your rental agreement. They must be present at pickup with their valid driver's license."
  },
  {
    question: "What is your fuel policy?",
    answer: "Our rentals come with a full tank of fuel and should be returned with a full tank. If not returned full, a refueling charge will apply."
  },
  {
    question: "Do you offer unlimited mileage?",
    answer: "Yes, most of our rental options come with unlimited mileage. Some specialty vehicles may have mileage restrictions."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York",
    comment: "Excellent service and pristine vehicles. The BMW I rented was immaculate and the staff was incredibly helpful throughout the process.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Los Angeles",
    comment: "I've rented from several companies, but this one stands out for their transparent pricing and no hidden fees. Will definitely use again!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Chicago",
    comment: "The online booking process was seamless, and the car was ready exactly when promised. Great experience overall.",
    rating: 4
  }
];