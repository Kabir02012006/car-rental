import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturedCars from './components/home/FeaturedCars';
import CarList from './components/home/CarList';
import AboutSection from './components/home/AboutSection';
import TestimonialSection from './components/home/TestimonialSection';
import ContactSection from './components/home/ContactSection';
import FaqSection from './components/home/FaqSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCars />
        <CarList />
        <AboutSection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;