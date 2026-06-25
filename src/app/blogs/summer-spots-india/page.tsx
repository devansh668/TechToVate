'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';
import { Phone, Mail, MapPin, Landmark, ExternalLink, Calendar, Clock, BookOpen, ChevronLeft, ArrowRight, ChevronDown, ChevronUp, HelpCircle, User } from 'lucide-react';

export default function IndiaSummerSpotsBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "When is the absolute peak of the Indian summer season?",
      answer: "The peak summer season in India runs from April to June. Temperatures in the plains can exceed 40°C (104°F), which is why visiting high-altitude hill stations in the Himalayas or the Western Ghats is highly popular during this time."
    },
    {
      question: "Do I need to book mountain hotels and transport far in advance?",
      answer: "Yes, absolutely. Popular summer destinations like Manali, Shimla, Ooty, and Munnar experience heavy tourist surges. We highly recommend booking flights, train tickets (especially the Himalayan toy trains), and hotels 3 to 4 months in advance."
    },
    {
      question: "Is Leh-Ladakh suitable for travel with young children or seniors?",
      answer: "Leh lies at a high altitude of 3,500 meters. Acclimatization is crucial, and it can be physically demanding for very young children or elderly travelers with cardiovascular issues. Always consult a doctor and schedule a couple of rest days at the start of your trip."
    },
    {
      question: "What clothes should I pack for an Indian hill station in summer?",
      answer: "Pack light, breathable cotton clothes for the daytime, as it can get sunny and warm. However, evenings and nights in hill stations can be cold, so make sure to carry a light sweater, windbreaker, or warm shawl."
    },
    {
      question: "Can I visit Goa in summer, and what is the weather like?",
      answer: "Yes, Goa is open year-round. While the weather from April to May is hot and humid, beach shacks and luxury resorts offer heavy off-season discounts. It is a great time for budget travelers to relax by the pool or enjoy water sports before the monsoons start in June."
    },
    {
      question: "How do I avoid altitude sickness in Ladakh or Gangtok?",
      answer: "Spend your first 36 to 48 hours resting in Leh or Gangtok without strenuous activity. Keep yourself hydrated, avoid alcohol, eat light meals, and carry Diamox (after consulting your doctor) if needed."
    },
    {
      question: "What is the best way to travel between Delhi and Shimla or Manali?",
      answer: "You can take an overnight luxury Volvo sleeper bus, hire a private taxi, or take a flight to Chandigarh/Bhuntar. For Shimla, you can also take the scenic Kalka-Shimla Toy Train (a UNESCO World Heritage site)."
    },
    {
      question: "Are adventure sports like paragliding and river rafting safe in summer?",
      answer: "Yes, summer offers clear skies and stable water flows, making it ideal for paragliding in Solang Valley or river rafting in Rishikesh/Beas River. Always choose certified operators who follow international safety standards."
    },
    {
      question: "What are the typical food and water safety guidelines in India during summer?",
      answer: "Always drink bottled, sealed mineral water. Avoid ice from local street vendors and raw salads. Eat freshly cooked, hot food from reputable restaurants and try local cooling drinks like Lassi, Chaas, or fresh coconut water to stay hydrated."
    },
    {
      question: "Does Paradise Yatra provide customized tour packages for families?",
      answer: "Yes, Paradise Yatra specializes in customizable family vacation packages. We handle all logistics—from comfortable air-conditioned cars and local English-speaking guides to handpicked family-friendly resorts—ensuring a stress-free summer vacation."
    }
  ];

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('India Summer Package (Paradise Yatra)');
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
                src="/images/india_summer_blog.jpg"
                alt="Best Summer Vacation Spots in India"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Article Meta & Title */}
            <div className="p-6 sm:p-10 border-b border-slate-100 space-y-4">
              <div className="flex flex-wrap gap-3 items-center text-xs font-bold text-slate-400">
                <span className="rounded-full bg-brand-light text-brand-primary px-3.5 py-1 uppercase tracking-wider">
                  Travel Ideas
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span>Paradise Yatra (Editorial Contributor)</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>June 4, 2026</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>5 Min Read</span>
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Best Summer Vacation Spots in India
              </h1>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-base sm:text-lg">
                Planning a summer getaway? Discover the best summer vacation spots in India, from cool hill stations and scenic valleys to relaxing beaches and adventure destinations perfect for families, couples, and solo travelers.
              </p>

              <p>
                In hot months energy depletes fast, especially in cities such as Delhi or Jaipur. As the weather gets warmer, people are looking for quiet places to decompress quietly. Then there are the mountain retreats, the green places up high, the tranquil coasts, the secret valleys. As the heat gets thicker these pockets of India open up and you breathe without drama.
              </p>

              <p>
                Summer is in the mountain shadows, far south where tea grows. Some areas are still cold while the rest of the nation warms up. The Himalayas wear old crowns. Green rows creep up the hills below. Snow slowly melts. One morning, walk in mist. By afternoon, take a toy train. Some corners have peace, for those who know where to look. Not all sites need work, some just sit there.
              </p>

              <p>
                Summer 2026 is here and the best summer vacation spots in India await you. Check these out if you want to unwind, discover or just escape.
              </p>

              {/* 1. Manali */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                1. Manali
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/custom_manali.png", "/images/india_summer_blog.jpg", "/images/india_darjeeling.jpg", "/images/india_ooty.png", "/images/india_shimla.jpg"]} alt="Manali snowy mountain valley and roads" />
                </div>
                <div className="space-y-4">
                  <p>
                Manali is very popular in the summer and for good reason. This place is always spot on. Other places are hot places. Manali is cool and comfortable. It is good for tourism, visiting cafes, drive through mountains and adventures. One more thing about early mornings, the mountains dotted with clouds make a peaceful scene you will never forget.
              </p>
              <p className="font-semibold text-slate-800">
                Key spots that usually pull in a massive crowd during summer vacations include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Solang Valley (adventure sports & paragliding)</li>
                <li>Old Manali (quaint cafes & cultural spots)</li>
                <li>Rohtang Pass (snow experiences & panoramic peaks)</li>
                <li>Atal Tunnel (gateway to Lahaul Valley)</li>
              </ul>
                </div>
              </div>
              {/* 2. Shimla */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                2. Shimla
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/custom_shimla.png", "/images/india_goa.jpg", "/images/india_coorg.jpg", "/images/india_gangtok.jpg", "/images/hero_dhanaulti.jpg"]} alt="Shimla snow covered streets and architecture" />
                </div>
                <div className="space-y-4">
                  <p>
                Shimla has stayed one of the go to Summer Vacation Spots in India for decades. The town still keeps that old colonial hill station vibe, with pleasant weather, scenic roads, cafés, pine forests and mountain viewpoints.
              </p>
              <p>
                Wandering along Mall Road in the cooler evenings honestly feels calming, specially compared to the heat of big metropolitan places. Families in particular lean toward Shimla because the place feels comfortable and reachable, plus it&apos;s easy to explore without stress.
              </p>
                </div>
              </div>
              {/* 3. Nainital, Uttarakhand */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                3. Nainital, Uttarakhand
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/custom_nainital.png", "/images/india_darjeeling.jpg", "/images/india_coorg.jpg", "/images/hero_dhanaulti.jpg", "/images/new_goa.png"]} alt="Nainital Lake surrounded by green hills" />
                </div>
                <div className="space-y-4">
                  <p>
                Nainital feels really animated during the summer months. Wrapped by hills and organized around the well known Naini Lake, it gives that quiet mountain atmosphere, mixed with energetic local bazaars and small cafés.
              </p>
              <p>
                An evening boat-ride on the lake is a good idea and one of the most delightful moments of the whole visit. Nainital is still one of the most loved Summer Vacation Spots in India, if you are a family or a couple and looking for some cooler temperatures and pretty scenery nearby.
              </p>
                </div>
              </div>
              {/* 4. Darjeeling */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                4. Darjeeling
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/custom_darjeeling.png", "/images/india_summer_blog.jpg", "/images/india_goa.jpg", "/images/india_manali.jpg", "/images/india_gangtok.jpg"]} alt="Darjeeling beautiful Buddhist temple and monastery" />
                </div>
                <div className="space-y-4">
                  <p>
                Darjeeling is honestly a whole different kind of mountain trip than most North Indian hill stations, it feels more unhurried. People know it for tea gardens, toy train rides, and those really sharp Himalayan views, the whole place stays calm and scenic in summer.
              </p>
              <p>
                The early morning sunrise views from Tiger Hill, on a clear day, feel kind of unforgettable, like you just stand there and forget everything else. The cool temperature plus quiet surroundings makes Darjeeling fit really well for travelers who want a slower, quieter getaway.
              </p>
                </div>
              </div>
              {/* 5. Munnar, Kerala */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                5. Munnar, Kerala
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/custom_munnar.png", "/images/india_goa.jpg", "/images/india_darjeeling.jpg", "/images/india_shimla.jpg", "/images/india_manali.jpg"]} alt="Munnar green tea gardens in Kerala" />
                </div>
                <div className="space-y-4">
                  <p>
                Munnar is one of those refreshing Summer Vacation Spots in India that just clicks immediately. You get endless tea plantations, mist covered hills, waterfalls, and that cool weather which creates a relaxed mood that feels far from city speed.
              </p>
              <p>
                Munnar is not like other crowded tourist places. It has a much slower pace and it is enjoyed by many tourists on vacation.
              </p>
                </div>
              </div>
              {/* 6. Ooty */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                6. Ooty
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/custom_ooty.png", "/images/india_summer_blog.jpg", "/images/india_coorg.jpg", "/images/india_nainital.png", "/images/india_gangtok.jpg"]} alt="Ooty lush green tea gardens and hills" />
                </div>
                <div className="space-y-4">
                  <p>
                Ooty still remains a favourite destination because of its cool climate and the feel of a nice hill station. There is a lot to see here. Famous for its tea gardens, toy train rides, lakes and botanical gardens.
              </p>
              <p>
                The weather is pleasant all day and travelling is so much more comfortable than in the hotter parts. And many people like to sit in cafes and walk mountain roads. It&apos;s nice and laid back.
              </p>
                </div>
              </div>
              {/* 7. Leh-Ladakh */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                7. Leh-Ladakh
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/india_ladakh.jpg", "/images/india_coorg.jpg", "/images/india_summer_blog.jpg", "/images/india_manali.jpg", "/images/india_darjeeling.jpg"]} alt="Pangong Lake in Leh-Ladakh surrounded by mountains" />
                </div>
                <div className="space-y-4">
                  <p>
                Ladakh kinda feels completely different from typical hill destinations. Best summer roads and better weather. Dramatic mountains, high altitude lakes, monasteries, cool road trips and awesome adventure biking can be found in this region. Best adventure destinations in India in summer Pangong Lake and Leh are also beautiful to look at.
              </p>
                </div>
              </div>
              {/* 8. Gangtok */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                8. Gangtok
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/india_gangtok.jpg", "/images/india_summer_blog.jpg", "/images/india_coorg.jpg", "/images/hero_dhanaulti.jpg", "/images/india_goa.jpg"]} alt="Gangtok scenic town view and mountains" />
                </div>
                <div className="space-y-4">
                  <p>
                Gangtok has this city vibe, clean, kind of tranquil, peaceful. There&apos;s no comparison. Truly. The summer weather is nice and pleasant and it&apos;s a great good time to go around for sightseeing, stop by monasteries, take shots of the mountains and just hang out in cafes, honestly.
              </p>
              <p>
                There is also this drive around Gangtok which is very scenic with these amazing vistas of valleys and mountains, you keep thinking &ldquo;okay wow&rdquo; every few minutes. Overall Gangtok is quite popular for the people who want a peaceful holiday plan in the north east, you know no hurry.
              </p>
                </div>
              </div>
              {/* 9. Coorg, Karnataka */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                9. Coorg, Karnataka
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/india_coorg.jpg", "/images/india_goa.jpg", "/images/india_summer_blog.jpg", "/images/india_shimla.jpg", "/images/india_manali.jpg"]} alt="Coorg lush green coffee plantation and landscape" />
                </div>
                <div className="space-y-4">
                  <p>
                Coorg is often called the &ldquo;Scotland of India,&rdquo; and during summer the greenery here feels especially refreshing. Coffee plantations, waterfalls, forests, and peaceful weather make Coorg great for couples, also families wanting a calm vacation. Unlike crowded tourist cities, Coorg feels more tied to nature and that&apos;s honestly a big part of its charm.
              </p>
                </div>
              </div>
              {/* 10. Goa */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                10. Goa
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/india_goa.jpg", "/images/india_summer_blog.jpg", "/images/india_coorg.jpg", "/images/india_shimla.jpg", "/images/india_manali.jpg"]} alt="Goa beach coconut trees and ocean view" />
                </div>
                <div className="space-y-4">
                  <p>
                Goa might not be a hill station really, but it still remains one of the most visited summer destinations in India. The beaches, cafes, sunsets and nightlife create a whole different vacation mood and hence Goa is a preferred destination for many travellers in the early summer months.
              </p>
              <p>
                Baga Beach, Palolem Beach, Vagator Beach are always the favourites among the younger crowd and couples. Beach lovers have one of India&apos;s most energetic summer vacation destinations in Goa.
              </p>

              {/* Tips for planning a Summer Vacation */}
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 pt-6 border-t border-slate-100">
                Tips for Planning a Summer Vacation
              </h3>
              <p>
                Before you plan a summer trip, it helps to keep a few things in mind, like not waiting till the last moment. Because peak season can get a bit tight, and also kinda loud.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Book Early:</strong> Try to book hotels early, especially when it&apos;s busy, otherwise everything feels last minute and cramped.</li>
                <li><strong>Pack Warm Layers:</strong> Carry light woollens for hill stations even if the days feel warm, like really warm.</li>
                <li><strong>Sun Protection:</strong> Keep sunscreen and sunglasses handy, don&apos;t pretend you&apos;ll remember later, it rarely works.</li>
                <li><strong>Slow Down:</strong> Avoid overpacked itineraries. Too much hopping from one place to another gets weirdly tiring, fast.</li>
                <li><strong>Beat the Crowds:</strong> Start sightseeing early during crowded months, it makes a real difference, trust me.</li>
                <li><strong>Check Weather:</strong> And yes, also check weather conditions before any mountain travel, just to be safe… because mountains love surprises.</li>
              </ul>
              <p className="italic text-sm text-slate-500">
                Honestly, simple planning makes vacations smoother, and way less stressful.
              </p>
                </div>
              </div>
              {/* Conclusion */}
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 pt-4">
                Conclusion
              </h3>
              <p>
                India has an incredible variety of travel destinations for summer vacations. Whether someone wants snowy mountains, calm tea gardens, scenic lakes, adventurous road trips or a beachside break, there are countless Summer Vacation Spots in India that fit every kind of traveler. The best summer trips are all about relaxing, soaking up the atmosphere and escaping the relentless city heat.
              </p>
              <p>
                If you are planning a relaxed summer holiday in 2026 then Paradise Yatra is the right choice. They offer comfortable travel with adventure, fun and amazing sightseeing across India.
              </p>

              {/* India Summer FAQ Accordion */}
              <div className="border-t border-slate-100 pt-8 mt-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    India Summer Travel FAQ
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
                  Plan Your India Summer Escape with Paradise Yatra Today!
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Escape the rising summer heat of the plains and plan a memorable family mountain tour or scenic valley getaway with Paradise Yatra. We provide fully customized domestic vacation packages tailored to your preferences, group size, and budget.
                </p>
                <button
                  onClick={handleOpenGeneralEnquiry}
                  className="rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-6 py-3 text-xs sm:text-sm shadow-premium transition flex items-center space-x-2"
                >
                  <span>Inquire About Domestic Packages</span>
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
