'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Play, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

const heroImages = [
  '/images/santorini_hero.png',
  '/images/hero_manali.jpg',
  '/images/hero_dhanaulti.jpg',
  '/images/hero_paris.jpg',
  '/images/hero_tokyo.jpg'
];

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[620px] md:h-[680px] flex items-center justify-start overflow-hidden bg-slate-900">
      
      {/* Background Image Slider */}
      {heroImages.map((img, idx) => (
        <div 
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105 z-0' : 'opacity-0 scale-100 -z-10'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}
      
      {/* Soft overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent md:block hidden z-10" />
      <div className="absolute inset-0 bg-white/85 md:hidden block z-10" />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="max-w-2xl text-left animate-fade-in-up">
          
          {/* Badge Tag */}
          <div className="inline-flex items-center space-x-2 rounded-full bg-brand-light/90 border border-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-primary mb-6 animate-pulse">
            <Compass className="h-4 w-4" />
            <span>Explore the world with us</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Discover Amazing <br />
            Places with <span className="gradient-text italic font-serif font-medium">Us</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 font-medium mb-8 max-w-lg">
            Custom travel packages, unforgettable experiences and memories that last a lifetime. Find your next adventure today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="group rounded-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-8 py-4 text-sm shadow-premium transition flex items-center justify-center space-x-2 hover:scale-105 duration-200"
            >
              <span>Explore Packages</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://www.youtube.com/@ParadiseYatra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 text-slate-700 hover:text-brand-primary font-semibold text-sm px-6 py-4 rounded-full hover:bg-slate-50 transition"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-brand-primary shadow-sm group-hover:scale-110 transition">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span>Watch Video</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
