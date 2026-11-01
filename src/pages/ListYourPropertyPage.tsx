import React, { useState } from 'react';
import { 
  Building, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Check, 
  X,
  PhoneCall
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const ListYourPropertyPage: React.FC = () => {
  const { addOwnerInquiry } = useApp();

  // Revenue Estimator state
  const [estBhk, setEstBhk] = useState<number>(4);
  const [estLocation, setEstLocation] = useState<string>('lonavala');

  // Form states
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [propertyTitle, setPropertyTitle] = useState('');
  const [destination, setDestination] = useState('Lonavala');
  const [bhk, setBhk] = useState(4);
  const [bathrooms, setBathrooms] = useState(4);
  const [hasPool, setHasPool] = useState(true);
  const [notes, setNotes] = useState('');
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);

  // Revenue calculation estimate
  const baseMonthly = estBhk * 60000;
  const locationMultiplier = estLocation === 'goa' ? 1.3 : estLocation === 'alibaug' ? 1.2 : 1.0;
  const estimatedRevenue = Math.round(baseMonthly * locationMultiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !email || !phone || !propertyTitle) {
      return;
    }

    const id = addOwnerInquiry({
      ownerName,
      email,
      phone,
      city,
      propertyTitle,
      destination,
      bhk,
      bathrooms,
      hasPool,
      notes,
    });

    setSubmittedInquiryId(id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* 1. Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
          <Building className="w-3.5 h-3.5" />
          <span>Homeowner Hospitality Network</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Turn Your Luxury Villa Into a High-Yield Asset
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Join the personalroom portfolio. We handle marketing, guest vetting, full housekeeping, pool maintenance, and 24/7 caretaking while you retain 100% flexibility for your family holidays.
        </p>
      </div>

      {/* 2. Interactive Revenue Estimator Tool */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-800 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Earnings Calculator</span>
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Estimate Your Villa's Monthly Rental Potential
            </h3>
            <p className="text-xs text-stone-300">
              Based on historical occupancy data and premium seasonal pricing across the personalroom network.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1">
                  Bedrooms: <span className="text-amber-400 font-bold">{estBhk} BHK</span>
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setEstBhk(num)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        estBhk === num
                          ? 'bg-amber-400 text-stone-950 shadow-xs'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {num} BHK
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1">
                  Location
                </label>
                <select
                  value={estLocation}
                  onChange={(e) => setEstLocation(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-xs font-medium text-white focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                >
                  <option value="lonavala">Lonavala / Khandala</option>
                  <option value="alibaug">Alibaug Coastal</option>
                  <option value="goa">North / South Goa</option>
                  <option value="karjat">Karjat</option>
                  <option value="mahabaleshwar">Mahabaleshwar / Panchgani</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-stone-800/80 border border-stone-700 rounded-2xl p-6 text-center space-y-3">
            <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
              Estimated Monthly Gross Revenue
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
              ₹{new Intl.NumberFormat('en-IN').format(estimatedRevenue)}
              <span className="text-xs font-normal text-stone-300"> / month</span>
            </div>
            <div className="text-[11px] text-stone-400">
              Annual potential: ₹{new Intl.NumberFormat('en-IN').format(estimatedRevenue * 12)}
            </div>
            <div className="pt-2 text-xs text-stone-300 border-t border-stone-700/60 leading-relaxed">
              Includes weekend surge rates, Diwali/New Year holiday demand, and curated corporate retreats.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Partner Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-stone-900 text-sm">Vetted & High-Profile Guests</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Strict ID verification and upfront security deposits. We cater to families, corporate executive groups, and intimate gatherings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-stone-900 text-sm">Turnkey Property Management</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            From professional architectural photography to pool chemical treatments, live-in caretakers, and landscaping—we maintain your villa like our own.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-stone-900 text-sm">Total Owner Flexibility</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Want to celebrate your anniversary or a long weekend with your own family? Block out dates seamlessly anytime with 1-click on your owner portal.
          </p>
        </div>
      </div>

      {/* 4. Property Onboarding Form */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-lg max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-1">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Submit Your Property for Evaluation
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            Our property expansion manager will contact you within 24 hours to schedule a complimentary site walkthrough.
          </p>
        </div>

        {submittedInquiryId ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Application Received!
            </h3>
            <div className="bg-stone-50 border border-stone-200 p-3 rounded-lg text-xs font-mono text-stone-700 max-w-sm mx-auto">
              Application Ref: <span className="font-bold text-stone-900">{submittedInquiryId}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you for choosing to partner with personalroom. Our Senior Hospitality Architect will reach out to <strong className="text-stone-900">{phone}</strong> shortly.
            </p>
            <button
              onClick={() => setSubmittedInquiryId(null)}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Submit Another Property
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Owner Full Name *</label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. Ramesh Doshi"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Owner Phone Number *</label>
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
                  placeholder="name@email.com"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Your Primary City *</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai / Pune"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-stone-100">
              <label className="text-xs font-semibold text-stone-700">Villa / Bungalow Name *</label>
              <input
                type="text"
                required
                value={propertyTitle}
                onChange={(e) => setPropertyTitle(e.target.value)}
                placeholder="e.g. Serene Pines Manor"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Location *</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                >
                  {DESTINATIONS_DATA.map((d) => (
                    <option key={d.slug} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                  <option value="Other">Other Region</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Bedrooms (BHK) *</label>
                <select
                  value={bhk}
                  onChange={(e) => setBhk(parseInt(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                >
                  {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} BHK
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Swimming Pool *</label>
                <select
                  value={hasPool ? 'yes' : 'no'}
                  onChange={(e) => setHasPool(e.target.value === 'yes')}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                >
                  <option value="yes">Private Pool Available</option>
                  <option value="no">No Pool / Open Lawn</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">Additional Features / Notes</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention highlights like mountain view, private gazebo, solar power, caretaker quarters..."
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer"
            >
              Submit Property for Review
            </button>
          </form>
        )}
      </div>

      {/* Compact Ad Banner at bottom */}
      <CompactAdBanner />
    </div>
  );
};
