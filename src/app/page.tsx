"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";
import { ResizableNavbar } from "@/components/aceternity/resizable-navbar";
import { HeroSection } from "@/components/aceternity/hero-section";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { BentoGrid } from "@/components/aceternity/bento-grid";
import { CardHoverEffect } from "@/components/aceternity/card-hover-effect";
import { DiagnosticEngine } from "@/components/custom/diagnostic-engine";
import { Compare } from "@/components/aceternity/compare";
import { CtaWithBackgroundNoise } from "@/components/aceternity/cta-with-background-noise";
import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";
import { SimpleCenteredContactForm } from "@/components/aceternity/simple-centered-contact-form";
import { FooterWithBigText } from "@/components/aceternity/footer-with-big-text";
import { QuoteModal } from "@/components/ui/quote-modal";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [diagCategory, setDiagCategory] = useState("cordless");
  const [diagSymptom, setDiagSymptom] = useState("power");

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenQuote = () => {
    setSelectedTool("");
    setSelectedIssue("");
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithDetails = (tool: string, issue: string) => {
    setSelectedTool(tool);
    setSelectedIssue(issue);
    setQuoteModalOpen(true);
  };

  const handleSelectDiagnostic = (category: string, symptom: string) => {
    setDiagCategory(category);
    setDiagSymptom(symptom);
  };

  return (
    <div className="min-h-screen bg-ground text-ink flex flex-col selection:bg-accent selection:text-accent-ink">
      {/* Resizable Navigation Bar with Live Status */}
      <ResizableNavbar onOpenQuote={handleOpenQuote} />

      <main className="flex-1">
        {/* Hero Section with Quick Diagnostic Intake */}
        <HeroSection
          onOpenQuote={handleOpenQuote}
          onSelectDiagnostic={handleSelectDiagnostic}
        />

        {/* Authorized Factory Partners Marquee Tape */}
        <InfiniteMovingCards />

        {/* OEM Certification & Counter Protocol Bento Grid */}
        <BentoGrid />

        {/* Core Workshop Service Catalog */}
        <CardHoverEffect onOpenQuote={handleOpenQuote} />

        {/* Signature Interactive Diagnostic Trouble Engine */}
        <DiagnosticEngine
          onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
          defaultCategory={diagCategory}
          defaultSymptom={diagSymptom}
        />

        {/* Precision Carbide Blade Sharpening Lab Comparison */}
        <Compare onOpenQuote={handleOpenQuote} />

        {/* Commercial & Contractor Fleet Account Banner */}
        <CtaWithBackgroundNoise onOpenQuote={handleOpenQuote} />

        {/* Verified Customer Reviews & Reputation */}
        <AnimatedTestimonials />

        {/* Workshop Map, Operating Hours & Drop-off Checklist */}
        <SimpleCenteredContactForm onOpenQuote={handleOpenQuote} />
      </main>

      {/* Industrial Footer */}
      <FooterWithBigText />

      {/* Interactive Service Intake / Repair Quote Modal */}
      <QuoteModal
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        initialTool={selectedTool}
        initialIssue={selectedIssue}
      />
    </div>
  );
}
