import React from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { PlatformLayout } from "@/components/platform/PlatformLayout";
import { 
  PlatformHero, 
  PlatformSection, 
  PlatformArchitecture, 
  PlatformMethodology 
} from "@/components/platform/PlatformSections";
import { getProductConfig } from "@/config/architectureRegistry";
import { 
  Activity, 
  ShieldAlert, 
  Settings, 
  Brain, 
  Scale, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";

interface ProductPortalLayoutProps {
  slug: string;
}

const IconMap = {
  activity: Activity,
  shield: ShieldAlert,
  settings: Settings,
  brain: Brain,
  scale: Scale,
  book: BookOpen
};

export function ProductPortalLayout({ slug }: ProductPortalLayoutProps) {
  const config = getProductConfig(slug);

  const BusinessIcon = IconMap[config.businessScenarioIconName] || Settings;

  return (
    <Layout>
      <SEO 
        title={`${config.title} | ${config.category}`}
        description={config.description.split("\n")[0]} // Single line summary
        canonicalUrl={`/products/${slug}`}
      />
      
      <PlatformLayout breadcrumb="Products" breadcrumbHref="/products">
        
        {/* 1. Overview */}
        <div id="overview" className="scroll-mt-32 space-y-8">
          <PlatformHero 
            badge={config.badge}
            classification={config.classification}
            category={config.category}
            title={config.title}
            description={config.description}
          />

          {config.kpis && config.kpis.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {config.kpis.slice(0, 2).map((kpi, index) => (
                <div key={index} className="bg-slate-50 border border-border p-8 rounded-xl flex flex-col justify-center">
                  <div className="text-4xl font-bold text-primary mb-2">{kpi.value}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800">{kpi.label}</h3>
                  {kpi.description && <p className="text-slate-600 mt-2 text-sm">{kpi.description}</p>}
                </div>
              ))}
            </div>
          )}

          {config.vision && config.mission && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 bg-slate-50 border border-border p-8 rounded-xl">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">{config.vision}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">{config.mission}</p>
              </div>
            </div>
          )}

          {config.highlights && (
            <div className="my-12">
              <h3 className="text-xl font-bold mb-6 text-slate-900 border-b border-border pb-3">Platform Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {config.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-border p-4 rounded-lg shadow-sm">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0"></div>
                    <span className="font-semibold text-slate-800 text-sm">{h.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2. Business Value */}
        <PlatformSection id="business-value" title="Business Value">
          {config.stakeholders ? (
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground">
                How our ecosystem delivers value across the education community.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {config.stakeholders.map((sh, i) => (
                  <div key={i} className="bg-slate-50 border border-border p-6 md:p-8 rounded-xl flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{sh.title}</h3>
                      <p className="text-slate-700 leading-relaxed mb-6 text-sm md:text-base">{sh.description}</p>
                    </div>
                    {sh.benefits && sh.benefits.length > 0 && (
                      <div className="mt-auto border-t border-slate-200/60 pt-4">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">Key Benefits</h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {sh.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-slate-800">
                              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <p className="text-xl text-muted-foreground mb-8">
                How executives and teams extract value from {config.title} daily.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-border p-6 rounded-xl">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    <BusinessIcon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{config.businessScenarioTitle}</h3>
                  <p className="text-muted-foreground mb-4">{config.businessScenarioDesc}</p>
                  <div className="flex items-start gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{config.businessScenarioResult}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </PlatformSection>

        {/* 3. Capabilities */}
        <PlatformSection id="capabilities" title="Core Capabilities">
          <p className="text-lg text-muted-foreground mb-8">
            {config.title} is not a generic solution. It is a governed enterprise platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.capabilities.map((cap, i) => (
              <div key={i} className="space-y-4 bg-white border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-slate-900 border-b border-border pb-2">
                  {cap.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </PlatformSection>

        {/* 4. Architecture */}
        <PlatformSection id="architecture" title="Enterprise Architecture">
          <PlatformArchitecture 
            executiveImage={config.executiveArchitecture}
            technicalImage={config.technicalArchitecture}
            description={config.architectureDescription}
          />

          {config.architectureLayers && (
            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-border pb-3">Layered Architecture Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {config.architectureLayers.map((layer, idx) => (
                  <div key={idx} className="bg-white border border-border p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider border-l-2 border-primary pl-3">
                      {layer.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {layer.items.map((item, id) => (
                        <li key={id} className="text-slate-600 text-xs font-mono bg-slate-50 px-2 py-1 border border-slate-100 rounded">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </PlatformSection>

        {/* 5. Use Cases */}
        <PlatformSection id="use-cases" title="Enterprise Use Cases">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {config.useCases.map((uc, i) => {
              const CaseIcon = IconMap[uc.iconName] || Activity;
              return (
                <div key={i} className="bg-white border border-border p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary shrink-0">
                    <CaseIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{uc.title}</h4>
                    <p className="text-muted-foreground text-sm">{uc.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </PlatformSection>

        {/* 6. Roadmap */}
        <PlatformSection id="roadmap" title="Current Maturity">
          {config.roadmapPhases ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {config.roadmapPhases.map((phase, idx) => (
                <div key={idx} className="bg-slate-50 border border-border p-6 rounded-xl relative">
                  <div className="absolute top-6 right-6">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                      phase.status === "Completed" ? "bg-emerald-100 text-emerald-800" :
                      phase.status === "Current" ? "bg-indigo-100 text-indigo-800 border border-indigo-200 animate-pulse" :
                      "bg-slate-200 text-slate-700"
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary uppercase block mb-1">
                    {phase.phase}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, id) => (
                      <li key={id} className="flex items-start gap-2 text-sm text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-900 text-slate-300 p-8 rounded-xl font-mono text-sm">
              <p className="text-emerald-400 mb-4">&gt; System Status: {config.maturityStatus}</p>
              <ul className="space-y-2">
                {config.roadmap?.map((item, i) => (
                  <li key={i}>
                    {i < config.roadmap.length - 1 ? "[✓] " : "[-] "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </PlatformSection>

        {/* Methodology Footer */}
        <PlatformMethodology />

      </PlatformLayout>
    </Layout>
  );
}
