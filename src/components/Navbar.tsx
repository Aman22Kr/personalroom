import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  Menu, 
  X, 
  PhoneCall, 
  Compass, 
  Home, 
  MapPin, 
  PlusCircle, 
  CalendarCheck, 
  Sparkles,
  Search
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { wishlist, bookings } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Explore Villas', path: '/villas', icon: Compass },
    { name: 'Destinations', path: '/destinations', icon: MapPin },
    { name: 'List Your Property', path: '/list-your-property', icon: PlusCircle },
    { name: 'About Us', path: '/about', icon: Sparkles },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="font-medium text-stone-300">Detox Your Lifestyle</span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <span className="text-stone-400 hidden sm:inline">Handcrafted Private Luxury Villas & Serviced Bungalows</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918000292929" 
              className="text-stone-300 hover:text-amber-400 font-medium flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>+91 8000 292 929</span>
            </a>
            <span className="text-stone-600 hidden md:inline">|</span>
            <span className="text-stone-400 text-[11px] hidden md:inline">24/7 Guest Concierge</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
            : 'bg-white border-b border-stone-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif text-2xl font-bold shadow-md transition-transform group-hover:scale-105 border border-stone-800">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  personalroom
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-600">
                  Luxury Villa Retreats
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors py-1 ${
                      active
                        ? 'text-stone-900 font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons (Wishlist, Bookings, CTA) */}
            <div className="flex items-center gap-3">
              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="relative p-2 text-stone-700 hover:text-rose-600 hover:bg-stone-100 rounded-full transition-colors"
                title="View Saved Villas"
                aria-label={`View Wishlist, ${wishlist.length} saved villas`}
              >
                <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-600 fill-rose-600' : ''}`} />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-[10px] font-bold bg-rose-600 text-white rounded-full flex items-center justify-center shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* My Bookings Link */}
              <Link
                to="/my-bookings"
                className="relative p-2 text-stone-700 hover:text-amber-700 hover:bg-stone-100 rounded-full transition-colors hidden sm:flex items-center justify-center"
                title="My Bookings"
                aria-label={`My Bookings, ${bookings.length} reservations`}
              >
                <CalendarCheck className="w-5 h-5" />
                {bookings.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-[10px] font-bold bg-amber-600 text-white rounded-full flex items-center justify-center shadow-xs">
                    {bookings.length}
                  </span>
                )}
              </Link>

              {/* Primary Header CTA */}
              <Link
                to="/villas"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-xs transition-all hover:shadow-md cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Find a Villa</span>
              </Link>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                aria-label="Toggle mobile navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive('/') ? 'bg-amber-50 text-amber-900' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <Home className="w-4 h-4 text-amber-700" />
                <span>Home</span>
              </Link>

              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                      active ? 'bg-amber-50 text-amber-900' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-700" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <Link
                to="/my-bookings"
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive('/my-bookings') ? 'bg-amber-50 text-amber-900' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CalendarCheck className="w-4 h-4 text-amber-700" />
                  <span>My Bookings</span>
                </div>
                {bookings.length > 0 && (
                  <span className="text-xs bg-amber-600 text-white px-2 py-0.5 rounded-full font-bold">
                    {bookings.length}
                  </span>
                )}
              </Link>
            </div>

            <div className="pt-2 border-t border-stone-100">
              <Link
                to="/villas"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-lg shadow-xs"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search All Villas</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
