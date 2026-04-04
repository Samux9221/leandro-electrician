"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jonathan Miller",
    location: "Manhattan, NY",
    text: "Leandro is incredibly professional. He upgraded our entire panel and the organization of the wiring is a work of art. Highly recommended for any high-end residential work.",
    stars: 5
  },
  {
    name: "Sarah Jenkins",
    location: "Newark, NJ",
    text: "Fast, clean, and honest. It’s hard to find reliable electricians in the area, but he exceeded all expectations. My smart home setup works perfectly now.",
    stars: 5
  },
  {
    name: "Robert Costa",
    location: "Jersey City, NJ",
    text: "Exceptional service. They were on time, explained everything clearly, and left the place spotless. The premium look of the website matches the quality of the work.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Trusted by Homeowners <br /> 
              across <span className="text-amber-600">NYC & New Jersey</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="font-bold text-slate-900">5.0</span>
            <span className="text-slate-500 text-sm">on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-100" size={40} />
              <div className="flex text-amber-500 mb-4">
                {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-slate-400">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}