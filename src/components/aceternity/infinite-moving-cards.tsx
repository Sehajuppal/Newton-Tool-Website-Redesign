"use client";

import { ShieldCheck, Award } from "lucide-react";

export function InfiniteMovingCards() {
  const brands = [
    { name: "DeWalt", role: "Factory Authorized Service", badgeColor: "#FEBD11" },
    { name: "Metabo HPT", role: "Authorized Industrial Center", badgeColor: "#007A3D" },
    { name: "Rolair Systems", role: "Authorized Air Compressor Hub", badgeColor: "#E2001A" },
    { name: "Paslode", role: "Factory Warranty & Service Center", badgeColor: "#FF6600" },
    { name: "Porter-Cable", role: "Authorized Tool Maintenance", badgeColor: "#1a1d24" },
    { name: "Flex Power Tools", role: "Authorized Warranty Repair", badgeColor: "#E2001A" },
    { name: "BN Products", role: "Authorized Rebar & Power Center", badgeColor: "#005691" },
  ];

  return (
    <div id="authorized" className="bg-raised border-b border-line py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono text-ink uppercase tracking-wider">
          <Award className="w-4 h-4 text-accent" />
          <span className="font-bold">Authorized Factory Service Partners</span>
        </div>
        <p className="text-xs text-ink-secondary font-mono">
          Genuine OEM Parts • Factory Warranty Processing • Spec Tolerances
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max animate-marquee-glide gap-4 hover:[animation-play-state:paused]">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-md bg-surface border border-line hover:border-accent transition-colors flex-shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <div>
                <div className="text-sm font-display font-bold text-ink tracking-tight">
                  {brand.name}
                </div>
                <div className="text-[11px] font-mono text-ink-secondary">
                  {brand.role}
                </div>
              </div>
              <ShieldCheck className="w-4 h-4 text-accent/80 ml-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
