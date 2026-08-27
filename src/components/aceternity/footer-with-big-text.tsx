"use client";

import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";

export function FooterWithBigText() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ground border-t border-line text-ink pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-line">
          
          {/* Brand & Mission (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-surface border border-line flex items-center justify-center font-display font-black text-accent text-xl">
                NT
              </div>
              <div>
                <div className="font-display font-extrabold text-lg tracking-tight text-ink">
                  NEWTON TOOL REPAIR LTD.
                </div>
                <div className="text-xs text-ink-secondary font-mono">
                  Authorized Service & Sharpening Hub
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-sm">
              Surrey's authorized warranty service center for DeWalt, Metabo HPT, Rolair Systems, Porter-Cable, Paslode, and Flex. Dedicated to zero jobsite downtime for Canadian trade professionals.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-accent">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Factory Direct Warranties</span>
            </div>
          </div>

          {/* Quick Links (Col 1) */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-ink uppercase tracking-wider font-bold">
              Shop Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium text-ink-secondary">
              <li><a href="#services" className="hover:text-ink transition-colors">Core Repair Services</a></li>
              <li><a href="#authorized" className="hover:text-ink transition-colors">Authorized Factory Brands</a></li>
              <li><a href="#sharpening" className="hover:text-ink transition-colors">Blade & Carbide Sharpening</a></li>
              <li><a href="#fleet" className="hover:text-ink transition-colors">Contractor Fleet Accounts</a></li>
              <li><a href="#diagnostics" className="hover:text-ink transition-colors">Diagnostic Trouble Matrix</a></li>
              <li><a href="#location" className="hover:text-ink transition-colors">Surrey Location & Hours</a></li>
            </ul>
          </div>

          {/* Authorized Brands (Col 1) */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-ink uppercase tracking-wider font-bold">
              Authorized Brands
            </div>
            <ul className="space-y-2 text-xs font-mono text-ink-secondary">
              <li>• DeWalt Factory Service</li>
              <li>• Metabo & Metabo HPT</li>
              <li>• Rolair Systems Compressors</li>
              <li>• Paslode Pneumatics</li>
              <li>• Porter-Cable Maintenance</li>
              <li>• Flex Power Tools</li>
              <li>• BN Products Rebar Gear</li>
            </ul>
          </div>

          {/* Contact Direct (Col 1) */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-ink uppercase tracking-wider font-bold">
              Service Desk
            </div>
            <div className="space-y-2.5 text-xs font-mono text-ink-secondary">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <a href="tel:+16045033632" className="text-ink hover:text-accent font-bold">
                  (604) 503-3632
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href="mailto:gagan@newtontool.ca" className="hover:text-ink">
                  gagan@newtontool.ca
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span>#114 - 7533 135th St, Surrey, BC V3W 0N6</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-secondary">
          <div>
            © {new Date().getFullYear()} Newton Tool Repair Ltd. All rights reserved. Registered in British Columbia.
          </div>

          <div className="flex items-center gap-6">
            <span>Surrey, BC · Metro Vancouver</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-ink text-accent transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
