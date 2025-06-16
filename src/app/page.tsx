'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: 'Magazines & Newspapers',
      description: 'Wide selection of local and international publications',
      icon: '📰',
      color: 'from-blue-600 to-cyan-600',
      slug: 'magazines-newspapers',
    },
    {
      title: 'Cards & Wraps',
      description: 'Greeting cards, gift wraps, and party supplies',
      icon: '🎁',
      color: 'from-purple-600 to-pink-600',
      slug: 'cards-wraps',
    },
    {
      title: 'Stationery',
      description: 'Quality stationery and office supplies',
      icon: '✏️',
      color: 'from-green-600 to-emerald-600',
      slug: 'stationery',
    },
    {
      title: 'Gifts',
      description: 'Unique gifts and accessories',
      icon: '🎊',
      color: 'from-orange-600 to-red-600',
      slug: 'gifts',
    },
    {
      title: 'Lotto & OPAL',
      description: 'Lotto tickets and OPAL card top-up services',
      icon: '🎫',
      color: 'from-indigo-600 to-purple-600',
      slug: 'lotto-opal',
    },
    {
      title: 'Printing Services',
      description: 'Photocopy, print, scan, and fax services',
      icon: '🖨️',
      color: 'from-orange-600 to-amber-600',
      slug: 'printing-services',
    },
  ];

  const localBusinesses = [
    { name: 'ELBON COFFEE', emoji: '☕', desc: 'Premium coffee experience' },
    { name: 'Double Bay Hardware', emoji: '🔧', desc: 'All your hardware needs' },
    { name: 'Mandalay Flowers', emoji: '🌺', desc: 'Beautiful fresh flowers' },
    { name: 'Soy Noodle Bar', emoji: '🍜', desc: 'Authentic Asian cuisine' },
    { name: 'French Riviera Ice cream', emoji: '🍦', desc: 'Artisanal ice cream' },
    { name: 'Taka Tea Garden', emoji: '🍵', desc: 'Traditional tea experience' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${
                i % 4 === 0 ? 'w-24 h-24 bg-orange-500/40' : 
                i % 4 === 1 ? 'w-20 h-20 bg-purple-600/35' :
                i % 4 === 2 ? 'w-28 h-28 bg-pink-500/30' :
                'w-16 h-16 bg-blue-500/45'
              } rounded-full blur-sm animate-bounce ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 ${
              mounted ? 'slide-up' : 'opacity-0'
            }`}>
              <span className="block mb-2">Double Bay</span>
              <span className="block bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent leading-tight pb-2">
                Newsagency
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed ${
              mounted ? 'fade-in' : 'opacity-0'
            }`} style={{ animationDelay: '0.3s' }}>
              Your one-stop shop for magazines, cards, stationery, and more. 
              Serving the Double Bay community with excellence.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              mounted ? 'fade-in' : 'opacity-0'
            }`} style={{ animationDelay: '0.6s' }}>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Explore Our Services</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-700 text-purple-700 rounded-full font-semibold hover:bg-purple-700 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Visit Our Store
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-orange-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of services designed to meet all your daily needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/catalog/${service.slug}`}
                className="group relative content-section rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-300 cursor-pointer transform hover:scale-105"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-3xl lg:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-orange-600 font-medium text-sm group-hover:text-orange-700 transition-colors duration-300">
                    <span>View Catalog</span>
                    <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Business Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
                Local Business Directory
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover amazing local businesses in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {localBusinesses.map((business, index) => (
              <div
                key={index}
                className="group content-section rounded-xl p-4 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-orange-400"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {business.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 text-sm lg:text-base truncate">
                      {business.name}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      {business.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
                Visit Us Today
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              390 New South Head Road, Double Bay NSW 2028
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6 hover:border-orange-400 transition-all duration-300 text-center">
              <div className="text-3xl lg:text-4xl mb-4">📞</div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg">Phone</h3>
              <p className="text-gray-700 font-medium">(02) 93273222</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 hover:border-orange-400 transition-all duration-300 text-center">
              <div className="text-3xl lg:text-4xl mb-4">📧</div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg">Email</h3>
              <p className="text-gray-700 font-medium break-all">doublebaynews@gmail.com</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 hover:border-orange-400 transition-all duration-300 text-center">
              <div className="text-3xl lg:text-4xl mb-4">🕒</div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg">Hours</h3>
              <div className="text-gray-700 text-sm lg:text-base">
                <p className="font-medium">Mon-Sat: 6AM-5PM</p>
                <p className="font-medium">Sun: 7AM-2PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
