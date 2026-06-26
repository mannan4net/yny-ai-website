import { motion } from "framer-motion";
import { Link } from "wouter";
import { Database, Layers, Scale, Eye, Wrench, Shield, ChevronDown, Check } from "lucide-react";

export function ProductEcosystem() {
  const products = [
    {
      id: "paai",
      name: "PAAI",
      category: "ENTERPRISE KNOWLEDGE",
      description: "Enterprise knowledge retrieval and AI workspace connecting people, AI agents, and corporate databases.",
      metric: "Unified retrieval and executive briefings"
    },
    {
      id: "legalpa",
      name: "LegalPA",
      category: "LEGAL INTELLIGENCE",
      description: "AI-powered legal research and intelligence platform covering statutory codes and citation networks.",
      metric: "Constitution to courtroom legal search"
    },
    {
      id: "aiuniverse",
      name: "AIUniverse",
      category: "AI INTELLIGENCE",
      description: "AI trends, research insights, and software tool comparisons curated for technology leaders.",
      metric: "Daily curated technology breakthroughs"
    },
    {
      id: "sdlc-factory",
      name: "SDLC Factory",
      category: "ENGINEERING EXECUTION",
      description: "AI-powered software delivery engine that converts business requirements directly into architecture and code assets.",
      metric: "Business intent to governed deployment"
    }
  ];

  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-2 py-0.5 bg-muted border border-border">
            Platform Strategy
          </span>
          <h3 className="text-3xl font-bold text-primary tracking-tight mt-3">
            One Vision. Multiple Platforms.
          </h3>
          <div className="w-20 h-1 bg-primary mt-4 mb-4"></div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            YnY is building an integrated ecosystem of platforms that connect knowledge, intelligence, and execution, rather than four unrelated products.
          </p>
        </motion.div>

        {/* Enterprise Architecture Blueprint Flow Diagram - CENTERPIECE */}
        <motion.div 
          className="mb-16 border border-border bg-muted/20 p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">
              How Our Platforms Work Together
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From knowledge retrieval to intelligence generation and execution acceleration, each platform plays a distinct role in the YnY ecosystem.
            </p>
          </div>

          {/* Flow Container */}
          <div className="flex flex-col items-center space-y-4 max-w-4xl mx-auto">
            
            {/* Step 1: Knowledge Sources */}
            <div className="w-full sm:w-80 p-4 border border-border bg-white text-center shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Database className="w-4 h-4 text-primary" />
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider font-mono">1. Knowledge Sources</h5>
              </div>
              <p className="text-[10px] text-muted-foreground">Databases, Documents, Case Laws, System Logs</p>
            </div>

            {/* Connecting Line 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-primary" />
              <ChevronDown className="w-4 h-4 text-primary -mt-1" />
            </div>

            {/* Step 2: PAAI */}
            <div className="w-full sm:w-80 p-4 border border-primary bg-white text-center shadow-sm relative">
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 hidden lg:block">
                <span className="text-[9px] font-mono font-bold text-accent bg-white border border-border px-1">INPUT</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Layers className="w-4 h-4 text-primary" />
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider font-mono">2. PAAI Workspace</h5>
              </div>
              <p className="text-[10px] text-muted-foreground font-semibold">Enterprise retrieval & context synchronization</p>
            </div>

            {/* Connecting Line 2 */}
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-primary" />
              <ChevronDown className="w-4 h-4 text-primary -mt-1" />
            </div>

            {/* Step 3: AIUniverse + LegalPA (Branched Layer) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl relative">
              {/* Desktop branch connector lines using absolute SVG overlay */}
              <div className="absolute inset-0 hidden sm:block pointer-events-none">
                <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 600 80">
                  <path d="M 300 0 L 300 15 M 300 15 L 150 15 L 150 30 M 300 15 L 450 15 L 450 30" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* LegalPA Node */}
              <div className="p-4 border border-border bg-white text-center shadow-sm sm:mt-6 relative">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Scale className="w-4 h-4 text-primary" />
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider font-mono">3A. LegalPA</h5>
                </div>
                <p className="text-[10px] text-muted-foreground">Domain-specific Legal Intelligence</p>
              </div>

              {/* AIUniverse Node */}
              <div className="p-4 border border-border bg-white text-center shadow-sm sm:mt-6 relative">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Eye className="w-4 h-4 text-primary" />
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider font-mono">3B. AIUniverse</h5>
                </div>
                <p className="text-[10px] text-muted-foreground">Domain-specific Market Intelligence</p>
              </div>
            </div>

            {/* Connecting Line 3 */}
            <div className="flex flex-col items-center pt-2 w-full">
              <div className="absolute hidden sm:block pointer-events-none w-full max-w-2xl h-10 -mt-2">
                <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 600 40">
                  <path d="M 150 0 L 150 15 L 300 15 L 300 30 M 450 0 L 450 15 L 300 15" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="sm:hidden w-[1px] h-6 bg-primary" />
              <ChevronDown className="w-4 h-4 text-primary -mt-1 sm:mt-5" />
            </div>

            {/* Step 4: Decisions */}
            <div className="w-full sm:w-80 p-4 border border-border bg-white text-center shadow-sm sm:mt-2">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-primary" />
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider font-mono">4. Orchestrated Decisions</h5>
              </div>
              <p className="text-[10px] text-muted-foreground">Governed prompts, briefing briefs, RBAC checks</p>
            </div>

            {/* Connecting Line 4 */}
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-primary" />
              <ChevronDown className="w-4 h-4 text-primary -mt-1" />
            </div>

            {/* Step 5: SDLC Factory */}
            <div className="w-full sm:w-80 p-4 border border-primary bg-primary text-white text-center shadow-md relative">
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 hidden lg:block">
                <span className="text-[9px] font-mono font-bold text-primary bg-white border border-primary px-1">OUTPUT</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Wrench className="w-4 h-4 text-white" />
                <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">5. SDLC Factory</h5>
              </div>
              <p className="text-[10px] text-slate-300">Engineering execution, governed code generation</p>
            </div>

          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {products.map((product, i) => (
            <div 
              key={i} 
              className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className="block text-xs font-mono font-bold text-primary/95 uppercase tracking-[0.2em] mb-2.5">
                    {product.category}
                  </span>
                  <h4 className="text-3xl font-extrabold text-primary tracking-tight">
                    {product.name}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-border mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[11px] font-mono font-bold text-primary flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  {product.metric}
                </span>
                <Link 
                  href={`/products#${product.id}`}
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-accent transition-colors group shrink-0"
                >
                  Learn More
                  <svg className="w-4.5 h-4.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
