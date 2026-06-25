'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import {
  Search, MapPin, Clock, Star, Filter, Check, ChevronRight,
  Bed, Utensils, Plane, Camera, Mountain, Waves, Car, X, SlidersHorizontal
} from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    id: 1,
    title: 'Luxury Maldives Honeymoon Package',
    slug: 'luxury-maldives-honeymoon-package',
    shortDescription: 'Overwater villas, seaplane transfers, candlelit dinners, spa indulgence, and unforgettable romantic island experiences.',
    price: '₹3,69,999',
    originalPrice: '₹3,99,999',
    duration: '5N/6D',
    destination: 'Maldives',
    country: 'Maldives',
    category: 'Premium Packages',
    tourType: 'international',
    rating: 4.8,
    reviews: 124,
    image: '/images/pkg_maldives.png',
    tags: ['Honeymoon', 'Luxury', 'Couples'],
    inclusions: ['Overwater Villa', 'Meals', 'Spa Session', 'Sunset Cruise'],
  },
  {
    id: 2,
    title: 'Shimla – Manali – Kasol Tour',
    slug: 'shimla-manali-kasol-tour',
    shortDescription: 'Experience the best of Himachal Pradesh in 7 days — scenic mountains, snow adventures, peaceful riverside moments.',
    price: '₹11,499',
    originalPrice: '₹13,000',
    duration: '6N/7D',
    destination: 'Himachal Pradesh',
    country: 'India',
    category: 'Trending Destinations',
    tourType: 'india',
    rating: 4.1,
    reviews: 89,
    image: '/images/pkg_shimla_manali.png',
    tags: ['Nature', 'Adventure', 'Group'],
    inclusions: ['Hotel', 'Breakfast & Dinner', 'Transport', 'Sightseeing'],
  },
  {
    id: 3,
    title: 'Dalhousie Khajjiar Getaway',
    slug: 'dalhousie-khajjiar-getaway',
    shortDescription: 'A relaxing trip through Dalhousie, Khajjiar, and Kalatop filled with scenic views, forest walks, and peaceful mountain vibes.',
    price: '₹6,000',
    originalPrice: '₹8,000',
    duration: '2N/3D',
    destination: 'Himachal Pradesh',
    country: 'India',
    category: 'Trending Destinations',
    tourType: 'india',
    rating: 4.5,
    reviews: 68,
    image: '/images/pkg_dalhousie.png',
    tags: ['Family', 'Nature', 'Weekend'],
    inclusions: ['Hotel', 'Breakfast', 'Transport', 'Sightseeing'],
  },
  {
    id: 4,
    title: 'Goa Escape: Beaches, Bliss & Adventure',
    slug: 'goa-escape-beaches-bliss-and-adventure',
    shortDescription: 'Explore Goa in depth with beaches, forts, waterfalls, islands, underwater adventures, and spa indulgence.',
    price: '₹11,999',
    originalPrice: '₹14,000',
    duration: '6N/7D',
    destination: 'Goa',
    country: 'India',
    category: 'Trending Destinations',
    tourType: 'india',
    rating: 4.1,
    reviews: 210,
    image: '/images/pkg_goa.png',
    tags: ['Beach', 'Family', 'Adventure'],
    inclusions: ['Hotel', 'Breakfast', 'Island Trip', 'Watersports'],
  },
  {
    id: 5,
    title: 'Rajasthan Adventure Activities',
    slug: 'rajasthan-adventure-activities',
    shortDescription: "Dune bashing, camel rides, ziplining, hot-air ballooning, trekking, and tiger safaris in Rajasthan's ultimate adventure trip.",
    price: '₹12,500',
    originalPrice: '₹14,000',
    duration: '3N/4D',
    destination: 'Rajasthan',
    country: 'India',
    category: 'Adventure Tours',
    tourType: 'india',
    rating: 4.7,
    reviews: 156,
    image: '/images/pkg_rajasthan.png',
    tags: ['Adventure', 'Desert', 'Wildlife'],
    inclusions: ['Camp/Hotel', 'Breakfast', 'Adventure Activities', 'Guide'],
  },
  {
    id: 6,
    title: 'Andaman & Nicobar Adventure Activities',
    slug: 'andaman-nicobar-adventure-activities',
    shortDescription: 'Scuba diving, snorkeling, kayaking, sea walking, and speed boating in this 3N/4D Andaman thrill trip.',
    price: '₹15,000',
    originalPrice: '₹17,000',
    duration: '3N/4D',
    destination: 'Andaman & Nicobar',
    country: 'India',
    category: 'Adventure Tours',
    tourType: 'india',
    rating: 4.7,
    reviews: 98,
    image: '/images/pkg_andaman.png',
    tags: ['Beach', 'Scuba Diving', 'Adventure'],
    inclusions: ['Hotel', 'Breakfast', 'All Watersports', 'Ferry Transfers'],
  },
];

const destinations = ['All', 'Maldives', 'Himachal Pradesh', 'Goa', 'Rajasthan', 'Andaman & Nicobar'];
const durations = ['All', '2-3 Days', '4-5 Days', '6-7 Days', '8+ Days'];
const tourTypes = ['All', 'India', 'International'];
const categories = ['All', 'Trending Destinations', 'Premium Packages', 'Adventure Tours'];

function getDurationCategory(dur: string) {
  const nights = parseInt(dur.split('N')[0]);
  if (nights <= 2) return '2-3 Days';
  if (nights <= 4) return '4-5 Days';
  if (nights <= 6) return '6-7 Days';
  return '8+ Days';
}

const inclusionIcons: Record<string, React.ReactNode> = {
  'Hotel': <Bed className="h-3.5 w-3.5" />,
  'Overwater Villa': <Bed className="h-3.5 w-3.5" />,
  'Camp/Hotel': <Bed className="h-3.5 w-3.5" />,
  'Meals': <Utensils className="h-3.5 w-3.5" />,
  'Breakfast': <Utensils className="h-3.5 w-3.5" />,
  'Breakfast & Dinner': <Utensils className="h-3.5 w-3.5" />,
  'Transport': <Car className="h-3.5 w-3.5" />,
  'Ferry Transfers': <Car className="h-3.5 w-3.5" />,
  'Sightseeing': <Camera className="h-3.5 w-3.5" />,
  'All Watersports': <Waves className="h-3.5 w-3.5" />,
  'Watersports': <Waves className="h-3.5 w-3.5" />,
  'Island Trip': <Plane className="h-3.5 w-3.5" />,
  'Sunset Cruise': <Plane className="h-3.5 w-3.5" />,
  'Spa Session': <Star className="h-3.5 w-3.5" />,
  'Adventure Activities': <Mountain className="h-3.5 w-3.5" />,
  'Guide': <MapPin className="h-3.5 w-3.5" />,
};

export default function PackagePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const [search, setSearch] = useState('');
  const [filterDest, setFilterDest] = useState('All');
  const [filterDuration, setFilterDuration] = useState('All');
  const [filterTourType, setFilterTourType] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleOpenEnquiry = (dest?: string) => {
    if (dest) setSelectedDest(dest);
    setModalOpen(true);
  };

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (filterDest !== 'All') {
      result = result.filter(p => p.destination === filterDest);
    }
    if (filterDuration !== 'All') {
      result = result.filter(p => getDurationCategory(p.duration) === filterDuration);
    }
    if (filterTourType !== 'All') {
      result = result.filter(p => p.tourType === filterTourType.toLowerCase());
    }
    if (filterCategory !== 'All') {
      result = result.filter(p => p.category === filterCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, filterDest, filterDuration, filterTourType, filterCategory, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setFilterDest('All');
    setFilterDuration('All');
    setFilterTourType('All');
    setFilterCategory('All');
    setSortBy('recommended');
  };

  const activeFilterCount = [filterDest, filterDuration, filterTourType, filterCategory]
    .filter(f => f !== 'All').length + (search ? 1 : 0);

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Search Packages</label>
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="e.g. Goa, Maldives, Adventure"
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
          />
          <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Tour Type */}
      <div>
        <h3 className="block text-sm font-bold text-slate-700 mb-3">Tour Type</h3>
        <div className="flex flex-wrap gap-2">
          {tourTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterTourType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                filterTourType === type
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations */}
      <div>
        <h3 className="block text-sm font-bold text-slate-700 mb-3">Destinations</h3>
        <div className="space-y-2">
          {destinations.map((dest) => (
            <label key={dest} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setFilterDest(dest)}
                className={`flex items-center justify-center h-5 w-5 rounded border transition-colors cursor-pointer ${
                  filterDest === dest
                    ? 'bg-brand-primary border-brand-primary'
                    : 'bg-white border-slate-300 group-hover:border-brand-primary'
                }`}
              >
                {filterDest === dest && <Check className="h-3.5 w-3.5 text-white" />}
              </div>
              <span
                onClick={() => setFilterDest(dest)}
                className={`text-sm cursor-pointer transition-colors ${
                  filterDest === dest ? 'text-brand-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'
                }`}
              >
                {dest}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="block text-sm font-bold text-slate-700 mb-3">Duration</h3>
        <div className="space-y-2">
          {durations.map((dur) => (
            <label key={dur} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setFilterDuration(dur)}
                className={`flex items-center justify-center h-5 w-5 rounded border transition-colors cursor-pointer ${
                  filterDuration === dur
                    ? 'bg-brand-primary border-brand-primary'
                    : 'bg-white border-slate-300 group-hover:border-brand-primary'
                }`}
              >
                {filterDuration === dur && <Check className="h-3.5 w-3.5 text-white" />}
              </div>
              <span
                onClick={() => setFilterDuration(dur)}
                className={`text-sm cursor-pointer transition-colors ${
                  filterDuration === dur ? 'text-brand-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'
                }`}
              >
                {dur}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="block text-sm font-bold text-slate-700 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setFilterCategory(cat)}
                className={`flex items-center justify-center h-5 w-5 rounded border transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-brand-primary border-brand-primary'
                    : 'bg-white border-slate-300 group-hover:border-brand-primary'
                }`}
              >
                {filterCategory === cat && <Check className="h-3.5 w-3.5 text-white" />}
              </div>
              <span
                onClick={() => setFilterCategory(cat)}
                className={`text-sm cursor-pointer transition-colors ${
                  filterCategory === cat ? 'text-brand-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'
                }`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={resetFilters}
          className="w-full py-2.5 border border-red-200 text-red-600 font-bold text-sm rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
        >
          <X className="h-4 w-4" />
          Clear All Filters ({activeFilterCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Spacer for fixed header */}
      <div className="relative w-full transition-all duration-300 md:mb-[5px] h-20 md:h-24"></div>

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-brand-dark py-10 md:py-14">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight font-display">Tour Packages</h1>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
              Browse our curated tour packages for India and international holidays, designed by destination, travel style, and budget.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Desktop Sidebar */}
            <aside className="lg:w-72 xl:w-80 hidden lg:block shrink-0">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-32 border border-slate-100">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-brand-primary" />
                    <h2 className="font-bold text-slate-900 text-lg">Filters</h2>
                  </div>
                  {activeFilterCount > 0 && (
                    <span className="bg-brand-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">{activeFilterCount}</span>
                  )}
                </div>
                <SidebarContent />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Top Bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-slate-500">
                    Showing <span className="text-slate-900">{filteredPackages.length}</span> of {packages.length} packages
                  </p>
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:border-brand-primary hover:text-brand-primary transition-all"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="bg-brand-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{activeFilterCount}</span>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 hidden sm:block">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-brand-primary"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="rating">Top Rated</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Package Cards */}
              {filteredPackages.length > 0 ? (
                <div className="grid gap-6">
                  {filteredPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-lg hover:border-slate-200 transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-56 md:h-auto md:w-[300px] xl:w-[340px] shrink-0 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Tags */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          {pkg.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="bg-white/95 backdrop-blur-sm text-brand-primary text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Category badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-brand-dark/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {pkg.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                          <div>
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold mb-1.5">
                              <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                              <span className="uppercase tracking-wider">{pkg.destination}, {pkg.country}</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-brand-primary transition-colors leading-snug">
                              {pkg.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-100 shrink-0">
                            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-bold text-amber-700">{pkg.rating}</span>
                            <span className="text-xs text-amber-600/70">({pkg.reviews})</span>
                          </div>
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{pkg.shortDescription}</p>

                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-1.5 font-medium bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 text-sm text-slate-600">
                            <Clock className="h-4 w-4 text-brand-primary" />
                            {pkg.duration}
                          </div>
                          <div className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                            pkg.tourType === 'international'
                              ? 'bg-purple-50 text-purple-700 border-purple-100'
                              : 'bg-green-50 text-green-700 border-green-100'
                          }`}>
                            {pkg.tourType === 'international' ? '🌍 International' : '🇮🇳 India'}
                          </div>
                        </div>

                        {/* Inclusions */}
                        <div className="mb-4">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Inclusions</p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.inclusions.map((item, i) => (
                              <span key={i} className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
                                {inclusionIcons[item] || <Check className="h-3.5 w-3.5" />}
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price + CTA */}
                        <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="text-xs text-slate-400 font-semibold mb-0.5">Starting from</p>
                            <div className="flex items-end gap-2">
                              <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                              <span className="text-sm text-slate-400 line-through mb-1">{pkg.originalPrice}</span>
                              <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1">
                                Save {Math.round((1 - parseInt(pkg.price.replace(/[^\d]/g, '')) / parseInt(pkg.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">Per person</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleOpenEnquiry(pkg.title)}
                              className="bg-white border border-brand-primary text-brand-primary hover:bg-brand-light px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
                            >
                              Enquire Now
                            </button>
                            <a
                              href={`/package/${pkg.slug}`}
                              className="bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1 transition-all shadow-sm hover:-translate-y-0.5"
                            >
                              Book Now <ChevronRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-100 text-center">
                  <Search className="h-12 w-12 text-slate-200 mb-4" />
                  <h3 className="text-lg font-bold text-slate-700 mb-2">No packages found</h3>
                  <p className="text-sm text-slate-400 mb-6">Try adjusting your filters or search query.</p>
                  <button onClick={resetFilters} className="px-5 py-2.5 bg-brand-primary text-white rounded-xl text-sm font-bold hover:bg-brand-secondary transition-colors">
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-brand-primary" />
                <h2 className="font-bold text-slate-900 text-lg">Filters</h2>
              </div>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <X className="h-5 w-5 text-slate-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <SidebarContent />
            </div>
            <div className="p-5 border-t border-slate-100">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-colors"
              >
                View {filteredPackages.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDestination={selectedDest}
      />
    </div>
  );
}
