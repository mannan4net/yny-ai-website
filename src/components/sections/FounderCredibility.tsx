import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Configurable founder photo asset path
const FOUNDER_PHOTO_PATH = "/founder.png"; 

export function FounderCredibility() {
  const [imageError, setImageError] = useState(false);

  const experiences = [
    "National digital health & e-governance platforms (ABDM)",
    "Payment and reconciliation engines (ExpertPay)",
    "Industrial paint and service web applications (AkzoNobel)",
    "Government-approved bidding & auction engines (C1 India)",
    "Enterprise inspection & laboratory management (Bureau Veritas)",
    "Manufacturing and consumer electronics platforms (Dyson)",
    "High-throughput enterprise data warehousing"
  ];

  const trustIndicators = [
    "Systems Integration",
    "Platform Engineering",
    "Data Sovereignty",
    "Knowledge Graphs",
    "Federated Security",
    "Scale Governance"
  ];

  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why YnY Exists & Experience */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-2 py-0.5 bg-muted border border-border">
                Foundations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mt-3">
                Built on Real Enterprise Experience
              </h2>
              <div className="w-20 h-1 bg-primary mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-bold text-primary leading-snug">
                Practical software led by architectural discipline.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                YnY platforms are personally architected and led by founder Abdul Mannan. The ecosystem translates over two decades of systems engineering into production-ready enterprise software, prioritizing architectural discipline over software trends.
              </p>
            </div>

            {/* Why YnY Exists Quote Block */}
            <div className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/40 pr-4">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                Why YnY Exists
              </span>
              <blockquote className="text-base font-medium text-primary italic leading-relaxed">
                "I founded YnY after repeatedly encountering the same architectural challenges across enterprise modernization programmes. Organizations consistently struggled to access, govern, and operationalize their own knowledge. These platforms were built to solve those exact problems."
              </blockquote>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
                Representative platform and architectural experience:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                {experiences.map((exp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5"></div>
                    <span className="text-xs font-semibold text-muted-foreground">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Enhanced Founder Profile Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
              
              {/* Top: Professional Founder Photo with error fallback */}
              <div className="w-full h-80 md:h-[380px] bg-muted relative overflow-hidden flex items-center justify-center border-b border-border">
                {!imageError && FOUNDER_PHOTO_PATH ? (
                  <img 
                    src={FOUNDER_PHOTO_PATH} 
                    onError={() => setImageError(true)} 
                    alt="Abdul Mannan" 
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  // Initials Fallback Box (AM)
                  <div 
                    className="w-full h-full bg-primary text-white flex flex-col items-center justify-center relative select-none font-sans"
                    style={{
                      backgroundImage: `linear-gradient(45deg, hsl(222, 47%, 11%) 0%, hsl(222, 47%, 20%) 100%)`
                    }}
                  >
                    <span className="text-5xl font-extrabold tracking-tight">AM</span>
                    <span className="text-xs font-mono tracking-widest uppercase mt-2 opacity-50">Chief Architect</span>
                    {/* Subtle technical overlay lines */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: '16px 16px'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Middle: Name, Title & Statement */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-primary">Abdul Mannan</h4>
                  <p className="text-sm font-semibold text-accent mt-1">Chief Architect & Founder</p>
                </div>

                <div className="text-sm font-medium text-primary leading-relaxed border-l-2 border-primary/20 pl-4 py-1 italic bg-muted/20">
                  "Twenty years of building enterprise systems has taught me that governed knowledge is the foundation of every successful transformation."
                </div>

                {/* Bottom: Trust Indicators Grid */}
                <div className="pt-6 border-t border-border">
                  <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    Architect Verification
                  </h5>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {trustIndicators.map((indicator, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-bold text-primary tracking-tight">
                          {indicator}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border mt-4">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-xs font-bold text-primary hover:text-accent transition-colors group"
                  >
                    View Full Leadership Bio
                    <svg className="w-4.5 h-4.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
