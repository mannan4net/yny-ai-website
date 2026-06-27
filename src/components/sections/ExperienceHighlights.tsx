import { motion } from "framer-motion";

export function ExperienceHighlights() {
  const cards = [
    {
      metric: "20+",
      label: "Years Experience",
      description: "Proven history of architecture design, engineering leadership, and large-scale platform delivery."
    },
    {
      metric: "National",
      label: "Platforms",
      description: "Architectural contributions to national programs including ABDM health registries, Aarogya Setu, bidding engines, and public payment systems."
    },
    {
      metric: "Enterprise",
      label: "Transformations",
      description: "Leading multi-year, complex modernization and digital transformation efforts for highly regulated organizations."
    },
    {
      metric: "AI & Cloud",
      label: "Systems",
      description: "Migrating core legacy databases, building resilient cloud-native infrastructures, and streamlining DevOps pipelines."
    },
    {
      metric: "Distributed",
      label: "Systems",
      description: "Engineering fault-tolerant, high-performance backends and microservices that scale securely under massive load."
    },
    {
      metric: "Governed",
      label: "Architecture",
      description: "Designing secure systems, access controls, data auditing, and compliance standards built natively."
    }
  ];

  return (
    <section className="py-16 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-2 py-0.5 bg-white border border-border">
            Social Proof & Capability
          </span>
          <h3 className="text-3xl font-bold text-primary tracking-tight mt-3">
            Experience Highlights
          </h3>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Dashboard-style Giant Metrics Layout */}
                <div>
                  <div className="text-4xl font-extrabold text-primary tracking-tight leading-none mb-1">
                    {card.metric}
                  </div>
                  <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {card.label}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
