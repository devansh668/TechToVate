'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { ChevronRight, Plane, Calendar, ArrowUpRight, Copy, BadgeCheck, Square, ShieldCheck, CreditCard, Lock, Phone, Mail, Landmark, CheckSquare } from 'lucide-react';
import Image from 'next/image';

export default function PaymentPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({...prev, [id]: !prev[id]}));
  };

  const handleOpenEnquiry = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText('https://razorpay.me/@paradiseyatra1352');
    alert('Payment link copied!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-grow mx-auto max-w-[1120px] px-4 py-8 md:px-6 md:py-10 w-full">
        {/* Header Section */}
        <section className="rounded-xl bg-white py-6 text-center shadow-sm border border-slate-100">
          <h1 className="font-display text-[28px] font-black tracking-tight text-slate-900 md:text-[34px]">Lets get this done</h1>
          <p className="mt-2 text-sm font-medium text-slate-600 md:text-[15px]">Simple, verified payment options with clear next steps for confirmation.</p>
        </section>

        {/* Steps Section */}
        <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-3">
            <div className="relative px-4 py-5 text-center bg-white border-b border-slate-200 md:border-b-0 md:border-r">
              <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">Step 1</p>
              <p className="mt-1 text-[15px] font-extrabold text-slate-900">Select Booking Type</p>
              <div className="absolute right-[-12px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white md:flex">
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>
            <div className="relative px-4 py-5 text-center bg-white border-b border-slate-200 md:border-b-0 md:border-r">
              <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">Step 2</p>
              <p className="mt-1 text-[15px] font-extrabold text-slate-900">Choose Payment Method</p>
              <div className="absolute right-[-12px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white md:flex">
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>
            <div className="relative px-4 py-5 text-center bg-white">
              <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">Step 3</p>
              <p className="mt-1 text-[15px] font-extrabold text-slate-900">Share Details & Confirm</p>
            </div>
          </div>
        </section>

        {/* Booking Types */}
        <section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <a className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:border-brand-primary hover:shadow-premium" href="/package">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-brand-light text-brand-primary">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[16px] font-bold text-slate-900">Package Booking</p>
                  <p className="mt-0.5 text-[13px] text-slate-500">Select your travel package first, then continue with payment.</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
            </a>
            <a className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:border-brand-primary hover:shadow-premium" href="/fixed-departures">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-brand-light text-brand-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[16px] font-bold text-slate-900">Fixed Departure</p>
                  <p className="mt-0.5 text-[13px] text-slate-500">Choose your departure date first, then proceed to pay.</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
            </a>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Razorpay Section */}
          <div className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm flex flex-col">
            <div className="bg-slate-900 px-5 py-4 text-center text-[20px] md:text-[24px] font-black tracking-tight text-white">Instant Gateway (Razorpay)</div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <a href="https://razorpay.me/@paradiseyatra1352" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-brand-secondary shadow-premium">
                Pay Securely with Razorpay
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-8 flex-grow">
                <p className="text-[17px] font-extrabold text-slate-900">Accepted UPI, Cards, Net Banking, Wallets</p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">Razorpay payment link provides a trusted method for cards and net banking, while also supporting UPI apps and secure wallet transactions.</p>
              </div>
              <div className="mt-8 flex justify-center">
                 <img src="https://badges.razorpay.com/badge-light.png" alt="Razorpay" className="h-[45px] object-contain" />
              </div>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-center text-[13px] font-bold text-slate-900">Unique payment link</p>
                <div className="mt-3 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-slate-600">https://razorpay.me/@paradiseyatra1352</span>
                  <button type="button" onClick={copyLink} className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-500 transition-colors hover:bg-brand-light hover:text-brand-primary hover:border-brand-primary/30" title="Copy link">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Bank Transfer Section */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <div className="bg-slate-100 px-5 py-4 text-center text-[20px] md:text-[24px] font-black tracking-tight text-slate-900">Direct Bank Transfer</div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[17px] font-extrabold text-slate-900">Verified Bank Details</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-[12px] font-bold text-green-700">
                  <BadgeCheck className="h-4 w-4" />
                  Verified
                </span>
              </div>
              <div className="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-5 flex-grow">
                <div className="space-y-4">
                  <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start">
                    <span className="w-[120px] shrink-0 text-[13px] font-bold text-slate-500 uppercase tracking-wide">Account Holder</span>
                    <span className="hidden text-[13px] font-bold text-slate-900 sm:inline">:</span>
                    <span className="text-[14px] font-bold text-slate-900 sm:ml-2">PARADISE YATRA</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start">
                    <span className="w-[120px] shrink-0 text-[13px] font-bold text-slate-500 uppercase tracking-wide">Bank Name</span>
                    <span className="hidden text-[13px] font-bold text-slate-900 sm:inline">:</span>
                    <span className="text-[14px] font-bold text-slate-900 sm:ml-2">HDFC</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start">
                    <span className="w-[120px] shrink-0 text-[13px] font-bold text-slate-500 uppercase tracking-wide">Account No.</span>
                    <span className="hidden text-[13px] font-bold text-slate-900 sm:inline">:</span>
                    <span className="text-[14px] font-bold text-slate-900 sm:ml-2 font-mono">50200053051934</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start">
                    <span className="w-[120px] shrink-0 text-[13px] font-bold text-slate-500 uppercase tracking-wide">IFSC Code</span>
                    <span className="hidden text-[13px] font-bold text-slate-900 sm:inline">:</span>
                    <span className="text-[14px] font-bold text-slate-900 sm:ml-2 font-mono">HDFC0000225</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start">
                    <span className="w-[120px] shrink-0 text-[13px] font-bold text-slate-500 uppercase tracking-wide">Branch</span>
                    <span className="hidden text-[13px] font-bold text-slate-900 sm:inline">:</span>
                    <span className="text-[14px] font-bold text-slate-900 sm:ml-2">RAJPUR ROAD, DEHRADUN</span>
                  </div>
                </div>
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-[13px] font-extrabold uppercase tracking-widest text-slate-900">NEFT / IMPS / RTGS</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">Use these verified details for direct transfer. After payment, share your transaction reference so our team can verify and confirm the booking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Payment Checklist */}
        <section className="mt-12 space-y-5">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between border-b border-slate-100 pb-6">
              <div>
                <h2 className="text-[24px] font-black tracking-tight text-slate-900 md:text-[32px]">Post-Payment Checklist</h2>
              </div>
              <p className="max-w-[500px] text-[14px] leading-relaxed text-slate-600 md:text-right">Share these details once payment is done so the team can verify quickly and lock the booking without follow-up delays.</p>
            </div>
            <div className="mt-6 grid gap-x-8 gap-y-2 md:grid-cols-2">
              {[
                { id: 'razorpay', label: 'Razorpay ID or UTR number' },
                { id: 'name', label: 'Full name used for the booking' },
                { id: 'package', label: 'Package or departure name' },
                { id: 'date', label: 'Travel date and total travellers' },
              ].map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => toggleCheck(item.id)}
                  className="flex items-center gap-3 border-b border-slate-100 py-4 last:border-b-0 md:last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 cursor-pointer group"
                >
                  {checkedItems[item.id] ? (
                    <CheckSquare className="h-5 w-5 shrink-0 text-brand-primary" />
                  ) : (
                    <Square className="h-5 w-5 shrink-0 text-slate-300 group-hover:text-brand-primary transition-colors" />
                  )}
                  <p className={`text-[15px] font-bold transition-colors ${checkedItems[item.id] ? 'text-slate-800' : 'text-slate-600'}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Notes */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 md:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-[24px] font-black tracking-tight text-amber-900 md:text-[28px]">Important Security Notes</h2>
              <p className="max-w-[600px] text-[14px] leading-relaxed text-amber-800">Treat this as a final payment safety check. Every point below directly protects the booking and the customer.</p>
            </div>
            <div className="mt-6 space-y-0">
              <div className="flex items-start gap-4 border-b border-amber-200/60 py-4 last:border-b-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm border border-amber-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-amber-900">Use verified details only</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-amber-800">Pay only through the Razorpay link and bank details shown on this page.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-amber-200/60 py-4 last:border-b-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm border border-amber-100">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-amber-900">Never share card secrets</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-amber-800">Do not share OTP, card PIN, CVV, or banking passwords with anyone.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-amber-200/60 py-4 last:border-b-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm border border-amber-100">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-amber-900">Confirmation follows verification</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-amber-800">Payment is reviewed by our team before the booking is fully confirmed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[20px] font-black text-slate-900 tracking-tight">Need help after payment?</p>
              <p className="mt-1.5 text-[14px] text-slate-600">Share your payment reference and booking details with our team for verification.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+918031274154" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-[14px] font-bold text-slate-800 transition-colors hover:bg-slate-100 hover:border-slate-300 shadow-sm">
                <Phone className="h-4 w-4 text-brand-primary" />
                +91 8031274154
              </a>
              <a href="mailto:info@paradiseyatra.com" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-[14px] font-bold text-slate-800 transition-colors hover:bg-slate-100 hover:border-slate-300 shadow-sm">
                <Mail className="h-4 w-4 text-brand-primary" />
                info@paradiseyatra.com
              </a>
              <a className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-brand-secondary shadow-premium hover:shadow-lg hover:-translate-y-0.5 duration-200" href="/contact">
                <Landmark className="h-4 w-4" />
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={handleModalClose} 
      />
    </div>
  );
}
