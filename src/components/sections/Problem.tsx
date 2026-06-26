import { motion } from "framer-motion";

export function Problem() {
  const challenges = [
    {
      title: "Fragmented Legal Knowledge",
      description: "Legal research remains highly inefficient. Statutes, amendments, regulations, and judicial case laws are fragmented across dozens of disconnected platforms, creating significant compliance risks."
    },
    {
      title: "Isolated Institutional Knowledge",
      description: "Organizations remain unable to tap into their own intellectual capital. Decades of institutional knowledge, documentation, legacy database records, and chat history stay trapped in silos."
    },
    {
      title: "Ungoverned AI Adoption",
      description: "Adopting AI tools without strict access controls, semantic boundaries, and compliance guardrails compromises proprietary information, resulting in lack of trust and security."
    },
    {
      title: "Sluggish Software Delivery",
      description: "Despite powerful modern developer tooling, software delivery remains slow due to fragmented business requirements, inconsistent architectural definitions, and poor end-to-end asset traceability."
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
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
            The Challenge
          </h2>
          <h3 className="text-3xl font-bold text-primary tracking-tight">
            The Modern Knowledge Problem
          </h3>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {challenges.map((challenge, i) => (
            <div 
              key={i} 
              className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-mono font-bold text-accent uppercase tracking-widest mb-4">
                  [CHALLENGE 0{i + 1}]
                </span>
                <h4 className="text-lg font-bold text-primary mb-3">
                  {challenge.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
