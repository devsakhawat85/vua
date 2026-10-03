import React, { useState, useEffect } from 'react';
import { AxLogo } from './AxLogo';
import { Phone, Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onRequestService: () => void;
  onOpenCompanyProfile: () => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestService,
  onOpenCompanyProfile,
  onOpenEmergency,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Company Profile', href: '#company-profile', onClick: onOpenCompanyProfile },
    { label: 'Services', href: '#services' },
    { label: 'Why AX Now', href: '#why-ax-now' },
    { label: 'Service Footprint', href: '#service-footprint' },
    { label: 'Team', href: '#meet-team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar (Quiet, Professional Trust Bar) */}
      <div className="bg-slate-900 border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Established 1997 · Southfield, Michigan</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Fortune-100 & National Retail Facility Partner</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">All Work Guaranteed (90–360 Days)</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>24/7 Emergency Dispatch: 248.228.7149</span>
            </button>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:dispatch@axnow.com"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              dispatch@axnow.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20 py-3'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single element brand mark */}
            <a href="#" className="flex items-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 rounded">
              <AxLogo variant="light" size="md" />
            </a>

            {/* Zone 2: Navigation Links (Clean text with hover underlines) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:2485690800"
                className="flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shadow-sm"
                title="Call AX NOW! at 248.569.0800"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="tabular-nums">248.569.0800</span>
              </a>

              <button
                onClick={onRequestService}
                className="flex items-center gap-2 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 px-4 py-2 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-sky-500/20 cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href="tel:2485690800"
                className="p-2 text-sky-400 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
                aria-label="Call AX NOW!"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800 space-y-2.5">
              <a
                href="tel:2485690800"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-slate-200 bg-slate-900 border border-slate-700 rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call 248.569.0800</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestService();
                }}
                className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg transition-colors"
              >
                Request Service
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full py-2 text-xs font-semibold text-amber-400 bg-amber-950/40 border border-amber-800/60 rounded-lg"
              >
                24/7 Emergency Dispatch: 248.228.7149
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
