import React from 'react';
import { Award, Users, Heart, TrendingUp, Target, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { designers } from '../mockData';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To transform houses into dream homes through innovative design, exceptional craftsmanship, and personalized service.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring their vision becomes reality.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only premium materials and provide comprehensive warranties on all our projects.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of design trends and technology to deliver modern, functional spaces.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d"
            alt="About Mabric"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Mabric
          </h1>
          <p className="text-xl opacity-90">
            Crafting beautiful interiors that inspire and delight since 2015
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  Founded in 2015, Mabric began with a simple vision: to make world-class interior design accessible to every homeowner. What started as a small team of passionate designers has grown into one of India's most trusted interior design brands.
                </p>
                <p>
                  Over the years, we've completed 500+ projects across major Indian cities, transforming apartments, villas, and commercial spaces into stunning, functional environments. Our commitment to quality, innovation, and customer satisfaction has earned us the trust of thousands of happy homeowners.
                </p>
                <p>
                  Today, Mabric stands at the forefront of the interior design industry, combining traditional craftsmanship with modern technology to deliver exceptional results, every time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221"
                alt="Interior 1"
                className="rounded-xl h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf"
                alt="Interior 2"
                className="rounded-xl h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">450+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Expert Designers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meet Our Designers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designers.map((designer) => (
              <div key={designer.id} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{designer.name}</h3>
                <p className="text-amber-600 dark:text-amber-500 font-medium mb-2">{designer.specialization}</p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>{designer.experience} Experience</p>
                  <p>{designer.projects}+ Projects</p>
                  <p className="flex items-center justify-center mt-1">
                    <Award className="h-4 w-4 mr-1 text-amber-500" />
                    {designer.rating} Rating
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Let's create your dream space together
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;