'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';
import { Phone, Mail, MapPin, Landmark, ExternalLink, Calendar, Clock, BookOpen, ChevronLeft, ArrowRight, ChevronDown, ChevronUp, HelpCircle, User } from 'lucide-react';

export default function BaliBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need a visa to visit Bali?",
      answer: "Most international travelers can enter Indonesia using a Visa on Arrival (VoA), which is valid for 30 days and costs IDR 500,000 (approx. USD 35). It can be extended once for an additional 30 days. Make sure your passport is valid for at least 6 months from your arrival date."
    },
    {
      question: "When is the best time of year to visit Bali?",
      answer: "The dry season, running from April to October, is widely considered the best time to visit. The weather is sunny, dry, and windy—perfect for beach activities, surfing, and hiking. The wet season (November to March) brings higher humidity and frequent tropical rainstorms, though travel is cheaper and the landscape is incredibly green."
    },
    {
      question: "Is Bali safe for families and solo travelers?",
      answer: "Yes, Bali is generally extremely safe for solo travelers, couples, and families. Balinese people are known for their warm hospitality. As in any popular tourist hub, take basic precautions: secure your valuables, be mindful of traffic, and avoid poorly lit areas late at night."
    },
    {
      question: "Can I rent a scooter in Bali, and what are the rules?",
      answer: "Renting a scooter is highly popular and cheap (approx. $5–$8/day). However, you must have an International Driving Permit (IDP) with a motorcycle license endorsement, wear a helmet at all times, and ensure your travel insurance covers scooter accidents. Bali traffic can be chaotic, so drive with extreme caution."
    },
    {
      question: "What is the local currency, and can I use credit cards?",
      answer: "The local currency is the Indonesian Rupiah (IDR). While major hotels, luxury stores, and upscale restaurants accept credit cards, cash is absolutely essential for paying local drivers, street food stallholders, market vendors, and temple entry fees."
    },
    {
      question: "Do I need to dress conservatively when visiting Bali temples?",
      answer: "Yes, dressing respectfully is mandatory. Both men and women must cover their shoulders and knees. You are required to wear a sarong and a temple sash, which can usually be rented at the entrance for a small fee or are sometimes included in the ticket price."
    },
    {
      question: "What is 'Bali Belly' and how do I avoid it?",
      answer: "Bali Belly is a common name for digestive upset caused by unfamiliar bacteria in food and water. To avoid it, never drink tap water (use bottled or filtered water for drinking and brushing teeth), eat freshly cooked hot food, wash your hands regularly, and be cautious with street-side ice."
    },
    {
      question: "What is the primary language spoken, and is English common?",
      answer: "Balinese and Indonesian are the official languages. However, English is very widely spoken in all major tourist hubs (such as Seminyak, Canggu, Kuta, Ubud, and Sanur), making navigation very easy for international tourists."
    },
    {
      question: "How do I travel around Bali if I don't want to ride a scooter?",
      answer: "Hiring a private car with a local driver is highly recommended. It is very affordable (approx. $40–$50 USD per day including fuel) and offers a safe, air-conditioned way to explore the island. Ride-hailing apps like Grab and Gojek are also popular for short trips."
    },
    {
      question: "Is travel insurance necessary for visiting Bali?",
      answer: "Yes, we strongly recommend comprehensive travel insurance. Medical treatments at tourist clinics and hospitals in Bali can be very costly, and coverage is vital for emergencies, travel delays, lost bags, or adventure sports cancellations."
    }
  ];

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('Bali Tour Package (Paradise Yatra)');
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
                src="/images/bali_blog.jpg"
                alt="Top 10 Places to Visit in Bali"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Article Meta & Title */}
            <div className="p-6 sm:p-10 border-b border-slate-100 space-y-4">
              <div className="flex flex-wrap gap-3 items-center text-xs font-bold text-slate-400">
                <span className="rounded-full bg-brand-light text-brand-primary px-3.5 py-1 uppercase tracking-wider">
                  Destination Guide
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span>Paradise Yatra (Editorial Contributor)</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>June 5, 2026</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>5 Min Read</span>
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Top 10 Places to Visit in Bali for an Unforgettable Vacation
              </h1>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-base sm:text-lg">
                Discover the top 10 Places to Visit in Bali that promise a truly unforgettable experience. Explore Bali tour packages and plan your dream trip today!
              </p>

              <p>
                Tourists have long loved to visit Bali. This magical island in Indonesia encompasses historical buildings, beautiful rice fields, blue seas and a strong religious presence that captivates all visitors. It&apos;s a honeymoon, a solo holiday or a family vacation in search of a memorable trip; Bali never lets you down. In this blog, we look at the 10 absolutely best top places to visit on Bali, and as to why Bali tour packages are worth investing.
              </p>

                                          {/* 1. Ubud */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                1. Ubud
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_ubud.jpg", "/images/bali_ubud_2_1780916797536.png", "/images/bali_ubud_3_1780916810601.png", "/images/bali_ubud_4_1780916823504.png", "/images/bali_ubud_5_1780916836219.png"]} alt="Ubud Balinese Temple Gate" />
                </div>
                <div className="space-y-4">
                  <p>
                The island&apos;s cultural and artistic heart and soul is first of all Ubud. The picturesque town is surrounded by green hills and rice fields, and boasts the popular Ubud Monkey Forest, the Royal Palace (Puri Saren Agung) and top-notch art galleries. Furthermore, travelers can enjoy excellent traditional dancing shows each night in Ubud which provide them with a real insight into the Balinese culture.
              </p>
              <p>
                Moreover, the town is also a hub for wellness with many yoga retreats and holistic spas drawing in visitors looking for tranquility. Moreover, there is a very good thing to do the morning of the Campuhan Ridge Walk: a tranquil trail through verdant valleys, punctuated by stunning vistas on the way.
              </p>
                </div>
              </div>
              {/* 2. Seminyak */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                2. Seminyak
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_seminyak.jpg", "/images/bali_seminyak_2_1780916847780.png", "/images/bali_seminyak_3_1780916859446.png", "/images/bali_seminyak_4_1780916872741.png", "/images/bali_seminyak_5_1780916885973.png"]} alt="Seminyak Beach colorful bean bags and umbrellas" />
                </div>
                <div className="space-y-4">
                  <p>
                Seminyak is the most glamorous area of Bali on the way towards the southwest coast. In contrast to the much busier Kuta, Seminyak boasts a more elite number of upscale beach clubs, boutique shops, and gourmet restaurants lining the beaches. It attracts a sophisticated crowd of foreign tourists, as a result.
              </p>
              <p>
                As for the sunset at Seminyak Beach, there&apos;s no doubt that it&apos;s one of the best in all of Southeast Asia. So, it could be that you&apos;re here for the food, the fashion, or just to relax by the Indian Ocean, but in any case - Seminyak is a top spot on every Places to Visit in Bali list.
              </p>
                </div>
              </div>
              {/* 3. Tanah Lot */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                3. Tanah Lot
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_tanah_lot.jpg", "/images/bali_tanah_lot_2_1780916898823.png", "/images/bali_tanah_lot_3_1780916912116.png", "/images/bali_tanah_lot_4_1780916925079.png", "/images/bali_tanah_lot_5_1780916939961.png"]} alt="Tanah Lot Temple built on a rock surrounded by ocean waves" />
                </div>
                <div className="space-y-4">
                  <p>
                Tanah Lot is a magnificent sea temple that perches dramatically over sea waves at a rock face, and is arguably one of the most iconic of all of Indonesia. It has thus earned itself one of the highest photography popularity on the island.
              </p>
              <p>
                An evening visit at sun down makes it almost otherworldly. What&apos;s interesting about the local history is that holy sea snakes protects the temple. In fact, even if you&apos;re not a spiritual traveller, the dramatic visuality of Tanah Lot is a must-visit destination on any tour of Bali.
              </p>
                </div>
              </div>
              {/* 4. Uluwatu */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                4. Uluwatu
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_uluwatu.jpg", "/images/bali_uluwatu_2_1780916961765.png", "/images/bali_uluwatu_3_1780916975360.png", "/images/bali_uluwatu_4_1780916988478.png", "/images/bali_uluwatu_5_1780916999516.png"]} alt="Uluwatu Cliffside Temple overlooking the Indian Ocean" />
                </div>
                <div className="space-y-4">
                  <p>
                Located at the southernmost end of Bali, Uluwatu is the site of an astonishing 70 metre+ long wall of rock that rises into the rolling waves of the Indian Ocean. As a result, this place is a haven for surfers, boasting some of the most renowned waves in the world, such as Padang Padang and Bingin.
              </p>
              <p>
                Aside from surfing the ancient Uluwatu Temple is also a popular destination for visitors which is performed the evening Kecak Fire Dance against a background of a blazing sunset at the cliff&apos;s edge. Besides, the dining and nighttime scene is on the upswing here making Uluwatu an destination for every type of travellers.
              </p>
                </div>
              </div>
              {/* 5. Tegallalang Rice Terraces */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                5. Tegallalang Rice Terraces
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_tegallalang.jpg", "/images/bali_blog.jpg", "/images/budget_bali.png", "/images/bali.png", "/images/bali_amed.png"]} alt="Tegallalang Green Rice Terraces steps" />
                </div>
                <div className="space-y-4">
                  <p>
                There can be no list of Places to Visit in Bali without including Tegallalang. These rice terraces, southeast of Ubud, are part of a centuries long ancient Balinese irrigation technique known as subak.
              </p>
              <p>
                The terraces are organized in large green steps that slant down a verdant valley, even an experienced traveler getting humble. Moreover, a few cafés along the ridge have front seat seats that provide this view with an unopened, fresh coconut. Tegallalang is thus one of the most photoshoot hot spots in Bali.
              </p>
                </div>
              </div>
              {/* 6. Nusa Penida */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                6. Nusa Penida
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_nusa_penida.jpg", "/images/bali_blog.jpg", "/images/bali_amed.png", "/images/bali_besakih.png", "/images/bali_tegallalang.jpg"]} alt="Nusa Penida cliffs and deep blue sea" />
                </div>
                <div className="space-y-4">
                  <p>
                Located just a short boat trip from Bali mainland, Nusa Penida is a rugged island which had quickly become a hot destination for its breathtaking scenery. In particular, the beach of Kelingking has attracted worldwide social media fame due to the T-Rex shaped cliff.
              </p>
              <p>
                Besides, Nusa Penida provides unique snorkeling and diving opportunities such as swimming beside manta rays and sunfish (Mola Mola). The Nusa Penida tour is now a standard part of many Bali tour packages and is definitely worth the addition. To sum up: If one is an adventurer, this island is a gift to the adventurous, hands down.
              </p>
                </div>
              </div>
              {/* 7. Mount Batur */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                7. Mount Batur
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_mount_batur.png", "/images/bali_blog.jpg", "/images/bali_amed.png", "/images/bali_besakih.png", "/images/bali_tegallalang.jpg"]} alt="Mount Batur volcanic caldera green ridge at sunrise" />
                </div>
                <div className="space-y-4">
                  <p>
                If that is a preference in passing, the rooftop of Mount Batur is for travelers an experience that changes their perspectives, helping to create memories that will stay with them for the rest of their lives. This active volcano, above 1,717 m, is rewarded by trekkers for the beauty of the setting sun -reaping the caldera, in gold.
              </p>
              <p>
                Moreover the views from the house are fantastic showing visible views of the highlands of Lake Batur. Most guided trips start at around 2am when it is a good time to get in a day&apos;s climb before dawn breaks. A warm breakfast that&apos;s prepared by volcanic steam up here is a very special Balinese memory, then.
              </p>
                </div>
              </div>
              {/* 8. Besakih Temple */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                8. Besakih Temple
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_besakih.png", "/images/bali_amed.png", "/images/budget_bali.png", "/images/bali.png", "/images/bali_blog.jpg"]} alt="Pura Besakih Mother Temple complex" />
                </div>
                <div className="space-y-4">
                  <p>
                The largest, holiest and the sacred Hindu temple complex of Bali is known as Pura Besakih, respected by the people as the Pura Besakih or Besakih temple. Located on the slopes of the highest volcano on the island of Bali, Mount Agung, Besakih is a collection of more than 80 individual temples that are spread out on a large hillside.
              </p>
              <p>
                So, when you&apos;re at Besakih, it&apos;s not just about sightseeing, but a spiritual journey as well. Hence visitors are asked to wear and act with respect and reverence. Overall, the highland location with its mist is a major element that raises this site above normal tourist attractions.
              </p>
                </div>
              </div>
              {/* 9. Sanur */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                9. Sanur
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_sanur.png", "/images/bali.png", "/images/bali_amed.png", "/images/bali_mount_batur.png", "/images/bali_seminyak.jpg"]} alt="Sanur Beach with outrigger boats parked under a beautiful sunrise" />
                </div>
                <div className="space-y-4">
                  <p>
                Sanur has a more tranquil and relaxed beach vibe than Kuta or Seminyak. The relaxing waters of Sanur are perfect for swimming, stand-up paddleboarding and kayaking, especially for families and older tourists.
              </p>
              <p>
                Plus, Sanur&apos;s beach promenade is a one of the best promenades in Bali, a shaded street lined with galleries (or warungs) or stores that are shut by curlicues and commas. Furthermore, Sanur is the starting point for fast boats that leave for Nusa Lembongan and Nusa Penida, making it a convenient and lovely port of call for the exploration of these islands.
              </p>
                </div>
              </div>
              {/* 10. Amed */}
              <div className="py-4">
                <h3 className="font-display text-xl sm:text-2xl pt-6 pb-4 font-extrabold text-slate-900">
                10. Amed
              </h3>
                <div className="relative h-[250px] sm:h-[400px] w-full bg-slate-100 mb-6 rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
                  <ImageSlider images={["/images/bali_amed_diving.png", "/images/bali_blog.jpg", "/images/bali_amed.png", "/images/bali_mount_batur.png", "/images/bali_tegallalang.jpg"]} alt="Scuba diving near colorful coral reefs in Amed" />
                </div>
                <div className="space-y-4">
                  <p>
                Last but not least, just along the right coast of Bali lies a collection of serene fishing villages known as Amed and are home to some of Bali&apos;s best underwater adventures. The nearby shipwreck site of the USS Liberty ship attracts divers from all over the world.
              </p>
              <p>
                Also, Amed&apos;s black sand beaches, traditional jukung fishing boats and far away view of Mount Agung formed a composition that made Amed look truly Balinese and that&apos;s not rushed at all, So, Amed is an ideal destination for those seeking to unwind and immerse themselves in the natural beauty and undisturbed environment of Bali.
              </p>

              {/* Why opt for a Bali Tour Packages package? */}
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 pt-6 border-t border-slate-100">
                Why opt for a Bali Tour Packages package?
              </h3>
              <p>
                When it comes to planning an independent Bali holiday it can be a daunting task as there is a lot of things to do. This is where a well-planned Bali tour package can come in handy. They book your accommodation, transport, do guided excursions and take you to the temples — you get to enjoy yourself in Bali, not organising the details.
              </p>
              <p>
                In addition, packages are sometimes cheaper than splitting up all the rooms, particularly when traveling with friends or family. All the extra features of many packages can be overlooked by the usual travellers. So, if one wants to have a perfect and enriching tour in the entirety of the Places to Visit Bali, it is best if each tour package is done with a particular care.
              </p>
                </div>
              </div>
              {/* Conclusion */}
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 pt-4">
                Conclusion
              </h3>
              <p>
                Bali isn&apos;t only a park, it&apos;s an emotion. There are countless stories to be explored on this island, both from the foggy mountains of Batur and the temple-veiled cliffs of Uluwatu. If your heart draws you to the cultural hubs of the Balinese island of Ubud, or to the crystal clear sea of Nusa Penida, you&apos;ve found a spot in Bali uniquely your own.
              </p>
              <p>
                If your Bali dream is to be made to come true, you need to let the expert travel agency at Paradise Yatra do their job, preparing a fun, memorable holiday to the best places to visit in Bali without a single worry to you. Whether you&apos;re interested in exciting adventures, cultural treks, or relaxing getaways, Paradise Yatra offers customizable vacation packages tailored to your preferences and budget, so that every scene of your Bali vacation is amazing. Don&apos;t delay, book your Bali adventure today, and let it work its magic on you.
              </p>

              {/* Bali FAQ Accordion */}
              <div className="border-t border-slate-100 pt-8 mt-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Bali Travel FAQ
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
                  Plan Your Dream Bali Vacation with Paradise Yatra Today!
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ready to explore the beaches, temples, and valleys of Bali? Our travel experts at Paradise Yatra can design a personalized itinerary including handpicked resorts, private transfers, and curated temple tours. Let us handle the details so you can experience a stress-free tropical getaway.
                </p>
                <button
                  onClick={handleOpenGeneralEnquiry}
                  className="rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-6 py-3 text-xs sm:text-sm shadow-premium transition flex items-center space-x-2"
                >
                  <span>Inquire About Bali Packages</span>
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
