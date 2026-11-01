import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { HomePage } from './pages/HomePage';
import { VillasPage } from './pages/VillasPage';
import { VillaDetailPage } from './pages/VillaDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ListYourPropertyPage } from './pages/ListYourPropertyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WishlistPage } from './pages/WishlistPage';
import { MyBookingsPage } from './pages/MyBookingsPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top automatically when route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/villas" element={<VillasPage />} />
              <Route path="/villas/:id" element={<VillaDetailPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
              <Route path="/list-your-property" element={<ListYourPropertyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/my-bookings" element={<MyBookingsPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
