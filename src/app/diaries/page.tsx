export default function Diaries() {
  const diaries = [
    {
      name: '2025 Letts Diary',
      description: 'Classic diary with daily, weekly, and monthly views',
      image: '/placeholder.jpg',
    },
    {
      name: '2024 Diary',
      description: 'Current year diary with premium features',
      image: '/placeholder.jpg',
    },
    {
      name: '2024 Filofax',
      description: 'Refillable personal organizer system',
      image: '/placeholder.jpg',
    },
    {
      name: '2024 Calendar',
      description: 'Wall and desk calendars',
      image: '/placeholder.jpg',
    },
    {
      name: 'Moleskine Diary',
      description: 'Premium diary with high-quality paper',
      image: '/placeholder.jpg',
    },
    {
      name: 'Excel Books',
      description: 'Professional notebooks and planners',
      image: '/placeholder.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Diaries & Planners</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diaries.map((diary, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{diary.name}</h2>
                <p className="text-gray-600 mb-4">{diary.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Inquire Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Our Diaries</h2>
          <p className="text-gray-600 mb-4">
            We offer a wide selection of diaries and planners to suit every need. From classic Letts diaries to premium Moleskine notebooks,
            we have options for both personal and professional use.
          </p>
          <p className="text-gray-600">
            Visit our store to see our full range of diaries, planners, and related accessories. Our staff will be happy to help you find
            the perfect organizer for your needs.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For specific inquiries about our diary collection or to check availability, please contact us:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Phone: (02) 93273222</li>
            <li>• Email: doublebaynews@gmail.com</li>
            <li>• Visit us at: 390 New South Head Road, Double Bay NSW 2028</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 