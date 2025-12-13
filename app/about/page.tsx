import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <main className="px-6 md:px-12 py-16 max-w-6xl mx-auto text-white space-y-12">
        <section className="space-y-6">
          <p className="text-blue-500 text-sm uppercase tracking-wider">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Who We Are</h1>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            KoDude builds high-performing digital experiences that balance design clarity with engineering rigor.
            We obsess over performance, accessibility, and maintainable code so your product can scale.
          </p>
        </section>
        <section>
          <Stats />
        </section>
      </main>
      <Footer />
    </div>
  );
}
