import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Car, Calendar, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const DestinationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
          <Compass className="w-3.5 h-3.5" />
          <span>Scenic Getaway Directory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Destinations Within Your Reach
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          From the misty Sahyadri ridges of Lonavala to the sun-soaked coconut groves of Alibaug and Portuguese courtyards of Goa. Explore our handpicked regions.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS_DATA.map((dest) => (
          <div
            key={dest.slug}
            className="group bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="font-serif text-xl font-bold">{dest.name}</span>
                <span className="text-[11px] font-semibold bg-stone-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  {dest.villaCount} Villas
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-xs font-medium text-amber-800 line-clamp-1">
                  {dest.tagline}
                </p>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                {/* Travel & Season metadata */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-stone-400" />
                    <span>{dest.travelTimeFromMumbai}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>Best: {dest.bestSeason}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="text-xs font-semibold text-stone-700 hover:text-amber-700 transition-colors"
                >
                  Regional Guide
                </Link>

                <Link
                  to={`/villas?destination=${dest.name}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  <span>Explore Villas</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
