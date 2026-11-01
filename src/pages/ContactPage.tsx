import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  MessageSquare, 
  Send,
  Building
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const ContactPage: React.FC = () => {
  const { addContactMessage } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Villa Reservation Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    addContactMessage({
      name,
      email,
      phone,
      subject,
      message,
    });

    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* 1. Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Concierge & Guest Support</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          We’re Here to Help You Unwind
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Whether you need advice choosing between Lonavala or Alibaug, have dietary requests, or want to host a private celebration, our central reservations team is at your service.
        </p>
      </div>

      {/* 2. Contact Grid: Info Cards (Left) & Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Hotlines */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-4">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Direct Contact Lines
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Guest Reservations Hotline</span>
                  <a href="tel:+918000292929" className="text-amber-700 hover:underline font-mono">
                    +91 8000 292 929 / +91 9920 000 290
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Email Inquiries</span>
                  <a href="mailto:concierge@personalroom.com" className="text-stone-600 hover:underline">
                    concierge@personalroom.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Operating Hours</span>
                  <span className="text-stone-600">24/7 Hotline for checked-in guests</span>
                  <span className="text-stone-400 block text-xs">New Bookings Desk: 8:00 AM - 10:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Corporate Hubs */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/90 space-y-4 text-xs sm:text-sm">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Hospitality Hubs
            </h3>

            <div className="space-y-4 text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Mumbai Corporate Office</strong>
                  <span>Suite 402, Signature Plaza, Wadala West, Mumbai, Maharashtra 400031</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Pune Regional Desk</strong>
                  <span>Lane 7, Koregaon Park, Pune, Maharashtra 411001</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Goa Operations Pavilion</strong>
                  <span>Assagao Badem Road, North Goa, Goa 403507</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md">
          <div className="mb-6 space-y-1">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Send an Inquiry Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Fill in your details below and our team will get back to you within 30 minutes.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-emerald-950">
                Message Dispatched
              </h4>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                Thank you! Your message has been logged in our system. A concierge agent will respond to you promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-semibold text-emerald-900 underline hover:text-emerald-950"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priyesh Shah"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98200 00000"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priyesh@domain.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Inquiry Purpose *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Villa Reservation Inquiry">Villa Reservation Inquiry</option>
                    <option value="Corporate Offsite & Retreat">Corporate Offsite & Retreat</option>
                    <option value="Wedding / Milestone Celebration">Wedding / Milestone Celebration</option>
                    <option value="List My Property (Homeowner)">List My Property (Homeowner)</option>
                    <option value="Other Feedback">Other Feedback</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Message / Dates / Guest Count *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details like preferred destination, tentative dates, number of guests, or special questions..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
