import React from 'react';
import { PhoneCall } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function WhatsAppPill() {
  return (
    <a
      href={personalInfo.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-mono text-xs font-bold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
        <PhoneCall className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
      </div>
      <span className="hidden sm:inline">WhatsApp Chat</span>
    </a>
  );
}
