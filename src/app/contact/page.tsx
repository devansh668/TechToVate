'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are your business hours?",
    answer: "Our team is available from Monday to Saturday, 10:00 AM to 5:00 PM (IST)."
  },
  {
    question: "Where are you located?",
    answer: "Our main office is located in Dehradun, India. However, we operate and manage tours globally with a network of trusted on-ground partners."
  },
  {
    question: "Do you offer customized tour packages?",
    answer: "Yes, absolutely! We specialize in creating custom itineraries tailored to your budget, preferences, and travel dates. Just fill out the contact form or call us to discuss."
  },
  {
    question: "How long does it take to get a response?",
    answer: "We strive to respond to all website enquiries and emails within 2-4 business hours."
  }
];

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleOpenEnquiry = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Text */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 font-display">
              Let's Plan Your <span className="text-brand-primary">Dream Trip</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Have a question about a package? Need a custom itinerary? Or just want to say hello? Our travel experts are here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Contact Information Cards - Left Side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                      <div className="space-y-1">
                        <a href="tel:+919873391733" className="block text-lg font-bold text-slate-900 hover:text-brand-primary transition">+91 9873391733</a>
                        <a href="tel:+918979396413" className="block text-lg font-bold text-slate-900 hover:text-brand-primary transition">+91 8979396413</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@wanderlust.com" className="block text-lg font-bold text-slate-900 hover:text-brand-primary transition">info@wanderlust.com</a>
                      <a href="mailto:support@wanderlust.com" className="block text-base text-slate-600 hover:text-brand-primary transition mt-1">support@wanderlust.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-base text-slate-900 font-medium">Dehradun, India</p>
                      <p className="text-base text-slate-600 mt-1">Global Operations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Business Hours</p>
                      <p className="text-base text-slate-900 font-medium">Mon - Sat: 10:00 AM - 5:00 PM</p>
                      <p className="text-base text-slate-600 mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 relative">
                
                {isSuccess ? (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-3 font-display">Message Sent!</h3>
                    <p className="text-slate-600 text-lg max-w-sm">
                      Thank you for reaching out to Wanderlust. One of our travel experts will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : null}

                <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        id="phone"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition"
                        placeholder="e.g. Custom Bali Tour"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message *</label>
                    <textarea 
                      required
                      id="message"
                      rows={5}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition resize-none"
                      placeholder="Tell us about your travel plans, dates, number of people, and any specific preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold text-lg rounded-xl px-6 py-4 transition-all duration-300 shadow-lg shadow-brand-primary/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-10 font-display">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-brand-primary shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180 text-brand-primary' : ''}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={handleModalClose} 
      />
    </div>
  );
}
