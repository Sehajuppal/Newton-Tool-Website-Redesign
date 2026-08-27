"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, ShieldCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResizableNavbarProps {
  onOpenQuote: () => void;
}

export function ResizableNavbar({ onOpenQuote }: ResizableNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Authorized Brands", href: "#authorized" },
    { label: "Blade Sharpening", href: "#sharpening" },
    { label: "Fleet Care", href: "#fleet" },
    { label: "Diagnostic Guide", href: "#diagnostics" },
    { label: "Location & Hours", href: "#location" },
  ];

  return (
    <>
      {/* Top Utility Status Bar */}
      <div className="bg-surface/80 border-b border-line px-4 py-1.5 text-xs text-ink-secondary flex items-center justify-between font-mono backdrop-blur-sm z-40 relative">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-success">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-ink font-semibold">Surrey Shop Open:</span> Mon–Fri 7AM–5PM | Sat 8AM–3PM
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-ink-secondary">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Factory Authorized Center
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=114-7533+135th+Street,+Surrey,+BC+V3W+0N6"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 hover:text-ink transition-colors"
          >
            <MapPin className="w-3 h-3 text-accent" />
            <span>#114 - 7533 135th St, Surrey BC</span>
          </a>
          <a
            href="tel:+16045033632"
            className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline"
          >
            <Phone className="w-3 h-3" />
            <span>(604) 503-3632</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 border-b",
          scrolled
            ? "bg-ground/95 backdrop-blur-md border-line py-2.5 shadow-lg shadow-black/30"
            : "bg-ground border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-surface border border-line flex items-center justify-center font-display font-black text-accent text-lg group-hover:border-accent transition-colors">
              NT
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg tracking-tight text-ink flex items-center gap-1.5">
                <span>NEWTON TOOL</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-surface border border-line text-accent font-mono">
                  REPAIR
                </span>
              </div>
              <p className="text-[11px] text-ink-secondary font-mono tracking-wider">
                AUTHORIZED SERVICE & SHARPENING
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+16045033632"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-surface hover:bg-surface/80 border border-line text-xs font-mono text-ink transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call Shop</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent hover:bg-accent-hover text-accent-ink font-semibold text-xs tracking-wide uppercase transition-all duration-150 active:scale-95 shadow-sm"
            >
              <span>Book Drop-Off / Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded bg-surface border border-line text-ink"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-raised border-b border-line px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-1 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded bg-surface/50 text-sm font-medium text-ink hover:bg-surface border border-transparent hover:border-line"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 grid grid-cols-2 gap-2 border-t border-line">
              <a
                href="tel:+16045033632"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded bg-surface border border-line text-xs font-mono text-ink"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call Shop</span>
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded bg-accent text-accent-ink text-xs font-bold uppercase tracking-wider"
              >
                <span>Drop-Off Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
