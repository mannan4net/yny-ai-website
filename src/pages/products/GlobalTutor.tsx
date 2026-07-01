import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { PlatformLayout } from "@/components/platform/PlatformLayout";
import { PlatformHero, PlatformMethodology } from "@/components/platform/PlatformSections";

export default function GlobalTutor() {
  return (
    <Layout>
      <SEO title="Global Tutor | Learning Ecosystem" description="Coming soon." canonicalUrl="/products/global-tutor" />
      <PlatformLayout breadcrumb="Products" breadcrumbHref="/products">
        <PlatformHero category="Learning Ecosystem" title="Global Tutor" description="This platform page is currently under construction for Phase 2." />
        <PlatformMethodology />
      </PlatformLayout>
    </Layout>
  );
}
