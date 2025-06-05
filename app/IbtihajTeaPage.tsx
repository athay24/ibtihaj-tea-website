'use client'; // Add this line at the very top

import { useState, type FC, type ReactNode } from 'react';
// ... rest of your imports (REMOVE Head from 'next/head')
// import Head from 'next/head'; // REMOVE OR COMMENT OUT THIS LINE
import { Menu, X, Leaf, Star, ChevronDown, Phone, MessageCircle } from 'lucide-react';

// ... rest of your code
// import React, { useState } from "react"; // Removed duplicate import

const featuredTeas = [
  {
    name: "Signature First Flush",
    description:
      "Delicate, aromatic, and bursting with the freshness of the season. Sourced from the lush gardens of Sylhet.",
    details: "500g foil-lined tube | Whole leaf | Limited batch",
    cta: "Order on Facebook",
    link: "https://www.facebook.com/Ibtihaj.store/",
  },
  {
    name: "Classic Black Tea",
    description:
      "Bold, robust, and deeply satisfying. Perfect for traditional Rong Cha or Doodh Cha.",
    details: "500g foil-lined tube | Premium blend | Rich flavor",
    cta: "Order on Facebook",
    link: "https://www.facebook.com/Ibtihaj.store/",
  },
];

const testimonials = [
  {
    name: "Rahman S.",
    text: "The first flush is unlike anything I've tasted before. Proud to support a Bangladeshi brand!",
  },
  {
    name: "Farhana A.",
    text: "Ibtihaj Tea brings back memories of my childhood in Sylhet. The aroma is simply divine.",
  },
];

const teaGuide = [
  {
    title: "A Brief History",
    content:
      "Tea has been cherished in Bangladesh for generations, with Sylhet at the heart of our tea heritage. From British colonial times to today's vibrant tea culture, tea is woven into our daily lives.",
  },
  {
    title: "Tea in Bangladeshi Culture",
    content:
      "From adda with friends to family gatherings, tea is a symbol of hospitality and warmth in every Bangladeshi home.",
  },
  {
    title: "How to Brew Perfect Tea",
    content:
      "For Rong Cha: Use fresh water, bring to a boil, add tea leaves, steep 3-4 minutes. For Doodh Cha: Simmer tea leaves with milk and sugar for a creamy delight.",
  },
  {
    title: "Storing Tea Properly",
    content:
      "Keep tea in an airtight container, away from light and moisture, to preserve its freshness and aroma.",
  },
  {
    title: "Identifying Quality Tea",
    content:
      "Look for whole, unbroken leaves, a fresh aroma, and a vibrant color. Trust your senses!",
  },
];

const navLinks = [
  { name: "হোমপেজ", to: "#home" },
  { name: "আমাদের কথা", to: "#about" },
  { name: "আমাদের চা", to: "#products" },
  { name: "চা নির্দেশিকা", to: "#guide" },
  { name: "মতামত", to: "#testimonials" },
  { name: "যোগাযোগ", to: "#contact" },
];

const accent = "text-green-800";
const accentBg = "bg-green-100";
const gold = "text-yellow-700";
const goldBg = "bg-yellow-100";
const earth = "text-amber-900";
const earthBg = "bg-amber-100";

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
              <img src={logo} alt="Ibtihaj Tea Logo" className="w-12 h-12 rounded-xl object-contain border-2 border-green-700" />
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

      {/* Hero Section */}
      <section id="home" className="w-full bg-gradient-to-br from-green-100 via-amber-50 to-yellow-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight">
              Experience the Finest <span className="text-yellow-700">First Flush</span> Tea from Bangladesh
            </h1>
            <p className="text-lg md:text-xl text-amber-900 max-w-xl">
              Premium, authentic, and rooted in our tea heritage. Discover the taste of Ibtihaj Tea – where quality meets tradition.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#products" className="px-6 py-2 rounded-lg bg-green-800 text-white font-semibold shadow hover:bg-green-900 transition">Explore Our Teas</a>
              <a href="https://www.facebook.com/Ibtihaj.store/" target="_blank" rel="noopener" className="px-6 py-2 rounded-lg bg-yellow-700 text-white font-semibold shadow hover:bg-yellow-800 transition">Order on Facebook</a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-lg text-gray-500">
              Tea Garden Image
            </div>
            <span className="text-sm text-gray-500">Beautiful Sylhet tea gardens</span>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-10" id="about">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">আমাদের কথা (Our Story)</h2>
        <p className="text-lg text-amber-900 mb-2">
          Ibtihaj Tea was born from a passion for quality and a deep connection to Bangladesh's tea heartland, Sylhet. Our mission is to bring you the freshest, most authentic teas, celebrating the rich heritage and vibrant culture of our land.
        </p>
        <p className="text-md text-gray-700 mb-2">
          We believe in the magic of the "first flush" – the season's very first, most delicate leaves, handpicked for their exquisite aroma and flavor. Every cup is a tribute to our roots and a promise of uncompromising quality.
        </p>
        <div className="flex gap-4 mt-6">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-xs text-gray-500">Story Image</div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-xs text-gray-500">Heritage</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 bg-green-50" id="products">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">আমাদের চা (Our Teas)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTeas.map((tea) => (
              <div key={tea.name} className="rounded-xl border border-green-200 bg-white shadow p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center text-xs text-gray-500">Tea Image</div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-green-900">{tea.name}</h3>
                  <p className="text-md text-amber-900">{tea.description}</p>
                  <p className="text-sm text-gray-600">{tea.details}</p>
                  <a href={tea.link} target="_blank" rel="noopener" className="mt-2 inline-block px-4 py-2 rounded bg-yellow-700 text-white font-medium hover:bg-yellow-800 transition">{tea.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tea Guide */}
      <section className="max-w-5xl mx-auto px-4 py-12" id="guide">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">চা নির্দেশিকা (Tea Guide)</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teaGuide.map((item) => (
            <div key={item.title} className="rounded-lg border-l-4 border-green-700 bg-green-50 p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-green-800 mb-2">{item.title}</h4>
              <p className="text-md text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 bg-amber-50" id="testimonials">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">গ্রাহকের মতামত (Testimonials)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-amber-200 bg-white shadow p-6 flex flex-col gap-2">
                <p className="text-md text-amber-900 italic">“{t.text}”</p>
                <span className="text-sm text-green-800 font-semibold mt-2">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 py-12" id="contact">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">যোগাযোগ (Contact Us)</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <form onSubmit={handleContactSubmit} className="flex-1 bg-green-50 rounded-xl p-6 shadow flex flex-col gap-4">
            <label className="text-green-900 font-medium">Name
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleContactChange}
                className="mt-1 w-full border border-green-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </label>
            <label className="text-green-900 font-medium">Email
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleContactChange}
                className="mt-1 w-full border border-green-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </label>
            <label className="text-green-900 font-medium">Message
              <textarea
                name="message"
                value={contact.message}
                onChange={handleContactChange}
                className="mt-1 w-full border border-green-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                rows={4}
                required
              />
            </label>
            <button type="submit" className="mt-2 px-6 py-2 rounded-lg bg-green-800 text-white font-semibold shadow hover:bg-green-900 transition">Send Message</button>
            {submitted && <div className="text-green-700 mt-2">Thank you! We will get back to you soon.</div>}
          </form>
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-green-900">Phone:</span>
              <a href="tel:01635545377" className="text-green-800 hover:underline">01635545377</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-green-900">Facebook:</span>
              <a href="https://www.facebook.com/Ibtihaj.store/" target="_blank" rel="noopener" className="text-blue-700 hover:underline">Ibtihaj.store</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-green-900">Email:</span>
              <a href="mailto:info@ibtihajtea.com" className="text-green-800 hover:underline">info@ibtihajtea.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-green-900">Address:</span>
              <span className="text-gray-700">Sylhet, Bangladesh</span>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32 flex items-center justify-center text-xs text-gray-500 mt-2">Map Placeholder</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-green-900 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {logo ? (
              <img src={logo} alt="Ibtihaj Tea Logo" className="w-8 h-8 rounded object-contain border-2 border-green-700" />
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
