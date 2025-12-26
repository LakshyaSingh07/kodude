"use client";

import React, { useEffect, useState } from "react";

type PreloaderGateProps = {
  children: React.ReactNode;
};

// Shows a full-screen preloader until the window finishes loading (with a fallback timeout).
export default function PreloaderGate({ children }: PreloaderGateProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const markReady = () => setReady(true);

    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady);
    }

    const fallback = window.setTimeout(markReady, 3000);

    return () => {
      window.removeEventListener("load", markReady);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#05070f] via-[#0b1229] to-[#05070f] transition-opacity duration-500 ${
          ready ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden={ready}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 rounded-full border-2 border-white/15 border-t-white animate-spin" />
          <p className="text-white/80 text-sm tracking-[0.2em] uppercase">
            Loading KoDude
          </p>
        </div>
      </div>

      <div
        className={`transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
