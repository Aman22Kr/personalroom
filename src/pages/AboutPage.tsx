import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Waves, 
  UtensilsCrossed, 
  Users, 
  ArrowRight,
  Award
} from 'lucide-react';
import { CompactAdBanner } from '../components/CompactAdBanner';
import { VideoTourPlaceholder } from '../components/VideoTourPlaceholder';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* 1. Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Detox Your Lifestyle in Curated Private Sanctuaries
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          personalroom was born from a fundamental realization: modern city living drains our peace. True luxury is not a sterile corridor in a thousand-room mega-hotel, but an exclusive private villa with your own pool, morning mountain mist, and authentic home-cooked meals.
        </p>
      </div>

      {/* 2. Key Stats Strip (Clean unboxed metrics) */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-400">85+</div>
            <div className="text-xs text-stone-300 font-medium">Curated Villas</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-400">150K+</div>
            <div className="text-xs text-stone-300 font-medium">Delighted Travelers</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-400">98.4%</div>
            <div className="text-xs text-stone-300 font-medium">5-Star Feedback</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-400">12</div>
            <div className="text-xs text-stone-300 font-medium">Premier Destinations</div>
          </div>
        </div>
      </div>

      {/* 3. The Pillars of personalroom */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Uncompromising Standards
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mt-1">
            What Sets Every personalroom Stay Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Total Seclusion</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              When you book a personalroom villa, the entire property is exclusively yours. No strangers sharing the pool, no noisy breakfast buffets, and no curfews. Just your family and friends in quiet luxury.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Soulful Culinary Care</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hospitality is rooted in nourishment. Our trained resident caretakers cook homestyle regional delicacies—from crisp Lonavala corn pakodas and steaming Chai to spicy coastal fish curry in Alibaug.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Rigorous 60-Point Audit</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Before any bungalow is listed under personalroom, it undergoes inspection for acoustic serenity, pool filtration, mattress ergonomics, power backups, and high-speed fiber internet stability.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Virtual Walkthrough Spotlight */}
      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Transparent Hospitality
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight mt-1">
            See the Quality with Your Own Eyes
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            We provide realistic 16:9 walkthroughs of every holiday home in our network.
          </p>
        </div>

        <VideoTourPlaceholder
          title="personalroom Philosophy & Villa Walkthrough"
          location="Estate Portfolio Preview"
          duration="03:15 4K Walkthrough"
        />
      </div>

      {/* 5. Concierge Callout */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold">Ready for your weekend detox?</h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            Our Central Concierge team is on standby 24/7 to help tailor the perfect villa for your milestone celebration or family escape.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/villas"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
          >
            Find a Villa
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors border border-stone-700"
          >
            Contact Desk
          </Link>
        </div>
      </div>

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
