'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchWidget from '@/components/SearchWidget';
import Destinations from '@/components/Destinations';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { Phone, Mail, MapPin, Landmark, ExternalLink, ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Philosophy slider state
  const philosophyImages = [
    '/images/india_ladakh.jpg',
    '/images/india_shimla.jpg',
    '/images/bali_tanah_lot.jpg',
    '/images/bali_ubud.jpg',
    '/images/dubai.png',
    '/images/paris.png',
    '/images/budget_maldives.png',
    '/images/interlaken.png'
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % philosophyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [philosophyImages.length]);

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('');
    setModalOpen(true);
  };

  const handleOpenDestinationEnquiry = (destinationName: string) => {
    setSelectedDest(destinationName);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const faqs = [
    {
      question: "How do I book a custom travel package?",
      answer: "You can click the 'Enquire Now' button on our header or select 'Book Now' on any of our popular destination cards. Fill in your details, and our travel experts will contact you to design a personalized itinerary."
    },
    {
      question: "What is your refund and cancellation policy?",
      answer: "We offer free cancellations up to 14 days before scheduled departures for most hotels and flights. Custom packages may vary depending on vendor policies. We'll detail this before finalizing your booking."
    },
    {
      question: "Do you provide visa assistance?",
      answer: "Yes, we provide complete visa assistance, including document checklist curation, form filling guidance, and interview prep for all destinations included in our packages."
    },
    {
      question: "Can I customize the destinations and duration of packages?",
      answer: "Absolutely! Every package is custom-tailored to your choices. You can add destinations, extend your stay, or change activities based on your travel interests."
    },
    {
      question: "What support do you offer during my trip?",
      answer: "We offer 24/7 on-trip emergency customer assistance. You'll receive a dedicated hotline number to contact our local support team for any immediate assistance needed during your tour."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer group discounts for bookings of 8 or more travelers. Discounts vary depending on the destination and package chosen. Please mention your group size in the enquiry form for custom group pricing."
    },
    {
      question: "Are tour guides included in the packages?",
      answer: "We offer both self-guided and fully-guided packages. Fully-guided tours include a local certified English-speaking guide. For self-guided packages, we provide comprehensive smart-guides and route maps."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank wire transfers, and popular secure online payment gateways. Easy installment plans are also available for bookings made 3+ months in advance."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We communicate all dietary restrictions (e.g. vegetarian, vegan, gluten-free, halal, nut allergies) to hotels and included dining venues to ensure you are served safe and delicious meals."
    },
    {
      question: "Is international travel insurance mandatory?",
      answer: "While it is not always legally required by every country, we highly recommend purchasing travel insurance for all international trips to protect against unforeseen medical expenses, luggage loss, and trip interruptions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Hero Banner Section */}
      <Hero onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Interactive Search Panel */}
      <SearchWidget />

      {/* Core Destinations Section */}
      <main className="flex-grow">
        <Destinations onSelectDestination={handleOpenDestinationEnquiry} />

        {/* About Us Section */}
        <section id="about-us" className="py-20 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Visual Highlights */}
              <div className="relative space-y-6">
                <div className="rounded-3xl overflow-hidden relative h-[380px] w-full shadow-premium flex items-center justify-center p-8 text-white">
                  {philosophyImages.map((src, idx) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Philosophy Background"
                        fill
                        className="object-cover"
                        sizes="(max-w-7xl) 50vw, 100vw"
                      />
                    </div>
                  ))}
                  
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                    {/* Slider Indicators */}
                    <div className="flex items-center space-x-2">
                      {philosophyImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stat Grid Overlay */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm text-center">
                    <span className="block font-display text-3xl font-black text-brand-primary">6+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Experience</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm text-center">
                    <span className="block font-display text-3xl font-black text-brand-primary">50k+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Travelers</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm text-center">
                    <span className="block font-display text-3xl font-black text-brand-primary">100%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tailored Tours</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Text */}
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block">Who We Are</span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Crafting Unforgettable <br />Travel Stories Since 2020
                </h2>
                
                <p className="text-sm text-slate-500 leading-relaxed">
                  At Wanderlust Travel Agency, we believe travel is not just about visiting destinations, but about experiencing cultures, making connections, and creating lifelong memories. We specialize in custom-tailored itineraries that reflect your unique preferences and style of exploring the world.
                </p>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Whether you are planning a solo adventure, a romantic honeymoon, or a group trip, our travel specialists take care of all arrangements—from flights and premium accommodations to visa document guidance and local tours—ensuring a smooth and worry-free vacation.
                </p>

                {/* Features points list */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm font-semibold text-slate-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-light text-brand-primary font-bold text-[10px]">✓</span>
                    <span>Handpicked Premium Accommodations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-semibold text-slate-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-light text-brand-primary font-bold text-[10px]">✓</span>
                    <span>24/7 Global On-Trip Support & Assistance</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-semibold text-slate-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-light text-brand-primary font-bold text-[10px]">✓</span>
                    <span>Flexible Payment Options & Simple Installments</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Travel Blogs Section */}
        <section id="blogs" className="py-20 border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">Inspiration & News</span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900">Latest Travel Stories</h2>
                <p className="text-sm text-slate-500 mt-2">
                  Explore our curated travel tips, guides, and hidden gems written by seasoned travel experts.
                </p>
              </div>
              <div className="shrink-0 hidden md:block">
                <a 
                  href="/blogs" 
                  className="group inline-flex items-center space-x-2 rounded-2xl bg-brand-light hover:bg-brand-primary/10 text-brand-primary font-bold px-6 py-3.5 text-sm transition duration-300"
                >
                  <span>View All Articles</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Blog 1: Cheap Flights */}
              <div className="card-perspective">
                <article className="card-3d group flex flex-col overflow-hidden rounded-3xl border border-slate-100 shadow-sm bg-white h-full">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/cheap_flights_blog.jpg"
                      alt="How to get cheap international flights"
                      fill
                      sizes="(max-w-7xl) 25vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="card-3d-inner absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-sm">
                      Flight Hacks
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between card-3d-inner">
                    <div>
                      <span className="text-xs font-semibold text-slate-400">June 8, 2026</span>
                      <a href="/blogs/cheap-flights">
                        <h3 className="font-display text-base font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-primary transition line-clamp-2">
                          How to Get Cheap International Flights: Secrets That Work
                        </h3>
                      </a>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        Discover smart tips, best tools, and insider secrets that actually work to save big on your next international flight. Travel more, spend less!
                      </p>
                    </div>
                    <a href="/blogs/cheap-flights" className="mt-4 inline-flex items-center space-x-1 text-xs font-extrabold text-brand-primary hover:text-brand-secondary transition">
                      <span>Read Article</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              </div>

              {/* Blog 2: Bali Guide */}
              <div className="card-perspective">
                <article className="card-3d group flex flex-col overflow-hidden rounded-3xl border border-slate-100 shadow-sm bg-white h-full">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/bali_blog.jpg"
                      alt="Top 10 Places to Visit in Bali"
                      fill
                      sizes="(max-w-7xl) 25vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="card-3d-inner absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-sm">
                      Destination Guide
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between card-3d-inner">
                    <div>
                      <span className="text-xs font-semibold text-slate-400">June 5, 2026 • By Paradise Yatra</span>
                      <a href="/blogs/top-10-bali">
                        <h3 className="font-display text-base font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-primary transition line-clamp-2">
                          Top 10 Places to Visit in Bali for an Unforgettable Vacation
                        </h3>
                      </a>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        Discover the top 10 Places to Visit in Bali that promise a truly unforgettable experience. Explore Bali tour packages and plan your dream trip today!
                      </p>
                    </div>
                    <a href="/blogs/top-10-bali" className="mt-4 inline-flex items-center space-x-1 text-xs font-extrabold text-brand-primary hover:text-brand-secondary transition">
                      <span>Read Article</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              </div>

              {/* Blog 3: India Summer Spots */}
              <div className="card-perspective">
                <article className="card-3d group flex flex-col overflow-hidden rounded-3xl border border-slate-100 shadow-sm bg-white h-full">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/india_summer_blog.jpg"
                      alt="Best Summer Vacation Spots in India"
                      fill
                      sizes="(max-w-7xl) 25vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="card-3d-inner absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-sm">
                      Travel Ideas
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between card-3d-inner">
                    <div>
                      <span className="text-xs font-semibold text-slate-400">June 4, 2026 • By Paradise Yatra</span>
                      <a href="/blogs/summer-spots-india">
                        <h3 className="font-display text-base font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-primary transition line-clamp-2">
                          Best Summer Vacation Spots in India
                        </h3>
                      </a>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        Planning a summer getaway? Discover the best summer vacation spots in India, from cool hill stations and scenic valleys to relaxing beaches.
                      </p>
                    </div>
                    <a href="/blogs/summer-spots-india" className="mt-4 inline-flex items-center space-x-1 text-xs font-extrabold text-brand-primary hover:text-brand-secondary transition">
                      <span>Read Article</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              </div>

              {/* Blog 4: Budget International Trips */}
              <div className="card-perspective">
                <article className="card-3d group flex flex-col overflow-hidden rounded-3xl border border-slate-100 shadow-sm bg-white h-full">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/budget_international_blog.jpg"
                      alt="Budget-Friendly International Trips from India"
                      fill
                      sizes="(max-w-7xl) 25vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="card-3d-inner absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-sm">
                      Budget Travel
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between card-3d-inner">
                    <div>
                      <span className="text-xs font-semibold text-slate-400">June 3, 2026 • By Paradise Yatra</span>
                      <a href="/blogs/budget-international">
                        <h3 className="font-display text-base font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-primary transition line-clamp-2">
                          Budget-Friendly International Trips from India
                        </h3>
                      </a>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        Looking for affordable international vacations? Discover the best budget-friendly international trips from India, including top destinations, travel costs, and visa details.
                      </p>
                    </div>
                    <a href="/blogs/budget-international" className="mt-4 inline-flex items-center space-x-1 text-xs font-extrabold text-brand-primary hover:text-brand-secondary transition">
                      <span>Read Article</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* View All Button (Mobile Only) */}
            <div className="mt-12 text-center md:hidden">
              <a 
                href="/blogs" 
                className="group inline-flex items-center space-x-2 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-primary text-slate-800 hover:text-brand-primary font-bold px-6 py-3.5 text-sm shadow-sm hover:shadow-premium transition duration-300"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="bg-white border-t border-b border-slate-200/60 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-brand-light text-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Frequently Asked Questions</span>
              </span>
              <h2 className="font-display text-3xl font-black text-slate-900">Got Questions? We Have Answers</h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Find answers to common questions about our travel bookings, cancellations, itineraries, and support services.
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
        </section>
      </main>

      <Footer />

      {/* Floating Booking Modal */}
      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={handleModalClose} 
        selectedDestination={selectedDest}
      />
    </div>
  );
}
