import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please provide a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed! You will receive our secret weekend getaway rates.', 'success');
    setNewsletterEmail('');
  };

  const destinationsList = [
    { name: 'Lonavala & Khandala Villas', slug: 'lonavala' },
    { name: 'Alibaug Beach Bungalows', slug: 'alibaug' },
    { name: 'Karjat Riverside Estates', slug: 'karjat' },
    { name: 'Goa Heritage Pool Villas', slug: 'goa' },
    { name: 'Mahabaleshwar & Panchgani Retreats', slug: 'mahabaleshwar' },
    { name: 'Igatpuri Fog Mountain Villas', slug: 'igatpuri' },
    { name: 'Udaipur Royal Lakeside Homes', slug: 'udaipur' },
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                P
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                personalroom
              </span>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Detox Your Lifestyle. Curated luxury private villas, serviced holiday homes, and boutique bungalows across premier Indian getaway destinations.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-stone-300 font-medium">+91 8000 292 929 / +91 9920 000 290</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-stone-300">concierge@personalroom.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Hospitality Hub: Wadala West, Mumbai & Koregaon Park, Pune</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              {destinationsList.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore & Partner
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/villas" className="hover:text-amber-400 transition-colors block py-0.5">
                  All Luxury Villas
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-amber-400 transition-colors block py-0.5">
                  Destinations Directory
                </Link>
              </li>
              <li>
                <Link to="/list-your-property" className="hover:text-amber-400 transition-colors block py-0.5">
                  List Your Property (Owners)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors block py-0.5">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors block py-0.5">
                  Contact & Concierge Desk
                </Link>
              </li>
              <li>
                <Link to="/my-bookings" className="hover:text-amber-400 transition-colors block py-0.5">
                  My Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Stay in the Loop
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive secret villa drops, monsoon stay specials, and long-weekend promotions before anyone else.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-stone-950" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Get Villa Offers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright, terms & policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} personalroom. All rights reserved. Detox Your Lifestyle with curated private villas.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-stone-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
