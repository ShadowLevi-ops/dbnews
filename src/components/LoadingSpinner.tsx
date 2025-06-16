const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-purple-200 rounded-full animate-spin"></div>
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-t-purple-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full pulse-gentle"></div>
      </div>
      
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-700">Loading...</h3>
        <p className="text-gray-500">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 