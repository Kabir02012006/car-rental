import React from 'react';
import { Clock, CheckCircle, Award, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to assist with any questions or issues."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
      title: "Quality Vehicles",
      description: "All our vehicles undergo rigorous maintenance checks to ensure reliability and safety."
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Best Price Guarantee",
      description: "We offer competitive pricing with no hidden fees or charges. Transparent pricing guaranteed."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Flexible Insurance",
      description: "Choose from a variety of insurance options to get the coverage that suits your needs."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About DriveElite
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're dedicated to providing premium car rental experiences with a commitment to quality, 
            reliability, and exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3807120/pexels-photo-3807120.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="About DriveElite" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-gray-800">Years of experience in car rental services</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Journey, Our Passion</h3>
            <p className="text-gray-600">
              Founded with a vision to revolutionize the car rental experience, DriveElite has grown to become 
              a trusted name in the industry. We understand that every journey is unique, which is why we offer 
              a diverse fleet of vehicles to cater to different needs and preferences.
            </p>
            <p className="text-gray-600">
              Our mission is simple: to provide high-quality vehicles and exceptional service that exceeds 
              customer expectations. Whether you're traveling for business, going on a family vacation, or 
              need a temporary replacement, we have the perfect car for you.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;