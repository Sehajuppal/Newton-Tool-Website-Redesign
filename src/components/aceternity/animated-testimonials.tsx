"use client";

import { useState } from "react";
import { Star, MapPin, ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function AnimatedTestimonials() {
  const testimonials = [
    {
      quote: "Amazing customer service and very reasonable pricing for repairs. They fixed our framing nailer in less than 24 hours when another shop quoted a 2-week backlog. Kept our crew moving on the jobsite in Surrey.",
      author: "Harpreet S.",
      role: "Framing Contractor, Surrey BC",
      rating: 5,
      source: "Google Reviews Verified",
    },
    {
      quote: "Newton Tool is the only place we trust for our custom carbide dado sets and architectural finish blades. Their computerized sharpening gives cleaner cuts than brand new blades straight out of the box.",
      author: "Markus V.",
      role: "Custom Cabinetry & Millwork, Langley",
      rating: 5,
      source: "Birdeye Verified Review",
    },
    {
      quote: "Brought in three DeWalt hammer drills and a Metabo compressor that quit on a commercial build. Handled the warranty paperwork smoothly, replaced the switches with OEM parts, and bench tested them before handoff.",
      author: "Tyler M.",
      role: "General Contractor, Metro Vancouver",
      rating: 5,
      source: "YellowPages Verified Review",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-raised border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span>Verified Trade Proof</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight leading-tight">
            Clear advice, fair repair quotes, and tools that go straight back to work.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 rounded-lg bg-surface border border-line p-6 sm:p-10 relative">
            <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6 pointer-events-none" />

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-base sm:text-lg text-ink font-medium leading-relaxed mb-6 italic">
              "{current.quote}"
            </p>

            <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-display font-bold text-ink text-sm sm:text-base">
                  {current.author}
                </div>
                <div className="text-xs text-ink-secondary flex items-center gap-1.5 font-mono">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>{current.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-ink-secondary bg-ground px-2.5 py-1 rounded border border-line">
                  {current.source}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-line/40">
              <div className="flex items-center gap-1">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`w-6 h-1.5 rounded-full transition-all ${
                      activeIndex === idx ? "bg-accent" : "bg-line hover:bg-ink-secondary"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-2 rounded bg-ground border border-line text-ink hover:border-accent transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-2 rounded bg-ground border border-line text-ink hover:border-accent transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-4 rounded-lg bg-ground border border-line p-6 space-y-4">
            <div className="text-xs font-mono text-accent uppercase tracking-wider font-bold">
              Surrey Workshop Reputation
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-black text-ink">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Consistently rated by Lower Mainland general contractors, carpenters, and woodworkers for rapid turnaround and honest estimates.
            </p>
            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/RouKi8unCdyCc56AA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-ink hover:text-accent transition-colors"
              >
                <span>Read Google Maps Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
