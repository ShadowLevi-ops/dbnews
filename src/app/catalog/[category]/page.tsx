'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image?: string;
  inStock: boolean;
  category: string;
}

const catalogData: Record<string, Product[]> = {
  'magazines-newspapers': [
    {
      id: '1',
      name: 'The Australian',
      description: 'National daily newspaper with comprehensive news coverage',
      price: '$3.50',
      inStock: true,
      category: 'newspapers'
    },
    {
      id: '2',
      name: 'Sydney Morning Herald',
      description: 'Local Sydney news and events',
      price: '$3.00',
      inStock: true,
      category: 'newspapers'
    },
    {
      id: '3',
      name: 'Vogue Australia',
      description: 'Fashion and lifestyle magazine',
      price: '$8.95',
      inStock: true,
      category: 'magazines'
    },
    {
      id: '4',
      name: 'Australian Women\'s Weekly',
      description: 'Lifestyle, recipes, and celebrity news',
      price: '$6.50',
      inStock: true,
      category: 'magazines'
    },
    {
      id: '5',
      name: 'Time Magazine',
      description: 'International news and current affairs',
      price: '$9.95',
      inStock: true,
      category: 'magazines'
    },
    {
      id: '6',
      name: 'National Geographic',
      description: 'Science, nature, and exploration',
      price: '$12.95',
      inStock: true,
      category: 'magazines'
    },
  ],
  'cards-wraps': [
    {
      id: '7',
      name: 'Birthday Cards Collection',
      description: 'Variety of birthday cards for all ages',
      price: '$4.95 - $12.95',
      inStock: true,
      category: 'cards'
    },
    {
      id: '8',
      name: 'Wedding Cards',
      description: 'Elegant wedding and anniversary cards',
      price: '$8.95 - $15.95',
      inStock: true,
      category: 'cards'
    },
    {
      id: '9',
      name: 'Gift Wrapping Paper',
      description: 'Premium wrapping paper in various designs',
      price: '$3.95 - $8.95',
      inStock: true,
      category: 'wraps'
    },
    {
      id: '10',
      name: 'Gift Bags',
      description: 'Reusable gift bags in different sizes',
      price: '$2.95 - $7.95',
      inStock: true,
      category: 'bags'
    },
    {
      id: '11',
      name: 'Ribbon & Bows',
      description: 'Decorative ribbons and pre-made bows',
      price: '$1.95 - $5.95',
      inStock: true,
      category: 'accessories'
    },
  ],
  'stationery': [
    {
      id: '12',
      name: 'Premium Notebooks',
      description: 'High-quality lined and dotted notebooks',
      price: '$8.95 - $24.95',
      inStock: true,
      category: 'notebooks'
    },
    {
      id: '13',
      name: 'Pen Collection',
      description: 'Ballpoint, gel, and fountain pens',
      price: '$2.95 - $45.95',
      inStock: true,
      category: 'pens'
    },
    {
      id: '14',
      name: 'Office Supplies',
      description: 'Staplers, paper clips, folders, and more',
      price: '$1.95 - $29.95',
      inStock: true,
      category: 'office'
    },
    {
      id: '15',
      name: 'Art Supplies',
      description: 'Colored pencils, markers, and sketchbooks',
      price: '$5.95 - $39.95',
      inStock: true,
      category: 'art'
    },
  ],
  'gifts': [
    {
      id: '16',
      name: 'Local Souvenir Collection',
      description: 'Double Bay and Sydney themed gifts',
      price: '$9.95 - $49.95',
      inStock: true,
      category: 'souvenirs'
    },
    {
      id: '17',
      name: 'Candles & Aromatherapy',
      description: 'Scented candles and essential oils',
      price: '$12.95 - $35.95',
      inStock: true,
      category: 'wellness'
    },
    {
      id: '18',
      name: 'Small Electronics',
      description: 'Phone accessories, batteries, and gadgets',
      price: '$4.95 - $89.95',
      inStock: true,
      category: 'electronics'
    },
  ],
  'lotto-opal': [
    {
      id: '19',
      name: 'OPAL Card Services',
      description: 'New cards and top-up services available',
      price: 'Various amounts',
      inStock: true,
      category: 'transport'
    },
    {
      id: '20',
      name: 'Lotto Tickets',
      description: 'Powerball, Oz Lotto, and Saturday Lotto',
      price: 'From $1.20',
      inStock: true,
      category: 'lottery'
    },
    {
      id: '21',
      name: 'Scratch Cards',
      description: 'Various instant win scratch tickets',
      price: '$1 - $20',
      inStock: true,
      category: 'lottery'
    },
  ],
  'printing-services': [
    {
      id: '22',
      name: 'Black & White Printing',
      description: 'Standard A4 printing and copying',
      price: '$0.20 per page',
      inStock: true,
      category: 'printing'
    },
    {
      id: '23',
      name: 'Color Printing',
      description: 'High-quality color printing up to A3',
      price: '$1.50 per page',
      inStock: true,
      category: 'printing'
    },
    {
      id: '24',
      name: 'Scanning Services',
      description: 'Document scanning to PDF or image formats',
      price: '$2.00 per page',
      inStock: true,
      category: 'scanning'
    },
    {
      id: '25',
      name: 'Fax Services',
      description: 'Local and international fax services',
      price: 'From $3.00',
      inStock: true,
      category: 'fax'
    },
  ],
};

const categoryInfo = {
  'magazines-newspapers': {
    title: 'Magazines & Newspapers',
    description: 'Stay informed with our wide selection of local and international publications',
    icon: '📰',
    color: 'from-blue-600 to-cyan-600',
  },
  'cards-wraps': {
    title: 'Cards & Wraps',
    description: 'Perfect cards and wrapping supplies for every occasion',
    icon: '🎁',
    color: 'from-purple-600 to-pink-600',
  },
  'stationery': {
    title: 'Stationery',
    description: 'Quality stationery and office supplies for work and school',
    icon: '✏️',
    color: 'from-green-600 to-emerald-600',
  },
  'gifts': {
    title: 'Gifts',
    description: 'Unique gifts and accessories for your loved ones',
    icon: '🎊',
    color: 'from-orange-600 to-red-600',
  },
  'lotto-opal': {
    title: 'Lotto & OPAL',
    description: 'Transport cards and lottery services',
    icon: '🎫',
    color: 'from-indigo-600 to-purple-600',
  },
  'printing-services': {
    title: 'Printing Services',
    description: 'Professional printing, scanning, and document services',
    icon: '🖨️',
    color: 'from-orange-600 to-amber-600',
  },
};

export default function CatalogPage() {
  const params = useParams();
  const category = params.category as string;
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categoryData = categoryInfo[category as keyof typeof categoryInfo];
  const products = catalogData[category] || [];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  const uniqueCategories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-16 bg-white/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{categoryData.icon}</div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${mounted ? 'slide-up' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent leading-tight pb-2">
                {categoryData.title}
              </span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${mounted ? 'fade-in' : 'opacity-0'}`}>
              {categoryData.description}
            </p>
          </div>

          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/services" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-orange-600 font-medium">{categoryData.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                }`}
              >
                {cat === 'all' ? 'All Items' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group content-section rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className={`w-full h-32 bg-gradient-to-br ${categoryData.color} opacity-20 rounded-lg mb-4 flex items-center justify-center text-4xl group-hover:opacity-30 transition-opacity duration-300`}>
                      {categoryData.icon}
                    </div>
                    
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-orange-600">
                      {product.price}
                    </span>
                    <button 
                      className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-300 text-sm font-medium"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Inquire' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your filter or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
              Need Something Specific?
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Contact us and we'll help you find it!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0293273222"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300"
            >
              📞 Call Us
            </a>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-purple-700 text-purple-700 rounded-full font-semibold hover:bg-purple-700 hover:text-white transition-all duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 