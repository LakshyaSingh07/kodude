"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="sticky top-6 z-50 mx-auto w-[min(1080px,calc(100%-2rem))] flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 md:px-8 backdrop-blur-2xl shadow-lg shadow-blue-500/10">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
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
        <button
          className="md:hidden text-white ml-auto"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-[78%] max-w-[320px] bg-[#0c1020]/95 backdrop-blur-2xl border-r border-white/10 shadow-2xl shadow-blue-500/15 transition-transform duration-250 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg" />
            <span className="text-white text-lg">KoDude</span>
          </Link>
          <button
            className="text-white"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={22} />
          </button>
        </div>
        <div className="p-5 space-y-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-xs text-gray-400">→</span>
            </Link>
          ))}
        </div>
        <div className="px-5 pb-5">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full text-center rounded-xl bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}
