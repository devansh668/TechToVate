'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { Calendar, Plane, Palmtree, Leaf, Mountain, MountainSnow, Coffee, Train, Building2, Sailboat } from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    id: 'andaman',
    title: 'Andaman & Nicobar',
    subtitle: 'Tropical Islands & Pristine Beaches',
    image: '/images/new_andaman.png',
    icon: Palmtree,
    days: '6 Days / 5 Nights',
    type: 'Flights + Resort',
    badge: 'HONEYMOON'
  },
  {
    id: 'goa',
    title: 'Goa',
    subtitle: 'Sun, Sand & Vibrant Nightlife',
    image: '/images/new_goa.png',
    icon: Palmtree,
    days: '5 Days / 4 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'himachal',
    title: 'Himachal Pradesh',
    subtitle: 'Snow-capped Peaks & Valleys',
    image: '/images/india_manali.jpg',
    icon: MountainSnow,
    days: '6 Days / 5 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'kashmir',
    title: 'Jammu & Kashmir',
    subtitle: 'Paradise on Earth',
    image: '/images/new_kashmir.png',
    icon: Sailboat,
    days: '7 Days / 6 Nights',
    type: 'Flights + Houseboat',
    badge: 'POPULAR'
  },
  {
    id: 'kerala',
    title: 'Kerala',
    subtitle: "God's Own Country",
    image: '/images/india_munnar.png',
    icon: Leaf,
    days: '7 Days / 6 Nights',
    type: 'Flights + Resort',
    badge: 'TRENDING'
  },
  {
    id: 'ladakh',
    title: 'Ladakh',
    subtitle: 'The Land of High Passes',
    image: '/images/india_ladakh.jpg',
    icon: Mountain,
    days: '8 Days / 7 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'rajasthan',
    title: 'Rajasthan',
    subtitle: 'Palaces, Forts & Desert Safaris',
    image: '/images/new_rajasthan.png',
    icon: Building2,
    days: '7 Days / 6 Nights',
    type: 'Flights + Hotel',
    badge: 'BUDGET'
  },
  {
    id: 'sikkim',
    title: 'Sikkim',
    subtitle: 'Mystical Mountains & Monasteries',
    image: '/images/india_gangtok.jpg',
    icon: MountainSnow,
    days: '6 Days / 5 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'tamilnadu',
    title: 'Tamil Nadu',
    subtitle: 'Temples, Heritage & Coastlines',
    image: '/images/india_ooty.png',
    icon: Train,
    days: '5 Days / 4 Nights',
    type: 'Flights + Hotel'
  },
  {
    id: 'uttarakhand',
    title: 'Uttarakhand',
    subtitle: 'The Land of Gods',
    image: '/images/hero_dhanaulti.jpg',
    icon: Mountain,
    days: '5 Days / 4 Nights',
    type: 'Flights + Hotel'
  }
];

export default function IndianTourPackages() {
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
          Incredible India Packages
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

                {/* Badge */}
                {pkg.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-full z-10 ${
                    pkg.badge === 'HONEYMOON' ? 'bg-pink-500' :
                    pkg.badge === 'POPULAR' ? 'bg-amber-500' :
                    pkg.badge === 'TRENDING' ? 'bg-indigo-500' :
                    'bg-emerald-500'
                  }`}>
                    {pkg.badge}
                  </div>
                )}

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
