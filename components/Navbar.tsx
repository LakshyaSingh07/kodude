import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-6 z-50 mx-auto w-[min(1080px,calc(100%-2rem))] flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 md:px-8 backdrop-blur-2xl shadow-lg shadow-blue-500/10">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg" />
        <span className="text-white">KoDude</span>
      </Link>
      <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-gray-400">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="hidden md:inline-flex bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Started
      </Link>
      <button className="md:hidden text-white ml-auto" aria-label="Menu">
        <Menu size={24} />
      </button>
    </nav>
  );
}
