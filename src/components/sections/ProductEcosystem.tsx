import { motion } from "framer-motion";
import { Link } from "wouter";
import { Database, Layers, Scale, Eye, Wrench, Shield, ChevronDown, Check, BookOpen } from "lucide-react";

export function ProductEcosystem() {
  const products = [
    {
      id: "paai",
      name: "PAAI",
      category: "ENTERPRISE KNOWLEDGE",
      description: "Enterprise knowledge retrieval and AI workspace connecting legacy platforms and database records into a single intelligent memory.",
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
    },
    {
      id: "global-tutor",
      name: "Global Tutor",
      category: "LEARNING ECOSYSTEM",
      description: "AI-powered learning, tutoring, assessment, and skill development platform.",
      metric: "Intelligent learning and assessment orchestration"
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

        {/* Simple Ecosystem Portfolio Diagram */}
        <motion.div 
          className="mb-16 border border-border bg-muted/20 p-8 md:p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">
              The YnY Enterprise Intelligence Suite
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Products are engineered to operate as a cohesive platform portfolio, bridging organizational knowledge and engineering execution.
            </p>
          </div>

          {/* Simple Interconnected Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto relative pt-4">
            
            {/* PAAI */}
            <div className="p-6 border border-border bg-white shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-muted text-primary rounded-full">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">ENTERPRISE KNOWLEDGE</h5>
                <h6 className="text-base font-extrabold text-primary tracking-tight mt-1">PAAI</h6>
              </div>
            </div>

            {/* LegalPA */}
            <div className="p-6 border border-border bg-white shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-muted text-primary rounded-full">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">LEGAL INTELLIGENCE</h5>
                <h6 className="text-base font-extrabold text-primary tracking-tight mt-1">LegalPA</h6>
              </div>
            </div>

            {/* AIUniverse */}
            <div className="p-6 border border-border bg-white shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-muted text-primary rounded-full">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">AI INTELLIGENCE</h5>
                <h6 className="text-base font-extrabold text-primary tracking-tight mt-1">AIUniverse</h6>
              </div>
            </div>

            {/* SDLC Factory */}
            <div className="p-6 border border-border bg-white shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-muted text-primary rounded-full">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">ENGINEERING EXECUTION</h5>
                <h6 className="text-base font-extrabold text-primary tracking-tight mt-1">SDLC Factory</h6>
              </div>
            </div>

            {/* Global Tutor */}
            <div className="p-6 border border-border bg-white shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-muted text-primary rounded-full">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">LEARNING ECOSYSTEM</h5>
                <h6 className="text-base font-extrabold text-primary tracking-tight mt-1">Global Tutor</h6>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              
              <div className="pt-6 border-t border-border mt-auto flex flex-col gap-3">
                <Link 
                  href={`/products/${product.id}`}
                  className="inline-flex items-center justify-center w-full h-10 bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-colors focus:outline-none text-xs tracking-wide"
                >
                  Explore Platform
                </Link>
                <Link 
                  href={`/products/${product.id}#architecture`}
                  className="inline-flex items-center justify-center w-full h-10 bg-white border border-border text-primary font-semibold hover:bg-muted transition-colors focus:outline-none text-xs tracking-wide"
                >
                  Review Architecture
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
