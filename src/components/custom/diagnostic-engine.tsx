"use client";

import { useState, useEffect } from "react";
import { Wrench, AlertTriangle, Clock, CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

interface DiagnosticEngineProps {
  onOpenQuoteWithDetails: (tool: string, issue: string) => void;
  defaultCategory?: string;
  defaultSymptom?: string;
}

export function DiagnosticEngine({
  onOpenQuoteWithDetails,
  defaultCategory = "cordless",
  defaultSymptom = "power",
}: DiagnosticEngineProps) {
  const [category, setCategory] = useState(defaultCategory);
  const [symptom, setSymptom] = useState(defaultSymptom);
  const [modelNumber, setModelNumber] = useState("");
  const [urgency, setUrgency] = useState("urgent");

  useEffect(() => {
    if (defaultCategory) setCategory(defaultCategory);
    if (defaultSymptom) setSymptom(defaultSymptom);
  }, [defaultCategory, defaultSymptom]);

  const categoryOptions = [
    { id: "cordless", label: "Cordless / Electric Tools", icon: "⚡" },
    { id: "pneumatic", label: "Pneumatics & Framing Nailers", icon: "💨" },
    { id: "saws", label: "Heavy Saws & Miters", icon: "⚙️" },
    { id: "sharpening", label: "Carbide Saw Blade Sharpening", icon: "🪚" },
  ];

  const symptomOptions: Record<string, Array<{ id: string; label: string }>> = {
    cordless: [
      { id: "power", label: "Won't Turn On / Sudden Cut Out" },
      { id: "spark", label: "Motor Sparks / Burning Odor" },
      { id: "chuck", label: "Chuck Slipping / Gearbox Grinding" },
      { id: "battery", label: "Battery Won't Latch or Discharge" },
    ],
    pneumatic: [
      { id: "power", label: "Driver Won't Cycle / Misfiring" },
      { id: "pressure", label: "Air Leaking from Exhaust / Trigger" },
      { id: "depth", label: "Inconsistent Nail Depth / Jamming" },
      { id: "spark", label: "Piston Stuck Down / Sluggish" },
    ],
    saws: [
      { id: "drift", label: "Bevel Drift / Inaccurate 90° Cut" },
      { id: "spark", label: "Brake Failure / Motor Whine" },
      { id: "power", label: "Trips Breaker on Startup" },
      { id: "pressure", label: "Table Binding / Guard Sticky" },
    ],
    sharpening: [
      { id: "drift", label: "Burning Wood / Heavy Tear-Out" },
      { id: "spark", label: "Chipped or Missing Carbide Teeth" },
      { id: "pressure", label: "Vibration / Blade Wobble" },
      { id: "power", label: "Resharpening After Multiple Runs" },
    ],
  };

  // Dynamic calculation of diagnostic advice
  const getDiagnosticInsight = () => {
    if (category === "pneumatic") {
      if (symptom === "pressure") {
        return {
          title: "Pneumatic Air Seal / O-Ring Failure",
          suspectedFault: "Internal top cap gasket or trigger valve O-rings worn from dry air or moisture.",
          turnaround: "Same-Day / 24 Hours",
          bringChecklist: [
            "Bring the tool and the male air fitting you normally connect.",
            "Do NOT spray heavy solvent into the cylinder before bringing it in.",
            "Let counter know typical operating PSI (e.g. 100–120 PSI).",
          ],
          benchAction: "Full tear-down, sonic bath cleaning, replacement of OEM O-ring seal kit, cylinder wall hone, and cycle testing at 120 PSI.",
        };
      }
      return {
        title: "Pneumatic Piston Driver & Bumper Fatigue",
        suspectedFault: "Piston driver blade worn or bumper deteriorated from high cycle framing work.",
        turnaround: "24–48 Hours",
        bringChecklist: [
          "Bring a strip of the exact collated nails you use on site.",
          "Check model number stamped on aluminum magazine (e.g., F350P).",
          "Ensure safety contact foot is attached.",
        ],
        benchAction: "Driver blade replacement, new return springs, fresh rubber bumper, and magazine feeder alignment.",
      };
    }

    if (category === "sharpening") {
      return {
        title: "Precision CNC Wet-Grinding & Carbide Retipping",
        suspectedFault: "Carbide cutting edge radius exceeded 0.05mm or chipped tooth face requiring CNC diamond grinding.",
        turnaround: "48–72 Hours (Batch Drop-Off)",
        bringChecklist: [
          "Wipe heavy pitch/glue buildup off blade if possible.",
          "Label tooth count (e.g. 40T, 60T, 80T) and kerf.",
          "Transport blade in cardboard sheath to protect tooth corners.",
        ],
        benchAction: "Tooth alignment inspection, computerized diamond-wheel tooth face & top grinding, and run-out balancing.",
      };
    }

    if (category === "saws") {
      if (symptom === "spark") {
        return {
          title: "Electric Brake & Carbon Brush Replacement",
          suspectedFault: "Electronic brake commutator carbon brushes severely worn or stator short.",
          turnaround: "24–48 Hours",
          bringChecklist: [
            "Bring the saw with its current blade installed.",
            "Confirm if issue occurs cold or only after heavy cutting.",
            "Note if extension cord gauge was under 12 AWG.",
          ],
          benchAction: "OEM brush pair replacement, armature commutator resurfacing, and electronic brake stop timing test.",
        };
      }
      return {
        title: "Mitre / Table Saw Fence & Arbor Alignment",
        suspectedFault: "Arbor bearing play, warped flange, or guide arm out of square.",
        turnaround: "24–48 Hours",
        bringChecklist: [
          "Bring the standard kerf blade you calibrate cuts with.",
          "Note any recent drops or jobsite transport jolts.",
        ],
        benchAction: "Dial-indicator arbor runout testing, bearing replacement, and precision 90°/45° positive stop calibration.",
      };
    }

    // Default: Cordless / Electric
    if (symptom === "spark") {
      return {
        title: "Armature Commutator & Brush Arc Fault",
        suspectedFault: "Worn carbon brushes or shorted rotor armature winding creating heavy arcing.",
        turnaround: "24–48 Hours",
        bringChecklist: [
          "Bring the tool body and one battery you know holds a charge.",
          "Have model number ready (e.g. DCD996, DCF887).",
        ],
        benchAction: "Motor resistance check, replacement of carbon brushes or complete brushless stator module, and safety load test.",
      };
    }

    return {
      title: "Electronic Variable Speed Trigger / Switch Fault",
      suspectedFault: "Trigger potentiometer worn, contact oxidation, or internal thermal overload switch triggered.",
      turnaround: "24–48 Hours",
      bringChecklist: [
        "Bring the tool and the battery used when it stopped working.",
        "Check that battery terminals are clean and free of drywall dust.",
        "Note if switch feels physically loose or stiff.",
      ],
      benchAction: "Full electrical circuit continuity test, OEM switch replacement, and thermal cycle testing.",
    };
  };

  const insight = getDiagnosticInsight();

  const handleLaunchQuote = () => {
    const toolText = modelNumber ? `Model: ${modelNumber} (${category})` : `${category} Tool`;
    const issueText = `Symptom: ${symptom}. Urgency: ${urgency}. Suspected: ${insight.title}`;
    onOpenQuoteWithDetails(toolText, issueText);
  };

  return (
    <section id="diagnostics" className="py-16 md:py-24 bg-ground border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-line text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight leading-tight">
            Start with the fault. Arrive with a better drop-off.
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary mt-3">
            Select your tool category and symptom below. Our engine generates estimated bench turnaround times, suspected mechanical causes, and pre-dropoff requirements.
          </p>
        </div>

        {/* Interactive Matrix Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls: Selectors */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category Selector */}
            <div className="rounded-lg bg-raised border border-line p-5 space-y-3">
              <label className="text-xs font-mono text-ink uppercase tracking-wider font-bold block">
                1. Select Equipment Class:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setCategory(opt.id);
                      setSymptom(symptomOptions[opt.id][0].id);
                    }}
                    className={`flex items-center gap-3 p-3 rounded text-left transition-all border ${
                      category === opt.id
                        ? "bg-surface text-ink border-accent shadow-sm"
                        : "bg-ground text-ink-secondary border-line hover:border-ink-secondary/50"
                    }`}
                  >
                    <span className="text-lg">{opt.icon}</span>
                    <div>
                      <div className="text-xs font-bold leading-tight">{opt.label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Symptom Selector */}
            <div className="rounded-lg bg-raised border border-line p-5 space-y-3">
              <label className="text-xs font-mono text-ink uppercase tracking-wider font-bold block">
                2. Observed Failure or Symptom:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {(symptomOptions[category] || symptomOptions.cordless).map((sym) => (
                  <button
                    key={sym.id}
                    type="button"
                    onClick={() => setSymptom(sym.id)}
                    className={`px-4 py-2.5 rounded text-left text-xs font-medium transition-all border flex items-center justify-between ${
                      symptom === sym.id
                        ? "bg-surface text-accent border-accent font-semibold"
                        : "bg-ground text-ink-secondary border-line hover:border-ink-secondary/40"
                    }`}
                  >
                    <span>{sym.label}</span>
                    {symptom === sym.id && <span className="w-2 h-2 rounded-full bg-accent" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Model & Urgency */}
            <div className="rounded-lg bg-raised border border-line p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="diag-model" className="text-xs font-mono text-ink-secondary uppercase tracking-wider">
                    Model # (If Known)
                  </label>
                  <input
                    id="diag-model"
                    type="text"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                    placeholder="e.g. DCD996 / F350P"
                    className="w-full px-3 py-2 text-xs font-mono bg-surface border border-line rounded text-ink placeholder:text-ink-secondary/50 focus:border-accent focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="diag-urgency" className="text-xs font-mono text-ink-secondary uppercase tracking-wider">
                    Jobsite Urgency
                  </label>
                  <select
                    id="diag-urgency"
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-mono bg-surface border border-line rounded text-ink focus:border-accent focus:outline-none"
                  >
                    <option value="urgent">🔴 Crew Down (Priority Fast-Track)</option>
                    <option value="standard">🟡 Standard Turnaround (24–48h)</option>
                    <option value="planned">🟢 Scheduled Fleet Maintenance</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Right Output: Bench Diagnostic Sheet */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="rounded-lg bg-surface border-2 border-line p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-raised border-b border-l border-line text-[11px] font-mono text-accent uppercase tracking-widest font-semibold">
                Bench Diagnostic Triage
              </div>

              {/* Title & Suspected Failure */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Suspected Root Cause</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  {insight.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {insight.suspectedFault}
                </p>
              </div>

              {/* Turnaround Badge */}
              <div className="p-3.5 rounded bg-raised border border-line flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono text-ink-secondary">Estimated Turnaround:</span>
                </div>
                <span className="text-xs font-mono font-bold text-ink bg-surface px-2.5 py-1 rounded border border-line">
                  {insight.turnaround}
                </span>
              </div>

              {/* Checklist for Dropoff */}
              <div className="space-y-3 pt-2 border-t border-line/60">
                <span className="text-xs font-mono text-ink uppercase tracking-wider font-bold block">
                  Pre-Dropoff Checklist for Fast Processing:
                </span>
                <div className="space-y-2">
                  {insight.bringChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink-secondary leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bench Action Summary */}
              <div className="p-3 rounded bg-ground/80 border border-line text-xs font-mono text-ink-secondary space-y-1">
                <span className="text-ink font-bold block">Surrey Workshop Action:</span>
                <p>{insight.benchAction}</p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleLaunchQuote}
                  className="flex-1 py-3 px-4 rounded bg-accent hover:bg-accent-hover text-accent-ink font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Ticket to Service Desk</span>
                </button>

                <a
                  href="tel:+16045033632"
                  className="py-3 px-4 rounded bg-raised hover:bg-raised/80 border border-line text-ink text-xs font-mono flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call (604) 503-3632</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
