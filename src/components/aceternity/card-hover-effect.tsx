"use client";

import { Zap, Wind, Cog, Disc, ArrowRight, Check } from "lucide-react";

interface CardHoverEffectProps {
  onOpenQuote: () => void;
}

export function CardHoverEffect({ onOpenQuote }: CardHoverEffectProps) {
  const services = [
    {
      icon: Zap,
      title: "Electric & Cordless Power Tools",
      category: "Heavy Duty & Cordless",
      desc: "Diagnostics, OEM armature rebuilding, switch replacements, brushless motor controller servicing, and gearbox repacking for commercial tools.",
      items: [
        "Hammer Drills & Impact Drivers",
        "10\" & 12\" Sliding Compound Mitre Saws",
        "Jobsite Table Saws & Worm-Drive Saws",
        "Rotary Hammers (SDS-Plus & SDS-Max)",
        "Angle Grinders & Metal Cutting Saws",
      ],
      turnaround: "24–48h typical",
    },
    {
      icon: Wind,
      title: "Pneumatic & Air Systems",
      category: "Framing & Finish Pneumatics",
      desc: "Complete pneumatic cylinder overhauls, O-ring kit rebuilds, piston driver replacements, regulator adjustments, and compressor tune-ups.",
      items: [
        "Paslode & Metabo Framing Nailers",
        "15ga, 16ga, 18ga Finish & Brad Nailers",
        "Coil Roofing & Siding Nailers",
        "Contractor Twin-Stack Compressors (Rolair)",
        "Air Hose Lines & Manifold Manifolds",
      ],
      turnaround: "Same-Day / 24h",
    },
    {
      icon: Cog,
      title: "Industrial Equipment & Motors",
      category: "Commercial & Site Power",
      desc: "Heavy-duty electrical motor rewinding, brush replacements, bearing pull & installs, and power generation maintenance for demanding jobsite machinery.",
      items: [
        "Demolition Breaker Hammers (35lb–60lb)",
        "Diamond Core Drilling Rigs",
        "Jobsite Portable Inverter Generators",
        "Industrial Commercial Pressure Washers",
        "Concrete Vibrators & Compaction Tools",
      ],
      turnaround: "48–72h typical",
    },
    {
      icon: Disc,
      title: "Custom Carbide & Blade Sharpening",
      category: "Precision Edge Care",
      desc: "Automated computer-controlled wet grinding restoring custom carbide tooth angles, face geometry, and side clearance to mirror factory tolerances.",
      items: [
        "Carbide Table & Miter Saw Blades (24T–100T)",
        "Dado Sets & Custom Joinery Stacks",
        "Industrial Band Saw & Resaw Blades",
        "HSS & Carbide Planer & Jointer Knives",
        "Solid Carbide CNC & Router Bits",
      ],
      turnaround: "2–3 Day Batch / Drop-off",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-raised border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <Cog className="w-3.5 h-3.5" />
              <span>Workshop Service Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight">
              One workshop for the tools that move a crew forward.
            </h2>
          </div>
          <p className="text-sm text-ink-secondary font-mono max-w-sm">
            All repairs backed by our Surrey bench guarantee and tested under working mechanical load.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="rounded-lg bg-surface border border-line p-6 sm:p-8 flex flex-col justify-between hover:border-accent transition-all duration-200 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded bg-raised border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-ink transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-ground text-ink-secondary border border-line">
                      {svc.turnaround}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                    {svc.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-ink">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-line/50">
                    <span className="text-[11px] font-mono text-ink uppercase tracking-wider font-semibold block mb-2">
                      Common Units Serviced:
                    </span>
                    {svc.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-ink-secondary">
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-mono text-ink font-semibold group-hover:text-accent transition-colors"
                  >
                    <span>Request Service for this category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
