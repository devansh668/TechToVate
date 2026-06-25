'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import EnquiryModal from '@/components/EnquiryModal';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';
import { Phone, Mail, MapPin, Landmark, ExternalLink, Calendar, Clock, BookOpen, ChevronLeft, ArrowRight, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function CheapFlightsBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "When is the absolute best day to book international flights?",
      answer: "While there is no single magical day, historical booking data shows that starting your search early and monitoring price trends midweek (Tuesday to Thursday) yields the best rates. Setting automated fare alerts is far more effective than trying to book on one specific day."
    },
    {
      question: "Does clearing cookies or using incognito mode actually lower flight prices?",
      answer: "No, this is largely a travel myth. Airline pricing systems are based on complex algorithms tracking global route demands, season, seat inventory, and ticketing categories—not your individual browser cookie history. However, using incognito mode is a good way to get clean, untracked comparisons."
    },
    {
      question: "What exactly is the 'Open-Jaw' flight trick?",
      answer: "An open-jaw flight allows you to fly into one city (e.g., London) and depart back home from another city (e.g., Paris). This is ideal for multi-city travel, saving you both backtracking travel time and separate ticketing costs."
    },
    {
      question: "Should I book one-way tickets instead of a round trip?",
      answer: "Traditionally, round-trip international tickets are cheaper. However, with low-cost carriers, it can occasionally be cheaper to book two separate one-way tickets on different airlines. Always compare the total sum of both one-ways against the round-trip price before booking."
    },
    {
      question: "How does the shoulder season save money?",
      answer: "The shoulder season is the sweet spot between peak tourist months and the off-season. Traveling during this window (like April-May or Sept-Oct in Europe) avoids peak surge pricing on flights and hotels, while offering pleasant weather and fewer crowds."
    },
    {
      question: "What is the 'hidden-city ticketing' trick, and is it safe?",
      answer: "Hidden-city ticketing involves booking a flight with a layover in your actual destination, and skipping the second leg. While it can save money, airlines strictly prohibit this practice. If caught, you risk having your frequent flyer account suspended or future flights cancelled."
    },
    {
      question: "How early should I arrive at the airport for an international flight?",
      answer: "We recommend arriving at least 3 hours prior to departure for international flights. This allows ample time for baggage drop, visa verification at the check-in desk, security queues, and passport control."
    },
    {
      question: "Does booking last-minute flights save money?",
      answer: "For international routes, last-minute deals are extremely rare. Airlines tend to raise prices for business travelers who need to book last-minute. It is best to book international flights 2 to 6 months in advance."
    },
    {
      question: "Can I get a refund if the flight price drops after I book?",
      answer: "Some airlines offer price drop protection or travel credits if the fare decreases after booking, especially if you buy flexible tickets. Check the airline's policy or use booking services that track and refund price drops."
    },
    {
      question: "What baggage allowance is typical for international flights?",
      answer: "Standard international flights usually include one carry-on bag (up to 7-10kg) and one checked bag (up to 23kg). Budget carriers often charge extra for checked baggage, so always confirm inclusions before purchasing."
    }
  ];

  const handleOpenGeneralEnquiry = () => {
    setSelectedDest('');
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
              <ImageSlider 
                images={[
                  "/images/cheap_flights_blog.jpg",
                  "/images/dubai.png",
                  "/images/paris.png",
                  "/images/interlaken.png",
                  "/images/budget_international_blog.jpg"
                ]} 
                alt="How to Get Cheap International Flights" 
              />
            </div>

            {/* Article Meta & Title */}
            <div className="p-6 sm:p-10 border-b border-slate-100 space-y-4">
              <div className="flex flex-wrap gap-3 items-center text-xs font-bold text-slate-400">
                <span className="rounded-full bg-brand-light text-brand-primary px-3.5 py-1 uppercase tracking-wider">
                  Flight Hacks
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>June 8, 2026</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>10 Min Read</span>
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                How to Get Cheap International Flights: Insider Secrets That Actually Work
              </h1>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-base sm:text-lg">
                Securing the cheapest international flight can be a confusing, stressful and time consuming process. Sometimes the fare seems cheap and sometimes it jumps without warning. But smart travellers know that the price of flights doesn&apos;t fluctuate in random ways. Airlines determine prices based on demand, Season, Seat availability, Routes, Competition and Booking patterns. Thus, when you know how such system works you can save lots of cash.
              </p>

              <p>
                From a family getaway to a honeymoon, a business trip, a study abroad experience or a solo adventure, you can find the perfect solution to the problem of cheap international flights without compromising on comfort. Besides, there&apos;s no such thing as luck. It takes time, flexibility, tools and some insider tips.
              </p>

              <p>
                This detailed guide will teach you practical insights that will work. With these tips, you can get better fare comparisons, book the best travel dates, utilize stopovers effectively, monitor discounts, stay away from hidden fees and be a more savvy traveler each time.
              </p>

              {/* Section 1 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                1. Start Searching Early, But Do Not Book Too Early
              </h3>
              <p>
                Others in the travel business think that the earlier you book the better and cheaper the deal will be. But not all the time. Many airlines issue tickets months ahead of time, but the best price is typically available when demand becomes more apparent.
              </p>
              <p>
                On most international flights, bookings for two to three months in advance are a good time to begin to get a feel for prices. If you are going at high tourist times such as the summer holidays or Christmas, New Year or at festivals, begin even earlier. But, do not rush if there is no true cheap fare.
              </p>
              <p className="bg-white border-l-4 border-brand-primary p-4 rounded-r-xl italic">
                A smart approach is simple! First, keep track of the average ticket price. Then, you can set fare alerts. Lastly, when the price is lower than the normal price range. This way, you can prevent panic booking and increase the possibilities of taking on cheap international flights.
              </p>

              {/* Section 2 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                2. Be Flexible on the Dates You Travel
              </h3>
              <p>
                Flexibility is key to airfares. Indeed, a one or two-day change in return or departure dates can save quite a bit on ticket prices.
              </p>
              <p>
                Typically, midweek airfares are cheaper than those on the weekend. The days of the week that are less packed with travelers are typically Tuesday, Wednesday and Thursday. However, Fridays, Saturdays and Sundays are typically the busiest days.
              </p>
              <p>
                In addition, flights to and from early morning or late evening might be cheaper. These times can be inconvenient to some, but budget travelers may benefit from these schedules. Thus, it is always better to check fares for an entire week before making a booking.
              </p>
              <p>
                If possible, please use a flexible date search option. There are tons of flight search engines that will display a calendar view and you&apos;ll be able to find the cheapest days to travel in a flash. This means you can book your trip according to the cheapest available rates, rather than the cost of scheduled dates.
              </p>

              {/* Section 3 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                3. Travel During the Shoulder Season
              </h3>
              <p>
                The cost of traveling during peak seasons can easily get out of hand. When everyone wants to visit the same destination, flights, hotels, tours and even local transport can be more expensive. Thus, if you&apos;re searching for cheap international flights, one of the simplest methods to make it happen is to journey throughout the shoulder season.
              </p>
              <p>
                The shoulder season is the time between the peak and off-season. For instance, in Europe April and May, September and October are frequently less expensive than June, July and August. Also, lots of beach places supply reduced rates before or after the peak tourist months.
              </p>
              <p>
                Other than the lower cost of airfare, there are other benefits to traveling in the shoulder season. Attractions are less crowded, hotels have better rates and the weather is often better. Additionally, you will have more of a relaxed approach to traveling.
              </p>

              {/* Section 4 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                4. Use Fare Alerts Instead of Checking Manually
              </h3>
              <p>
                Flights are subject to price fluctuations. But doing so manually can be tedious and stressful every few hours. Fare alerts are the answer to this.
              </p>
              <p>
                Alerts are available on the popular flight comparison sites and can be used to get notification when flight prices drop. This way, you won&apos;t miss out on any spurious declines. Additionally, fare alerts will give you an idea of the average range of fares on your route.
              </p>
              <p>
                To get the most out of it, set up alerts for several airports, close cities, and give customable dates. For instance, if you are looking to fly from Delhi to London then you should also look for flights from other departure or arrival stations close to London. Sometimes, a nearby airport may have a significantly lower price.
              </p>
              <p>
                Also, establish alerts in advance. The more time you give, the more chances that you have. You&apos;ll eventually know when a deal is really good.
              </p>

              {/* Section 5 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                5. Compare Nearby Airports
              </h3>
              <p>
                While the larger airports may have a wider selection of flights, not all of them will be the lowest price. In some instances, local or smaller airports may offer better value because they are not as popular, have less competition, or offer a promotional rate.
              </p>
              <p>
                If you&apos;re headed to New York, for instance, you might want to compare prices to JFK, Newark and LaGuardia. For a trip to Europe, look at other cities in the area, too. A round trip from Paris to Amsterdam can be cheaper than direct flights into Paris and out of Amsterdam.
              </p>
              <p>
                This is an effective strategy in areas where there are good rail or bus services. Travel between cities in Europe, Southeast Asia and the Middle East are plentiful. So, you can find the lowest international entry price and then go around the area at a lower cost.
              </p>
              <p>
                But, never forget to include the total cost. Include any miscellaneous fees, such as baggage fees, airport transfer fees, local transportation, and travel time. If you still think the savings are worth it, select the other airport.
              </p>

              {/* Section 6 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                6. Book Connecting Flights Carefully
              </h3>
              <p>
                Travel by air is comfortable and time saving, but is more expensive. Connecting flights can help you find cheap international flights, especially on long-distance routes.
              </p>
              <p>
                For instance, a trip from India to Europe through the Middle East is likely to be cheaper than a direct flight between these two regions. Likewise, international routes that go through major cities such as Doha, Dubai, Istanbul, Abu Dhabi, Singapore and Kuala Lumpur can offer competitive fares.
              </p>
              <p>
                But make sure to select appropriate connections. Do not have very short layovers as they can cause delays. Meanwhile, don&apos;t forget to stay in the city for an exceptionally long layover if you do not intend to make a stopover city pilgrimage.
              </p>
              <p>
                In addition, look to see if there are automatic baggage transfers. Some budget carrier airlines might ask you to check and recheck your bags. So, check the information prior to booking. If an inexpensive ticket is purchased it should not cause an undue burden.
              </p>

              {/* Section 7 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                7. Try the Open-Jaw Flight Trick
              </h3>
              <p>
                Open-jaw flights enable you to fly in to a city and return from a different one. This can be the case in multi-city trips and can help to save you money on the overall travel.
              </p>
              <p>
                For instance, a ticket to Paris and back to Delhi from Rome. You do not have to head back to Rome only to catch your flight back home, you save both time and money saving. The trick is particularly effective in Europe, where numerous cities are linked by trains and cheap air fares.
              </p>
              <p>
                Open-jaw tickets can also assist you in making smarter itineraries. Furthermore, they decrease the number of backtracks. So, more time spent exploring and less time spent on routes.
              </p>
              <p>
                Use &ldquo;multi-city&rdquo; search rather than a round-trip search if searching. Then calculate the total cost and compare it with the normal round trip cost. You might find a better way to do it.
              </p>

              {/* Section 8 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                8. Clear Your Assumptions About Incognito Mode
              </h3>
              <p>
                Airlines are known to raise the price of their tickets the more they&apos;re searched. For this reason, they always use incognito mode. But that&apos;s not just the browser that determines how much it costs to fly somewhere.
              </p>
              <p>
                However, you can use incognito mode to compare prices without any cookies or saved preferences interfering. So using it is not going to hurt at all. But don&apos;t plan on using it as a primary money-saving measure.
              </p>
              <p>
                Read instead for flexible dates, airports that are close, fare alerts, and even route comparisons. These techniques typically end up saving more money than just changing browser modes.
              </p>

              {/* Section 9 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                9. Reward Points & Airline Miles
              </h3>
              <p>
                Your airplane ticket could be significantly cheaper with rewards from airline miles and credit card points. Going on a lot of trips should bring one into frequent flyer programs. Reward points can be useful for travelers who don&apos;t particularly frequent the airport.
              </p>
              <p>
                There are certainly a variety of airlines that are part of a global alliance. So, when you fly with one airline, you can use your miles with partner airlines. Additionally, some credit cards provide point bonuses, travel points, lounge entry and discount vouchers.
              </p>
              <p>
                But use your points judiciously. Sometimes, taxes and fuel surcharges reduce the value of a reward ticket. Thus, check the cash cost in comparison to the redemption value of points before booking.
              </p>

              {/* Section 10 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                10. Watch for Airline Sales and Error Fares
              </h3>
              <p>
                Airlines frequently have sale periods for a specific period of time. These deals can be for just a few hours or days. Thus, time is of the essence.
              </p>
              <p>
                Keep an eye out for airline newsletters, travel deal pages and fare alerts. Additionally, keep an eye out for holiday promotions, anniversary discounts, student rates, and other seasonal deals.
              </p>
              <p>
                Another cost factor that can be extreme with error fares is the cost of the airfare. They occur when airlines or booking systems have made some mistake and show unusually low prices. But, in certain instances, an airline can cancel such tickets. So, don&apos;t book hotels or tours until you have received a confirmation.
              </p>

              {/* Section 11 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                11. Avoid Hidden Charges
              </h3>
              <p>
                Low fare doesn&apos;t necessarily equal low cost. Some airlines have low base fares but impose additional fees for paying with credit cards, changing the ticket, meals, seat selection and bag fees.
              </p>
              <p className="font-semibold text-slate-800">
                Please confirm all fare information prior to booking. Ask these questions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Is checked bag included with the ticket?</li>
                <li>Do you have a choice of where to sit?</li>
                <li>Do they serve food on board?</li>
                <li>How much will the cancellation and change cost?</li>
                <li>Is a transit visa needed?</li>
              </ul>
              <p>
                These are the little things that can make a difference in the total price. For instance, a budget fare with high-cost add-ons might be more expensive than a slightly pricier fare with baggage. So, don&apos;t compare the price you see, but rather the total price.
              </p>

              {/* Section 12 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                12. Book One-Way Tickets Only When They Make Sense
              </h3>
              <p>
                Round trip airfares tend to be less expensive on international flights. This is a rule of thumb, but not always applicable. At times, booking two one-way tickets from various airlines may be cheaper than booking back-to-back tickets on the same airline.
              </p>
              <p>
                This tip is useful for trips to numerous countries or for low-cost airlines. A simple instance is that you might discover a low-cost outbound flight from one airline and a cheaper return flight from another airline.
              </p>
              <p>
                But please note that it is important to check visa requirements before making separate reservations. Some countries may require an onward or return ticket. In addition, there may be problems arising from separate bookings if one flight is delayed and it impacts on another flight. So use this strategy with caution.
              </p>

              {/* Section 13 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                13. Consider Budget Airlines, But Read the Rules
              </h3>
              <p>
                For people who want to travel internationally on a budget, budget airlines will be able to help you find cheap international flights. Low-cost airlines frequently have competitive rates in Europe, Southeast Asia and the Middle East.
              </p>
              <p>
                But budget airlines have their ground rules. They might add fees for checked luggage, cabin bags, seat assignments, meals, boarding tickets and changes. In addition, they might be based at secondary airports not located in the urban area.
              </p>
              <p>
                Thus, make sure to always do the full cost calculation. Budget airlines are a good option if it&apos;s still cheaper than a full-service airline. But if you require luggage, meals and flexibility, a full-service airline might be a better choice.
              </p>

              {/* Section 14 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                14. Use Student, Senior, and Group Discounts
              </h3>
              <p>
                Discounts are not taken by many travellers and they lose out on it. Students, senior citizens, families, corporate travelers and groups may qualify for special fares offered by the airline, travel agency or booking platform.
              </p>
              <p>
                There are also opportunities for students to avail of additional baggage allowances, date flexibilities and discounted fares on specific routes. Likewise, group rates could be better for families, school trips, business groups and wedding trips, too.
              </p>

              {/* Section 15 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                15. Choose the Right Day to Book
              </h3>
              <p>
                There is no specific day of the week that will always offer the cheapest ticket prices. But the facts of the flight reveal that sometimes fares do vary throughout the week. Some people prefer to book their trips on weekdays rather than weekends.
              </p>
              <p>
                But, above all, do not make reservations during high demand periods. For instance there may be price increases on salary dates, on holiday planning dates, or around big dates. So, wait for several days to observe the prices and then make a decision.
              </p>

              {/* Section 16 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                16. Search in Different Currency Options
              </h3>
              <p>
                It is possible to get a slightly lower fare if you book in another currency sometimes. This is because the market, exchange rate and payment location are different, which means airlines and booking platforms will adjust prices accordingly.
              </p>
              <p>
                But be careful with this trick! Foreign transaction fees may apply to you by your bank. In addition, exchange rate fluctuations may also affect the amount of the refund. As a result, compare the totals including all charges.
              </p>

              {/* Section 17 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                17. Do Not Ignore Travel Agencies
              </h3>
              <p>
                There are some online search tools that are helpful, but travel agencies still play a major role. In addition to their knowledge of the airline, seasonality, visa requirements, baggage policies, and combinations of fares, experienced agents are more knowledgeable about the rules. Furthermore, they can assist if your trip becomes complicated.
              </p>
              <p>
                A good travel agency can compare several alternatives, suggest a better one and can help you avoid the risk of booking. This support is beneficial for family vacations, honeymoon packages, student travel, group tours and multi country trips.
              </p>
              <p>
                In addition, agencies can take advantage of special rates or packages that encompass flights, accommodation, transfers, and sightseeing. So, make sure to not always go with the best online booking.
              </p>

              {/* Section 18 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                18. Book at the Right Time for Peak Travel
              </h3>
              <p>
                If you are intending to travel during the festive season or during the peak travel periods such as Christmas, New Years, school holidays, summer holiday, book early. These are the times when demand surges and last-minute bargains are hard to come by.
              </p>
              <p>
                If you&apos;re looking to travel abroad, book 6 to 8 months ahead of time for the best prices. After that, look for a good deal on a book. It may not be a perfect strategy to wait till there is a big decline as the airline is aware that there is always going to be demand.
              </p>

              {/* Section 19 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                19. Use Stopover Programs
              </h3>
              <p>
                There are stopover programs available for some airlines, which are either free or low cost. They are programs that enable you to spend one or more days in a connecting city before leaving.
              </p>
              <p>
                For instance, Middle Eastern and Asian based airlines generally offer incentives for stopovers for the purpose of tourism. This means, that the visitor can visit another extra city without paying an additional ticket.
              </p>

              {/* Section 20 */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                20. Stay Ready to Book When the Deal Appears
              </h3>
              <p>
                The cheapest airfares aren&apos;t around forever. If you do spot a great deal, then follow through fast. But plan ahead for the day.
              </p>
              <p>
                Have passport information at hand. Please double check your travel dates. Be aware of your luggage requirements. Check visa requirements. Also, you need to determine your budget ahead of time.
              </p>

              {/* Common Mistakes */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                Common Mistakes to Avoid
              </h3>
              <p>
                Even the most seasoned travellers need to make expensive blunders. But there are ways to prevent them if you&apos;re careful.
              </p>
              <p>
                The first one is never book without comparing different platforms. Second, don&apos;t discount baggage policies. Thirdly, avoid taking unnecessary risks on layovers. Fourthly, don&apos;t stay in the line too long during the busy season. Last, but not least, visa and transit restrictions.
              </p>

              {/* Final Checklist */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                Final Checklist for Cheap International Flights
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Compare flexible dates.</li>
                <li>Check nearby airports.</li>
                <li>Set fare alerts.</li>
                <li>Review baggage rules.</li>
                <li>Compare air travel choices of making a direct flight or stopping over on the way.</li>
                <li>See visa and transit requirements.</li>
                <li>Check out the airline&apos;s sales.</li>
                <li>If available use points or miles.</li>
                <li>Evaluate round-trip, one-way and multi-city ticketing.</li>
                <li>If the fare is in line with your desired budget, book it.</li>
              </ul>

              {/* Conclusion */}
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 pt-4">
                Conclusion
              </h3>
              <p>
                It&apos;s not difficult to get cheap flights internationally either. Rather, it takes some smart planning, flexible travel dates, fare alerts, route comparison, and rapid decision making. If one knows how airlines price and can utilize the proper strategies, one can travel abroad without spending too much.
              </p>
              <p>
                In addition, cheap travel is not cheap travel. Comfort, safety and convenience without the cost. It is essential to compare total costs, not hidden charges, and to select flights that will match your schedule and budget.
              </p>
              
              {/* Cheap Flights FAQ Accordion */}
              <div className="border-t border-slate-100 pt-8 mt-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Cheap Flights FAQ
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
                  Plan Your Cheap International Getaway Today!
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To get expert support in making cheap international travel arrangements, creating customized itineraries, holiday packages, visa advice and seamless travel arrangements, you can reach out to us. If you book the right trip and at the right time, your dream international travel can become easier, smarter and budget-friendly.
                </p>
                <button
                  onClick={handleOpenGeneralEnquiry}
                  className="rounded-2xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-6 py-3 text-xs sm:text-sm shadow-premium transition flex items-center space-x-2"
                >
                  <span>Consult Travel Experts</span>
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
