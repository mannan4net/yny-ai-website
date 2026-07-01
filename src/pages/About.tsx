import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Leadership } from "@/components/sections/Leadership";

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Abdul Mannan | Enterprise Architect & AI Strategist"
        description="Learn about Abdul Mannan's twenty years of experience designing mission-critical platforms and his vision for YnY AI enterprise intelligence."
        canonicalUrl="/about"
      />
      <div className="bg-white">
        {/* Header */}
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Abdul Mannan</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Enterprise Architect, AI Strategist, and Product Builder
            </p>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="container mx-auto px-6 py-24 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Professional Journey</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-left">
              <p>
                Abdul Mannan is an Enterprise Architect and Technology Leader with over twenty years of experience designing, modernizing, and scaling mission-critical platforms. From leading the architectural design of India’s national health interoperability registry (ABDM) to directing secure enterprise AI transformations, his career is focused on engineering durable systems aligned with strategic business outcomes.
              </p>
              <p>
                As the founder of YnY AI, he personally architects and leads the YnY AI platform portfolio and engineering services, translating two decades of systems engineering into production-ready software. Founder-led architecture with trusted implementation partners as required.
              </p>
            </div>
          </div>
        </div>

        {/* Why YnY AI Exists */}
        <div className="container mx-auto px-6 py-24 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Why YnY AI Exists</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-left">
              <p>
                YnY AI was founded to translate deep enterprise architecture discipline into practical artificial intelligence.
              </p>
              <p>
                After directing large-scale modernization programs and national registries (ABDM), Abdul Mannan established YnY AI to bridge the gap between speculative AI demonstrations and secure, governed operational assets. YnY AI builds unified platforms that connect institutional knowledge directly to execution, enabling faster, auditable decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Experience & Expertise and Transformation Philosophy */}
        <div className="bg-muted py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-4">Experience & Expertise</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Over 20 years of hands-on expertise leading enterprise architecture, cloud-native transformations, platform engineering, DevOps modernization, and data systems for healthcare, finance, government, and enterprise software sectors.
                </p>
              </div>
              <div className="bg-white p-12 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-4">Transformation Philosophy</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Technology initiatives succeed when architectural discipline and product innovation work hand-in-hand. AI and platform adoption must be pragmatic, secure, and measured by the tangible business value they create.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Core Values</h2>
              <div className="w-20 h-1 bg-white"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Architecture Discipline", desc: "System design precedes construction. Every engineering decision is made with long-term maintainability and scalability in mind." },
                { title: "Product Excellence", desc: "Platforms are shipped to solve real organizational challenges, avoiding technology for its own sake." },
                { title: "AI-First Thinking", desc: "Artificial intelligence is treated as a foundational, architecture-integrated capability rather than an add-on feature." },
                { title: "Delivery Rigor", desc: "Commitments are tracked, delivery metrics are measured, and engineering outcomes are fully documented." },
                { title: "Business Impact", desc: "Every architectural and engineering decision is directly evaluated against the measurable value it delivers to the organization." }
              ].map((value, index) => (
                <div key={index} className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Milestones (Timeline) */}
        <div className="py-24 bg-white border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Career Milestones</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2004",
                  title: "Software Engineering Foundations",
                  text: "Started a professional technology career building enterprise business applications and participating across the full software development lifecycle. Developed foundations in software engineering, databases, application architecture, and enterprise delivery."
                },
                {
                  year: "2007",
                  title: "Enterprise Delivery & Technology Leadership",
                  text: "Joined a global multinational environment and progressed through multiple leadership roles from Software Developer to Technical Project Manager. Led enterprise platforms, global rollouts, vendor transitions, and mission-critical business systems."
                },
                {
                  year: "2015",
                  title: "Architecture, Analytics & Digital Transformation",
                  text: "Expanded into enterprise architecture, business intelligence, data warehousing, analytics platforms, integration systems, and digital transformation initiatives. Delivered modernization programs across procurement, auction, analytics, and enterprise platforms."
                },
                {
                  year: "2018",
                  title: "Enterprise Architecture at Scale",
                  text: "Assumed senior architecture and technology leadership responsibilities across healthcare, financial services, payment platforms, fraud analytics, cloud-first initiatives, microservices modernization, and enterprise data ecosystems."
                },
                {
                  year: "2022",
                  title: "National Healthcare Platform Modernization",
                  text: "Led cloud migration and modernization initiatives supporting national healthcare platforms including Aarogya Setu and ABDM. Contributed to cloud strategy, platform engineering, DevOps modernization, interoperability, and large-scale healthcare transformation programs serving hundreds of millions of citizens."
                },
                {
                  year: "2024",
                  title: "Enterprise AI & Intelligence Platforms",
                  text: "Expanded focus toward enterprise AI, Retrieval-Augmented Generation (RAG), semantic retrieval, knowledge intelligence, LLM integration patterns, intelligent decision-support systems, and AI platform architecture."
                },
                {
                  year: "2026",
                  title: "Founder Vision & Intelligence Platforms",
                  text: "Formalized YnY AI as a founder-led venture focused on Enterprise Intelligence Systems, AI-powered software delivery platforms, legal intelligence solutions, and next-generation knowledge platforms including PAAI, SDLC Factory, LegalPA, AIUniverse, Global Tutor, and future domain-specific intelligence ecosystems."
                }
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 items-start">
                  <div className="w-24 shrink-0 text-right">
                    <span className="text-xl font-bold text-accent">{milestone.year}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute -left-5 top-2 w-3 h-3 bg-primary rounded-full hidden md:block border-2 border-white ring-1 ring-border"></div>
                    <h3 className="font-bold text-primary mb-1 text-lg">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Expertise */}
        <div className="py-24 bg-muted border-b border-border">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Technology Expertise</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  group: "Architecture & Cloud",
                  items: ["Cloud Architecture", "Distributed Systems", "Microservices", "Enterprise Integration"]
                },
                {
                  group: "AI & Data",
                  items: ["LLMs", "RAG", "Semantic Search", "Vector Databases", "AI/ML Engineering"]
                },
                {
                  group: "Engineering",
                  items: ["DevOps", "Platform Engineering", "CI/CD", "Quality Engineering"]
                },
                {
                  group: "Payment & Reconciliation",
                  items: ["Payment & Reconciliation Platforms (ExpertPay)", "Child Support Payment Systems (ExpertPay)", "Clearing & Interbank Settlement", "Transaction Risk Systems"]
                }
              ].map((cluster, i) => (
                <div key={i} className="bg-white p-8 border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-border">{cluster.group}</h3>
                  <ul className="space-y-3">
                    {cluster.items.map((item, j) => (
                      <li key={j} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <Leadership />

        {/* Delivery Philosophy Blockquote */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <blockquote className="text-2xl font-medium text-primary leading-relaxed border-l-4 border-primary pl-8 text-left italic">
              "I don't just deliver code — I deliver outcomes. Every engagement starts with architecture, is governed by discipline, and ends with measurable results. I believe that robust architecture enables agility, rather than hindering it."
            </blockquote>
          </div>
        </div>
      </div>
    </Layout>
  );
}
