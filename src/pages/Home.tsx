import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { EnterpriseDomains } from "@/components/sections/EnterpriseDomains";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { WhyYnY } from "@/components/sections/WhyYnY";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FounderCredibility />
      <ExperienceHighlights />
      <EnterpriseDomains />
      <Problem />
      <Approach />
      <ProductEcosystem />
      <WhyYnY />
      <CTA />
    </Layout>
  );
}