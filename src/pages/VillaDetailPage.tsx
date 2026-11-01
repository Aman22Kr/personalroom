import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  Star, 
  MapPin, 
  Users, 
  BedDouble, 
  Bath, 
  ShieldCheck, 
  Utensils, 
  Check, 
  PhoneCall, 
  Calendar, 
  Info, 
  ChevronRight, 
  X, 
  Waves,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { VILLAS_DATA, Villa } from '../data/villasData';
import { useApp } from '../context/AppContext';
import { VideoTourPlaceholder } from '../components/VideoTourPlaceholder';
import { CompactAdBanner } from '../components/CompactAdBanner';
import { VillaCard } from '../components/VillaCard';

export const VillaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist, addBooking, showToast } = useApp();

  const villa = VILLAS_DATA.find((v) => v.id === id || v.slug === id);

  // Gallery lightbox modal state
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  // Booking Card states
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 2);
  const checkoutDefault = new Date(today);
  checkoutDefault.setDate(today.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkInDate, setCheckInDate] = useState(formatDate(tomorrow));
  const [checkOutDate, setCheckOutDate] = useState(formatDate(checkoutDefault));
  const [guestCount, setGuestCount] = useState<number>(6);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!villa) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-stone-900">Villa Not Found</h2>
        <p className="text-sm text-stone-500">
          The requested luxury property does not exist or has been relocated.
        </p>
        <Link
          to="/villas"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Available Villas</span>
        </Link>
      </div>
    );
  }

  const isSaved = isInWishlist(villa.id);

  // Calculate nights
  const start = new Date(checkInDate);
  const end = new Date(checkOutDate);
  const diffTime = Math.max(0, end.getTime() - start.getTime());
  const calculatedNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const baseRate = villa.pricePerNight * calculatedNights;
  const cleaningFee = 1500;
  const gstAmount = Math.round((baseRate + cleaningFee) * 0.18);
  const totalAmount = baseRate + cleaningFee + gstAmount;

  const formatPrice = (p: number) => new Intl.NumberFormat('en-IN').format(p);

  const handleOpenBookingModal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingModalOpen(true);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      showToast('Please fill in your name, email, and phone number.', 'error');
      return;
    }

    const bookingId = addBooking({
      villaId: villa.id,
      villaTitle: villa.title,
      destination: villa.destination,
      villaImage: villa.images[0],
      checkIn: checkInDate,
      checkOut: checkOutDate,
      nights: calculatedNights,
      guests: guestCount,
      primaryGuestName: guestName,
      guestEmail: guestEmail,
      guestPhone: guestPhone,
      specialRequests: specialRequests,
      totalAmount: totalAmount,
    });

    setConfirmedBookingId(bookingId);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Villa link copied to clipboard!', 'info');
    }
  };

  const relatedVillas = VILLAS_DATA.filter((v) => v.id !== villa.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      {/* Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/villas" className="hover:text-stone-900 transition-colors">Villas</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to={`/destinations/${villa.destinationSlug}`} className="hover:text-stone-900 transition-colors">
            {villa.destination}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-stone-800 truncate max-w-xs">{villa.title}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>

          <button
            onClick={() => toggleWishlist(villa.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              isSaved
                ? 'border-rose-200 bg-rose-50 text-rose-600 font-semibold'
                : 'border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-600 text-rose-600' : ''}`} />
            <span>{isSaved ? 'Saved in Wishlist' : 'Save Villa'}</span>
          </button>
        </div>
      </div>

      {/* Villa Title Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <span className="flex items-center gap-1 text-amber-700 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{villa.rating}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{villa.reviewCount} verified guest reviews</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-stone-600">
            <MapPin className="w-3 h-3 text-stone-400" />
            <span>{villa.locationDetails.address}</span>
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          {villa.title}
        </h1>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          {villa.tagline}
        </p>
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden bg-stone-100 max-h-[480px]">
        {/* Main Large Photo */}
        <div 
          onClick={() => setActivePhotoIdx(0)}
          className="md:col-span-2 h-72 md:h-full relative overflow-hidden group cursor-pointer"
        >
          <img
            src={villa.images[0]}
            alt={`${villa.title} hero`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        </div>

        {/* Supporting Photos */}
        <div className="hidden md:grid grid-cols-2 col-span-2 gap-3 h-full">
          {villa.images.slice(1, 5).map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhotoIdx(idx + 1)}
              className="relative h-56 overflow-hidden group cursor-pointer bg-stone-200"
            >
              <img
                src={imgUrl}
                alt={`${villa.title} interior ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setActivePhotoIdx(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="Close photo gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
            <img
              src={villa.images[activePhotoIdx]}
              alt={`Photo view ${activePhotoIdx + 1}`}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-2">
              {villa.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIdx(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activePhotoIdx === i ? 'bg-amber-400 scale-125' : 'bg-stone-600 hover:bg-stone-400'
                  }`}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Key Specs Summary Bar (Clean typography, no pill slop) */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-stone-700 shadow-xs">
        <div className="flex items-center gap-2">
          <BedDouble className="w-4 h-4 text-amber-700" />
          <span className="font-semibold text-stone-900">{villa.bhk} Ensuite Bedrooms</span>
        </div>
        <span aria-hidden="true" className="text-stone-300 hidden sm:inline">|</span>

        <div className="flex items-center gap-2">
          <Bath className="w-4 h-4 text-amber-700" />
          <span>{villa.bathrooms} Bathrooms</span>
        </div>
        <span aria-hidden="true" className="text-stone-300 hidden sm:inline">|</span>

        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-amber-700" />
          <span>Accommodates up to {villa.maxGuests} Guests</span>
        </div>
        <span aria-hidden="true" className="text-stone-300 hidden sm:inline">|</span>

        {villa.hasPrivatePool && (
          <div className="flex items-center gap-2 text-stone-900 font-semibold">
            <Waves className="w-4 h-4 text-amber-700" />
            <span>100% Private Swimming Pool</span>
          </div>
        )}
      </div>

      {/* Two Column Layout: Main Content (Left) & Sticky Booking Widget (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (8 cols): Description, Amenities, House Rules, Location, Reviews */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. About the Villa */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
              About This Sanctuary
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              {villa.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {villa.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Full Amenities Checklist */}
          <section className="border-t border-stone-200 pt-8 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
              Sanctuary Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {villa.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-100 text-xs font-medium text-stone-800"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Dedicated Caretaker & Dining Arrangements */}
          <section className="border-t border-stone-200 pt-8 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
              Hospitality & Dining
            </h2>
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <Utensils className="w-4 h-4 text-amber-700" />
                <span>On-Site Chef & Home-Cooked Regional Meals</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Enjoy hassle-free vacations. Our live-in caretakers prepare fresh breakfast, lunch, and dinner. Opt for all-inclusive meal plans or purchase ingredients locally and let our skilled cook prepare authentic home-style dishes.
              </p>
              <div className="flex items-center gap-4 text-xs text-amber-800 font-semibold pt-1">
                <span>Veg & Non-Veg Menus</span>
                <span>·</span>
                <span>Barbecue Setup on Request</span>
                <span>·</span>
                <span>Kids & Jain Meals Available</span>
              </div>
            </div>
          </section>

          {/* 4. Video Tour Preview Placeholder (YouTube Embed requirement) */}
          <section className="border-t border-stone-200 pt-8 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
              Video Walkthrough Preview
            </h2>
            <p className="text-xs text-stone-500">
              Interactive 16:9 walkthrough preview of the villa, grounds, and pool
            </p>
            <VideoTourPlaceholder
              title={`${villa.title} - Virtual Walkthrough`}
              location={villa.locationDetails.address}
              duration="02:50 4K Walkthrough"
            />
          </section>

          {/* 5. Location Details & Travel Route */}
          <section className="border-t border-stone-200 pt-8 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
              Location & Accessibility
            </h2>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Address</span>
                  <span>{villa.locationDetails.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200">
                <div>
                  <span className="font-semibold text-stone-900 block">From Mumbai</span>
                  <span className="text-xs text-stone-600">{villa.locationDetails.distanceFromMumbai}</span>
                </div>
                <div>
                  <span className="font-semibold text-stone-900 block">From Pune</span>
                  <span className="text-xs text-stone-600">{villa.locationDetails.distanceFromPune}</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. House Rules */}
          <section className="border-t border-stone-200 pt-8 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
              House Rules & Policies
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
              {villa.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Verified Guest Reviews */}
          <section className="border-t border-stone-200 pt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                  Guest Reviews
                </h2>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-stone-900 text-sm">{villa.rating}</span>
                  <span>out of 5.0 rating based on {villa.reviewCount} stays</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {villa.reviews.map((rev) => (
                <div key={rev.id} className="p-5 rounded-xl bg-white border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-stone-900">{rev.author}</span>
                      <span className="text-stone-400"> ({rev.city})</span>
                    </div>
                    <span className="text-stone-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (4 cols): Sticky Booking & Rate Calculation Card */}
        <aside className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xl space-y-5">
            {/* Price Per Night */}
            <div className="flex items-baseline justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  ₹{formatPrice(villa.pricePerNight)}
                </span>
                <span className="text-xs text-stone-500"> / night</span>
              </div>
              {villa.originalPrice > villa.pricePerNight && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{formatPrice(villa.originalPrice)}
                </span>
              )}
            </div>

            {/* Date & Guest Selectors Form */}
            <form onSubmit={handleOpenBookingModal} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs font-semibold text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs font-semibold text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Guests Count
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs font-semibold text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer"
                >
                  {Array.from({ length: villa.maxGuests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'} (Max {villa.maxGuests})
                    </option>
                  ))}
                </select>
              </div>

              {/* Breakdown Table */}
              <div className="space-y-2 pt-3 border-t border-stone-100 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>₹{formatPrice(villa.pricePerNight)} × {calculatedNights} nights</span>
                  <span className="font-medium text-stone-900">₹{formatPrice(baseRate)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sanitization & Cleaning</span>
                  <span className="font-medium text-stone-900">₹{formatPrice(cleaningFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Government GST (18%)</span>
                  <span className="font-medium text-stone-900">₹{formatPrice(gstAmount)}</span>
                </div>

                <div className="flex justify-between pt-3 border-t border-stone-200 text-sm font-bold text-stone-900">
                  <span>Total Payable</span>
                  <span className="text-amber-700">₹{formatPrice(totalAmount)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Reserve / Inquire Now
              </button>
            </form>

            <div className="text-center">
              <span className="text-[11px] text-stone-400">
                No upfront cancellation fee · 100% free modification up to 14 days
              </span>
            </div>

            {/* Direct Concierge Call */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
              <span>Have special requirements?</span>
              <a
                href="tel:+918000292929"
                className="font-bold text-amber-700 hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Booking Confirmation / Inquiry Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => {
                setIsBookingModalOpen(false);
                setConfirmedBookingId(null);
              }}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {confirmedBookingId ? (
              /* Success State */
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Reservation Confirmed!
                </h3>
                <div className="bg-stone-50 border border-stone-200 p-3 rounded-lg text-xs text-stone-700 font-mono">
                  Booking Reference: <span className="font-bold text-stone-900">{confirmedBookingId}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Your reservation for <strong className="text-stone-900">{villa.title}</strong> from {checkInDate} to {checkOutDate} has been saved to your browser profile.
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => navigate('/my-bookings')}
                    className="flex-1 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    View My Bookings
                  </button>
                  <button
                    onClick={() => {
                      setIsBookingModalOpen(false);
                      setConfirmedBookingId(null);
                    }}
                    className="flex-1 py-2.5 bg-stone-100 text-stone-800 rounded-lg text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Form input state */
              <form onSubmit={handleConfirmReservation} className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    Confirm Reservation
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {villa.title}
                  </h3>
                  <div className="text-xs text-stone-500">
                    {checkInDate} to {checkOutDate} ({calculatedNights} nights) · {guestCount} Guests
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-stone-100">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Primary Guest Full Name *</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Aman Kumar"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-700">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+91 98200 00000"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Special Notes or Meal Preferences (Optional)</label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Vegetarian Jain meals, early check-in at 12 PM, bringing a golden retriever..."
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Total Reservation Value</span>
                  <span className="text-base font-bold text-stone-900">₹{formatPrice(totalAmount)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Confirm & Save Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Similar Villas Section */}
      <section className="border-t border-stone-200 pt-10 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
          Other Sanctuaries You May Love
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedVillas.map((v) => (
            <VillaCard key={v.id} villa={v} />
          ))}
        </div>
      </section>

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
