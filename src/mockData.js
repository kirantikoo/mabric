// Mock data for Mabric.in - Interior Design Platform

export const categories = [
  {
    id: 1,
    name: 'Living Room',
    slug: 'living-room',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    description: 'Transform your living space into a stylish retreat'
  },
  {
    id: 2,
    name: 'Kitchen',
    slug: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf',
    description: 'Modern modular kitchens designed for functionality'
  },
  {
    id: 3,
    name: 'Bedroom',
    slug: 'bedroom',
    image: 'https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6',
    description: 'Create your perfect sanctuary for rest and relaxation'
  },
  {
    id: 4,
    name: 'Bathroom',
    slug: 'bathroom',
    image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de',
    description: 'Luxurious bathrooms with contemporary design'
  },
  {
    id: 5,
    name: 'Home Office',
    slug: 'home-office',
    image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d',
    description: 'Productive workspaces for modern professionals'
  },
  {
    id: 6,
    name: 'Dining Room',
    slug: 'dining-room',
    image: 'https://images.unsplash.com/photo-1616486886892-ff366aa67ba4',
    description: 'Elegant dining spaces for memorable gatherings'
  },
  {
  id: 7,
    name: 'Kids Room',
    slug: 'kids-room',
    image: 'https://images.unsplash.com/photo-1693034433366-57fbb0286641',
    description: 'Elegant kids spaces'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Modern Luxury Apartment',
    slug: 'modern-luxury-apartment',
    category: 'Complete Home',
    coverImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf',
      'https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6'
    ],
    description: 'A complete transformation of a 3BHK apartment into a modern luxury residence with contemporary interiors, smart storage solutions, and premium finishes.',
    features: ['Modular Kitchen', 'Master Bedroom Suite', 'Smart Lighting', 'Premium Flooring', 'Custom Wardrobes']
  },
  {
    id: 2,
    title: 'Contemporary Kitchen Makeover',
    slug: 'contemporary-kitchen-makeover',
    category: 'Kitchen',
    coverImage: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf'
    ],
    description: 'Sleek modular kitchen with Italian hardware, quartz countertops, and optimal storage solutions for a modern lifestyle.',
    features: ['Modular Cabinets', 'Soft-Close Drawers', 'Breakfast Counter', 'Chimney & Hob', 'Designer Backsplash']
  },
  {
    id: 3,
    title: 'Elegant Master Bedroom',
    slug: 'elegant-master-bedroom',
    category: 'Bedroom',
    coverImage: 'https://images.unsplash.com/photo-1642541070065-3912f347e7c6',
    images: [
      'https://images.unsplash.com/photo-1642541070065-3912f347e7c6',
      'https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0'
    ],
    description: 'A serene master bedroom featuring custom-built wardrobes, ambient lighting, and contemporary furnishings for ultimate comfort.',
    features: ['Walk-in Wardrobe', 'King-size Bed', 'Study Nook', 'Mood Lighting', 'Textured Walls']
  },
  {
    id: 4,
    title: 'Cozy Living Space',
    slug: 'cozy-living-space',
    category: 'Living Room',
    coverImage: 'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3',
    images: [
      'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3',
      'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8'
    ],
    description: 'Modern living room with entertainment unit, false ceiling, and comfortable seating arrangements for family gatherings.',
    features: ['TV Unit', 'False Ceiling', 'Accent Wall', 'Designer Lighting', 'Premium Sofa Set']
  },
  {
    id: 5,
    title: 'Luxurious Bathroom Renovation',
    slug: 'luxurious-bathroom-renovation',
    category: 'Bathroom',
    coverImage: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de',
    images: [
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de'
    ],
    description: 'Spa-like bathroom with premium fittings, rain shower, bathtub, and elegant tile work for a luxurious bathing experience.',
    features: ['Rain Shower', 'Bathtub', 'Premium Fittings', 'Vanity Unit', 'Anti-slip Tiles']
  },
  {
    id: 6,
    title: 'Professional Home Office',
    slug: 'professional-home-office',
    category: 'Home Office',
    coverImage: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d',
    images: [
      'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d'
    ],
    description: 'Ergonomic home office setup with custom storage, task lighting, and acoustic treatments for focused productivity.',
    features: ['Custom Desk', 'Book Shelves', 'Task Lighting', 'Cable Management', 'Acoustic Panels']
  }
];

export const designIdeas = [
  {
    id: 1,
    title: 'Minimalist Living Room Design',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    style: 'Minimalist Modern',
    likes: 245
  },
  {
    id: 2,
    title: 'Scandinavian Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf',
    style: 'Scandinavian',
    likes: 189
  },
  {
    id: 3,
    title: 'Contemporary Bedroom Suite',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6',
    style: 'Contemporary Luxury',
    likes: 321
  },
  {
    id: 4,
    title: 'Industrial Style Living',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3',
    style: 'Industrial Urban',
    likes: 156
  },
  {
    id: 5,
    title: 'Modern Kitchen Island',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
    style: 'Modern Sleek',
    likes: 278
  },
  {
    id: 6,
    title: 'Luxury Master Bedroom',
    category: 'Bedroom',
    image: 'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b',
    style: 'Luxury Contemporary',
    likes: 412
  },
  {
    id: 7,
    title: 'Spa Bathroom Design',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de',
    style: 'Contemporary Spa',
    likes: 198
  },
  {
    id: 8,
    title: 'Modern Home Office',
    category: 'Home Office',
    image: 'https://plus.unsplash.com/premium_photo-1661963128316-2c2edbd524ec',
    style: 'Modern Minimalist',
    likes: 167
  },
  {
    id: 9,
    title: 'Elegant Dining Space',
    category: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1616486886892-ff366aa67ba4',
    style: 'Elegant Classic',
    likes: 223
  },
  {
    id: 10,
    title: 'Smart Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8',
    style: 'Smart Home',
    likes: 289
  },

  // -------- NEW ITEMS BELOW -------- //

  {
    id: 11,
    title: 'Coastal Beachfront Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
    style: 'Coastal Chic',
    likes: 264
  },
  {
    id: 12,
    title: 'Bedroom Retreat',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1658218729615-167c32d70537',
    style: 'Japandi Minimalist',
    likes: 302
  },
  {
    id: 13,
    title: 'Bohemian Artistic Workspace',
    category: 'Home Office',
    image: 'https://plus.unsplash.com/premium_photo-1661950075159-fc0ec52d9dca',
    style: 'Bohemian Creative',
    likes: 174
  },
  {
    id: 14,
    title: 'Rustic Farmhouse Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    style: 'Rustic Farmhouse',
    likes: 316
  },
  {
    id: 15,
    title: 'Art Deco Luxury Lounge',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    style: 'Art Deco Luxury',
    likes: 251
  },
  {
    id: 16,
    title: 'Sustainable Eco-Friendly Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc',
    style: 'Eco-Friendly Natural',
    likes: 198
  },
  {
    id: 17,
    title: 'Moroccan Inspired Dining Room',
    category: 'Dining Room',
    image: 'https://plus.unsplash.com/premium_photo-1724707432699-fe00965f900a',
    style: 'Moroccan Traditional',
    likes: 269
  },
  {
    id: 18,
    title: 'Mid-Century Modern Living Space',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    style: 'Mid-Century Modern',
    likes: 355
  },
  {
    id: 19,
    title: 'Scandinavian Kids Bedroom',
    category: 'Kids Room',
    image: 'https://images.unsplash.com/photo-1600214859516-98999dba7cf1',
    style: 'Scandinavian Minimalist',
    likes: 184
  },
  {
    id: 20,
    title: 'Luxury Outdoor Patio',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1619492774026-a9d7bebe06e8',
    style: 'Luxury Outdoor',
    likes: 377
  },
  {
    id: 21,
    title: 'Puja Room',
    category: 'Other',
    image: 'https://images.unsplash.com/photo-1675756688096-f3fcf590de9b',
    style: 'Zen Minimalist',
    likes: 239
  },
  {
    id: 22,
    title: 'Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1730989427568-0a6fdb5a2fb1',
    style: 'Modern Greenery',
    likes: 191
  },
  {
    id: 23,
    title: 'Kids Room',
    category: 'Kids Room',
    image: 'https://images.unsplash.com/photo-1721523266006-3d35771b3792',
    style: 'Contemporary Elegant',
    likes: 221
  },
  {
    id: 24,
    title: 'Luxury Walk-in Closet',
    category: 'Closet',
    image: 'https://images.unsplash.com/photo-1560598613-2ffd99a32c28',
    style: 'Luxury Feminine',
    likes: 405
  },
  {
    id: 25,
    title: 'Smart Kitchen with AI Appliances',
    category: 'Kitchen',
    image: 'https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51',
    style: 'Smart Home Modern',
    likes: 327
  },
  {
    id: 26,
    title: 'Cozy Cottage Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb',
    style: 'Cottage Cozy',
    likes: 178
  },
  {
    id: 27,
    title: 'Modern Gaming Room Setup',
    category: 'Entertainment Room',
    image: 'https://images.unsplash.com/photo-1715279240000-9a50953e327d',
    style: 'Modern Tech',
    likes: 410
  },
  {
    id: 28,
    title: 'Garden Outdoor Dining',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3',
    style: 'Garden Rustic',
    likes: 266
  },
  {
    id: 29,
    title: 'Luxury Spa Bathroom Retreat',
    category: 'Bathroom',
    image: 'https://plus.unsplash.com/premium_photo-1681487218607-b972081533e0',
    style: 'Luxury Spa',
    likes: 344
  },
  {
    id: 30,
    title: 'Minimalist Entryway Design',
    category: 'Entryway',
    image: 'https://plus.unsplash.com/premium_photo-1661963491509-1868b27739d4',
    style: 'Minimalist Clean',
    likes: 142
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Mabric transformed our apartment beyond our expectations! The attention to detail and professionalism was outstanding. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    project: 'Complete 3BHK Interior'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'The team at Mabric delivered our dream kitchen on time and within budget. The quality of work is exceptional!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    project: 'Modular Kitchen'
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    location: 'Bangalore',
    rating: 5,
    text: 'Professional, creative, and efficient. Mabric made our home renovation stress-free. Love the final result!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    project: 'Living & Dining Renovation'
  }
];

export const services = [
  {
    id: 1,
    title: 'Complete Home Interiors',
    description: 'End-to-end interior design solutions for your entire home with personalized designs and premium quality.',
    icon: 'Home',
    features: ['3D Design', 'Project Management', '10-Year Warranty', 'Premium Materials']
  },
  {
    id: 2,
    title: 'Modular Kitchen',
    description: 'Custom modular kitchens designed for functionality and style with Italian hardware and smart storage.',
    icon: 'ChefHat',
    features: ['Custom Design', 'Premium Hardware', 'Lifetime Warranty', 'Easy Maintenance']
  },
  {
    id: 3,
    title: 'Renovation Services',
    description: 'Transform your existing space with expert renovation services including civil work and electrical updates.',
    icon: 'Wrench',
    features: ['Civil Work', 'Electrical', 'Plumbing', 'Painting']
  },
  {
    id: 4,
    title: 'Designer Consultation',
    description: 'Get expert advice from our experienced designers to plan your dream home interiors.',
    icon: 'Users',
    features: ['Free Consultation', '3D Visualization', 'Budget Planning', 'Material Selection']
  }
];

export const designers = [
  {
    id: 1,
    name: 'Arjun Mehta',
    specialization: 'Contemporary Interiors',
    experience: '12 years',
    projects: 150,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'
  },
  {
    id: 2,
    name: 'Sneha Patel',
    specialization: 'Luxury Homes',
    experience: '10 years',
    projects: 120,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    specialization: 'Modular Solutions',
    experience: '8 years',
    projects: 95,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200'
  }
];

export const faqs = [
  {
    id: 1,
    question: 'How much does interior design cost?',
    answer: 'Interior design costs vary based on scope, from ₹1.5 lakhs for a modular kitchen to ₹15-25 lakhs for complete 3BHK homes. We provide transparent quotes after consultation.'
  },
  {
    id: 2,
    question: 'What is the typical project timeline?',
    answer: 'Modular kitchens take 25-35 days, while complete home interiors typically take 60-90 days. Timeline depends on project complexity and customization.'
  },
  {
    id: 3,
    question: 'Do you provide warranty?',
    answer: 'Yes! We offer up to 10-year warranty on our products and services, covering manufacturing defects and installation issues.'
  },
  {
    id: 4,
    question: 'Can I see 3D designs before execution?',
    answer: 'Absolutely! Our designers create photorealistic 3D visualizations of your space before starting work, allowing you to make changes upfront.'
  },
  {
    id: 5,
    question: 'Do you handle civil work and electrical work?',
    answer: 'Yes, we provide complete turnkey solutions including civil work, electrical installations, plumbing, painting, and interior execution.'
  }
];