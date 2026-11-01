import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, BedDouble, Bath, ShieldCheck, MapPin } from 'lucide-react';
import { Villa } from '../data/villasData';
import { useApp } from '../context/AppContext';

interface VillaCardProps {
  villa: Villa;
  layout?: 'grid' | 'list';
}

export const VillaCard: React.FC<VillaCardProps> = ({ villa, layout = 'grid' }) => {
  const { toggleWishlist, isInWishlist } = useApp();
  const isSaved = isInWishlist(villa.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  if (layout === 'list') {
    return (
      <div className="group relative bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative w-full md:w-80 h-56 md:h-auto overflow-hidden shrink-0 bg-stone-100">
          <img
            src={villa.images[0]}
            alt={villa.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(villa.id);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs text-stone-700 hover:text-rose-600 transition-colors shadow-sm z-10 cursor-pointer"
            title={isSaved ? 'Remove from saved' : 'Save to wishlist'}
            aria-label={`Wishlist toggle for ${villa.title}`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'text-rose-600 fill-rose-600' : ''}`} />
          </button>

          {/* Quick Destination Label */}
          <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>{villa.destination}</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Clean Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
              <span className="font-medium text-stone-700">{villa.bhk} BHK</span>
              <span aria-hidden="true">·</span>
              <span>Up to {villa.maxGuests} Guests</span>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1 text-amber-600 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{villa.rating}</span>
                <span className="text-stone-400 font-normal">({villa.reviewCount})</span>
              </div>
            </div>

            {/* Title */}
            <Link to={`/villas/${villa.id}`} className="block group-hover:text-amber-700 transition-colors">
              <h3 className="font-serif text-xl font-bold text-stone-900 tracking-tight">
                {villa.title}
              </h3>
            </Link>

            {/* Tagline / Snippet */}
            <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
              {villa.tagline}
            </p>

            {/* Highlight amenity tags as quiet text */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mt-4">
              {villa.hasPrivatePool && (
                <span className="text-stone-700 font-medium">Private Pool</span>
              )}
              {villa.hasPrivatePool && <span aria-hidden="true" className="text-stone-300">·</span>}
              {villa.hasCaretaker && <span>Dedicated Caretaker</span>}
              {villa.hasCaretaker && <span aria-hidden="true" className="text-stone-300">·</span>}
              {villa.isPetFriendly && <span>Pet Friendly</span>}
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>AC & Wi-Fi</span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs text-stone-500">From</span>
                <span className="text-xl font-bold text-stone-900">₹{formatPrice(villa.pricePerNight)}</span>
                <span className="text-xs text-stone-500">/ night</span>
              </div>
              {villa.originalPrice > villa.pricePerNight && (
                <span className="text-[11px] text-stone-400 line-through">
                  ₹{formatPrice(villa.originalPrice)}
                </span>
              )}
            </div>

            <Link
              to={`/villas/${villa.id}`}
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
            >
              View Villa
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default Grid layout
  return (
    <div className="group relative bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image Showcase */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
        <img
          src={villa.images[0]}
          alt={villa.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top bar over image */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          {/* Destination tag */}
          <div className="pointer-events-auto bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>{villa.destination}</span>
          </div>

          {/* Wishlist toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(villa.id);
            }}
            className="pointer-events-auto p-2 rounded-full bg-white/90 backdrop-blur-xs text-stone-700 hover:text-rose-600 transition-colors shadow-sm cursor-pointer"
            title={isSaved ? 'Remove from saved' : 'Save to wishlist'}
            aria-label={`Wishlist toggle for ${villa.title}`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'text-rose-600 fill-rose-600' : ''}`} />
          </button>
        </div>

        {/* Bottom subtle bar for rating and pool */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white z-10">
          <div className="bg-stone-900/75 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-white">{villa.rating}</span>
            <span className="text-stone-300">({villa.reviewCount})</span>
          </div>

          {villa.hasPrivatePool && (
            <div className="bg-stone-900/75 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] text-amber-300 font-medium">
              Private Pool
            </div>
          )}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed specs metadata */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span className="font-semibold text-stone-700">{villa.bhk} BHK</span>
            <span aria-hidden="true">·</span>
            <span>{villa.bathrooms} Baths</span>
            <span aria-hidden="true">·</span>
            <span>Up to {villa.maxGuests} Guests</span>
          </div>

          {/* Title */}
          <Link to={`/villas/${villa.id}`} className="block group-hover:text-amber-700 transition-colors">
            <h3 className="font-serif text-lg font-bold text-stone-900 tracking-tight leading-snug">
              {villa.title}
            </h3>
          </Link>

          {/* Tagline */}
          <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
            {villa.tagline}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-bold text-stone-900">
                ₹{formatPrice(villa.pricePerNight)}
              </span>
              <span className="text-xs text-stone-500">/ night</span>
            </div>
            {villa.originalPrice > villa.pricePerNight && (
              <span className="text-[10px] text-stone-400 line-through">
                ₹{formatPrice(villa.originalPrice)}
              </span>
            )}
          </div>

          <Link
            to={`/villas/${villa.id}`}
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-xs"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};
