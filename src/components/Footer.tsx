import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-purple-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Double Bay Newsagency
              </Link>
              <p className="text-gray-600 mt-4 max-w-md">
                Your trusted local newsagency serving the Double Bay community 
                with quality products and exceptional service since many years.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="tel:0293273222" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
              </a>
              <a href="mailto:doublebaynews@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 border-b-2 border-orange-200 pb-2">
                  Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Magazines & Newspapers',
                    'Cards & Wraps',
                    'Stationery',
                    'Lotto & OPAL',
                    'Printing Services',
                  ].map((service) => (
                    <li key={service}>
                      <span className="text-gray-600 hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 border-b-2 border-purple-200 pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'Services', href: '/services' },
                    { name: 'Diaries', href: '/diaries' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 border-b-2 border-orange-200 pb-2">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 text-sm">
                        390 New South Head Road<br />
                        Double Bay NSW 2028
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 text-sm">(02) 93273222</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-3 mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Trading Hours</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 5:00 PM</p>
                      <p>Saturday: 6:00 AM - 5:00 PM</p>
                      <p>Sunday: 7:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-600 text-center">
            © {currentYear} Double Bay Newsagency. All rights reserved. | 
            <span className="text-orange-600 font-medium"> Serving the community with excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 