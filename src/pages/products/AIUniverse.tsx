import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { PlatformLayout } from "@/components/platform/PlatformLayout";
import { PlatformHero, PlatformMethodology } from "@/components/platform/PlatformSections";

export default function AIUniverse() {
  return (
    <Layout>
      <SEO title="AIUniverse | AI Intelligence Platform" description="Coming soon." canonicalUrl="/products/aiuniverse" />
      <PlatformLayout breadcrumb="Products" breadcrumbHref="/products">
        <PlatformHero category="AI Intelligence Platform" title="AIUniverse" description="This platform page is currently under construction for Phase 2." />
        <PlatformMethodology />
      </PlatformLayout>
    </Layout>
  );
}
