"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import Iridescence from "./Iridescence";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <Iridescence
          color={[0.5, 0.6, 0.8]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
          className="h-full w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070f] via-[#05070f]/90 to-transparent" />

      {/* Navbar inline for background coverage */}
      <div className="relative z-20 pt-6 flex justify-center">
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
      </div>

      {/* Centered content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-center min-h-screen" id="hero">
          <div className="mx-auto max-w-5xl text-center px-8 py-12 md:px-12 md:py-16 flex flex-col items-center gap-6 -translate-y-6 md:-translate-y-10">
            <div className="inline-flex items-center justify-center p-4 shadow-inner">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
                alt="Brand Logo"
                className="w-24 h-24 rounded-xl object-contain"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                Where Ideas Become <br /> Digital Reality.
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
      </div>

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
    </section>
  );
}
