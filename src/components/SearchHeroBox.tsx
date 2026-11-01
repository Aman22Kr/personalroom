import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';

export const SearchHeroBox: React.FC = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  
  // Sensible default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState('6');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    if (guests) params.set('guests', guests);
    navigate(`/villas?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-stone-200/90 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
        {/* Destination Selector */}
        <div className="space-y-1">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Destination</span>
          </label>
          <div className="relative">
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer appearance-none"
            >
              <option value="">All Destinations</option>
              {DESTINATIONS_DATA.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name} ({d.villaCount} villas)
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Check-In */}
        <div className="space-y-1">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Check-in</span>
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Check-Out */}
        <div className="space-y-1">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Check-out</span>
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Guests & Search Button */}
        <div className="space-y-1">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Guests</span>
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer appearance-none"
              >
                {[2, 4, 6, 8, 10, 12, 14, 16, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} Guests
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            <button
              type="submit"
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-400 font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer shrink-0"
              aria-label="Search villas"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
