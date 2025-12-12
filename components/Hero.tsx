import React from "react";
import { ArrowRight, Menu } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              alt="Brand Logo"
              className="w-24 h-24 mx-auto mb-6 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Creativity Meets Functionality
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Transform your ideas into stunning digital experiences. We combine
            innovative design with cutting-edge technology to bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
    </div>
  );
}
