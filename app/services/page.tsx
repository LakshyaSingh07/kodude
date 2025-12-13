import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <main className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center text-white mb-10">
            <p className="text-blue-500 text-sm uppercase tracking-wider">Services</p>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3">What We Do</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From concept to launch, we ship interfaces and systems that stay fast, stable, and easy to evolve.
            </p>
          </header>
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
}
