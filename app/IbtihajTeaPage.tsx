'use client';

import { useState } from 'react';
import Image from 'next/image';

// ... (same featuredTeas, testimonials, teaGuide, navLinks arrays)

export default function Home() {
  const [logo, setLogo] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogo(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  }

  function handleContactChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setContact({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-green-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            {logo ? (
              <Image src={logo} alt="Ibtihaj Tea Logo" width={48} height={48} unoptimized className="w-12 h-12 rounded-xl object-contain border-2 border-green-700" />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center text-xs text-gray-500">Logo</div>
            )}
            <span className="ml-2 font-bold text-xl text-green-900 tracking-tight">Ibtihaj Tea <span className="text-sm text-gray-500">(ইবতিহাজ চা)</span></span>
          </div>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a key={link.to} href={link.to} className="text-green-900 hover:text-yellow-700 font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <label className="ml-4 cursor-pointer text-xs text-green-700 hover:underline">
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
            Upload Logo
          </label>
        </div>
      </nav>

      {/* ... (rest of your code) */}

      {/* Example of escaping quotes in JSX */}
      <section className="max-w-4xl mx-auto px-4 py-10" id="about">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">আমাদের কথা (Our Story)</h2>
        <p className="text-lg text-amber-900 mb-2">
          Ibtihaj Tea was born from a passion for quality and a deep connection to Bangladesh&apos;s tea heartland, Sylhet. Our mission is to bring you the freshest, most authentic teas, celebrating the rich traditions of our land.
        </p>
        <p className="text-md text-gray-700 mb-2">
          We believe in the magic of the &apos;first flush&apos; – the season&apos;s very first, most delicate leaves, handpicked for their exquisite aroma and flavor. Every cup is a tribute to our roots and a toast to your well-being.
        </p>
        {/* ... */}
      </section>

      {/* ... (replace all <img> with <Image /> as above) */}

      <footer className="w-full bg-green-900 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {logo ? (
              <Image src={logo} alt="Ibtihaj Tea Logo" width={32} height={32} unoptimized className="w-8 h-8 rounded object-contain border-2 border-green-700" />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded w-8 h-8 flex items-center justify-center text-xs text-gray-500">Logo</div>
            )}
            <span className="ml-2 font-bold text-lg">Ibtihaj Tea</span>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} Ibtihaj Tea. Crafted with pride in Bangladesh.</div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Ibtihaj.store/" target="_blank" rel="noopener" className="hover:underline">Facebook</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
