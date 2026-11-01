import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Car, 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { VILLAS_DATA } from '../data/villasData';
import { VillaCard } from '../components/VillaCard';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const destination = DESTINATIONS_DATA.find((d) => d.slug === slug);
  const matchingVillas = VILLAS_DATA.filter(
    (v) => v.destinationSlug === slug || (destination && v.destination.toLowerCase() === destination.name.toLowerCase())
  );

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-stone-900">Destination Not Found</h2>
        <p className="text-sm text-stone-500">
          The requested regional destination does not exist in our directory.
        </p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All Destinations</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <Link to="/destinations" className="hover:text-stone-900 transition-colors">Destinations</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="font-semibold text-stone-800">{destination.name}</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white aspect-21/9 min-h-[320px] flex items-end p-6 sm:p-10 shadow-2xl">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Compass className="w-3 h-3" />
            <span>Regional Getaway Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
            {destination.name}
          </h1>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            {destination.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-amber-300 font-medium pt-2">
            <div className="flex items-center gap-1.5">
              <Car className="w-4 h-4" />
              <span>{destination.travelTimeFromMumbai}</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{destination.bestSeason}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Highlights */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Highlights & Things To Do in {destination.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {destination.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700 bg-white p-3 rounded-xl border border-stone-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="font-medium">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Villas in this Destination */}
      <div className="space-y-6">
        <div className="flex items-end justify-between border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Available Properties
            </span>
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
              Curated Villas in {destination.name} ({matchingVillas.length})
            </h2>
          </div>

          <Link
            to="/villas"
            className="text-xs font-semibold text-stone-700 hover:text-amber-700 transition-colors"
          >
            View all destinations
          </Link>
        </div>

        {matchingVillas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingVillas.map((v) => (
              <VillaCard key={v.id} villa={v} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
            <p className="text-sm text-stone-600">
              New boutique villas are currently being onboarded in {destination.name}.
            </p>
            <Link
              to="/villas"
              className="inline-block px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold"
            >
              Explore Other Regions
            </Link>
          </div>
        )}
      </div>

      {/* Compact Ad Banner */}
      <CompactAdBanner />
    </div>
  );
};
