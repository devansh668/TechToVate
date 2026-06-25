'use client';

import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Headphones, Heart, ArrowRight, Loader2, Search } from 'lucide-react';
import Image from 'next/image';

interface DestinationData {
  _id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  price: number;
  featured: boolean;
}

interface DestinationsProps {
  onSelectDestination: (destName: string) => void;
}

export default function Destinations({ onSelectDestination }: DestinationsProps) {
  const [destinations, setDestinations] = useState<DestinationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch destinations from the Express backend (or Next.js API fallback)
  const fetchDestinations = async (search = '') => {
    setLoading(true);
    const base = process.env.NEXT_PUBLIC_API_URL || '';
    try {
      const url = search
        ? `${base}/api/destinations?search=${encodeURIComponent(search)}`
        : `${base}/api/destinations?featured=true`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setDestinations(data.data);
      } else {
        setError(data.error || 'Failed to load destinations');
      }
    } catch (err) {
      console.error(err);
      setError('Error connecting to backend API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDestinations(searchQuery);
  };

  return (
    <section id="destinations" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      
      {/* Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-100 pb-16">
        
        {/* Best Price */}
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-primary shadow-sm">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-1">Best Price Guarantee</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Get the best prices on all your bookings, guaranteed.</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-primary shadow-sm">
            <Headphones className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-1">24/7 Customer Support</h4>
            <p className="text-sm text-slate-500 leading-relaxed">We are here to help you anytime, anywhere in the world.</p>
          </div>
        </div>

        {/* Safe Booking */}
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-primary shadow-sm">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-1">Safe & Secure Booking</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Your safety and payment security are our top priorities.</p>
          </div>
        </div>

        {/* Handpicked Experiences */}
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-primary shadow-sm">
            <Star className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-1">Handpicked Experiences</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Curated activities and hotels for an unforgettable journey.</p>
          </div>
        </div>

      </div>

      {/* Destinations Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2 block">Top Pick Locations</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900">Popular Destinations</h2>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearchSubmit} className="flex w-full md:w-auto max-w-md gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none bg-white"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white px-6 font-semibold text-sm transition shadow-premium whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      {/* Grid List */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <Loader2 className="h-10 w-10 text-brand-primary animate-spin" />
          <span className="text-slate-500 text-sm font-semibold">Loading destinations from database...</span>
        </div>
      ) : error ? (
        <div className="rounded-2xl bg-red-50 border border-red-100 p-6 text-center text-red-600 font-medium max-w-lg mx-auto">
          {error}
        </div>
      ) : destinations.length === 0 ? (
        <div className="text-center py-20 text-slate-500 font-medium">
          No destinations found matching your search. Try another query.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest._id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-premium hover:-translate-y-2 border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-w-7xl) 25vw, (max-w-md) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span>{dest.rating.toFixed(1)}</span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 flex items-center justify-center rounded-full bg-brand-primary text-white px-3 py-1 text-xs font-bold shadow-sm">
                  From ${dest.price}
                </div>
              </div>

              {/* Text info */}
              <div className="flex-grow p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-brand-primary transition">
                    {dest.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 block mb-3 uppercase tracking-wider">
                    {dest.location}
                  </span>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {dest.description}
                  </p>
                </div>
                
                <button
                  onClick={() => onSelectDestination(dest.name)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 hover:border-brand-primary hover:bg-brand-primary text-slate-700 hover:text-white py-3 text-xs font-extrabold transition flex items-center justify-center space-x-2 group-hover:shadow-sm"
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </section>
  );
}
