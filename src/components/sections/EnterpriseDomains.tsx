import { motion } from "framer-motion";

export function EnterpriseDomains() {
  const domains = [
    {
      title: "Legal Intelligence",
      description: "Navigating complex Indian and international legal frameworks. Transforming statutes, case records, and regulatory archives into queryable, citation-linked legal assets.",
      focus: "Statutory Search • Citation Analysis • Legal Workflows"
    },
    {
      title: "Enterprise Knowledge Management",
      description: "Bridging communication silos across fragmented legacy databases and applications. Unifying institutional memory and providing semantic search for executive decision support.",
      focus: "Cross-System Retrieval • Semantic Memory • Executive Briefings"
    },
    {
      title: "AI Transformation",
      description: "Guiding organizations through responsible adoption of machine learning. Implementing role-based access controls (RBAC) and data sovereignty checkpoints for governed systems.",
      focus: "Responsible AI • Governance Frameworks • Custom LLM RAG"
    },
    {
      title: "Software Engineering Excellence",
      description: "Industrializing the software development lifecycle. Translating product intent and system requirements directly into governed, auditable, and production-ready source assets.",
      focus: "Lifecycle Automation • Architecture Consistency • Asset Traceability"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Focus Areas
          </h2>
          <h3 className="text-3xl font-bold text-primary tracking-tight">
            Enterprise Domains We Serve
          </h3>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {domains.map((dom, i) => (
            <div 
              key={i} 
              className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {dom.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {dom.description}
                </p>
              </div>
              <div className="pt-4 border-t border-border mt-auto">
                <span className="text-xs font-mono font-bold text-accent tracking-wide uppercase">
                  {dom.focus}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
