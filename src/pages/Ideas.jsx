import React, { useState } from 'react';
import { designIdeas, categories } from '../mockData';
import { Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const Ideas = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedIdeas, setLikedIdeas] = useState([]);

  const filteredIdeas = selectedCategory === 'All'
    ? designIdeas
    : designIdeas.filter(idea => idea.category === selectedCategory);

  const toggleLike = (id) => {
    setLikedIdeas(prev => 
      prev.includes(id) ? prev.filter(ideaId => ideaId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Design Ideas & Inspiration
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Browse thousands of interior design ideas for your dream home
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('All')}
              className={selectedCategory === 'All' ? 'bg-amber-500 hover:bg-amber-600' : ''}
            >
              All Designs
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name ? 'bg-amber-500 hover:bg-amber-600 whitespace-nowrap' : 'whitespace-nowrap'}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-gray-600 dark:text-gray-400">
            Showing {filteredIdeas.length} design{filteredIdeas.length !== 1 ? 's' : ''}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(idea.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        likedIdeas.includes(idea.id)
                          ? 'text-red-500 fill-current'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                  </button>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {idea.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">
                    {idea.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{idea.style}</span>
                    <span className="flex items-center text-gray-600 dark:text-gray-300">
                      <Heart className="h-4 w-4 mr-1" />
                      {idea.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ideas;