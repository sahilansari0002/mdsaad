import React from 'react';
import { ArrowUp, PhoneCall } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border/60 py-12 relative text-dark-muted font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-border/40">
          
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-lg font-black font-display text-white tracking-wider">
              MOHAMMAD SAAD
            </div>
            <div className="text-brand-amber text-xs">
              Freelance Video Editor
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-card border border-dark-border hover:border-brand-amber text-white hover:text-brand-amber transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-card border border-dark-border hover:border-brand-amber text-white hover:text-brand-amber transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="https://youtube.com/@saadwithpurpose?si=-9LOICXhm5_twawy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-card border border-dark-border hover:border-brand-amber text-white hover:text-brand-amber transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-card border border-dark-border hover:border-brand-amber text-white hover:text-brand-amber transition-colors"
              aria-label="WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            data-cursor="expand"
            className="flex items-center gap-2 bg-dark-card border border-dark-border hover:border-brand-amber text-white px-4 py-2 rounded-full transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-amber" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-dark-muted/70 text-[11px]">
          © 2026 Mohammad Saad. All Rights Reserved. Built for high-impact video storytelling.
        </div>
      </div>
    </footer>
  );
}
