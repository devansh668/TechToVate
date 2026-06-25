'use client';

import React, { useState } from 'react';
import { Plane, Hotel, Gift, Sparkles, MapPin, Calendar, Users, Search } from 'lucide-react';

type TabType = 'flights' | 'hotels' | 'packages' | 'activities';

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('flights');
  
  // Form States
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('1 Traveler, Economy');
  const [guestCount, setGuestCount] = useState('2 Adults, 1 Room');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for ${activeTab}:\nDestination: ${to || 'Anywhere'}\nFrom: ${from || 'Default'}\nDate: ${departDate || 'Anytime'}`);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-25 -mt-24">
      <div className="w-full rounded-3xl bg-white shadow-glass p-6 md:p-8">
        
        {/* Tabs */}
        <div className="flex border-b border-slate-100 pb-4 mb-6 overflow-x-auto gap-2 md:gap-6 scrollbar-none">
          
          {/* Flights Tab */}
          <button
            onClick={() => setActiveTab('flights')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'flights' 
                ? 'bg-brand-light text-brand-primary' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Plane className="h-4 w-4" />
            <span>Flights</span>
          </button>

          {/* Hotels Tab */}
          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'hotels' 
                ? 'bg-brand-light text-brand-primary' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Hotel className="h-4 w-4" />
            <span>Hotels</span>
          </button>

          {/* Packages Tab */}
          <button
            onClick={() => setActiveTab('packages')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'packages' 
                ? 'bg-brand-light text-brand-primary' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Gift className="h-4 w-4" />
            <span>Packages</span>
          </button>

          {/* Activities Tab */}
          <button
            onClick={() => setActiveTab('activities')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition whitespace-nowrap ${
              activeTab === 'activities' 
                ? 'bg-brand-light text-brand-primary' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>Activities</span>
          </button>

        </div>

        {/* Form Content */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
          
          {/* Dynamic Fields */}
          {activeTab === 'flights' && (
            <>
              {/* From */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="New York (NYC)"
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* To */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Where to?"
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Depart */}
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Depart</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Return */}
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white appearance-none"
                  >
                    <option value="1 Traveler, Economy">1 Traveler, Economy</option>
                    <option value="2 Travelers, Economy">2 Travelers, Economy</option>
                    <option value="2 Travelers, Business">2 Travelers, Business</option>
                    <option value="4 Travelers, Economy">4 Travelers, Family</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'hotels' && (
            <>
              {/* Destination */}
              <div className="lg:col-span-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Destination / Hotel Name</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Where are you staying?"
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Check-in */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Check-In</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Check-Out</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white appearance-none"
                  >
                    <option value="1 Adult, 1 Room">1 Adult, 1 Room</option>
                    <option value="2 Adults, 1 Room">2 Adults, 1 Room</option>
                    <option value="2 Adults, 2 Rooms">2 Adults, 2 Rooms</option>
                    <option value="4 Adults, 2 Rooms">4 Adults, 2 Rooms</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'packages' && (
            <>
              {/* From */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Departure City</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="New York (NYC)"
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* To */}
              <div className="lg:col-span-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Package Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Where to? (e.g. Paris)"
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white appearance-none"
                  >
                    <option value="1 Traveler, Economy">1 Traveler</option>
                    <option value="2 Travelers, Economy">2 Travelers</option>
                    <option value="4 Travelers, Economy">4 Travelers</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'activities' && (
            <>
              {/* Location */}
              <div className="lg:col-span-5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Activity Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Enter city or activity type"
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="lg:col-span-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 text-sm focus:border-brand-primary focus:outline-none transition bg-white appearance-none"
                  >
                    <option value="1 Traveler, Economy">1 Guest</option>
                    <option value="2 Travelers, Economy">2 Guests</option>
                    <option value="4 Travelers, Economy">4 Guests</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Search Button */}
          <div className="lg:col-span-12 flex justify-end mt-4">
            <button
              type="submit"
              className="w-full lg:w-auto rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-bold px-8 py-3.5 text-sm shadow-premium transition flex items-center justify-center space-x-2 duration-200 hover:scale-[1.02]"
            >
              <Search className="h-4 w-4" />
              <span>
                {activeTab === 'flights' && 'Search Flights'}
                {activeTab === 'hotels' && 'Search Hotels'}
                {activeTab === 'packages' && 'Search Packages'}
                {activeTab === 'activities' && 'Search Activities'}
              </span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
