import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  UtensilsCrossed, 
  Waves, 
  UserCheck, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Car,
  Building
} from 'lucide-react';
import { VILLAS_DATA } from '../data/villasData';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { FAQS_DATA } from '../data/faqData';
import { SearchHeroBox } from '../components/SearchHeroBox';
import { VillaCard } from '../components/VillaCard';
import { VideoTourPlaceholder } from '../components/VideoTourPlaceholder';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const featuredVillas = VILLAS_DATA.filter((v) => v.featured).slice(0, 4);
  const weekendEscapes = VILLAS_DATA.slice(2, 6);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-stone-900 text-white overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury villa sanctuary"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/90 to-stone-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Detox Your Lifestyle · Private Holiday Sanctuaries</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Curated Luxury Villas & Serviced Bungalows
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Escape the city rush. Handpicked private pool villas, live-in caretakers, and fresh homestyle dining in Lonavala, Alibaug, Karjat, Goa, and Mahabaleshwar.
          </p>

          {/* Search Hero Box */}
          <div className="pt-4 sm:pt-8">
            <SearchHeroBox />
          </div>

          {/* Quick Destination Navigation (Clean Buttons) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-300">
            <span className="text-stone-400">Popular Getaways:</span>
            {['Lonavala', 'Alibaug', 'Karjat', 'Goa', 'Mahabaleshwar'].map((dest) => (
              <button
                key={dest}
                onClick={() => navigate(`/villas?destination=${dest}`)}
                className="px-3 py-1 rounded-md bg-stone-800/80 hover:bg-amber-500 hover:text-stone-950 transition-colors border border-stone-700/60 font-medium cursor-pointer"
              >
                {dest}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Private Pool Villas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">
              Handpicked Spotlight
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Featured Private Pool Villas
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Top-rated estates with 100% exclusive swimming pools and panoramic views
            </p>
          </div>

          <Link
            to="/villas"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-900 hover:text-amber-700 transition-colors"
          >
            <span>View All 85+ Villas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVillas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </section>

      {/* 3. The personalroom Experience Pillars (Why Choose Us) */}
      <section className="bg-stone-100/70 border-y border-stone-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              The personalroom Difference
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mt-1">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Unlike shared resorts or crowded hotel corridors, our serviced private villas ensure total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">100% Private Pools</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Exclusive swimming pools reserved strictly for your group. Filtered, chlorinated, and inspected before arrival.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Dedicated Caretaker</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Warm on-site hospitality staff to assist with luggage, tea service, housekeeping, and local exploration recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Homestyle Regional Cuisine</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Relish home-cooked Maharashtrian specialties, authentic coastal seafood in Alibaug, and custom barbecue nights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Verified & Sanitized</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                High-speed Wi-Fi, power backup generators, spotless linen, and secure gated perimeters at every property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Video Tour Spotlight Section (Preserving 16:9 YouTube Blank Placeholder Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700">
              Virtual Walkthrough
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Experience Your Villa Before You Arrive
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We shoot candid, high-resolution walkthroughs of every bedroom, infinity deck, and dining pavilion. No wide-angle distortion or hidden flaws—what you see is precisely the private sanctuary you unlock.
            </p>
            
            <div className="space-y-2 pt-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% physically audited by our hospitality architects</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent floor plans and ensuite bathroom counts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accurate acoustic and neighborhood quietness ratings</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/villas"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Browse All Verified Villas</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* The YouTube video placeholder component */}
            <VideoTourPlaceholder
              title="Hillcrest Villa & Infinity Pool Walkthrough"
              location="Tungarli Hills, Lonavala"
              duration="03:45 4K Walkthrough"
            />
          </div>
        </div>
      </section>

      {/* 5. Explore Destinations Showcase with Travel Durations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">
              Scenic Escapes
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Destinations Within Easy Reach
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Effortless travel from Mumbai and Pune for weekend detox getaways
            </p>
          </div>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-900 hover:text-amber-700 transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS_DATA.slice(0, 4).map((dest) => (
            <Link
              key={dest.slug}
              to={`/destinations/${dest.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-stone-900 border border-stone-200/50 shadow-md block"
            >
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

              <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                {dest.villaCount} Villas
              </div>

              <div className="absolute bottom-4 inset-x-4 text-white space-y-1">
                <h3 className="font-serif text-xl font-bold group-hover:text-amber-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {dest.tagline}
                </p>
                <div className="pt-2 text-[11px] text-amber-300/90 flex items-center gap-1">
                  <Car className="w-3 h-3" />
                  <span>{dest.travelTimeFromMumbai}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Guest Testimonials */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Guest Experiences
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Loved by Over 150,000 Travelers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-800/70 border border-stone-700/60 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                "Our stay at Hillcrest Villa in Lonavala was sensational. The private infinity pool overlooked clouds rolling over the valley. The caretaker Dattatray made the most authentic Maharashtrian dinner."
              </p>
              <div className="pt-2 border-t border-stone-700/60 text-xs">
                <span className="font-semibold text-white">Rohan & Family</span>
                <span className="text-stone-400"> · Mumbai (Stayed Oct 2026)</span>
              </div>
            </div>

            <div className="bg-stone-800/70 border border-stone-700/60 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                "We boarded the Ro-Ro ferry from Bhaucha Dhakka with our car and dog, and were lounging by Coral Reef Villa’s lap pool in Alibaug within an hour. Seamless booking and pristine hygiene."
              </p>
              <div className="pt-2 border-t border-stone-700/60 text-xs">
                <span className="font-semibold text-white">Siddharth & Priya</span>
                <span className="text-stone-400"> · South Mumbai (Stayed Oct 2026)</span>
              </div>
            </div>

            <div className="bg-stone-800/70 border border-stone-700/60 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                "Zen Estate in Assagao was pure luxury. Restored Portuguese chandeliers, huge swimming pool, and five large bedrooms where all cousins could reconnect comfortably. Five stars!"
              </p>
              <div className="pt-2 border-t border-stone-700/60 text-xs">
                <span className="font-semibold text-white">Ananya Singhania</span>
                <span className="text-stone-400"> · Delhi / Pune (Stayed Sep 2026)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mt-1">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.slice(0, 5).map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-stone-200 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Homeowner Partnership Callout (Recreating 29bungalow List Your Property) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-stone-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>For Holiday Homeowners</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
              Own an Exclusive Holiday Villa or Bungalow?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Partner with personalroom. We handle high-profile guest marketing, 24/7 concierge, professional housekeeping, and zero-headache monthly payouts while preserving your private family usage days.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/list-your-property"
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>List Your Property</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors border border-stone-700"
              >
                Speak with Owner Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Compact Advertisement Banner Section */}
      <CompactAdBanner />
    </div>
  );
};
