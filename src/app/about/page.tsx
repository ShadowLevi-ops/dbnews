export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Bookstore</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to our modern bookstore, where we combine the timeless joy of reading with contemporary design and technology. Our store has been serving book lovers since 2024, providing a carefully curated selection of books and stationery.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe in the power of books to transform lives. Our mission is to create a welcoming space where readers can discover new stories, ideas, and perspectives. We carefully select each book in our collection to ensure quality and diversity.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Collection</h2>
            <p className="text-gray-600 mb-6">
              Our collection spans across various genres, from contemporary fiction to academic texts, children's books to rare editions. We also offer a wide range of stationery and book-related accessories to enhance your reading experience.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Visit Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> 123 Book Street, Sydney
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> (02) 1234 5678
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> contact@bookstore.com
              </p>
              <p className="text-gray-600">
                <strong>Trading Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 5:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 