import React from "react";
import { ArrowRight } from "lucide-react";
import Plasma from "./Plasma";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070f] text-white flex items-center justify-center">
      {/* Plasma background */}
      <div className="absolute inset-0">
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#05070f]/85 via-[#05070f]/45 to-[#05070f]/90" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14" id="hero">
        <div className="mx-auto max-w-5xl text-center px-8 py-12 md:px-12 md:py-16 flex flex-col items-center gap-6">
          <div className="inline-flex items-center justify-center p-4 shadow-inner">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              alt="Brand Logo"
              className="w-24 h-24 rounded-xl object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Where Ideas Become <br/> Digital Reality.
            </h1>
            <p className="text-gray-200/80 text-lg md:text-xl max-w-3xl mx-auto">
              Transform your ideas into stunning digital experiences. We combine
              innovative design with cutting-edge technology to bring your
              vision to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-white text-[#0a0a0f] px-8 py-3 rounded-xl font-medium shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
