"use client";

import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export function SimpleCenteredContactForm({ onOpenQuote }: ContactSectionProps) {
  return (
    <section id="location" className="py-16 md:py-24 bg-ground border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Workshop Location & Drop-Off</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight leading-tight">
            Bring the tool, the power source, and the details that tell the bench what happened.
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary mt-3">
            Located in Surrey's industrial business corridor with easy truck and contractor vehicle parking at unit #114 on 135th Street.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Workshop Contact Details & Hours */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address & Direct Phone Card */}
            <div className="rounded-lg bg-raised border border-line p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface border border-line flex items-center justify-center text-accent flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Newton Tool Repair Ltd.
                  </h3>
                  <p className="text-sm text-ink-secondary mt-1">
                    #114 - 7533 135th Street, Surrey, BC, V3W 0N6
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=114-7533+135th+Street,+Surrey,+BC+V3W+0N6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-surface hover:bg-surface/80 border border-line text-xs font-mono text-ink transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-accent" />
                      <span>Open in Google Maps</span>
                    </a>

                    <a
                      href="tel:+16045033632"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-accent hover:bg-accent-hover text-accent-ink text-xs font-mono font-bold transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>(604) 503-3632</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Table */}
            <div className="rounded-lg bg-raised border border-line p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-bold">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>
              <div className="divide-y divide-line/60 text-xs font-mono">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-ink font-semibold">Monday – Friday</span>
                  <span className="text-ink-secondary bg-surface px-2 py-0.5 rounded border border-line">
                    7:00 AM – 5:00 PM
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-ink font-semibold">Saturday</span>
                  <span className="text-ink-secondary bg-surface px-2 py-0.5 rounded border border-line">
                    8:00 AM – 3:00 PM
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-ink font-semibold">Sunday</span>
                  <span className="text-danger font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* What to Bring Checklist */}
            <div className="rounded-lg bg-surface border border-line p-6 space-y-3">
              <span className="text-xs font-mono text-ink uppercase tracking-wider font-bold block">
                Quick Counter Drop-off Advice:
              </span>
              <ul className="space-y-2 text-xs text-ink-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Bring the battery or air coupling connected when the fault occurred.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>For warranty claims, please have your original invoice or store receipt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Mention if tool was exposed to rain, dropped from staging, or shorted.</span>
                </li>
              </ul>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="w-full py-2.5 rounded bg-raised hover:bg-raised/80 border border-line hover:border-accent text-xs font-mono text-ink flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>Prefill Digital Repair Slip Before Arrival</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="rounded-lg bg-raised border border-line p-2 overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] w-full rounded overflow-hidden relative">
                <iframe
                  title="Newton Tool Repair Ltd Location Map"
                  src="https://maps.google.com/maps?q=114-7533+135th+Street+Surrey+BC+V3W+0N6&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="p-3 flex items-center justify-between text-xs font-mono text-ink-secondary">
                <span>📍 #114 - 7533 135th St, Surrey</span>
                <a
                  href="https://maps.app.goo.gl/RouKi8unCdyCc56AA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <span>Google Maps link</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
