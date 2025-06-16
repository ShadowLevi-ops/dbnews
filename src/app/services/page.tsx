'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('magazines');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      id: 'magazines',
      title: 'Magazines & Newspapers',
      icon: '📰',
      color: 'from-blue-600 to-cyan-600',
      slug: 'magazines-newspapers',
      description: 'Stay informed with our extensive collection of local and international publications',
      items: [
        'Daily newspapers (The Australian, Sydney Morning Herald, Financial Review)',
        'Weekly magazines (Time, Newsweek, The Economist)',
        'Fashion & lifestyle magazines (Vogue, Elle, Harper\'s Bazaar)',
        'Sports & entertainment magazines',
        'International publications',
        'Special orders available'
      ]
    },
    {
      id: 'cards',
      title: 'Cards & Wraps',
      icon: '🎁',
      color: 'from-purple-600 to-pink-600',
      slug: 'cards-wraps',
      description: 'Beautiful cards and wrapping supplies for every special occasion',
      items: [
        'Birthday cards for all ages',
        'Wedding & anniversary cards',
        'Christmas & holiday cards',
        'Gift wrapping paper & bags',
        'Ribbons, bows & accessories',
        'Custom wrapping services'
      ]
    },
    {
      id: 'stationery',
      title: 'Stationery',
      icon: '✏️',
      color: 'from-green-600 to-emerald-600',
      slug: 'stationery',
      description: 'Quality stationery and office supplies for work, school, and creative projects',
      items: [
        'Premium notebooks & journals',
        'Pens, pencils & markers',
        'Office supplies (staplers, folders, clips)',
        'Art supplies & craft materials',
        'School supplies',
        'Filing & organization solutions'
      ]
    },
    {
      id: 'gifts',
      title: 'Gifts',
      icon: '🎊',
      color: 'from-orange-600 to-red-600',
      slug: 'gifts',
      description: 'Unique gifts and accessories perfect for any occasion',
      items: [
        'Local Sydney souvenirs',
        'Candles & aromatherapy products',
        'Small electronics & accessories',
        'Toys & games',
        'Books & puzzles',
        'Seasonal gift collections'
      ]
    },
    {
      id: 'lotto',
      title: 'Lotto & OPAL',
      icon: '🎫',
      color: 'from-indigo-600 to-purple-600',
      slug: 'lotto-opal',
      description: 'Convenient lottery and transport services',
      items: [
        'Powerball & Oz Lotto tickets',
        'Saturday Lotto & Set for Life',
        'Instant scratch tickets',
        'OPAL card sales & top-ups',
        'Travel card services',
        'Ticket checking & validation'
      ]
    },
    {
      id: 'printing',
      title: 'Printing Services',
      icon: '🖨️',
      color: 'from-orange-600 to-amber-600',
      slug: 'printing-services',
      description: 'Professional printing, scanning, and document services',
      items: [
        'Black & white printing/copying',
        'Color printing up to A3',
        'Document scanning to PDF',
        'Fax services (local & international)',
        'Email: doublebayemail@gmail.com',
        'Same-day service available'
      ]
    }
  ];

  const currentService = services.find(service => service.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${mounted ? 'slide-up' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent leading-tight pb-2">
                Our Services
              </span>
            </h1>
            <p className={`text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${mounted ? 'fade-in' : 'opacity-0'}`}>
              Comprehensive solutions for all your daily needs in the heart of Double Bay
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
              <li className="text-orange-600 font-medium">Services</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center space-x-2 px-4 lg:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg'
                }`}
              >
                <span className="text-lg">{service.icon}</span>
                <span className="text-sm lg:text-base">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {currentService && (
            <div className="max-w-5xl mx-auto">
              <div className="content-section rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <div className="text-5xl lg:text-6xl mb-4">{currentService.icon}</div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    <span className={`bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                      {currentService.title}
                    </span>
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                    {currentService.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Offer:</h3>
                    <ul className="space-y-3">
                      {currentService.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-orange-600 font-bold text-lg">•</span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className={`w-full h-48 bg-gradient-to-br ${currentService.color} opacity-20 rounded-xl mb-6 flex items-center justify-center text-6xl`}>
                      {currentService.icon}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        href={`/catalog/${currentService.slug}`}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                      >
                        <span>View Full Catalog</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <div className="text-2xl mb-2">🕒</div>
                      <h4 className="font-semibold text-gray-800 mb-1">Store Hours</h4>
                      <p className="text-sm text-gray-600">Mon-Sat: 6AM-5PM<br/>Sun: 7AM-2PM</p>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl mb-2">📞</div>
                      <h4 className="font-semibold text-gray-800 mb-1">Contact Us</h4>
                      <p className="text-sm text-gray-600">(02) 93273222</p>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl mb-2">📍</div>
                      <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
                      <p className="text-sm text-gray-600">390 New South Head Rd<br/>Double Bay NSW 2028</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-lg text-gray-600">More ways we serve our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6 text-center hover:border-orange-400 transition-all duration-300">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="font-semibold text-gray-800 mb-2">GoGet Car Rental</h3>
              <p className="text-gray-600 text-sm">Convenient car sharing services available</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center hover:border-orange-400 transition-all duration-300">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold text-gray-800 mb-2">HUBBED Parcel Collection</h3>
              <p className="text-gray-600 text-sm">Secure parcel pickup and delivery service</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center hover:border-orange-400 transition-all duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-gray-800 mb-2">Email Services</h3>
              <p className="text-gray-600 text-sm">Digital document services at doublebayemail@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 