import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center gap-6 w-[350px]">
        
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Please Wait
          </h2>
          <p className="text-gray-500 mt-2">
            We're processing your request...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-pulse w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;