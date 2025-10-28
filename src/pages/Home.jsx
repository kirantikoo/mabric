import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, ChefHat, Wrench, Users, Star, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { categories, projects, testimonials, services } from '../mockData';

const Home = () => {
  const navigate = useNavigate();

  const iconMap = {
    Home: HomeIcon,
    ChefHat: ChefHat,
    Wrench: Wrench,
    Users: Users
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Transform Your
              <span className="block text-amber-400">Dream Home</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Expert interior design solutions with personalized service, premium quality, and guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg px-8 py-6"
              >
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/ideas')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
              >
                Explore Designs
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">450+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">5+</div>
                <div className="text-sm text-gray-300">Expert Designers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Design by Room
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore curated designs for every space in your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate('/ideas')}
                className="group relative h-80 overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">{category.description}</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Explore Ideas</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-20 bg-white dark:bg-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12">
    <h2
      className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Our Services
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">
      Comprehensive interior design solutions tailored to your needs
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((service) => {
      const Icon = iconMap[service.icon];
      return (
        <Card
          key={service.id}
          className="p-6 hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          {/* Center Icon + Title */}
          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h3>
          </div>

          {/* Keep description + list left aligned */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            {service.description}
          </p>

          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-gray-700 dark:text-gray-300"
              >
                <Check className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </Card>
      );
    })}
  </div>
</div>
</section>


      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Discover our latest completed interior projects
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/projects')}
              className="hidden md:flex border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.slug}`)}
                className="group cursor-pointer bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button
              variant="outline"
              onClick={() => navigate('/projects')}
              className="border-amber-500 text-amber-600 hover:bg-amber-50"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real feedback from our satisfied homeowners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation with our expert designers today
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;