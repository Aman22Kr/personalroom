import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';
import { CompactAdBanner } from '../components/CompactAdBanner';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="font-semibold text-stone-800">Privacy Policy</span>
      </div>

      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Privacy & Data Protection Policy
        </h1>
        <p className="text-xs text-stone-500">
          Last revised: October 2026 · personalroom Hospitality Network
        </p>
      </div>

      <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-600 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">1. Information We Collect</h3>
          <p>
            When booking or inquiring about a holiday villa, we collect your name, phone number, email address, and stay dates to coordinate your concierge arrival. We never sell your personal contact details to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">2. Browser LocalStorage Usage</h3>
          <p>
            This application uses your browser's local storage to save your wishlist bookmarks, recent search filters, and client-side booking records. LocalStorage data remains on your personal device and can be cleared at any time via your browser settings.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">3. Payment & Security</h3>
          <p>
            No credit card numbers or payment authentication secrets are ever stored in browser localStorage. Real transactions are verified through standard PCI-DSS compliant banking payment gateways.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-stone-900 text-base">4. Contacting Our Data Officer</h3>
          <p>
            If you have any questions regarding your privacy rights, please email us at privacy@personalroom.com or call our helpline at +91 8000 292 929.
          </p>
        </section>
      </div>

      <CompactAdBanner />
    </div>
  );
};
