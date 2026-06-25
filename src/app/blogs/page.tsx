'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import BlogHeroSlider from '@/components/BlogHeroSlider';
import Image from 'next/image';
import { Phone, Mail, MapPin, Landmark, ExternalLink, Calendar, Search, ArrowRight, User } from 'lucide-react';

interface Blog {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  description: string;
}

export default function BlogsIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const blogs: Blog[] = [
    {
      slug: 'cheap-flights',
      title: 'How to Get Cheap International Flights: Secrets That Work',
      category: 'Flight Hacks',
      date: 'June 8, 2026',
      author: 'Paradise Yatra',
      image: '/images/cheap_flights_blog.jpg',
      description: 'Discover smart tips, best tools, and insider secrets that actually work to save big on your next international flight. Travel more, spend less!'
    },
    {
      slug: 'top-10-bali',
      title: 'Top 10 Places to Visit in Bali for an Unforgettable Vacation',
      category: 'Destination Guide',
      date: 'June 5, 2026',
      author: 'Paradise Yatra',
      image: '/images/bali_blog.jpg',
      description: 'Discover the top 10 Places to Visit in Bali that promise a truly unforgettable experience. Explore Bali tour packages and plan your dream trip today!'
    },
    {
      slug: 'summer-spots-india',
      title: 'Best Summer Vacation Spots in India',
      category: 'Travel Ideas',
      date: 'June 4, 2026',
      author: 'Paradise Yatra',
      image: '/images/india_summer_blog.jpg',
      description: 'Planning a summer getaway? Discover the best summer vacation spots in India, from cool hill stations and scenic valleys to relaxing beaches.'
    },
    {
      slug: 'budget-international',
      title: 'Budget-Friendly International Trips from India',
      category: 'Budget Travel',
      date: 'June 3, 2026',
      author: 'Paradise Yatra',
      image: '/images/budget_international_blog.jpg',
      description: 'Looking for affordable international vacations? Discover the best budget-friendly international trips from India, including top destinations, travel costs, and visa details.'
    }
  ];

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('Blogs Page Enquiry');
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Main Container */}
      <main className="flex-grow bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Title & Intro */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block">Wanderlust Journal</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our Latest Travel Stories</h1>
            <p className="text-sm sm:text-base text-slate-500 mb-8">
              Explore our comprehensive destination guides, expert budget travel tips, and flight booking hacks designed to help you explore the world.
            </p>
          </div>

          {/* Featured Hero Slider */}
          <BlogHeroSlider />

          {/* Search Filter Bar */}
          <div className="max-w-md mx-auto mb-16 relative">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles, categories, locations..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredBlogs.map((blog) => (
                <div key={blog.slug} className="card-perspective">
                  <article className="card-3d group flex flex-col overflow-hidden rounded-3xl border border-slate-100 shadow-sm bg-white h-full">
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-w-7xl) 25vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="card-3d-inner absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between card-3d-inner">
                      <div>
                        <span className="text-xs font-semibold text-slate-400">
                          {blog.date} {blog.author ? `• By ${blog.author}` : ''}
                        </span>
                        <a href={`/blogs/${blog.slug}`}>
                          <h3 className="font-display text-base font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-primary transition line-clamp-2">
                            {blog.title}
                          </h3>
                        </a>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                          {blog.description}
                        </p>
                      </div>
                      <a 
                        href={`/blogs/${blog.slug}`} 
                        className="mt-4 inline-flex items-center space-x-1 text-xs font-extrabold text-brand-primary hover:text-brand-secondary transition"
                      >
                        <span>Read Article</span>
                        <span>→</span>
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/50 shadow-sm max-w-xl mx-auto space-y-4">
              <span className="text-3xl">🔍</span>
              <h3 className="font-display text-lg font-bold text-slate-800">No articles found</h3>
              <p className="text-sm text-slate-500 px-6">
                We couldn&apos;t find any stories matching &ldquo;{searchQuery}&rdquo;. Try checking the spelling or searching for another keyword.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-brand-primary hover:text-brand-secondary transition"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>
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
