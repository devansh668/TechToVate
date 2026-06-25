'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';
import { Phone, Mail, MapPin, Landmark, ExternalLink, Calendar, Clock, ChevronLeft, ArrowRight, ChevronDown, ChevronUp, HelpCircle, User } from 'lucide-react';

export default function BudgetInternationalBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the cheapest month to fly from India to Southeast Asia?",
      answer: "Typically, the shoulder seasons (September to November and March to April) offer the cheapest flights to Southeast Asia. Avoiding major holidays like Diwali, Christmas, and New Year can save up to 40% on airfare."
    },
    {
      question: "Which international destinations offer visa-free entry or visa-on-arrival for Indians?",
      answer: "Countries like Nepal and Bhutan offer visa-free entry. Thailand, Sri Lanka, Maldives, and Indonesia (Bali) provide visa-on-arrival or easy e-visas for Indian passport holders."
    },
    {
      question: "How much daily budget should I estimate for a trip to Vietnam?",
      answer: "Vietnam is highly affordable. A budget traveler can manage with $30–$40 USD (approx. ₹2,500–₹3,500) per day, covering hostel/budget hotel stay, street food, local transport, and sightseeing."
    },
    {
      question: "Is travel insurance mandatory for budget international trips?",
      answer: "While not mandatory for all Asian countries, travel insurance is highly recommended. It covers medical emergencies, trip cancellations, and lost luggage for a very small premium (usually ₹500–₹1,000)."
    },
    {
      question: "What is the best way to handle foreign currency and payments abroad?",
      answer: "Use a mix of a zero-forex markup debit/credit card and a small amount of local cash. Forex cards are safer than carrying large amounts of cash and offer better exchange rates than airport counters."
    },
    {
      question: "Can I travel to the Maldives on a tight budget?",
      answer: "Yes! By staying in local guesthouses on inhabited islands like Maafushi or Dhiffushi instead of private resorts, using public ferries, and eating at local cafes, you can experience the Maldives for a fraction of the cost."
    },
    {
      question: "How do I find cheap flights from India to Dubai?",
      answer: "Look for budget carriers like Air India Express, Indigo, SpiceJet, or Flydubai. Booking 4-6 weeks in advance and choosing mid-week departures (Tuesdays/Wednesdays) usually gets the best fares."
    },
    {
      question: "Do Indian tourists need a passport to visit Nepal or Bhutan?",
      answer: "For Nepal, Indian citizens do not need a passport if they carry a valid Voter ID card. For Bhutan, a valid passport or Voter Identity Card issued by the Election Commission of India is required."
    },
    {
      question: "How can families save money on international packages?",
      answer: "Families can save by booking customized packages that bundle flights, family suites, and group transfers. Paradise Yatra offers tailored packages that optimize costs for families without compromising on comfort."
    },
    {
      question: "Is Malaysia a budget-friendly destination for a 5-day trip?",
      answer: "Yes, Malaysia is very pocket-friendly. A 5-day trip to Kuala Lumpur and Langkawi can easily be done for ₹40,000–₹50,000 per person including flights, mid-range hotels, and sightseeing if booked in advance."
    }
  ];

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('Budget International Package (Paradise Yatra)');
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Main Container */}
      <main className="flex-grow bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <a 
            href="/#blogs" 
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-brand-primary mb-8 transition"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back to Stories</span>
          </a>

          {/* Article Header */}
          <article className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
            
            {/* Banner Image */}
            <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100">
              <Image
                src="/images/budget_international_blog.jpg"
                alt="Budget-Friendly International Trips from India"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Article Meta & Title */}
            <div className="p-6 sm:p-10 border-b border-slate-100 space-y-4">
              <div className="flex flex-wrap gap-3 items-center text-xs font-bold text-slate-400">
                <span className="rounded-full bg-brand-light text-brand-primary px-3.5 py-1 uppercase tracking-wider">
                  Budget Travel
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span>Paradise Yatra (Editorial Contributor)</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>June 3, 2026</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>5 Min Read</span>
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Budget-Friendly International Trips from India
              </h1>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-base sm:text-lg">
                Looking for affordable international vacations? Discover the best budget-friendly international trips from India, including top destinations, travel costs, visa details, and money-saving tips for an unforgettable overseas adventure.
              </p>

              <p>
                When it comes to international travel, one of the things that is always thought to be expensive right from the beginning is the cost of flights and visas etc.
              </p>

              <p>
                But not every trip abroad has to be a luxury budget or require months of money planning. There are a few countries around India with still beaches, mountain views, buzzing nightlife, shopping streets and cultural experience all for a not so high amount.
              </p>

              <p>
                Instead of these super expensive long-haul getaways, there has been a trend for more travellers to look for Budget-Friendly International Trips recently. Cheaper flights, visa-on-arrival options and budget friendly places to stay mean students, couples, families and solo travellers can travel abroad more easily.
              </p>

              <p>
                If your first trip abroad is in 2026 and you want it to be fun and not a bank breaker, here are some places to consider adding to your list.
              </p>

              {/* 1. Thailand */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                1. Thailand
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_thailand.jpg", "/images/budget_international_blog.jpg", "/images/dubai.png", "/images/new_malaysia.jpg", "/images/budget_nepal.png"]} alt="Wat Arun temple in Bangkok Thailand" />
                </div>
                <div className="space-y-4">
                  <p>
                Thailand is probably one of the most familiar international destinations for Indian travelers, and it honestly gives strong value for the money.
              </p>
              <p>
                The country basically offers travelers a blend of things like beaches, nightlife, shopping, island hopping, street food, temples, and some adventure activities too.
              </p>
              <p>
                Places such as Bangkok, Phuket, Pattaya, Krabi still stay incredibly popular, because flights are comparatively affordable, and everyday local travel costs remain fairly manageable.
              </p>
              <p>
                If someone is searching for exciting yet Budget-Friendly International Trips, Thailand tends to be one of the easiest picks.
              </p>
                </div>
              </div>
              {/* 2. Bali, Indonesia */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                2. Bali, Indonesia
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_bali.png", "/images/paris.png", "/images/budget_thailand.jpg", "/images/budget_bhutan.jpg", "/images/budget_vietnam.png"]} alt="Pura Ulun Danu Bratan temple in Bali Indonesia" />
                </div>
                <div className="space-y-4">
                  <p>
                Bali has become massively popular with Indian tourists in the last few years.
              </p>
              <p className="font-semibold text-slate-800">
                The island offers a beautiful mix of:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Scenic bays and beaches</li>
                <li>Waterfalls and cozy cafes</li>
                <li>Lush green rice terraces</li>
                <li>Stunning temples and budget villas</li>
              </ul>
              <p>
                Many travellers don’t expect just how downright luxurious Bali can be – without costing the earth.
              </p>
              <p>
                Budget villas, cafes and scooter rentals can help travellers save some money and still have an awesome experience. Bali is thought to be the most affordable among all international destinations for beauty and value.
              </p>
                </div>
              </div>
              {/* 3. Nepal */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                3. Nepal
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_nepal.png", "/images/dubai.png", "/images/budget_international_blog.jpg", "/images/budget_singapore.png", "/images/budget_vietnam.png"]} alt="Mountain views and traveler in Nepal" />
                </div>
                <div className="space-y-4">
                  <p>
                Nepal is one of the most proximate international destinations from India and ranks first in the list of cheap travel destinations.
              </p>
              <p className="font-semibold text-slate-800">
                The country offers:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Incredible mountain views and trekking routes</li>
                <li>Historic temples and spiritual encounters</li>
                <li>Peaceful towns nestled in the Himalayas</li>
              </ul>
              <p>
                For example, Kathmandu and Pokhara are particularly popular with budget travellers. For some travel routes into Nepal where Indians do not need a passport, the overall travel process seems easier than many other international destinations.
              </p>
                </div>
              </div>
              {/* 4. Vietnam */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                4. Vietnam
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_vietnam.png", "/images/budget_thailand.jpg", "/images/budget_international_blog.jpg", "/images/budget_bali.png", "/images/budget_maldives.png"]} alt="Golden Bridge in Ba Na Hills Da Nang Vietnam" />
                </div>
                <div className="space-y-4">
                  <p>
                Seriously, Vietnam is one of the most underrated cheap international travel destinations.
              </p>
              <p className="font-semibold text-slate-800">
                The country mixes:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Panoramic mountain and coastal views</li>
                <li>Incredible street food and vibrant nightlife</li>
                <li>Sandy beaches and historic cities</li>
                <li>Remarkable budget-friendly stays</li>
              </ul>
              <p>
                Ho Chi Minh City is a great place to experience great food, cheap accommodation and beautiful sights. Vietnam is still cheap and has a lot to offer and as a result many travellers are missing out on the more popular tourist areas in the country.
              </p>
                </div>
              </div>
              {/* 5. Sri Lanka */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                5. Sri Lanka
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_srilanka.png", "/images/paris.png", "/images/budget_thailand.jpg", "/images/budget_vietnam.png", "/images/budget_singapore.png"]} alt="Sri Lanka beach with palm trees and ocean" />
                </div>
                <div className="space-y-4">
                  <p>
                Sri Lanka is perfect for people who want beaches, green nature, animals and peacefull sceneries near to India.
              </p>
              <p className="font-semibold text-slate-800">
                The country has:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Lush green tea plantations and beautiful beaches</li>
                <li>Scenic train journeys and rushing waterfalls</li>
                <li>Rich cultural heritage sites</li>
              </ul>
              <p>
                Cities like Colombo, Kandy, and Ella are still a hit with couples and backpackers. In all honesty, train rides through Sri Lanka’s green mountainous regions are one of the most memorable parts of the trip.
              </p>
                </div>
              </div>
              {/* 6. Dubai */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                6. Dubai
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_dubai.png", "/images/budget_thailand.jpg", "/images/dubai.png", "/images/interlaken.png", "/images/new_bali.jpg"]} alt="Dubai skyline at night showing illuminated skyscrapers" />
                </div>
                <div className="space-y-4">
                  <p>
                Dubai might sound expensive at first but honestly you can travel on a budget here very well if you plan well. Cheap flights from India make it possible, and metro connectivity and budget hotels make it easier for tourists to explore the city without much of a cost.
              </p>
              <p className="font-semibold text-slate-800">
                Popular attractions include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Burj Khalifa and Dubai Marina</li>
                <li>Exciting Dubai Desert Safari Trips</li>
                <li>Global Village and premium Malls</li>
              </ul>
              <p>
                If you want luxury experiences but do not want to take extremely long travel routes, Dubai still is among the most practical Budget-Friendly International Trips from India.
              </p>
                </div>
              </div>
              {/* 7. Bhutan */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                7. Bhutan
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_bhutan.jpg", "/images/dubai.png", "/images/budget_international_blog.jpg", "/images/new_thailand.jpg", "/images/new_malaysia.jpg"]} alt="Bhutan suspension bridge decorated with prayer flags" />
                </div>
                <div className="space-y-4">
                  <p>
                Bhutan feels so peaceful in this, totally different way, than the busy tourist spots where everyone is rushing around.
              </p>
              <p className="font-semibold text-slate-800">
                This country is known for:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Scenic monasteries and majestic mountain scenery</li>
                <li>Quiet towns and a deeply spiritual vibe</li>
                <li>Winding mountain roads that just go on...</li>
              </ul>
              <p>
                You get this slow calm setting and beautiful Himalayan scenery without being too loud and fast. Places such as Paro, Thimpu etc. Bhutan appeals to the slow travel types, not the early morning to late evening sightseeing schedules.
              </p>
                </div>
              </div>
              {/* 8. Malaysia */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                8. Malaysia
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_malaysia.jpg", "/images/dubai.png", "/images/budget_international_blog.jpg", "/images/new_malaysia.jpg", "/images/budget_nepal.png"]} alt="Kuala Lumpur skyline showing Petronas Twin Towers" />
                </div>
                <div className="space-y-4">
                  <p>
                Malaysia is pretty cheap and you can get a mix of modern cities, beaches, shopping and nature experiences. Indian travellers prefer Kuala Lumpur and Langkawi as their destinations.
              </p>
              <p>
                Malaysia is a great place for a family holiday or holiday with friends. This is because of the cheap local transport and budget flights.
              </p>
                </div>
              </div>
              {/* 9. Maldives */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                9. Maldives
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_maldives.png", "/images/dubai.png", "/images/budget_thailand.jpg", "/images/budget_vietnam.png", "/images/budget_malaysia.jpg"]} alt="Maldives beach dining experience at sunset" />
                </div>
                <div className="space-y-4">
                  <p>
                The Maldives is known for its luxury resorts but budget travel to the country is now very much an option. Today, travellers are staying on local islands, where guesthouses are more affordable, food costs are more manageable and ferry transportation is actually affordable, than private luxury islands.
              </p>
              <p>
                And yes, the beaches and water still honestly look just as beautiful. Believe it or not, Maldives can be one of the prettier Budget-Friendly International Trips for couples looking for island vibes but not necessarily luxury resort prices.
              </p>
                </div>
              </div>
              {/* 10. Singapore */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                10. Singapore
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/budget_singapore.jpg", "/images/budget_thailand.jpg", "/images/paris.png", "/images/budget_bali.png", "/images/new_bali.jpg"]} alt="Singapore futuristic skyline featuring Gardens by the Bay" />
                </div>
                <div className="space-y-4">
                  <p>
                Singapore may not be the most affordable stop on this list, but shorter travel times and some smart planning can make it feel pretty doable for Indian travellers.
              </p>
              <p>
                The city just gives you cleaner roads, buildings for the future, fun parks, shopping centres, gardens and food experiences. More people will go to places like Marina Bay Sands, Gardens by the Bay, Sentosa Island and so on.
              </p>
                </div>
              </div>
              {/* How to Set a Budget */}
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 pt-6 border-t border-slate-100">
                How to Set a Budget for Your International Vacation
              </h3>
              <p>
                A couple of good decisions will actually go a long way to reduce many of the costs of your holiday.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Book Advance Tickets:</strong> Secure your flights 2-3 months prior to departure to catch base fares.</li>
                <li><strong>Travel Off-Peak:</strong> Avoid travelling during local holidays or peak school breaks when tariffs double.</li>
                <li><strong>Public Transport:</strong> Opt for subways, trains, and buses instead of private cabs.</li>
                <li><strong>Alternative Stays:</strong> Stay in boutique hostels, homestays, or local guesthouses.</li>
                <li><strong>Eat Locally:</strong> Explore street markets and local diners which offer authentic food at low prices.</li>
                <li><strong>Manage Forex Wisely:</strong> Compare exchange rates in advance and consider using zero-markup cards.</li>
              </ul>
              <p className="italic text-sm text-slate-500">
                Apparently some economies help to reduce the cost of travel for an international trip.
              </p>

              {/* Conclusion */}
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 pt-4">
                Conclusion
              </h3>
              <p>
                Indian travellers no longer have to see foreign travel as some impossible money puzzle. If you have better flight connections, affordable hotels and do a bit of clever planning you can still choose Budget-Friendly International Trips that feel special, atmospheric and full of sights without emptying your savings account.
              </p>
              <p>
                There are also tonnes of cheap international destinations for every type of wanderer. Some want beaches and salty breezes, some want mountains, nightlife or islands. Then there are the travellers who prefer temples, shopping or quiet landscapes in which you can really breathe.
              </p>
              <p>
                If you are looking to have a tailor made international journey to remember in 2026 then Paradise Yatra is the place for you. It’s about comfort, real affordability, great sightseeing holidays that stay with you, across destinations in different corners of the world.
              </p>

              {/* Budget International Travel FAQ Accordion */}
              <div className="border-t border-slate-100 pt-8 mt-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Budget International Travel FAQ
                  </h3>
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
                          className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-800 hover:text-brand-primary focus:outline-none transition text-sm sm:text-base"
                        >
                          <span className="font-bold pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200" />
                          ) : (
                            <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" />
                          )}
                        </button>
                        
                        <div 
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'
                          }`}
                        >
                          <div className="px-5 py-4 text-sm text-slate-500 leading-relaxed bg-white/50">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="rounded-3xl bg-brand-light border border-brand-primary/10 p-6 sm:p-8 space-y-4 mt-8">
                <h4 className="font-display text-lg sm:text-xl font-black text-slate-900">
                  Plan Your Budget-Friendly Dream Vacation with Paradise Yatra!
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ready to stamp your passport without breaking the bank? Paradise Yatra specializes in affordable, customized international holiday packages. From flight bookings and visa assistance to handpicked budget-friendly accommodations, we make overseas travel seamless and stress-free.
                </p>
                <button
                  onClick={handleOpenGeneralEnquiry}
                  className="rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-6 py-3 text-xs sm:text-sm shadow-premium transition flex items-center space-x-2"
                >
                  <span>Inquire About Budget International Packages</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </article>
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
