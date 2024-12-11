import { Eye, Heart, User } from "lucide-react";
import React from "react";

const UpperSection = () => {
  return (
    <section className="p-4 mt-4 mb-4 flex items-center justify-between bg-gray-50 shadow-md rounded-lg">
      {/* Likes Button */}
      <button className="flex items-center space-x-2 px-3 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200">
        <Heart size={28} />
        <div className="text-center">
          <p className="text-sm font-medium">Likes</p>
          <p className="text-lg font-bold">120</p>
        </div>
      </button>

      {/* Views Button */}
      <button className="flex items-center space-x-2 px-3 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-200">
        <Eye size={28} />
        <div className="text-center">
          <p className="text-sm font-medium">Views</p>
          <p className="text-lg font-bold">345</p>
        </div>
      </button>

      {/* Matches Button */}
      <button className="flex items-center space-x-2 px-3 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-200">
        <User size={28} />
        <div className="text-center">
          <p className="text-sm font-medium">Matches</p>
          <p className="text-lg font-bold">56</p>
        </div>
      </button>
    </section>
  );
};

export default UpperSection;
