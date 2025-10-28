import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../mockData';
import { MapPin, Calendar, DollarSign, Ruler, ArrowLeft, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back Button */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/projects')}
            className="text-gray-600 dark:text-gray-400 hover:text-amber-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[500px]">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {project.category}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {project.title}
            </h1>
            <div className="flex items-center text-white space-x-6">
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {project.location}
              </span>
              <span className="flex items-center">
                <Ruler className="h-5 w-5 mr-2" />
                {project.area}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <DollarSign className="h-8 w-8 text-amber-500 mb-3" />
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Project Budget</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.budget}</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <Calendar className="h-8 w-8 text-amber-500 mb-3" />
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.duration}</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <Ruler className="h-8 w-8 text-amber-500 mb-3" />
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Area</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.area}</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, idx) => (
              <div key={idx} className="relative h-96 rounded-xl overflow-hidden group">
                <img
                  src={image}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Love This Design?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something similar for your home
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;