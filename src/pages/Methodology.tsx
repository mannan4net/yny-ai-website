import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";

export default function Methodology() {
  return (
    <Layout>
      <SEO 
        title="Engineering Methodology | YnY AI"
        description="The YnY AI engineering philosophy: Knowledge precedes architecture, and governance precedes automation."
        canonicalUrl="/methodology"
      />
      
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineering Methodology</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Knowledge before implementation. Architecture before code. Governance before automation.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto space-y-16 text-lg text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The YnY Doctrine</h2>
              <p className="mb-6">
                Most AI implementations fail because they attempt to automate chaos. The YnY Engineering Methodology asserts that AI accelerates engineering, but human accountability and robust enterprise architecture must remain foundational.
              </p>
              <ul className="space-y-4 list-disc pl-6 text-slate-700">
                <li><strong className="text-slate-900">Knowledge:</strong> Deep understanding of the enterprise context and business intent.</li>
                <li><strong className="text-slate-900">Architecture:</strong> Vendor-agnostic, scalable design that respects data sovereignty.</li>
                <li><strong className="text-slate-900">Governance:</strong> Stage-gated, trace-driven progression across the entire lifecycle.</li>
                <li><strong className="text-slate-900">Delivery:</strong> Predictable, production-ready systems that solve real business problems.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
