import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List, 
  RotateCcw, 
  MapPin, 
  Sparkles,
  Check,
  ChevronDown
} from 'lucide-react';
import { VILLAS_DATA, Villa } from '../data/villasData';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { VillaCard } from '../components/VillaCard';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const VillasPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search filter states initialized from URL params if present
  const initialDestination = searchParams.get('destination') || '';
  const initialGuests = searchParams.get('guests') ? parseInt(searchParams.get('guests')!) : 0;

  const [destination, setDestination] = useState<string>(initialDestination);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBhk, setSelectedBhk] = useState<string>('all');
  const [minGuests, setMinGuests] = useState<number>(initialGuests);
  const [onlyPool, setOnlyPool] = useState<boolean>(false);
  const [onlyPetFriendly, setOnlyPetFriendly] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(45000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Sync state if URL params change externally
  useEffect(() => {
    if (searchParams.get('destination')) {
      setDestination(searchParams.get('destination')!);
    }
  }, [searchParams]);

  // Reset filters
  const handleResetFilters = () => {
    setDestination('');
    setSearchQuery('');
    setSelectedBhk('all');
    setMinGuests(0);
    setOnlyPool(false);
    setOnlyPetFriendly(false);
    setMaxPrice(45000);
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter & sort logic
  const filteredVillas = useMemo(() => {
    return VILLAS_DATA.filter((villa) => {
      // 1. Destination
      if (destination && !villa.destination.toLowerCase().includes(destination.toLowerCase())) {
        return false;
      }
      // 2. Search keyword
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = villa.title.toLowerCase().includes(query);
        const matchesTagline = villa.tagline.toLowerCase().includes(query);
        const matchesAmenities = villa.amenities.some((a) => a.toLowerCase().includes(query));
        const matchesDest = villa.destination.toLowerCase().includes(query);
        if (!matchesTitle && !matchesTagline && !matchesAmenities && !matchesDest) {
          return false;
        }
      }
      // 3. BHK
      if (selectedBhk !== 'all') {
        const bhkNum = parseInt(selectedBhk);
        if (selectedBhk === '5+') {
          if (villa.bhk < 5) return false;
        } else if (villa.bhk !== bhkNum) {
          return false;
        }
      }
      // 4. Guest capacity
      if (minGuests > 0 && villa.maxGuests < minGuests) {
        return false;
      }
      // 5. Private Pool
      if (onlyPool && !villa.hasPrivatePool) {
        return false;
      }
      // 6. Pet friendly
      if (onlyPetFriendly && !villa.isPetFriendly) {
        return false;
      }
      // 7. Max price
      if (villa.pricePerNight > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePerNight - b.pricePerNight;
      if (sortBy === 'price-high') return b.pricePerNight - a.pricePerNight;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [destination, searchQuery, selectedBhk, minGuests, onlyPool, onlyPetFriendly, maxPrice, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
            Curated Portfolio
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Luxury Villas & Bungalows
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Browse our entire collection of inspected private pool holiday homes
          </p>
        </div>

        {/* Search bar & quick toggles */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by villa or feature..."
              className="w-full bg-white border border-stone-200 rounded-lg pl-9 pr-3 py-2 text-xs font-medium text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
          </div>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Grid view"
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-900'
              }`}
              title="List view"
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Filter toggle button */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden flex items-center gap-2 px-3 py-2 bg-stone-100 text-stone-800 rounded-lg text-xs font-medium border border-stone-200"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Sidebar filters + Villa Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Filters Sidebar (Desktop and Mobile collapsible) */}
        <aside
          className={`lg:col-span-1 bg-white border border-stone-200/90 rounded-2xl p-5 space-y-6 shadow-xs ${
            showMobileFilters ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-semibold text-sm text-stone-900 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-700" />
              <span>Filters</span>
            </h3>

            <button
              onClick={handleResetFilters}
              className="text-xs text-stone-500 hover:text-amber-700 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* 1. Destination Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            >
              <option value="">All Regions</option>
              {DESTINATIONS_DATA.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* 2. BHK Configuration */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
              Bedrooms (BHK)
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: 'All', value: 'all' },
                { label: '3 BHK', value: '3' },
                { label: '4 BHK', value: '4' },
                { label: '5+ BHK', value: '5+' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedBhk(opt.value)}
                  className={`py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    selectedBhk === opt.value
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Guest Capacity */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
              Minimum Guests
            </label>
            <select
              value={minGuests}
              onChange={(e) => setMinGuests(parseInt(e.target.value))}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            >
              <option value={0}>Any capacity</option>
              <option value={6}>6+ Guests</option>
              <option value={10}>10+ Guests</option>
              <option value={14}>14+ Guests</option>
              <option value={18}>18+ Guests</option>
            </select>
          </div>

          {/* 4. Amenities Checkbox Controls */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
              Essential Preferences
            </label>

            <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyPool}
                onChange={(e) => setOnlyPool(e.target.checked)}
                className="w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Private Swimming Pool</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyPetFriendly}
                onChange={(e) => setOnlyPetFriendly(e.target.checked)}
                className="w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Pet Friendly Lawns</span>
            </label>
          </div>

          {/* 5. Max Price Slider */}
          <div className="space-y-2 pt-2 border-t border-stone-100">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-700 uppercase tracking-wider">Max Rate / Night</span>
              <span className="font-bold text-stone-900">₹{new Intl.NumberFormat('en-IN').format(maxPrice)}</span>
            </div>
            <input
              type="range"
              min={15000}
              max={45000}
              step={2000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>₹15,000</span>
              <span>₹45,000</span>
            </div>
          </div>
        </aside>

        {/* Villas Listings Area */}
        <main className="lg:col-span-3 space-y-6">
          {/* Results count & Sort Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <div className="text-xs text-stone-600 font-medium">
              Showing <span className="font-bold text-stone-900">{filteredVillas.length}</span> {filteredVillas.length === 1 ? 'villa' : 'villas'}
              {destination && (
                <span> in <span className="text-stone-900 font-semibold">{destination}</span></span>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
              </select>
            </div>
          </div>

          {/* Cards Grid / List */}
          {filteredVillas.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredVillas.map((villa) => (
                <VillaCard key={villa.id} villa={villa} layout={viewMode} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-4 bg-white rounded-2xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                No villas found matching your criteria
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                Try widening your price range, clearing specific amenity filters, or choosing "All Regions".
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
