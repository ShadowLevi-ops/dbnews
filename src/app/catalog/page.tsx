'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  'All',
  'Fiction',
  'Non-Fiction',
  'Biography',
  'History',
  'Science',
  'Stationery',
];

const books = [
  {
    id: 1,
    title: 'The Great Adventure',
    author: 'John Smith',
    category: 'Fiction',
    price: 29.99,
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Scientific Discoveries',
    author: 'Jane Doe',
    category: 'Science',
    price: 34.99,
    image: '/placeholder.jpg',
  },
  // Add more books as needed
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Catalog</h1>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search books..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-2 aspect-h-3 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
                <p className="text-gray-900 font-medium mt-2">${book.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 