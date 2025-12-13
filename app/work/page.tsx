import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <main className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center text-white mb-10">
            <p className="text-blue-500 text-sm uppercase tracking-wider">Work</p>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3">Selected Projects</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              A snapshot of products and experiences we’ve delivered across web, mobile, and brand.
            </p>
          </header>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
