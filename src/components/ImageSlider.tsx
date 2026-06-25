'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      {/* Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={img}
            alt={`${alt} - Image ${idx + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={goToPrevious}
              className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={goToNext}
              className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20">
            <div className="flex items-center space-x-1.5 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
              {images.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === slideIndex
                      ? 'bg-white w-4 h-1.5'
                      : 'bg-white/50 hover:bg-white/80 w-1.5 h-1.5'
                  }`}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
