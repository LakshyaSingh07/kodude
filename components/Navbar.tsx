import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="sticky top-6 z-50 mx-auto w-[min(1080px,calc(100%-2rem))] flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 md:px-8 backdrop-blur-2xl shadow-lg shadow-blue-500/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg"></div>
        <span className="text-white">KoDude</span>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-gray-400">
        <a href="#home" className="hover:text-white transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-white transition-colors">
          Services
        </a>
        <a href="#work" className="hover:text-white transition-colors">
          Work
        </a>
        <a href="#testimonials" className="hover:text-white transition-colors">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>
      <button className="hidden md:inline-flex bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
      <button className="md:hidden text-white ml-auto">
        <Menu size={24} />
      </button>
    </nav>
  );
}
