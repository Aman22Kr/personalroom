import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Trash2, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VILLAS_DATA } from '../data/villasData';
import { VillaCard } from '../components/VillaCard';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist } = useApp();

  const savedVillas = VILLAS_DATA.filter((v) => wishlist.includes(v.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
            <Heart className="w-3.5 h-3.5 fill-amber-700" />
            <span>Saved Sanctuaries</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            My Wishlist ({savedVillas.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Properties you've bookmarked for upcoming family escapes and weekend getaways
          </p>
        </div>

        {savedVillas.length > 0 && (
          <Link
            to="/villas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors"
          >
            <span>Explore More Villas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {/* Grid or Empty State */}
      {savedVillas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedVillas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4 bg-white rounded-3xl border border-stone-200 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Your Wishlist is Empty
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            As you browse our private villas in Lonavala, Alibaug, Goa, and beyond, tap the heart icon to save your favorites here.
          </p>
          <div className="pt-2">
            <Link
              to="/villas"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Explore Available Villas</span>
            </Link>
          </div>
        </div>
      )}

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
