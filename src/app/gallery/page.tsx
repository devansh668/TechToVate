'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import { Camera, MapPin, ZoomIn, X, Compass } from 'lucide-react';

// Curated list of high-quality travel images with tags
const galleryImages = [
  { src: "/images/hero_manali.jpg", alt: "Manali snowy mountains", location: "Manali, India", tag: "india" },
  { src: "/images/paris.png", alt: "Eiffel tower", location: "Paris, France", tag: "international" },
  { src: "/images/bali_seminyak.jpg", alt: "Seminyak Beach", location: "Bali, Indonesia", tag: "bali" },
  { src: "/images/dubai.png", alt: "Dubai skyline", location: "Dubai, UAE", tag: "international" },
  { src: "/images/india_ladakh.jpg", alt: "Pangong Lake", location: "Leh Ladakh, India", tag: "india" },
  { src: "/images/santorini_hero.png", alt: "Santorini view", location: "Santorini, Greece", tag: "international" },
  { src: "/images/new_kashmir.png", alt: "Dal Lake", location: "Kashmir, India", tag: "india" },
  { src: "/images/new_maldives.jpg", alt: "Maldives overwater villas", location: "Maldives", tag: "international" },
  { src: "/images/india_munnar.png", alt: "Munnar tea gardens", location: "Munnar, India", tag: "india" },
  { src: "/images/interlaken.png", alt: "Interlaken lake", location: "Interlaken, Switzerland", tag: "international" },
  { src: "/images/bali_tanah_lot.jpg", alt: "Tanah Lot temple", location: "Bali, Indonesia", tag: "bali" },
  { src: "/images/new_egypt.jpg", alt: "Pyramids", location: "Cairo, Egypt", tag: "international" },
  { src: "/images/india_darjeeling.jpg", alt: "Darjeeling toy train", location: "Darjeeling, India", tag: "india" },
  { src: "/images/new_singapore.jpg", alt: "Marina Bay Sands", location: "Singapore", tag: "international" },
  { src: "/images/india_coorg.jpg", alt: "Coorg coffee plantation", location: "Coorg, India", tag: "india" },
  { src: "/images/new_goa.png", alt: "Goa beach", location: "Goa, India", tag: "india" },
  { src: "/images/bali_nusa_penida.jpg", alt: "Nusa Penida cliffs", location: "Bali, Indonesia", tag: "bali" },
  { src: "/images/new_kenya.jpg", alt: "Safari", location: "Kenya", tag: "international" },
  { src: "/images/india_shimla.jpg", alt: "Shimla snow", location: "Shimla, India", tag: "india" },
  { src: "/images/new_uae.jpg", alt: "Abu Dhabi mosque", location: "Abu Dhabi, UAE", tag: "international" },
  { src: "/images/bali_tegallalang.jpg", alt: "Tegallalang rice terraces", location: "Bali, Indonesia", tag: "bali" },
  { src: "/images/india_nainital.png", alt: "Nainital lake", location: "Nainital, India", tag: "india" }
];

// Customer submitted photos
const customerPhotos = [
  { src: "/images/bali_seminyak_4_1780916872741.png", customer: "The Sharma Family", location: "Bali, Indonesia" },
  { src: "/images/bali_tanah_lot_5_1780916939961.png", customer: "Rahul & Priya", location: "Manali, India" },
  { src: "/images/bali_ubud_3_1780916810601.png", customer: "Arjun Verma", location: "Dubai, UAE" },
  { src: "/images/bali_uluwatu_2_1780916961765.png", customer: "Sneha & Friends", location: "Goa, India" },
];

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  
  // Filtering state
  const [activeFilter, setActiveFilter] = useState('all');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<typeof galleryImages[0] | null>(null);

  const handleOpenEnquiry = (destination?: string) => {
    setSelectedDest(destination || 'General Gallery Enquiry');
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const openLightbox = (img: typeof galleryImages[0]) => {
    setActiveImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  // Filter images based on active tab
  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return galleryImages;
    return galleryImages.filter(img => img.tag === activeFilter);
  }, [activeFilter]);



  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-light rounded-full mb-4 text-brand-primary">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 font-display">
              Wanderlust <span className="text-brand-primary">Gallery</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore the breathtaking moments captured across our favorite destinations worldwide. Discover the world in stunning high resolution.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'india', label: 'Incredible India' },
              { id: 'international', label: 'International' },
              { id: 'bali', label: 'Bali & Islands' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === tab.id 
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/30' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-brand-primary border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Clean Symmetric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, index) => (
              <div 
                key={img.src} 
                className={`relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}
                onClick={() => openLightbox(img)}
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-base md:text-lg flex items-center gap-2 mb-3 drop-shadow-md">
                      <MapPin className="w-4 h-4 text-brand-light" />
                      {img.location}
                    </h3>
                    <div className="hidden sm:flex gap-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenEnquiry(img.location);
                        }}
                        className="px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-dark transition-colors"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                  
                  {/* Zoom Icon indicator */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No images found for this category.
            </div>
          )}

          {/* Customer Photos Section */}
          <div className="mt-24 sm:mt-32 pt-16 border-t border-slate-100">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 font-display">
                Happy <span className="text-brand-primary">Travelers</span>
              </h2>
              <p className="text-slate-600">
                A glimpse into the unforgettable memories captured by our wonderful customers around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {customerPhotos.map((photo, index) => (
                <div key={index} className="bg-white p-4 pb-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rotate-1 hover:rotate-0 border border-slate-100">
                  <div className="relative aspect-square w-full mb-4">
                    <Image 
                      src={photo.src}
                      alt={`Photo by ${photo.customer}`}
                      fill
                      className="object-cover border border-slate-100 transition-all duration-500"
                    />
                  </div>
                  <div className="text-center font-display">
                    <h4 className="font-bold text-slate-800 text-lg">{photo.customer}</h4>
                    <p className="text-brand-primary text-sm font-medium mt-1">{photo.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[70vh] sm:h-[80vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-brand-primary/20 rounded-full">
                  <MapPin className="w-5 h-5 text-brand-light" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{activeImage.location}</h3>
                  <p className="text-sm text-white/60 capitalize">{activeImage.tag} Destination</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  closeLightbox();
                  handleOpenEnquiry(activeImage.location);
                }}
                className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/30 w-full sm:w-auto"
              >
                Book This Trip
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={handleModalClose} 
        selectedDestination={selectedDest} 
      />
    </div>
  );
}
