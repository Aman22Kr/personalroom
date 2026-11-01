import React, { useState } from 'react';
import { ExternalLink, Info, X } from 'lucide-react';

interface CompactAdBannerProps {
  className?: string;
  theme?: 'light' | 'dark' | 'sand';
}

export const CompactAdBanner: React.FC<CompactAdBannerProps> = ({
  className = '',
  theme = 'sand',
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 my-6 ${className}`}
      aria-label="Advertisement placeholder"
    >
      <div className="relative overflow-hidden rounded-xl border border-stone-200/90 bg-gradient-to-r from-stone-100 via-amber-50/40 to-stone-100 p-4 sm:p-5 shadow-xs transition-all">
        {/* Top meta pill-free label */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
            <span>Advertisement</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Partner Spotlight</span>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="text-stone-600 hover:text-stone-800 p-1 rounded-md transition-colors"
            title="Dismiss advertisement banner"
            aria-label="Close advertisement banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Ad Body */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-stone-900 tracking-tight flex items-center gap-2">
              <span>Apex Airport & Ro-Ro Chauffeur Concierge</span>
              <span className="inline-flex items-center text-[10px] text-amber-700 font-medium">
                Verified Travel Partner
              </span>
            </h4>
            <p className="text-xs text-stone-600 max-w-2xl">
              Arrive at your personalroom villa in luxury. Private executive car transfers and Mandwa Ro-Ro priority boarding for guests in Mumbai, Pune, and Goa.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-md border border-amber-200">
              Promo: PERSONALROOM20
            </span>
            <span className="text-stone-600 hover:text-stone-700 text-xs font-medium inline-flex items-center gap-1 cursor-default">
              <span>Learn More</span>
              <ExternalLink className="w-3 h-3 text-stone-600" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
