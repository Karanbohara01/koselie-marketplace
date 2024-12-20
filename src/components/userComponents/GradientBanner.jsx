import React from "react";
import logo from "../../assets/images/mom.png";

const GradientBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-teal-300 h-64 \ shadow-lg flex items-center justify-between p-8 text-black">
      {/* Content Section */}
      <div className="max-w-md">
        <div className="flex items-center mb-4">
          <img src={logo} alt="YouTube Music Logo" className="w-16 h-10 mr-2" />
          <h2 className="text-2xl font-bold">Koselie Music</h2>
        </div>
        <h3 className="text-3xl font-semibold mb-2">
          Want your Music Premium benefits back?
        </h3>
        <p className="text-sm mb-4">Recurring billing. Restrictions apply.</p>
        <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition">
          Try it again
        </button>
      </div>

      {/* Illustration Section */}
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 bg-orange-500 rounded-md shadow-md flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6715/6715547.png"
            alt="Gift Box"
            className="w-16 h-16 animate-bounce"
          />
        </div>
      </div>

      {/* Close Button */}
      <button className="absolute top-4 right-4 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition">
        ✕
      </button>
    </div>
  );
};

export default GradientBanner;
