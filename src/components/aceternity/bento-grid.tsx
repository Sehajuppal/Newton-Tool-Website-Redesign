"use client";

import { ShieldCheck, Wrench, CheckCircle, Clock, FileText, Cpu } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-16 md:py-24 bg-ground border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Factory Direct Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight leading-tight">
            The right bench path for a warranty claim—or a hard-working tool past warranty.
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary mt-3">
            Whether your equipment is brand new and covered under manufacturer guarantee or a trusted jobsite veteran needing an overhaul, we service each unit with original OEM components.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: OEM Parts Guarantee (Span 2) */}
          <div className="md:col-span-2 rounded-lg bg-raised border border-line p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-line-subtle transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-surface border border-line flex items-center justify-center text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-ink">
                100% Genuine OEM Components & Calibration
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                Third-party knock-off switches, cheap armatures, and generic seals fail under heavy jobsite vibration. We source directly from DeWalt, Metabo, Paslode, and Rolair factory supply chains to restore exact original motor windings, pressure ratings, and safety shutoffs.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-line/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-xs text-ink font-medium">Factory Spec Tolerances</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-xs text-ink font-medium">Original Manufacturer Seals</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-xs text-ink font-medium">Full Safety Interlock Testing</span>
              </div>
            </div>
          </div>

          {/* Card 2: Warranty Processing (Span 1) */}
          <div className="rounded-lg bg-raised border border-line p-6 sm:p-8 flex flex-col justify-between group hover:border-line-subtle transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-surface border border-line flex items-center justify-center text-accent">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-ink">
                Warranty Claims Handled Direct
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Bring your tool and proof of purchase. As an authorized service center, we file manufacturer claims directly on your behalf, minimizing paperwork and downtime.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60">
              <span className="text-xs font-mono text-accent">● Zero diagnostic fees on approved warranty claims</span>
            </div>
          </div>

          {/* Card 3: Step-by-Step Counter Protocol (Span 3) */}
          <div className="md:col-span-3 rounded-lg bg-raised border border-line p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-ink uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-bold">What Happens When You Drop Off in Surrey:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded bg-surface/50 border border-line space-y-2">
                <div className="text-xs font-mono text-accent font-bold">01. INTAKE & SERIAL VERIFICATION</div>
                <div className="text-base font-display font-bold text-ink">Drop-off & Symptom Log</div>
                <p className="text-xs text-ink-secondary">
                  Our counter staff records your model #, serial #, and specific fault description. Tools are tagged into our queue immediately.
                </p>
              </div>

              <div className="p-4 rounded bg-surface/50 border border-line space-y-2">
                <div className="text-xs font-mono text-accent font-bold">02. BENCH DIAGNOSTIC & ESTIMATE</div>
                <div className="text-base font-display font-bold text-ink">Teardown & Clear Quote</div>
                <p className="text-xs text-ink-secondary">
                  Our certified mechanics tear down the tool, inspect electrical armatures and mechanical wear, and call you with an exact parts and labor cost before proceeding.
                </p>
              </div>

              <div className="p-4 rounded bg-surface/50 border border-line space-y-2">
                <div className="text-xs font-mono text-accent font-bold">03. REBUILD & BENCH LOAD TEST</div>
                <div className="text-base font-display font-bold text-ink">Final Testing & Fast Pickup</div>
                <p className="text-xs text-ink-secondary">
                  OEM parts installed, brushes seated, air seals pressure-tested to operating PSI, and electrical current verified under load before handoff.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
