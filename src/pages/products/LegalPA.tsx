import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { PlatformLayout } from "@/components/platform/PlatformLayout";
import { PlatformHero, PlatformMethodology } from "@/components/platform/PlatformSections";

export default function LegalPA() {
  return (
    <Layout>
      <SEO title="LegalPA | Enterprise Legal Intelligence" description="Coming soon." canonicalUrl="/products/legalpa" />
      <PlatformLayout breadcrumb="Products" breadcrumbHref="/products">
        <PlatformHero category="Enterprise Legal Intelligence" title="LegalPA" description="This platform page is currently under construction for Phase 2." />
        <PlatformMethodology />
      </PlatformLayout>
    </Layout>
  );
}
