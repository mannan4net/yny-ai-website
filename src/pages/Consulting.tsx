import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";

export default function Consulting() {
  return (
    <Layout>
      <SEO 
        title="Enterprise Consulting | YnY AI"
        description="Applying the YnY Engineering Methodology to solve complex enterprise architecture and digital transformation challenges."
        canonicalUrl="/consulting"
      />
      
      <div className="bg-white min-h-screen">
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Enterprise Consulting</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Applying our rigorous engineering methodology to solve your most complex architectural challenges.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Execution Beyond Theory</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our consulting practice is not a separate entity from our product organization. It is the direct application of the YnY Engineering Methodology to your specific enterprise context.
            </p>
            <p className="text-lg text-slate-600 mb-12">
              We leverage our extensive background in national registries, financial clearing platforms, and healthcare interoperability to de-risk your AI adoption and digital transformation initiatives.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
