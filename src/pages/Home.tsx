import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/sections/Hero";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { EnterpriseDomains } from "@/components/sections/EnterpriseDomains";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { WhyYnY } from "@/components/sections/WhyYnY";
import { CTA } from "@/components/sections/CTA";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="YnY AI | Enterprise Knowledge &amp; Intelligence Platforms"
        description="YnY AI is a founder-led venture focused on helping organizations modernize technology, accelerate digital transformation and unlock the value of AI."
        canonicalUrl="/"
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Built on Real Enterprise Experience */}
      <FounderCredibility />
      
      {/* 3. Experience Highlights */}
      <ExperienceHighlights />
      
      {/* 4. Enterprise Domains & Solutions */}
      <EnterpriseDomains />
      
      {/* 5. The Modern Knowledge Problem */}
      <Problem />
      
      {/* 6. Engineering Philosophy */}
      <Approach />
      
      {/* 7. One Vision. Multiple Platforms */}
      <ProductEcosystem />
      
      {/* 8. Why Organizations Partner With Us */}
      <WhyYnY />
      
      {/* 9. Architecture Insights */}
      <section className="py-24 bg-muted border-t border-border">
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

      {/* 10. Footer Section */}
      <CTA />
    </Layout>
  );
}