import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/sections/Hero";
import { WhyYnYExists } from "@/components/sections/WhyYnYExists";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { EnterpriseReality } from "@/components/sections/EnterpriseReality";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { NarrativeBridge } from "@/components/sections/NarrativeBridge";
import { EnterpriseDomains } from "@/components/sections/EnterpriseDomains";
import { ModernKnowledgeProblems } from "@/components/sections/ModernKnowledgeProblems";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { CTA } from "@/components/sections/CTA";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="YnY AI | Enterprise AI Architecture"
        description="YnY is an Enterprise AI Architecture company translating decades of proven enterprise architecture experience into intelligent platforms for knowledge, legal, engineering, and business operations."
        canonicalUrl="/"
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Company Definition */}
      <WhyYnYExists />
      
      {/* 3. Social Proof */}
      <ExperienceHighlights />
      
      {/* 4. Enterprise Reality */}
      <EnterpriseReality />
      
      {/* 5. Engineering Philosophy */}
      <EngineeringPhilosophy />
      
      {/* 6. Narrative Bridge */}
      <NarrativeBridge />
      
      {/* 7. Enterprise Domains & Solutions */}
      <EnterpriseDomains />
      
      {/* 8. Modern Knowledge Problems */}
      <ModernKnowledgeProblems />
      
      {/* 9. Platform Ecosystem */}
      <ProductEcosystem />
      
      {/* 10. Founder */}
      <FounderCredibility />
      
      {/* 11. Architecture Insights */}
      <section className="py-24 bg-muted border-t border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Architecture Insights</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Read our latest perspectives on enterprise architecture, governed AI adoption, and resilient engineering.
          </p>
          <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:underline">
            Read Insights →
          </Link>
        </div>
      </section>

      {/* 12. Call To Action (Footer) */}
      <CTA />
    </Layout>
  );
}