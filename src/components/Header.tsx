'use client';

import React, { useState } from 'react';
import { Plane, Phone, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2 xl:gap-4">
          
          <div className="flex items-center gap-4 xl:gap-8">
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-premium animate-pulse">
                <Plane className="h-6 w-6 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-black tracking-tight text-brand-dark leading-none">Wanderlust</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Travel Agency</span>
              </div>
            </div>

            <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-5">
              <a href="/" className="relative text-sm font-semibold text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Home</a>
              <a href="/#destinations" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Destinations</a>
              
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-primary transition py-2 whitespace-nowrap">
                  <span>Packages</span>
                  <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 w-56 rounded-xl bg-white shadow-xl ring-1 ring-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <a href="/international-packages" className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition whitespace-nowrap">International Packages</a>
                    <a href="/indian-tour-packages" className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition whitespace-nowrap">Indian Tour Packages</a>
                  </div>
                </div>
              </div>

              <a href="/fixed-departures" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Fixed Departures</a>
              <a href="/#blogs" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Blogs</a>
              <a href="/gallery" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Gallery</a>
              <a href="/payment" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Payment</a>
              <a href="/contact" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition whitespace-nowrap">Contact</a>
            </nav>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-6">
            <div className="flex items-center space-x-3 2xl:space-x-4 text-xs 2xl:text-sm">
              <a href="tel:+919873391733" className="flex items-center space-x-1.5 font-bold text-slate-700 hover:text-brand-primary transition whitespace-nowrap">
                <Phone className="h-3.5 w-3.5 text-brand-primary" />
                <span>+91 9873391733</span>
              </a>
              <a href="tel:+918979396413" className="hidden 2xl:flex items-center space-x-1.5 font-bold text-slate-500 hover:text-brand-primary transition whitespace-nowrap">
                <Phone className="h-3.5 w-3.5 text-slate-400" />
                <span>+91 8979396413</span>
              </a>
            </div>
            <button
              onClick={onOpenEnquiry}
              className="rounded-full bg-brand-primary hover:bg-brand-secondary text-white px-4 2xl:px-6 py-2 2xl:py-2.5 text-sm font-semibold shadow-premium transition hover:scale-105 duration-200 whitespace-nowrap"
            >
              Enquire Now
            </button>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white/95 px-4 py-4 space-y-3 shadow-lg">
          <a href="/" className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Home</a>
          <a href="/#destinations" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Destinations</a>
          
          {/* Packages Menu */}
          <div className="space-y-1">
            <div className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600">Packages</div>
            <div className="pl-6 space-y-1">
              <a href="/international-packages" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-brand-primary">International Packages</a>
              <a href="/indian-tour-packages" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-brand-primary">Indian Tour Packages</a>
            </div>
          </div>

          <a href="/fixed-departures" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Fixed Departures</a>
          <a href="/#blogs" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Blogs</a>
          <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Gallery</a>
          <a href="/payment" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Payment</a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary">Contact</a>
          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div className="flex flex-wrap items-center gap-4 px-3">
              <a href="tel:+919873391733" className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                <Phone className="h-4 w-4 text-brand-primary" />
                <span>+91 9873391733</span>
              </a>
              <a href="tel:+918979396413" className="flex items-center space-x-2 text-sm font-bold text-slate-500">
                <Phone className="h-4 w-4 text-slate-400" />
                <span>+91 8979396413</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full rounded-xl bg-brand-primary hover:bg-brand-secondary text-white py-3 text-base font-semibold shadow-premium transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
