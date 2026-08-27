"use client";

import { ShieldCheck, Phone, CheckCircle2, Users } from "lucide-react";

interface CtaFleetProps {
  onOpenQuote: () => void;
}

export function CtaWithBackgroundNoise({ onOpenQuote }: CtaFleetProps) {
  return (
    <section id="fleet" className="py-16 md:py-20 bg-ground border-b border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-xl bg-raised border-2 border-line p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Contractor & Commercial Accounts</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-ink tracking-tight leading-tight">
                A priority bench queue for the crews that cannot lose a day.
              </h2>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
                Keep your entire tool inventory operating at peak torque and pressure. We offer scheduled fleet drop-offs, bulk pneumatic maintenance batches, monthly invoicing, and priority overnight turnaround for framing outfits and general contractors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-ink">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Priority Queue Dispatch</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Direct Trade Invoicing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Scheduled Batch Service</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:+16045033632"
                className="py-3.5 px-6 rounded bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-black/40"
              >
                <Phone className="w-4 h-4" />
                <span>Talk to Service Desk</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="py-3.5 px-6 rounded bg-surface hover:bg-surface/80 border border-line text-ink font-semibold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Open Fleet Account</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
