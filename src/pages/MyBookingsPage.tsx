import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  MapPin, 
  Calendar, 
  Users, 
  Trash2, 
  Printer, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { useApp, BookingRecord } from '../context/AppContext';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const MyBookingsPage: React.FC = () => {
  const { bookings, cancelBooking, showToast } = useApp();
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const formatPrice = (p: number) => new Intl.NumberFormat('en-IN').format(p);

  const handlePrintVoucher = (booking: BookingRecord) => {
    window.print();
    showToast(`Print dialog triggered for booking ${booking.id}`, 'info');
  };

  const confirmCancel = (id: string) => {
    cancelBooking(id);
    setCancellingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Client-Side Stored Stays</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            My Reservations ({bookings.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            View details of your upcoming villa stays, download vouchers, or manage dates
          </p>
        </div>

        <Link
          to="/villas"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-700 transition-colors"
        >
          <span>Reserve Another Villa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Bookings List or Empty State */}
      {bookings.length > 0 ? (
        <div className="space-y-6">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-stone-300 transition-all flex flex-col md:flex-row"
            >
              {/* Villa Thumbnail */}
              <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0 bg-stone-100">
                <img
                  src={b.villaImage}
                  alt={b.villaTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {b.destination}
                </div>
              </div>

              {/* Booking Information */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      Ref: {b.id}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{b.status}</span>
                    </div>
                  </div>

                  <Link
                    to={`/villas/${b.villaId}`}
                    className="font-serif text-xl font-bold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    {b.villaTitle}
                  </Link>

                  {/* Booking details table */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-3 border-t border-stone-100 text-xs text-stone-600">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Check-in</span>
                      <span className="font-semibold text-stone-900">{b.checkIn}</span>
                      <span className="text-stone-500 block text-[11px]">From 2:00 PM</span>
                    </div>

                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Check-out</span>
                      <span className="font-semibold text-stone-900">{b.checkOut}</span>
                      <span className="text-stone-500 block text-[11px]">Until 11:00 AM</span>
                    </div>

                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Party Size</span>
                      <span className="font-semibold text-stone-900">{b.guests} Guests</span>
                      <span className="text-stone-500 block text-[11px]">{b.nights} {b.nights === 1 ? 'Night' : 'Nights'}</span>
                    </div>

                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Total Paid / Due</span>
                      <span className="font-bold text-stone-900 text-sm">₹{formatPrice(b.totalAmount)}</span>
                      <span className="text-emerald-600 block text-[10px]">All taxes included</span>
                    </div>
                  </div>

                  {b.primaryGuestName && (
                    <div className="mt-3 text-xs text-stone-500">
                      Primary Guest: <span className="font-medium text-stone-800">{b.primaryGuestName}</span> ({b.guestPhone})
                    </div>
                  )}
                </div>

                {/* Actions row */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePrintVoucher(b)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Voucher</span>
                    </button>

                    <Link
                      to={`/villas/${b.villaId}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Villa</span>
                    </Link>
                  </div>

                  <div>
                    {cancellingId === b.id ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-rose-600 font-semibold">Cancel stay?</span>
                        <button
                          onClick={() => confirmCancel(b.id)}
                          className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-semibold"
                        >
                          Yes, Cancel
                        </button>
                        <button
                          onClick={() => setCancellingId(null)}
                          className="px-2.5 py-1 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded text-xs"
                        >
                          Keep
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setCancellingId(b.id)}
                        className="text-xs text-stone-400 hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancel Reservation</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4 bg-white rounded-3xl border border-stone-200 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
            <CalendarCheck className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            No Active Reservations
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Ready to unwind? Browse our verified villas in Lonavala, Alibaug, Goa, and Karjat, and your confirmed stays will appear here.
          </p>
          <div className="pt-2">
            <Link
              to="/villas"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              <span>Explore Available Villas</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      )}

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
