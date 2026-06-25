'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import { Phone, Mail, MapPin, Landmark, ExternalLink, Calendar, Clock, Users, DollarSign, Filter, Search, RotateCcw, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface DepartureItem {
  id: string;
  name: string;
  destination: string;
  price: number;
  date: string;
  duration: string;
  image: string;
  spots: string;
  spotsCount: number;
  details: string;
}

export default function FixedDepartures() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  
  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(2500);
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('');
    setModalOpen(true);
  };

  const handleOpenDestinationEnquiry = (destinationName: string, date: string) => {
    setSelectedDest(`${destinationName} (Departure: ${date})`);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setMaxPrice(2500);
  };

  // Fixed departures data
  const departures: DepartureItem[] = [
    {
      id: 'dep_1',
      name: 'Paris Autumn Explorer',
      destination: 'Paris, France',
      price: 1299,
      date: 'Oct 15, 2026',
      duration: '7 Days / 6 Nights',
      image: '/images/paris.png',
      spots: '6 Spots Left',
      spotsCount: 6,
      details: 'Explore the Louvre, climb the Eiffel Tower, and enjoy a romantic cruise on the Seine with our pre-planned group departure.'
    },
    {
      id: 'dep_2',
      name: 'Bali Zen Spiritual Tour',
      destination: 'Bali, Indonesia',
      price: 899,
      date: 'Nov 01, 2026',
      duration: '10 Days / 9 Nights',
      image: '/images/bali.png',
      spots: 'Only 2 Spots Left!',
      spotsCount: 2,
      details: 'A restorative group retreat covering Ubud temples, Mt. Batur sunrise trekking, and beach relaxation in Seminyak.'
    },
    {
      id: 'dep_3',
      name: 'Dubai Luxury Adventure',
      destination: 'Dubai, UAE',
      price: 1599,
      date: 'Dec 10, 2026',
      duration: '5 Days / 4 Nights',
      image: '/images/dubai.png',
      spots: '8 Spots Left',
      spotsCount: 8,
      details: 'Premium group experience containing high-speed dune bashing, Burj Khalifa access, and a luxury yacht dinner cruise.'
    },
    {
      id: 'dep_4',
      name: 'Swiss Alps Winter Wonderland',
      destination: 'Interlaken, Switzerland',
      price: 1999,
      date: 'Jan 12, 2027',
      duration: '8 Days / 7 Nights',
      image: '/images/interlaken.png',
      spots: '4 Spots Left',
      spotsCount: 4,
      details: 'Enjoy panoramic cable cars, ski lessons in Grindelwald, and scenic glacier trains across the Swiss peaks.'
    },
    {
      id: 'dep_5',
      name: 'Paris Spring Escape',
      destination: 'Paris, France',
      price: 1450,
      date: 'April 10, 2027',
      duration: '6 Days / 5 Nights',
      image: '/images/paris.png',
      spots: '10 Spots Left',
      spotsCount: 10,
      details: 'Capture the cherry blossoms in Paris and enjoy fine French pastries, museums, and botanical gardens in a small group.'
    },
    {
      id: 'dep_6',
      name: 'Bali Summer Getaway',
      destination: 'Bali, Indonesia',
      price: 950,
      date: 'July 20, 2027',
      duration: '8 Days / 7 Nights',
      image: '/images/bali.png',
      spots: '12 Spots Left',
      spotsCount: 12,
      details: 'Perfect group summer getaway to scuba dive in Nusa Penida, explore waterfalls, and relax in private pool villas.'
    }
  ];

  // Filtering Logic
  const filteredDepartures = departures.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = item.price <= maxPrice;
    
    return matchesSearch && matchesPrice;
  });

  const faqs = [
    {
      question: "What exactly is a 'Fixed Departure' group tour?",
      answer: "A fixed departure tour is a pre-planned group vacation with guaranteed departure dates and fixed itineraries. Travelers join a group of like-minded individuals, making it highly cost-effective and a great way to meet new people while enjoying professional tour coordination."
    },
    {
      question: "Are international flights included in the listed price?",
      answer: "No, our listed prices cover land packages, including premium accommodations, sightseeing tours, entry tickets, local transfers, and select meals. We can help you book flights separately to match your tour dates."
    },
    {
      question: "Can solo travelers join these fixed departure tours?",
      answer: "Absolutely! Fixed departures are perfect for solo travelers. You can choose to pay a single supplement for your own private room, or we can pair you with another solo traveler of the same gender to share a room and save costs."
    },
    {
      question: "What happens if a tour does not meet the minimum group size?",
      answer: "In the rare event that a group tour doesn't reach the minimum required travelers, we will notify you at least 30 days in advance. You will receive a full refund, or you can choose to transfer your booking to another departure date or destination without any penalty."
    },
    {
      question: "Can I customize the itinerary or extend my stay?",
      answer: "While the group itinerary during the fixed dates is set, you can absolutely choose to arrive early or extend your stay at the beginning or end of the tour. Contact our team, and we will arrange extra nights and personalized transfers for you."
    },
    {
      question: "What is the booking deposit and cancellation policy?",
      answer: "To secure your spot on a fixed departure, a non-refundable deposit of 20% is required. The remaining balance must be paid 45 days before departure. Cancellations made more than 45 days in advance lose only the deposit; later cancellations are subject to standard group cancellation charges."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Hero Banner Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center space-y-4">
          <span className="inline-flex items-center space-x-1.5 rounded-full bg-brand-primary/20 text-brand-primary border border-brand-primary/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Users className="h-3.5 w-3.5" />
            <span>Join Scheduled Group Tours</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Upcoming Fixed Departures
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Pre-scheduled group tours with guaranteed departure dates, premium itineraries, and shared experiences. Perfect for couples, families, and solo travelers.
          </p>
        </div>
      </section>

      {/* Main Page Layout (Sidebar + Grid) */}
      <main className="flex-grow bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1 rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 space-y-6 sticky top-24">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="flex items-center space-x-2 font-display font-bold text-slate-800 text-base">
                  <Filter className="h-4 w-4 text-brand-primary" />
                  <span>Filter Options</span>
                </span>
                {(searchQuery || maxPrice < 2500) && (
                  <button 
                    onClick={resetFilters}
                    className="text-xs text-brand-primary hover:text-brand-secondary font-bold flex items-center space-x-1"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Search filter */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Keyword Search</label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search e.g. Bali..."
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none bg-white transition"
                  />
                </div>
              </div>

              {/* Price range filter */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Price Range</label>
                  <span className="text-sm font-bold text-brand-primary">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="2500"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Min: $500</span>
                  <span>Max: $2500</span>
                </div>
              </div>
            </aside>

            {/* Departures Grid */}
            <div className="lg:col-span-3 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Showing {filteredDepartures.length} upcoming group departure{filteredDepartures.length !== 1 && 's'}
                </span>
              </div>

              {filteredDepartures.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-16 text-center">
                  <Calendar className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                  <h3 className="font-display text-lg font-bold text-slate-800 mb-1">No Departures Found</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Try broadening your search criteria or resetting the price filter in the sidebar.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDepartures.map((item) => (
                    <div 
                      key={item.id}
                      className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/60 shadow-sm transition hover:shadow-premium hover:-translate-y-1"
                    >
                      {/* Image header */}
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-w-4xl) 33vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Slots remaining badge */}
                        <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow-sm ${
                          item.spotsCount <= 4 ? 'bg-rose-500 animate-pulse' : 'bg-brand-primary'
                        }`}>
                          {item.spots}
                        </div>

                        {/* Price badge */}
                        <div className="absolute bottom-4 right-4 rounded-full bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-1.5 text-sm font-extrabold shadow-sm flex items-center">
                          <DollarSign className="h-4 w-4 text-brand-primary shrink-0" />
                          <span>{item.price}</span>
                          <span className="text-[10px] text-slate-400 font-bold ml-1">/ person</span>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="inline-flex items-center space-x-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <MapPin className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                            <span>{item.destination}</span>
                          </span>
                          <h3 className="font-display text-lg font-black text-slate-900 group-hover:text-brand-primary transition">
                            {item.name}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                            {item.details}
                          </p>
                        </div>

                        {/* Meta information row */}
                        <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-3.5 text-xs font-bold text-slate-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-brand-primary" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-brand-primary" />
                            <span>{item.duration}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleOpenDestinationEnquiry(item.name, item.date)}
                          className="w-full rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white py-3.5 text-sm font-bold shadow-premium transition hover:scale-[1.02]"
                        >
                          Book Your Spot
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* FAQ Section */}
          <div className="mt-16 border-t border-slate-200/60 pt-16 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-brand-light text-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Frequently Asked Questions</span>
              </span>
              <h2 className="font-display text-3xl font-black text-slate-900">Fixed Departure FAQs</h2>
              <p className="text-sm text-slate-500">
                Everything you need to know about our scheduled group tours, bookings, and policies.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-800 hover:text-brand-primary focus:outline-none transition"
                    >
                      <span className="text-base font-bold pr-4">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" />
                      )}
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-40 border-t border-slate-100' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed bg-white/50">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-400 border-t border-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
            
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-white">
                  <Landmark className="h-5 w-5" />
                </div>
                <span className="font-display text-lg font-black tracking-tight text-white leading-none">Wanderlust</span>
              </div>
              <p className="text-xs leading-relaxed">
                Discovering amazing places around the world since 2012. Our custom travel packages provide ultimate memories.
              </p>
            </div>

            {/* Column 2 - Links */}
            <div>
              <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="/" className="hover:text-white transition">About Our Agency</a></li>
                <li><a href="/#destinations" className="hover:text-white transition">Popular Destinations</a></li>
                <li><a href="/" className="hover:text-white transition">Travel Packages</a></li>
                <li><a href="#" className="hover:text-white transition">Latest Deals & Offers</a></li>
              </ul>
            </div>

            {/* Column 3 - Support */}
            <div>
              <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Support</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="/#faqs" className="hover:text-white transition">FAQ & Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="space-y-3 text-xs">
              <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Contact Info</h5>
              <div className="flex flex-col space-y-2">
                <a href="tel:+919873391733" className="flex items-center space-x-2 hover:text-white transition">
                  <Phone className="h-4 w-4 text-brand-primary" />
                  <span>+91 9873391733</span>
                </a>
                <a href="tel:+918979396413" className="flex items-center space-x-2 hover:text-white transition">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>+91 8979396413</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-primary" />
                <span>support@wanderlust.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-primary" />
                <span>123 Travel Way, New York, NY</span>
              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span>&copy; {new Date().getFullYear()} Wanderlust Travel Agency. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-white transition">
                <span>Next.js Web App</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>•</span>
              <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-white transition">
                <span>MongoDB Database</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Booking Modal */}
      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={handleModalClose} 
        selectedDestination={selectedDest}
      />
    </div>
  );
}
