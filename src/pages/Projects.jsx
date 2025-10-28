import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../mockData';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Explore our completed interior design projects across India
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              {projects.length} Completed Projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.slug}`)}
                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm space-x-4 mb-2">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  {/* <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Budget</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.budget}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Duration</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Area</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.area}</div>
                    </div>
                  </div> */}
                  
                  <Button
                    variant="outline"
                    className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 group-hover:bg-amber-500 group-hover:text-white transition-all"
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Let's create something beautiful together
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;