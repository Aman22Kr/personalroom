import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderColor = 'border-emerald-500/30';
        let iconColor = 'text-emerald-500';
        let bg = 'bg-stone-900/95';

        if (toast.type === 'error') {
          Icon = AlertCircle;
          borderColor = 'border-rose-500/30';
          iconColor = 'text-rose-500';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderColor = 'border-amber-500/30';
          iconColor = 'text-amber-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border ${borderColor} ${bg} text-white shadow-xl backdrop-blur-md text-xs transition-all duration-300 animate-in fade-in slide-in-from-bottom-2`}
          >
            <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${iconColor}`} />
            <div className="flex-1 text-stone-200 leading-snug">
              {toast.text}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-stone-200 p-0.5 rounded transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
