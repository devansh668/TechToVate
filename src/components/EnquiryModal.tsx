'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Loader2, Phone, Mail, User, MapPin, MessageSquare } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDestination?: string;
}

export default function EnquiryModal({ isOpen, onClose, selectedDestination = '' }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (selectedDestination) {
        setDestination(selectedDestination);
      } else {
        setDestination('');
      }
      // Reset state on open
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
      setError('');
    }
  }, [isOpen, selectedDestination]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!name || !email || !phone || !destination || !message) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const base = process.env.NEXT_PUBLIC_API_URL || '';
      const res = await fetch(`${base}/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, destination, message }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to submit enquiry. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-glass animate-float duration-300 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h3 className="font-display text-xl font-bold text-slate-900">
            {submitted ? 'Enquiry Submitted' : 'Enquire About Your Trip'}
          </h3>
          <button 
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4 animate-bounce" />
              <h4 className="font-display text-2xl font-bold text-slate-900 mb-2">Thank You!</h4>
              <p className="text-slate-600 max-w-sm mb-6">
                Your enquiry for <span className="font-semibold text-brand-primary">{destination}</span> has been received. Our travel agents will contact you shortly!
              </p>
              <button
                onClick={onClose}
                className="w-full rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3.5 transition shadow-premium"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-100 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (234) 567-8900"
                      className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Destination Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Destination</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where do you want to go?"
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Message / Requirements</label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your preferences, number of travelers, budget, or travel dates..."
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none transition resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3.5 transition shadow-premium flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
