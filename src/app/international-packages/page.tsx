'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { Calendar, Plane, Building, Landmark, Palmtree, Camera, Building2, Umbrella, MapPin } from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    id: 'egypt',
    title: 'Egypt',
    subtitle: 'Timeless Wonders of the Pharaohs',
    image: '/images/new_egypt.jpg',
    icon: Landmark,
    days: '6 Days / 5 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'indonesia',
    title: 'Indonesia',
    subtitle: 'A Tropical Escape of Islands & Culture',
    image: '/images/new_bali.jpg',
    icon: Palmtree,
    days: '7 Days / 6 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'kenya',
    title: 'Kenya',
    subtitle: 'Wild Adventures, Timeless Memories',
    image: '/images/new_kenya.jpg',
    icon: Camera,
    days: '6 Days / 5 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'singapore',
    title: 'Singapore',
    subtitle: 'Modern City, Endless Experiences',
    image: '/images/new_singapore.jpg',
    icon: Building2,
    days: '5 Days / 4 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'malaysia',
    title: 'Malaysia',
    subtitle: 'Culture, Cities & Coastal Beauty',
    image: '/images/new_malaysia.jpg',
    icon: Building,
    days: '6 Days / 5 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'maldives',
    title: 'Maldives',
    subtitle: 'The Ultimate Island Getaway',
    image: '/images/new_maldives.jpg',
    icon: Umbrella,
    days: '4 Days / 3 Nights',
    type: 'Flights + Resort'
  },
  {
    id: 'thailand',
    title: 'Thailand',
    subtitle: 'Vibrant Culture, Stunning Destinations',
    image: '/images/new_thailand.jpg',
    icon: MapPin,
    days: '5 Days / 4 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'uae',
    title: 'United Arab Emirates',
    subtitle: 'Luxury, Adventure & Modern Wonders',
    image: '/images/new_uae.jpg',
    icon: Building2,
    days: '6 Days / 5 Nights',
    type: 'Flights + Hotel'
  }
];

export default function InternationalPackages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState("");

  const openEnquiryFor = (destination: string) => {
    setSelectedDest(destination);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onOpenEnquiry={() => setModalOpen(true)} />

      <main className="flex-grow pb-16 pt-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 text-center mb-16 tracking-wide">
          Our Popular Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={pkg.id} 
                onClick={() => openEnquiryFor(pkg.title)}
                className="group relative h-[460px] w-full overflow-hidden cursor-pointer bg-slate-900"
              >
                
                {/* Image Background */}
                <Image 
                  src={pkg.image} 
                  alt={pkg.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-500" />

                {/* Content Section Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center text-white">
                  
                  {/* Floating Outline Icon */}
                  <div className="mb-4 rounded-full border border-white/40 p-3 bg-black/20 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                    <Icon className="h-6 w-6 stroke-1 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-3xl font-serif mb-2 tracking-wide">{pkg.title}</h3>
                  <p className="text-sm text-slate-300 mb-6 font-light tracking-wide">{pkg.subtitle}</p>

                  {/* Details Row */}
                  <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-300 uppercase tracking-widest font-medium w-full">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{pkg.days}</span>
                    </div>
                    
                    {/* Vertical Divider */}
                    <div className="w-px h-3.5 bg-white/30" />
                    
                    <div className="flex items-center space-x-2">
                      <Plane className="h-3.5 w-3.5" />
                      <span>{pkg.type}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </main>

      <Footer />

      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedDestination={selectedDest}
      />
    </div>
  );
}
