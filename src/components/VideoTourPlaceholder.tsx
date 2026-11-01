import React, { useState } from 'react';
import { Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';

interface VideoTourPlaceholderProps {
  title?: string;
  location?: string;
  duration?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9';
  className?: string;
}

export const VideoTourPlaceholder: React.FC<VideoTourPlaceholderProps> = ({
  title = 'Take a 4K Virtual Walkthrough Tour',
  location = 'Hillcrest Villa & Infinity Pool, Lonavala',
  duration = '03:45 4K Walkthrough',
  aspectRatio = '16/9',
  className = '',
}) => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 shadow-xl ${className}`}>
      {/* 16:9 Video Canvas Placeholder */}
      <div className="relative w-full aspect-video flex items-center justify-center bg-radial from-stone-800 via-stone-900 to-black select-none">
        {/* Subtle architectural grid backdrop simulating video frame */}
        <div 
          className="absolute inset-0 opacity-25 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Video Thumbnail Background Overlay */}
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80"
          alt="Villa tour thumbnail backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity filter blur-[1px]"
        />

        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/80" />

        {/* Top Video Header Bar */}
        <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white/90 z-10">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              HD Tour Placeholder
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">·</span>
            <span className="text-xs text-stone-300 hidden sm:inline font-mono">1080p 60fps</span>
          </div>

          <div className="text-xs text-stone-300 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-700/60 font-mono">
            {duration}
          </div>
        </div>

        {/* Center Play Button & Trigger Indicator */}
        <div className="relative z-10 text-center px-4 max-w-lg">
          <button
            onClick={() => setIsPlayingPreview(!isPlayingPreview)}
            className="group relative mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-amber-400/50"
            aria-label="Play tour preview placeholder"
          >
            <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current translate-x-0.5" />
          </button>

          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            {location}
          </p>

          {/* Interactive feedback status */}
          {isPlayingPreview ? (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/90 text-amber-300 text-xs border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Simulated preview active (Blank placeholder mode)</span>
            </div>
          ) : (
            <p className="mt-3 text-[11px] text-stone-400">
              Click play to explore virtual room layouts and grounds
            </p>
          )}
        </div>

        {/* Bottom Control Bar Simulation */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-center justify-between text-xs text-stone-400 z-10 border-t border-white/5 bg-stone-950/60 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <Volume2 className="w-4 h-4 text-stone-300" />
            <div className="w-24 sm:w-48 h-1 bg-stone-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 transition-all duration-500" 
                style={{ width: isPlayingPreview ? '65%' : '0%' }}
              />
            </div>
            <span className="font-mono text-[10px] text-stone-300">
              {isPlayingPreview ? '02:18 / 03:45' : '00:00 / 03:45'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified personalroom Estate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
