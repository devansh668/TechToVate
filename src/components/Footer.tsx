import React from 'react';
import { Landmark, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-slate-800 py-12 mt-auto">
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
              <li><a href="#" className="hover:text-white transition">About Our Agency</a></li>
              <li><a href="/#destinations" className="hover:text-white transition">Popular Destinations</a></li>
              <li><a href="#" className="hover:text-white transition">Travel Packages</a></li>
              <li><a href="#" className="hover:text-white transition">Latest Deals & Offers</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Support</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">FAQ & Help Center</a></li>
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
  );
}
