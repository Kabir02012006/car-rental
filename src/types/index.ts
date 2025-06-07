// Type definitions for car rental website

export interface Car {
  id: number;
  name: string;
  brand: string;
  category: 'economy' | 'standard' | 'luxury' | 'suv' | 'sports';
  price: number; // daily rate
  seats: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
  images: string[];
  features: string[];
  availability: boolean;
  year: number;
  description: string;
}

export interface CategoryFilter {
  id: string;
  name: string;
  value: string;
}

export type SortOption = 'price-low' | 'price-high' | 'name-asc' | 'name-desc';