import React, { ReactNode, useState } from "react";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { Link } from "wouter";
import { ArchitectureImage } from "./ArchitectureImage";

// --- Hero ---
export function PlatformHero({ category, title, description }: { category: string; title: string; description: string }) {
  return (
    <div id="overview" className="scroll-mt-32">
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
        {category}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// --- Section Wrapper ---
export function PlatformSection({ id, title, children, className = "" }: { id: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-32 ${className}`}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
        <div className="h-px bg-border flex-1 ml-4 hidden md:block"></div>
      </div>
      {children}
    </section>
  );
}

// --- Dual Architecture View (Amendment #6) ---
export function PlatformArchitecture({ executiveImage, technicalImage, description }: { executiveImage: string; technicalImage: string; description: string }) {
  const [activeTab, setActiveTab] = useState<"executive" | "technical">("executive");

  return (
    <div className="bg-slate-50 border border-border rounded-xl overflow-hidden">
      <div className="flex border-b border-border bg-white">
        <button 
          onClick={() => setActiveTab("executive")}
          className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${activeTab === "executive" ? "bg-primary/5 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-slate-50"}`}
        >
          <Layers size={18} />
          Executive Architecture
        </button>
        <button 
          onClick={() => setActiveTab("technical")}
          className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${activeTab === "technical" ? "bg-primary/5 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-slate-50"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          Technical Architecture
        </button>
      </div>
      <div className="p-6 md:p-8">
        <p className="text-muted-foreground mb-8 text-lg">{description}</p>
        <div className="overflow-hidden">
          {activeTab === "executive" ? (
            <ArchitectureImage src={executiveImage} alt="Executive Architecture" />
          ) : (
            <ArchitectureImage src={technicalImage} alt="Technical Architecture" />
          )}
        </div>
      </div>
    </div>
  );
}

// --- Methodology Footer (Amendment #4) ---
export function PlatformMethodology() {
  const steps = ["Knowledge", "Architecture", "Governance", "AI", "Delivery"];
  
  return (
    <div className="bg-primary text-white rounded-2xl p-8 md:p-12 my-16 shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative z-10">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold mb-4">Built on the YnY Engineering Methodology</h2>
          <p className="text-primary-foreground/80 text-lg">
            Every YnY platform is an expression of our core engineering philosophy. We believe knowledge precedes architecture, and governance precedes automation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg border border-white/20 mb-3">
                  {index + 1}
                </div>
                <span className="font-semibold text-sm tracking-wider uppercase">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-1 h-px bg-white/30 w-12"></div>
              )}
              {index < steps.length - 1 && (
                <ArrowRight className="md:hidden text-white/50 my-2 ml-4" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-medium text-white/90">Explore the rest of the ecosystem</p>
          <Link href="/products" className="bg-white text-primary px-6 py-3 rounded-none font-bold hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
            View All Platforms <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
