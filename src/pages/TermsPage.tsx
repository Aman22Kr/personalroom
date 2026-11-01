import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="font-semibold text-stone-800">Terms & Conditions</span>
      </div>

      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Terms & Conditions of Stay
        </h1>
        <p className="text-xs text-stone-500">
          Last revised: October 2026 · personalroom Hospitality Network
        </p>
      </div>

      <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-600 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">1. Booking Confirmation & Payment</h3>
          <p>
            Reservations made through personalroom are confirmed upon receipt of booking authorization and verification. All prices quoted are in Indian Rupees (INR) and inclusive of statutory GST unless stated otherwise.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">2. Check-in, Check-out & Identification</h3>
          <p>
            Standard check-in is 2:00 PM and check-out is 11:00 AM. Government-issued photo ID (Aadhaar Card, Passport, or Driving License) is mandatory for every adult guest prior to villa check-in.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">3. House Conduct & Noise Policy</h3>
          <p>
            In compliance with local rural and municipal laws, loud outdoor music is strictly prohibited after 10:00 PM. Guests may continue indoor celebrations at low volume. Drug usage and hazardous substances are strictly banned.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">4. Private Swimming Pool Safety</h3>
          <p>
            Guests use private swimming pools at their own risk. Children below 14 must be accompanied by an adult guardian at all times. Diving in shallow plunge areas is strictly forbidden.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">5. Cancellation & Refunds</h3>
          <p>
            Cancellations made 14 days or more before scheduled check-in qualify for a 100% full refund or credit voucher valid for 12 months. Cancellations within 7 days of arrival are non-refundable.
          </p>
        </section>
      </div>

      <CompactAdBanner />
    </div>
  );
};
