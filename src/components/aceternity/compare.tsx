"use client";

import { useState } from "react";
import { Disc, Sparkles, Check, ShieldAlert } from "lucide-react";

interface CompareProps {
  onOpenQuote: () => void;
}

export function Compare({ onOpenQuote }: CompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const bladeSpecs = [
    {
      title: "Circular Saw & Mitre Blades (8\" – 16\")",
      desc: "24-tooth rip blades to 100-tooth ultra-fine architectural finishing blades.",
    },
    {
      title: "Dado Stacks & Custom Jointers",
      desc: "Matched-height outer blades and chippers for dead-flat bottom dado cuts.",
    },
    {
      title: "Planer & Jointer Knives (HSS & Carbide)",
      desc: "Precision ground in matched sets to exact balance and thickness tolerances.",
    },
    {
      title: "Bandsaw Coils & Resaw Blades",
      desc: "Weld, tension, tooth set, and sharp profile restore for heavy lumber resawing.",
    },
  ];

  return (
    <section id="sharpening" className="py-16 md:py-24 bg-raised border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <Disc className="w-3.5 h-3.5" />
            <span>Precision CNC Sharpening Lab</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight leading-tight">
            Keep the blade. Restore the cut.
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary mt-3 leading-relaxed">
            Dull saw blades tear grain, burn hardwood, overload armatures, and cause dangerous kickback. Our automated computer-controlled wet grinding restores carbide teeth to mirror-honed factory geometry for a fraction of replacement cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Edge Comparison Slider */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-surface border border-line p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-danger flex items-center gap-1.5 font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  Dull Chipped Carbide Edge
                </span>
                <span className="text-success flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-4 h-4" />
                  Newton Mirror-Honed Finish
                </span>
              </div>

              {/* Graphic Visual Representation */}
              <div className="relative h-64 sm:h-72 w-full rounded bg-ground border border-line overflow-hidden select-none">
                
                {/* Background Side (Mirror Honed) */}
                <div className="absolute inset-0 bg-surface flex items-center justify-center p-6 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 rounded-full bg-raised border-2 border-success mx-auto flex items-center justify-center text-success text-2xl font-bold font-mono">
                      0.002mm
                    </div>
                    <div className="font-display font-bold text-ink text-base">
                      Micro-Finished Tooth Geometry
                    </div>
                    <p className="text-xs text-ink-secondary max-w-xs mx-auto">
                      Multi-axis diamond wet grind restores 15° hook and 10° alternate top bevel with zero thermal stress.
                    </p>
                  </div>
                </div>

                {/* Foreground Side (Dull/Chipped) clipped by slider */}
                <div
                  className="absolute inset-0 bg-ground flex items-center justify-center p-6 text-center border-r-2 border-accent transition-none"
                  style={{ width: `${sliderPosition}%`, overflow: "hidden" }}
                >
                  <div className="w-[500px] space-y-3 absolute left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-raised border-2 border-danger mx-auto flex items-center justify-center text-danger text-2xl font-bold font-mono">
                      0.18mm
                    </div>
                    <div className="font-display font-bold text-ink text-base">
                      Rounded &amp; Chipped Carbide Tooth
                    </div>
                    <p className="text-xs text-ink-secondary max-w-xs mx-auto">
                      Rounded radius burns timber, bogs down motor commutators, and creates rough splintering on finished ply.
                    </p>
                  </div>
                </div>

                {/* Vertical Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent text-accent-ink font-mono text-xs font-bold flex items-center justify-center shadow-lg border border-ground">
                    ⬄
                  </div>
                </div>
              </div>

              {/* Slider Control */}
              <div className="space-y-1 pt-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="w-full accent-accent cursor-ew-resize"
                  aria-label="Carbide sharpening comparison slider"
                />
                <div className="flex justify-between text-[11px] font-mono text-ink-secondary">
                  <span>← Drag to inspect dull edge</span>
                  <span>Drag to inspect polished grind →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Blade Types & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-ink">
                What We Sharpen In-House:
              </h3>
              <div className="space-y-3">
                {bladeSpecs.map((item) => (
                  <div key={item.title} className="p-3.5 rounded bg-surface border border-line space-y-1">
                    <div className="flex items-center gap-2 text-xs font-display font-bold text-ink">
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-ink-secondary pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded bg-surface border border-accent/40 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-accent font-bold">SAVINGS CALCULATION</div>
                <div className="text-xs text-ink-secondary">Save 60%–75% vs. brand new commercial blade cost.</div>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-3.5 py-2 rounded bg-accent hover:bg-accent-hover text-accent-ink text-xs font-bold uppercase tracking-wider transition-all"
              >
                Drop Off Blades
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
