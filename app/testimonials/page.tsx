import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <main className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto text-center text-white mb-10">
          <p className="text-blue-500 text-sm uppercase tracking-wider">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3">What Our Clients Say</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Stories from teams and founders we partnered with to ship performant, beautiful products.
          </p>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
