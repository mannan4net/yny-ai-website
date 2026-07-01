import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { PlatformLayout } from "@/components/platform/PlatformLayout";
import { PlatformHero, PlatformSection, PlatformArchitecture, PlatformMethodology } from "@/components/platform/PlatformSections";
import { GitCommit, Settings, CheckCircle2 } from "lucide-react";

export default function SDLCFactory() {
  return (
    <Layout>
      <SEO 
        title="SDLC Factory | AI-Native Engineering Platform"
        description="Governed engineering pipelines translating business intent into production-ready software through traceable AI."
        canonicalUrl="/products/sdlc-factory"
      />
      
      <PlatformLayout breadcrumb="Products" breadcrumbHref="/products">
        
        {/* 1. Executive Summary */}
        <PlatformHero 
          category="AI-Native Engineering Platform"
          title="SDLC Factory"
          description="Translate business intent directly into engineering execution. SDLC Factory establishes a governed, end-to-end pipeline where every requirement is frozen, traced, and validated before code is generated."
        />

        {/* 2. Business Scenarios (New Level) */}
        <PlatformSection id="business-value" title="Business Scenarios">
          <p className="text-xl text-muted-foreground mb-8">How SDLC Factory governs the engineering lifecycle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-border p-6 rounded-xl">
              <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">The "Freeze" Mechanism</h3>
              <p className="text-muted-foreground mb-4">A Business Analyst alters a requirement midway. Instead of chaos, the "Freeze" blocks the change, detects the impact across the architecture, and forces regeneration of BPMN and QA tests.</p>
              <div className="flex items-start gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 size={16} className="text-primary mt-0.5" /> Result: Zero regressions, perfect traceability.
              </div>
            </div>
          </div>
        </PlatformSection>

        {/* 3. Solution (Capabilities) */}
        <PlatformSection id="capabilities" title="Core Capabilities">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">Business Intent to BPMN</h4>
              <p className="text-muted-foreground">Automated generation of process models from plain language requirements, ensuring the architecture matches the business ask.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">Governed Code Generation</h4>
              <p className="text-muted-foreground">AI generates code, but governance gates deploy it. Everything must pass the freeze threshold.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">Immutable Artifacts</h4>
              <p className="text-muted-foreground">Every stage of the lifecycle produces an immutable artifact that can be audited for compliance and quality.</p>
            </div>
          </div>
        </PlatformSection>

        {/* 4. Architecture (2 Views) */}
        <PlatformSection id="architecture" title="Enterprise Architecture">
          <PlatformArchitecture 
            executiveImage="/yny-logo.png"
            technicalImage="/opengraph.jpg"
            description="The SDLC Factory pipeline enforces stage-gated, trace-driven progression from discovery to deployment."
          />
        </PlatformSection>

        {/* Methodology Footer */}
        <PlatformMethodology />

      </PlatformLayout>
    </Layout>
  );
}
