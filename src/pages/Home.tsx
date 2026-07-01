import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem"; 
import { Approach } from "@/components/sections/Approach"; 
import { ProductEcosystem } from "@/components/sections/ProductEcosystem"; 
import { FounderCredibility } from "@/components/sections/FounderCredibility"; 
import { CTA } from "@/components/sections/CTA"; 
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="YnY AI | Enterprise Knowledge & Intelligence Platforms"
        description="YnY AI is a founder-led venture focused on helping organizations modernize technology, accelerate digital transformation and unlock the value of AI."
        canonicalUrl="/"
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Enterprise Challenges */}
      <Problem />

      {/* 3. Why Current Approaches Fail */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Current Approaches Fail</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most AI implementations fail because they attempt to automate chaos. Connecting an LLM to fragmented, ungoverned data lakes does not produce enterprise intelligence—it produces unpredictable risks. True enterprise intelligence requires rigorous systems architecture.
          </p>
        </div>
      </section>

      {/* 4 & 5. Engineering Philosophy & Methodology */}
      <Approach />

      {/* 6. Consulting */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise Consulting</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Before we deploy platforms, we deploy architecture. Our consulting practice applies the YnY methodology to de-risk your digital transformation and establish a solid engineering foundation.
          </p>
          <Link href="/services" className="inline-flex items-center text-primary font-bold hover:underline">
            Explore Consulting Services →
          </Link>
        </div>
      </section>

      {/* 7. Products */}
      <ProductEcosystem />

      {/* 8. Enterprise Experience */}
      <FounderCredibility />

      {/* 9. Insights */}
      <section className="py-24 bg-muted">
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

      {/* 10. Contact */}
      <CTA />
    </Layout>
  );
}