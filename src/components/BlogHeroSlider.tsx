'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'A Guide to the Maldives: The Ultimate Island Getaway',
    category: 'Destination Guide',
    image: '/images/new_maldives.jpg',
    slug: '#',
    date: 'June 10, 2026'
  },
  {
    title: 'Discovering the Pyramids of Egypt: A Timeless Wonder',
    category: 'Historical Journeys',
    image: '/images/new_egypt.jpg',
    slug: '#',
    date: 'June 9, 2026'
  },
  {
    title: 'Top 10 Places to Visit in Bali for an Unforgettable Vacation',
    category: 'Trending',
    image: '/images/new_bali.jpg',
    slug: 'top-10-bali',
    date: 'June 5, 2026'
  },
  {
    title: 'The Royal Palaces of Rajasthan on a Budget',
    category: 'Budget Travel',
    image: '/images/new_rajasthan.png',
    slug: '#',
    date: 'June 2, 2026'
  }
];

export default function BlogHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const goToNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden group rounded-3xl mb-16 shadow-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Animated Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className={`max-w-3xl transform transition-all duration-700 ease-out delay-300 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-primary rounded-full">
                {slide.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-4">
                {slide.title}
              </h2>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-slate-300">{slide.date} • By Paradise Yatra</span>
              </div>
              <a 
                href={`/blogs/${slide.slug}`}
                className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-brand-primary transition group/link"
              >
                <span>Read Full Article</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={goToPrevious}
          className="bg-black/30 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={goToNext}
          className="bg-black/30 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-8 z-20 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              idx === current ? 'bg-brand-primary w-8' : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
