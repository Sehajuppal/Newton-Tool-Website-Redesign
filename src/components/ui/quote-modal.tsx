"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Mail, Wrench, Send, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTool?: string;
  initialIssue?: string;
}

export function QuoteModal({
  open,
  onOpenChange,
  initialTool = "",
  initialIssue = "",
}: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tool, setTool] = useState(initialTool);
  const [issue, setIssue] = useState(initialIssue);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Newton Tool Repair Request: ${tool || "Equipment Service"}`);
    const body = encodeURIComponent(
      `Hello Newton Tool Repair Desk,\n\nName: ${name}\nPhone: ${phone}\nTool / Equipment: ${tool}\nIssue / Symptoms:\n${issue}\n\nSubmitted via newtontool.ca`
    );
    window.location.href = `mailto:gagan@newtontool.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-line bg-raised text-ink max-w-md sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-1">
            <Wrench className="w-3.5 h-3.5" />
            <span>Service Desk Intake</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-display text-ink">
            Book Drop-Off / Request Repair Quote
          </DialogTitle>
          <DialogDescription className="text-ink-secondary text-sm">
            Send our Surrey mechanics your equipment details for priority bench check, or call directly.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-success" />
            <h3 className="text-lg font-display font-semibold text-ink">Email Client Opened!</h3>
            <p className="text-sm text-ink-secondary max-w-xs">
              Your repair request has been formatted. If your email client did not open, please call our service desk directly.
            </p>
            <a
              href="tel:+16045033632"
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded bg-surface hover:bg-surface/80 text-ink text-sm font-mono border border-line"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>(604) 503-3632</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="modal-name" className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
                  Your Name / Crew *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dave (Apex Framing)"
                  className="w-full px-3 py-2 text-sm bg-surface border border-line rounded text-ink placeholder:text-ink-secondary/50 focus:border-accent focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="modal-phone" className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(604) 555-0199"
                  className="w-full px-3 py-2 text-sm bg-surface border border-line rounded text-ink placeholder:text-ink-secondary/50 focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="modal-tool" className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
                Tool Brand, Model & Type *
              </label>
              <input
                id="modal-tool"
                type="text"
                required
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                placeholder="e.g. DeWalt DCD996 Hammer Drill or Paslode F350P Nailer"
                className="w-full px-3 py-2 text-sm bg-surface border border-line rounded text-ink placeholder:text-ink-secondary/50 focus:border-accent focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="modal-issue" className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
                Symptom or Maintenance Needed *
              </label>
              <textarea
                id="modal-issue"
                rows={3}
                required
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Describe what happened (motor smoking, air leak, dull carbide teeth, battery not charging)..."
                className="w-full px-3 py-2 text-sm bg-surface border border-line rounded text-ink placeholder:text-ink-secondary/50 focus:border-accent focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line">
              <a
                href="tel:+16045033632"
                className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Urgent? Call (604) 503-3632</span>
              </a>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-accent-ink font-semibold rounded text-sm transition-all duration-150 active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Submit to Bench Desk</span>
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
