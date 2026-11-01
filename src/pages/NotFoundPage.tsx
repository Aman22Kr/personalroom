import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, MapPin } from 'lucide-react';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto text-amber-700 font-serif text-3xl font-extrabold border border-amber-200">
        404
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
        Sanctuary Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
        The destination or page URL you are looking for does not exist or may have been relocated.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
        >
          <Home className="w-4 h-4 text-amber-400" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/villas"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-lg text-xs font-semibold transition-colors border border-stone-200"
        >
          <Compass className="w-4 h-4 text-amber-700" />
          <span>Explore All Villas</span>
        </Link>
      </div>

      <CompactAdBanner />
    </div>
  );
};
