"use client";

import { useState } from "react";
import { Wrench, Phone, Navigation, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
  onSelectDiagnostic: (category: string, symptom: string) => void;
}

export function HeroSection({ onOpenQuote, onSelectDiagnostic }: HeroSectionProps) {
  const [quickCategory, setQuickCategory] = useState("cordless");
  const [quickSymptom, setQuickSymptom] = useState("power");

  const handleQuickStart = () => {
    onSelectDiagnostic(quickCategory, quickSymptom);
    const element = document.getElementById("diagnostics");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:py-20 lg:py-24 bg-grid-pattern border-b border-line overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-surface rounded-full blur-[140px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-ink font-semibold">SURREY INDUSTRIAL WORKSHOP</span>
              <span className="text-line">|</span>
              <span className="text-accent">AUTHORIZED OEM SERVICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08]">
              ZERO DOWNTIME <br />
              <span className="text-ink">FOR SURREY TRADES.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl">
              Factory-authorized warranty repair for <strong className="text-ink">DeWalt, Metabo HPT, Rolair, Paslode, and Flex</strong>. High-precision carbide saw blade sharpening, pneumatic overhaul, and commercial fleet maintenance in Surrey, BC.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wider transition-all duration-150 active:scale-[0.98] shadow-md shadow-black/40"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Drop-Off / Quote</span>
              </button>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=114-7533+135th+Street,+Surrey,+BC+V3W+0N6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-surface hover:bg-surface/80 border border-line text-ink font-semibold text-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-accent" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+16045033632"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-ink-secondary hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>(604) 503-3632</span>
              </a>
            </div>

            {/* Key Value Anchors */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-line/60 max-w-lg">
              <div className="space-y-1">
                <div className="text-lg font-mono font-bold text-ink">24–48h</div>
                <div className="text-xs text-ink-secondary font-mono">Priority Bench Turnaround</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-mono font-bold text-ink">100%</div>
                <div className="text-xs text-ink-secondary font-mono">OEM Genuine Parts</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-mono font-bold text-ink">7:00 AM</div>
                <div className="text-xs text-ink-secondary font-mono">Early Trade Drop-Off</div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Diagnostic Preview Box */}
          <div className="lg:col-span-5">
            <div className="rounded-lg bg-raised border border-line p-5 sm:p-6 shadow-2xl shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Wrench className="w-24 h-24 text-accent" />
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-line mb-5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink">
                    Bench Diagnostic Check
                  </span>
                </div>
                <span className="text-[11px] font-mono text-ink-secondary bg-surface px-2 py-0.5 rounded border border-line">
                  Unit #114 Surrey
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                    1. Select Equipment Category:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "cordless", label: "Cordless / Electric" },
                      { id: "pneumatic", label: "Pneumatic / Air" },
                      { id: "saws", label: "Heavy Saws / Motors" },
                      { id: "sharpening", label: "Blade Sharpening" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setQuickCategory(cat.id)}
                        className={`px-3 py-2 text-xs font-medium rounded text-left transition-all border ${
                          quickCategory === cat.id
                            ? "bg-surface text-accent border-accent font-semibold"
                            : "bg-ground/60 text-ink-secondary border-line hover:border-ink-secondary/50"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                    2. Primary Fault / Symptom:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "power", label: "Won't Turn On / Cut Out" },
                      { id: "spark", label: "Motor Sparks / Smoke" },
                      { id: "pressure", label: "Air Leak / No Pressure" },
                      { id: "drift", label: "Dull Teeth / Blade Drift" },
                    ].map((sym) => (
                      <button
                        key={sym.id}
                        type="button"
                        onClick={() => setQuickSymptom(sym.id)}
                        className={`px-3 py-2 text-xs font-medium rounded text-left transition-all border ${
                          quickSymptom === sym.id
                            ? "bg-surface text-accent border-accent font-semibold"
                            : "bg-ground/60 text-ink-secondary border-line hover:border-line"
                        }`}
                      >
                        {sym.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleQuickStart}
                    className="w-full py-3 rounded bg-surface hover:bg-surface/80 border border-line hover:border-accent text-ink font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Run Full Diagnostic & Get Checklist</span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] text-ink-secondary font-mono">
                <span>Free pre-dropoff triage</span>
                <span className="text-success font-semibold">● Bench Techs On Duty</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
