import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <main className="px-6 md:px-12 py-12">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
