import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { PlatformLayout } from "@/components/platform/PlatformLayout";
import { PlatformHero, PlatformSection, PlatformArchitecture, PlatformMethodology } from "@/components/platform/PlatformSections";
import { CheckCircle2, ShieldAlert, Activity, TrendingUp } from "lucide-react";

export default function PAAI() {
  return (
    <Layout>
      <SEO 
        title="PAAI | Enterprise Intelligence Platform"
        description="PAAI connects scattered enterprise systems into a single intelligent memory. Decision intelligence, role-aware access, and vendor-agnostic architecture."
        canonicalUrl="/products/paai"
      />
      
      <PlatformLayout breadcrumb="Products" breadcrumbHref="/products">
        
        {/* 1. Executive Summary */}
        <PlatformHero 
          category="Enterprise Intelligence Platform"
          title="PAAI"
          description="Connect scattered enterprise systems into a single intelligent memory. PAAI orchestrates knowledge, governs access, and delivers decision intelligence securely across the organization."
        />

        {/* 2. Business Scenarios (New Level) */}
        <PlatformSection id="business-value" title="Business Scenarios">
          <p className="text-xl text-muted-foreground mb-8">How executives and teams extract value from PAAI daily.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-border p-6 rounded-xl">
              <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare Incident</h3>
              <p className="text-muted-foreground mb-4">A critical compliance incident occurs. Instead of searching across 4 different legacy systems, the compliance officer asks PAAI to assemble the timeline.</p>
              <div className="flex items-start gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 size={16} className="text-primary mt-0.5" /> Result: 4-hour investigation reduced to 15 minutes.
              </div>
            </div>
            
            <div className="bg-slate-50 border border-border p-6 rounded-xl">
              <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">CEO Dashboard</h3>
              <p className="text-muted-foreground mb-4">Morning executive brief. The CEO needs to know the exact status of enterprise OKRs tied to live financial systems without logging into Salesforce, SAP, and Jira.</p>
              <div className="flex items-start gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 size={16} className="text-primary mt-0.5" /> Result: Instantly synthesized executive brief.
              </div>
            </div>
          </div>
        </PlatformSection>

        {/* 3. Solution (Capabilities) */}
        <PlatformSection id="capabilities" title="Core Capabilities">
          <p className="text-lg text-muted-foreground mb-8">PAAI is not a generic chatbot. It is a governed enterprise intelligence platform.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">Knowledge Integration</h4>
              <p className="text-muted-foreground">Native connectors to WSO2, SAP, Salesforce, and legacy databases. It does not replace your systems; it orchestrates them.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">Role-Aware Access</h4>
              <p className="text-muted-foreground">Strict RBAC enforcement. An employee querying financial data only receives the intelligence they are explicitly authorized to view.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">Vendor-Agnostic AI</h4>
              <p className="text-muted-foreground">Hot-swap LLMs based on security, cost, or capability. Avoid vendor lock-in with Azure OpenAI, Google, Anthropic, or Local models.</p>
            </div>
          </div>
        </PlatformSection>

        {/* 4. Architecture (2 Views) */}
        <PlatformSection id="architecture" title="Enterprise Architecture">
          <PlatformArchitecture 
            executiveImage="/yny-logo.png"
            technicalImage="/opengraph.jpg"
            description="The PAAI platform architecture connects enterprise systems of record to secure intelligence pipelines, ensuring knowledge is always governed."
          />
        </PlatformSection>

        {/* 5. Use Cases */}
        <PlatformSection id="use-cases" title="Enterprise Use Cases">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary"><Activity size={20} /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Financial Alerts & Reconciliation</h4>
                <p className="text-muted-foreground">Automated tracking of payment discrepancies across clearing platforms.</p>
              </div>
            </div>
          </div>
        </PlatformSection>

        {/* 6. Roadmap */}
        <PlatformSection id="roadmap" title="Current Maturity">
          <div className="bg-slate-900 text-slate-300 p-8 rounded-xl font-mono text-sm">
            <p className="text-emerald-400 mb-4">&gt; System Status: Production Ready</p>
            <ul className="space-y-2">
              <li>[✓] Role-Based Access Control (RBAC)</li>
              <li>[✓] Multi-Tenant Architecture</li>
              <li>[✓] Enterprise Knowledge Graph (v1)</li>
              <li>[-] Autonomous Agentic Workflows (In Development)</li>
            </ul>
          </div>
        </PlatformSection>

        {/* Methodology Footer */}
        <PlatformMethodology />

      </PlatformLayout>
    </Layout>
  );
}
