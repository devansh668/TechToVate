'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import {
  MapPin, Clock, Star, Check, X, ChevronDown, ChevronRight,
  Plane, Utensils, Camera, Shield, Phone, Mail, Share2,
  Bed, Car, Waves, Mountain, Users, Calendar, ArrowRight,
  BadgeCheck, PhoneCall
} from 'lucide-react';

const allPackages: Record<string, PackageData> = {
  'luxury-maldives-honeymoon-package': {
    title: 'Luxury Maldives Honeymoon Package',
    duration: '5N/6D',
    destination: 'Maldives',
    country: 'Maldives',
    category: 'Premium Packages',
    rating: 4.8,
    reviews: 124,
    price: 369999,
    originalPrice: 399999,
    image: '/images/pkg_maldives.png',
    tags: ['Honeymoon', 'Luxury', 'Couples'],
    shortDescription: 'Celebrate love with a 6-day luxury Maldives honeymoon – overwater villas, seaplane transfers, candlelit dinners, spa indulgence, and unforgettable romantic island experiences.',
    description: 'Begin your forever with the Maldives, the ultimate honeymoon paradise. This 6-day Luxury Maldives Honeymoon Package blends romance, privacy, and indulgence – from champagne welcomes and overwater villas to candle-lit dinners under starlit skies. Drift away on a private sandbank picnic, rejuvenate with couples\' spa sessions, and sail on a sunset dolphin cruise. With seaplane transfers, gourmet dining, and curated adventures included, every moment is designed for romance and exclusivity.',
    highlights: [
      'Romantic sunset view from your private deck',
      'Sunset cruise surrounded by dolphins',
      'Private candle-lit dinner on the beach under the stars',
      'Gourmet seafood BBQ dinner on the beach',
      'Stargazing from your deck with a telescope + wine',
      'Couple\'s spa session with ocean views',
      'Private sandbank picnic experience',
    ],
    inclusions: [
      '5 nights in luxury overwater villa',
      'Speedboat transfers',
      'Daily breakfast & dinner (with romantic dinner setups included)',
      'Private candle-light beach dinner',
      'Sandbank picnic & dolphin cruise',
      'Couple\'s spa session',
    ],
    exclusions: [
      'International airfare',
      'Visa charges (if applicable)',
      'Personal expenses & shopping',
      'Travel insurance',
      'Additional activities not in itinerary',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', activities: ['Arrive at Malé International Airport', 'Speedboat transfer to your luxury resort', 'Champagne welcome & villa check-in', 'Evening candle-lit beach dinner'] },
      { day: 2, title: 'Overwater Bliss', activities: ['Breakfast on your private deck', 'Morning snorkeling in the coral reef', 'Afternoon couple\'s spa session', 'Sunset dolphin cruise'] },
      { day: 3, title: 'Sandbank Picnic Day', activities: ['Private sandbank picnic with gourmet lunch', 'Afternoon free for water sports or relaxation', 'Seafood BBQ dinner on the beach', 'Stargazing with telescope & wine'] },
      { day: 4, title: 'Island Exploration', activities: ['Visit local Maldivian island', 'Explore local markets & culture', 'Underwater walk experience', 'Private romantic dinner setup'] },
      { day: 5, title: 'Leisure & Farewell', activities: ['Morning yoga on the deck', 'Last snorkeling session', 'Spa treatment', 'Farewell gala dinner'] },
      { day: 6, title: 'Departure', activities: ['Breakfast at resort', 'Checkout & speedboat transfer to Malé', 'Departure with beautiful memories'] },
    ],
    quickStats: [
      { icon: 'plane', label: 'Speedboat Transfers' },
      { icon: 'utensils', label: 'All Meals' },
      { icon: 'camera', label: 'Photo Sessions' },
      { icon: 'shield', label: '24/7 Support' },
    ],
  },
  'shimla-manali-kasol-tour': {
    title: 'Shimla – Manali – Kasol Tour',
    duration: '6N/7D',
    destination: 'Himachal Pradesh',
    country: 'India',
    category: 'Trending Destinations',
    rating: 4.1,
    reviews: 89,
    price: 11499,
    originalPrice: 13000,
    image: '/images/pkg_shimla_manali.png',
    tags: ['Nature', 'Adventure', 'Group'],
    shortDescription: 'Experience the best of Himachal Pradesh in 7 days with a journey through Shimla, Manali, and Kasol.',
    description: 'Explore the magic of Himachal Pradesh with this 7-day trip through Shimla, Manali, and Kasol. From Shimla\'s colonial charm to Manali\'s adventure-filled valleys and Kasol\'s riverside serenity — this tour has it all. Enjoy scenic drives, snow activities, cozy cafés, and breathtaking Himalayan views. Ideal for families, couples, and groups who want to combine nature, relaxation, and adventure in one unforgettable mountain experience.',
    highlights: [
      'Explore Mall Road, The Ridge & Christ Church in Shimla',
      'Adventure at Kufri & ropeway to Jakhu Temple',
      'Scenic drive through Kullu Valley to Manali',
      'Snow adventures at Solang Valley and optional Rohtang Pass',
      'Café hopping in Old Manali & Kasol',
      'Riverside trek to Chalal and visit to Manikaran Sahib',
      'Vibrant return via Mandi & Bilaspur to Chandigarh',
    ],
    inclusions: [
      'Hotel Accommodation',
      'Daily breakfast and dinner',
      'Private vehicle for transfers and sightseeing',
      'Driver, tolls, fuel, and parking charges',
      'All applicable taxes',
    ],
    exclusions: [
      'Airfare or train fare',
      'Entry fees, camera charges & adventure activity costs',
      'Rohtang Pass permit (if applicable)',
      'Lunch, personal expenses & tips',
      'Any additional sightseeing or detours not mentioned',
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Shimla', activities: ['Arrive by road or train (optionally via Kalka–Shimla Railway)', 'Check-in and rest at hotel', 'Visit Mall Road, The Ridge, Christ Church & Scandal Point', 'Dinner at Café Simla Times or Wake & Bake Café', 'Overnight in Shimla'] },
      { day: 2, title: 'Kufri & Shimla Local', activities: ['Visit Kufri – Mahasu Peak, Adventure Park, Yak/Horse rides', 'Take ropeway to Jakhu Temple', 'Explore Lakkar Bazaar & Kali Bari Temple', 'Optional: Indian Institute of Advanced Studies', 'Overnight in Shimla'] },
      { day: 3, title: 'Shimla → Kullu → Manali', activities: ['Early morning departure from Shimla', 'Stop at Sundernagar Lake & Pandoh Dam', 'Visit Vaishno Devi Temple', 'Explore Kullu Market – woollens & shawls', 'Arrive in Manali by evening and stroll on Mall Road', 'Overnight in Manali'] },
      { day: 4, title: 'Manali Local Sightseeing', activities: ['Visit Solang Valley – ropeway, zipline, ATV rides, snow play', 'Explore Hadimba Temple, Vashisht Hot Water Springs & Manu Temple', 'Evening café hopping in Old Manali', 'Overnight in Manali'] },
      { day: 5, title: 'Rohtang / Atal Tunnel / Sissu', activities: ['Drive via Atal Tunnel to Sissu', 'Enjoy snow views, waterfalls & peaceful landscapes', 'Optional: Rohtang Pass visit (permit required)', 'Return to Manali by evening', 'Overnight in Manali'] },
      { day: 6, title: 'Manali → Kasol', activities: ['Drive to Kasol through Parvati Valley', 'Check-in at riverside stay', 'Explore Kasol Market & local cafés', 'Trek to Chalal', 'Optional: Visit Manikaran Sahib Hot Springs', 'Overnight in Kasol'] },
      { day: 7, title: 'Departure', activities: ['Early morning departure from Kasol', 'Scenic return via Bhuntar, Mandi & Bilaspur', 'Trip ends with mountain memories'] },
    ],
    quickStats: [
      { icon: 'plane', label: 'All Transfers' },
      { icon: 'utensils', label: 'Local Meals' },
      { icon: 'camera', label: 'Photo Stops' },
      { icon: 'shield', label: '24/7 Support' },
    ],
  },
  'dalhousie-khajjiar-getaway': {
    title: 'Dalhousie Khajjiar Getaway',
    duration: '2N/3D',
    destination: 'Himachal Pradesh',
    country: 'India',
    category: 'Trending Destinations',
    rating: 4.5,
    reviews: 68,
    price: 6000,
    originalPrice: 8000,
    image: '/images/pkg_dalhousie.png',
    tags: ['Family', 'Nature', 'Weekend'],
    shortDescription: 'A relaxing trip through Dalhousie, Khajjiar, and Kalatop filled with scenic views, forest walks, and peaceful mountain vibes.',
    description: 'Enjoy a peaceful mountain escape in Dalhousie with visits to Khajjiar and Kalatop. Explore scenic meadows, pine forests, and charming hill spots. From local sightseeing in Dalhousie to the natural beauty of "Mini Switzerland" Khajjiar, this trip offers the perfect mix of relaxation, nature, and adventure.',
    highlights: [
      'Explore Dalhousie\'s charming town and local markets',
      'Visit Khajjiar – the "Mini Switzerland of India" with meadows',
      'Discover Kalatop Wildlife Sanctuary and lush pine forests',
      'Enjoy waterfalls like Panchpula and Satdhara',
      'Scenic drives and peaceful mountain views',
      'Ideal for families, couples, and friends',
    ],
    inclusions: [
      'Accommodation in hotel, homestay, or nature camp',
      'Daily breakfast',
      'Private vehicle or local transport for sightseeing',
      'All sightseeing and transfers as per itinerary',
      'Driver allowance, tolls, and parking charges',
    ],
    exclusions: [
      'Airfare/train/bus fare',
      'Lunch and dinner (except where mentioned)',
      'Entry tickets and adventure activities (zorbing, horse rides)',
      'Personal expenses, tips, or shopping',
      'Travel insurance',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Dalhousie – Local Exploration', activities: ['Arrive in Dalhousie by morning or noon', 'Check-in at hotel or homestay', 'Explore Subhash Baoli, St. John\'s Church, and Gandhi Chowk Market', 'Evening walk at Garam Sadak or Mall Road', 'Dinner at a local café', 'Overnight stay in Dalhousie'] },
      { day: 2, title: 'Trip to Khajjiar & Kalatop', activities: ['Drive to Khajjiar (22 km, ~1 hour)', 'Explore the meadows, enjoy horse riding, zorbing, and forest views', 'Visit Khajji Nag Temple', 'Optional short forest trek or nature walk', 'Visit Kalatop Wildlife Sanctuary', 'Return to Dalhousie by evening', 'Overnight stay in Dalhousie'] },
      { day: 3, title: 'Leisure & Departure', activities: ['Morning stroll after breakfast', 'Visit Panchpula waterfalls and memorials, Satdhara Falls', 'Enjoy lunch or local snacks before checkout', 'Travel to Pathankot for train or bus departure'] },
    ],
    quickStats: [
      { icon: 'car', label: 'Private Cab' },
      { icon: 'utensils', label: 'Breakfast' },
      { icon: 'camera', label: 'Scenic Stops' },
      { icon: 'shield', label: '24/7 Support' },
    ],
  },
  'goa-escape-beaches-bliss-and-adventure': {
    title: 'Goa Escape: Beaches, Bliss & Adventure',
    duration: '6N/7D',
    destination: 'Goa',
    country: 'India',
    category: 'Trending Destinations',
    rating: 4.1,
    reviews: 210,
    price: 11999,
    originalPrice: 14000,
    image: '/images/pkg_goa.png',
    tags: ['Beach', 'Family', 'Adventure'],
    shortDescription: 'Explore Goa in depth with beaches, forts, waterfalls, islands, underwater adventures, leisure, shopping, and spa indulgence.',
    description: 'This 7-day Comprehensive Goa Tour offers the perfect blend of adventure, relaxation, and cultural exploration. Begin with a relaxing beach day on arrival, explore North Goa\'s major beaches and forts, and witness the breathtaking Dudhsagar Waterfalls. Discover South Goa\'s quiet beaches, enjoy island trips with snorkeling and scuba diving, and spend a leisure day indulging in shopping, spa treatments, or relaxing by the beach.',
    highlights: [
      'North Goa beaches and historic forts (Calangute, Baga, Fort Aguada)',
      'Dudhsagar Waterfalls and lush greenery',
      'South Goa\'s serene beaches (Palolem, Colva, Agonda)',
      'Island adventures with snorkeling and scuba diving',
      'Leisure day with spa, shopping, and beach relaxation',
      'Perfect for a complete Goa experience',
    ],
    inclusions: [
      '6 nights stay at hotel/resort',
      'Daily breakfast',
      'Sightseeing, excursions, and transfers as per itinerary',
      'Dudhsagar Waterfalls visit with jeep safari and spice plantation tour',
      'Island trip with snorkeling/scuba diving and lunch',
      'AC vehicle for local transfers',
      'Pickup & drop from airport/railway station',
    ],
    exclusions: [
      'Airfare/train tickets',
      'Lunch & dinner (except during island/plantation trips)',
      'Personal expenses (shopping, tips, drinks)',
      'Optional activities outside itinerary',
      'Travel insurance',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Beach', activities: ['Pickup from airport/railway station', 'Check-in at hotel/resort', 'Relaxing swim or stroll at nearby beach', 'Evening free to unwind'] },
      { day: 2, title: 'North Goa Beaches & Forts', activities: ['Breakfast at hotel', 'Explore Fort Aguada, Sinquerim, Calangute, Baga, Anjuna, Vagator', 'Optional water sports at beaches', 'Return to hotel'] },
      { day: 3, title: 'Dudhsagar Waterfalls & Nature', activities: ['Breakfast at hotel', 'Full-day excursion to Dudhsagar Waterfalls', 'Visit spice plantations en route', 'Return to hotel for overnight stay'] },
      { day: 4, title: 'South Goa Beaches & Quiet Vibes', activities: ['Breakfast at hotel', 'Explore peaceful beaches like Palolem, Colva, or Agonda', 'Sunset at serene South Goa shorelines', 'Leisure evening at hotel'] },
      { day: 5, title: 'Island Adventures & Underwater Exploration', activities: ['Breakfast at hotel', 'Full-day Grande Island trip', 'Snorkeling, scuba diving, and underwater photography', 'Beachside lunch/BBQ included', 'Return to hotel'] },
      { day: 6, title: 'Leisure Day / Shopping / Spa', activities: ['Breakfast at hotel', 'Optional spa treatments or beachside relaxation', 'Visit local markets for shopping and souvenirs', 'Evening free for leisure activities'] },
      { day: 7, title: 'Departure', activities: ['Breakfast at hotel', 'Morning at leisure', 'Checkout & transfer to airport/railway station'] },
    ],
    quickStats: [
      { icon: 'plane', label: 'Island Trip' },
      { icon: 'utensils', label: 'Breakfast' },
      { icon: 'waves', label: 'Water Sports' },
      { icon: 'shield', label: '24/7 Support' },
    ],
  },
  'rajasthan-adventure-activities': {
    title: 'Rajasthan Adventure Activities',
    duration: '3N/4D',
    destination: 'Rajasthan',
    country: 'India',
    category: 'Adventure Tours',
    rating: 4.7,
    reviews: 156,
    price: 12500,
    originalPrice: 14000,
    image: '/images/pkg_rajasthan.png',
    tags: ['Adventure', 'Desert', 'Wildlife'],
    shortDescription: 'Dune bashing, camel rides, ziplining, hot-air ballooning, trekking, and tiger safaris in Rajasthan\'s ultimate adventure trip.',
    description: 'Rajasthan isn\'t just about forts and history — it\'s a powerhouse for adrenaline junkies! This 3N/4D adventure-only Rajasthan tour takes you deep into sand dunes, skies, hills, and wildlife trails. From dune bashing in Jaisalmer, ziplining at Mehrangarh Fort, and hot-air ballooning over Jaipur, to trekking the Aravallis and wild safaris in Ranthambhore, every day is action-packed.',
    highlights: [
      'Thrilling dune bashing, camel rides & quad biking in Jaisalmer',
      'Ziplining & hot air balloon rides over forts and fields',
      'Paramotoring flights in Pushkar or Jaipur outskirts',
      'Trekking, ATV rides & rock climbing in Aravalli hills',
      'Ranthambhore safari for tiger and wildlife adventure',
      'Optional desert camping with fire shows & folk beats',
    ],
    inclusions: [
      'Adventure activities as per itinerary',
      'Certified instructors & local guides',
      'Safety gear (helmets, harness, life jackets)',
      '3 nights accommodation (camp/hotel/resort)',
      'Daily breakfast & transfers between activity spots',
    ],
    exclusions: [
      'Air/train travel to Rajasthan',
      'Personal expenses, tips, and insurance',
      'Extra activities not listed in itinerary',
      'Meals other than specified',
      'Seasonal activities subject to weather (rafting, ballooning)',
    ],
    itinerary: [
      { day: 1, title: 'Jaisalmer Desert Thrill', activities: ['Dune bashing in Sam/Khuri dunes', 'Camel safari (sunrise or sunset ride)', 'Quad biking and sandboarding', 'Optional paramotoring flight above dunes', 'Night: Desert campfire, folk dance, DJ'] },
      { day: 2, title: 'Jaipur / Pushkar Aerial Fun', activities: ['Ziplining at Mehrangarh or Neemrana fort', 'Hot air ballooning (Jaipur/Pushkar/Ranthambhore)', 'Optional paramotoring above city outskirts'] },
      { day: 3, title: 'Aravalli Hills Adventure', activities: ['Trekking / hiking trails near Udaipur or Mount Abu', 'Rock climbing & rappelling (Mount Abu / Alwar)', 'ATV rides in Jaipur or Udaipur outskirts', 'Paintball or Marwari horse riding (Pushkar/Udaipur)'] },
      { day: 4, title: 'Wildlife Thrill & Departure', activities: ['Ranthambhore gypsy safari for tigers & leopards', 'Jungle walks or birding at Keoladeo/Sariska', 'Breakfast and departure'] },
    ],
    quickStats: [
      { icon: 'mountain', label: 'Adventure Sports' },
      { icon: 'utensils', label: 'Breakfast' },
      { icon: 'users', label: 'Expert Guides' },
      { icon: 'shield', label: '24/7 Support' },
    ],
  },
  'andaman-nicobar-adventure-activities': {
    title: 'Andaman & Nicobar Adventure Activities',
    duration: '3N/4D',
    destination: 'Andaman & Nicobar',
    country: 'India',
    category: 'Adventure Tours',
    rating: 4.7,
    reviews: 98,
    price: 15000,
    originalPrice: 17000,
    image: '/images/pkg_andaman.png',
    tags: ['Beach', 'Scuba Diving', 'Adventure'],
    shortDescription: 'Scuba diving, snorkeling, kayaking, sea walking, and speed boating in this 3N/4D Andaman thrill trip.',
    description: 'The Andaman Islands are India\'s adventure paradise — crystal waters, coral reefs, and epic water sports. This 3N/4D Andaman Adventure Package skips sightseeing and focuses purely on action. From scuba diving at Elephant Beach, sea walking at North Bay, and kayaking through glowing mangroves, to jet skiing, banana rides, and high-speed boating, every day brings a new adrenaline rush.',
    highlights: [
      'Scuba diving & snorkeling at Havelock\'s coral reefs',
      'Sea walking among vibrant fish & corals at North Bay',
      'Kayaking in mangrove creeks (optional night kayaking with bioluminescence)',
      'Jet skiing, banana ride & sofa ride for pure fun',
      'Glass bottom boat ride for soft adventure lovers',
      'Certified instructors, safety gear, underwater photos & videos included',
    ],
    inclusions: [
      '3 nights accommodation (Havelock + Port Blair combo)',
      'Daily breakfast & transfers (ferry + local transport)',
      'All listed adventure activities with instructors',
      'Safety gear (life jackets, helmets, wetsuits, scuba kit)',
      'Underwater photos/videos (for scuba & snorkeling)',
    ],
    exclusions: [
      'Flights to/from Port Blair',
      'Lunch & dinner (unless specified by resort)',
      'Optional add-on activities (night dive, game fishing)',
      'Personal expenses, tips, insurance',
      'Seasonal cancellations due to weather',
    ],
    itinerary: [
      { day: 1, title: 'Havelock Underwater Thrills', activities: ['Scuba diving at Elephant Beach / Nemo Reef', 'Snorkeling in shallow coral waters', 'Optional underwater photoshoot'] },
      { day: 2, title: 'Sea Walking & Kayaking', activities: ['Helmet-based sea walk at North Bay / Havelock', 'Kayaking in mangroves (sunset or night bioluminescence)', 'Jet skiing session near Corbyn\'s Cove / Havelock'] },
      { day: 3, title: 'Speed & Splash Adventures', activities: ['Banana boat ride with friends/family', 'Sofa ride (crazy couch) for high-speed fun', 'Speed boating along Andaman coast', 'Glass bottom boat ride for reef viewing'] },
      { day: 4, title: 'Departure / Add-ons', activities: ['Optional deep sea scuba dive (PADI)', 'Game fishing or night dive (advance booking)', 'Trek to secret beaches before transfer'] },
    ],
    quickStats: [
      { icon: 'waves', label: 'All Water Sports' },
      { icon: 'utensils', label: 'Breakfast' },
      { icon: 'camera', label: 'Underwater Photos' },
      { icon: 'shield', label: '24/7 Support' },
    ],
  },
};

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

interface QuickStat {
  icon: string;
  label: string;
}

interface PackageData {
  title: string;
  duration: string;
  destination: string;
  country: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  image: string;
  tags: string[];
  shortDescription: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  quickStats: QuickStat[];
}

function QuickStatIcon({ type }: { type: string }) {
  const cls = 'h-7 w-7 text-brand-primary';
  switch (type) {
    case 'plane': return <Plane className={cls} />;
    case 'utensils': return <Utensils className={cls} />;
    case 'camera': return <Camera className={cls} />;
    case 'shield': return <Shield className={cls} />;
    case 'car': return <Car className={cls} />;
    case 'waves': return <Waves className={cls} />;
    case 'mountain': return <Mountain className={cls} />;
    case 'users': return <Users className={cls} />;
    default: return <Star className={cls} />;
  }
}

function AccordionItem({ day, title, activities }: ItineraryDay) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-lg overflow-hidden transition-all ${open ? 'border-brand-primary/30 shadow-sm' : 'border-slate-200'} bg-white`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <span className={`text-[11px] md:text-xs shrink-0 text-white px-2.5 md:px-3 py-1 rounded font-bold uppercase tracking-wider transition-colors ${open ? 'bg-brand-primary' : 'bg-slate-800'}`}>
            Day {day}
          </span>
          <span className={`text-[15px] md:text-[17px] font-semibold truncate transition-colors ${open ? 'text-brand-primary' : 'text-slate-900'}`}>{title}</span>
        </div>
        <ChevronDown className={`h-5 w-5 shrink-0 ml-4 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-brand-primary' : ''}`} />
      </button>
      {open && (
        <div className="px-4 md:px-5 pb-5 border-t border-slate-100">
          <ul className="mt-4 space-y-2.5">
            {activities.map((act, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-brand-light flex items-center justify-center">
                  <Check className="h-2.5 w-2.5 text-brand-primary" />
                </div>
                {act}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function PackageDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const pkg = allPackages[slug];

  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '', date: '', travellers: '2', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!pkg) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header onOpenEnquiry={() => setModalOpen(true)} />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Package Not Found</h1>
            <p className="text-slate-500 mb-6">The package you are looking for doesn't exist or may have been removed.</p>
            <a href="/package" className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-secondary transition-colors">
              <ArrowRight className="h-4 w-4 rotate-180" /> Browse All Packages
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const discount = Math.round((1 - pkg.price / pkg.originalPrice) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onOpenEnquiry={() => setModalOpen(true)} />
      <div className="relative w-full h-20 md:h-24" />

      <main className="flex-grow mx-auto w-full max-w-7xl px-4 md:px-6 pt-4 md:pt-6 lg:pt-10 pb-16">

        {/* Breadcrumb */}
        <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
          <ChevronRight className="h-3 w-3 -rotate-0" />
          <a href="/package" className="hover:text-brand-primary transition-colors">{pkg.category}</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-800 font-medium truncate max-w-[200px] md:max-w-none">{pkg.title}</span>
        </nav>

        {/* Page Title */}
        <div className="mb-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight">{pkg.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-primary" /> {pkg.duration}
                </span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand-primary" /> {pkg.destination}
                </span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-800">{pkg.rating}</span>
                  <span className="text-slate-400">({pkg.reviews} reviews)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  <Share2 className="h-4 w-4" /> Share
                </button>
                <div className="flex gap-1">
                  {pkg.tags.map(tag => (
                    <span key={tag} className="bg-brand-light text-brand-primary text-[11px] font-bold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* LEFT: Main content (8 cols) */}
          <div className="flex flex-col gap-10 lg:col-span-8">

            {/* Hero Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
              <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority sizes="(max-width:768px) 100vw, 800px" />
            </div>

            {/* Highlights */}
            <section>
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-5">Experience Highlights</h2>
              <div className="flex flex-wrap gap-2.5">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-900">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-[13px] font-medium text-slate-800">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Overview</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{pkg.description}</p>
              </div>
            </section>

            {/* Quick Stats Bar */}
            <section>
              <div className="flex flex-wrap items-center justify-around gap-6 py-8 border-y border-slate-100">
                {pkg.quickStats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 min-w-[100px]">
                    <QuickStatIcon type={stat.icon} />
                    <span className="text-[14px] font-bold text-brand-primary">{stat.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section>
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <AccordionItem key={day.day} {...day} />
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-8">Inclusions & Exclusions</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Inclusions */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                  </div>
                  <ul className="space-y-4">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[14px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 border border-red-100">
                      <X className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">What's Excluded</h3>
                  </div>
                  <ul className="space-y-4">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                          <X className="h-3.5 w-3.5 text-red-500" />
                        </div>
                        <span className="text-[14px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT: Sticky Booking Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">

              {/* Price Card */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-brand-dark px-5 py-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Starting from</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-white">₹{pkg.price.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-slate-400 line-through mb-0.5">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-300">Per person</span>
                    <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Save {discount}%</span>
                  </div>
                </div>

                {/* Enquiry Form */}
                <div className="p-5">
                  {submitted ? (
                    <div className="text-center py-6">
                      <div className="flex justify-center mb-3">
                        <BadgeCheck className="h-12 w-12 text-green-500" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Enquiry Sent!</h3>
                      <p className="text-sm text-slate-500">Our team will contact you within 24 hours to confirm your booking.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <h3 className="font-bold text-slate-900 text-[15px] mb-3">Book This Package</h3>

                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={enquiryForm.name}
                        onChange={e => setEnquiryForm(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all bg-slate-50"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={enquiryForm.phone}
                        onChange={e => setEnquiryForm(p => ({ ...p, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all bg-slate-50"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={enquiryForm.email}
                        onChange={e => setEnquiryForm(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all bg-slate-50"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Travel Date</label>
                          <input
                            type="date"
                            value={enquiryForm.date}
                            onChange={e => setEnquiryForm(p => ({ ...p, date: e.target.value }))}
                            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary bg-slate-50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Travellers</label>
                          <select
                            value={enquiryForm.travellers}
                            onChange={e => setEnquiryForm(p => ({ ...p, travellers: e.target.value }))}
                            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary bg-slate-50"
                          >
                            {[1,2,3,4,5,6,7,8,9,10].map(n => (
                              <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <textarea
                        placeholder="Any special requests or questions?"
                        rows={2}
                        value={enquiryForm.message}
                        onChange={e => setEnquiryForm(p => ({ ...p, message: e.target.value }))}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all bg-slate-50 resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 text-[15px]"
                      >
                        Send Enquiry
                      </button>
                      <a
                        href="/payment"
                        className="w-full flex items-center justify-center gap-2 border border-brand-primary text-brand-primary hover:bg-brand-light font-bold py-2.5 rounded-xl transition-all text-[14px]"
                      >
                        <Calendar className="h-4 w-4" /> Proceed to Payment
                      </a>
                    </form>
                  )}
                </div>

                {/* Contact */}
                <div className="border-t border-slate-100 px-5 py-4 space-y-2.5">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Need Help?</p>
                  <a href="tel:+918031274154" className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-brand-primary transition-colors">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light">
                      <Phone className="h-3.5 w-3.5 text-brand-primary" />
                    </div>
                    +91 80312 74154
                  </a>
                  <a href="mailto:info@paradiseyatra.com" className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-brand-primary transition-colors">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light">
                      <Mail className="h-3.5 w-3.5 text-brand-primary" />
                    </div>
                    info@paradiseyatra.com
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="space-y-3">
                  {[
                    { icon: <BadgeCheck className="h-4 w-4 text-green-500" />, text: 'Verified & Trusted Package' },
                    { icon: <Shield className="h-4 w-4 text-brand-primary" />, text: 'Secure Payment via Razorpay' },
                    { icon: <PhoneCall className="h-4 w-4 text-amber-500" />, text: '24/7 Customer Support' },
                    { icon: <Users className="h-4 w-4 text-purple-500" />, text: '500+ Happy Travellers' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                      {item.icon}
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedDestination={pkg.title} />
    </div>
  );
}
