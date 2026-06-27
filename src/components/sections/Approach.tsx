import { motion } from "framer-motion";
import { Layers, BookOpen, ShieldCheck, Cpu } from "lucide-react";

export function Approach() {
  const pillars = [
    {
      icon: Layers,
      title: "Architecture First",
      description: "AI must sit on strong structural foundations. The engineering approach prioritizes high-availability schemas, structured data mapping, and standard integration topologies over hasty feature generation."
    },
    {
      icon: BookOpen,
      title: "Knowledge Before Automation",
      description: "Bad knowledge produces bad AI. Systems are engineered to curate, refine, and index clean corporate context before deploying generative automation agents."
    },
    {
      icon: ShieldCheck,
      title: "Governance By Design",
      description: "Security and access control are built directly into YnY AI platforms from day one. Data routing, user credentials, and auditing checkpoints are engineered natively, not bolted on."
    },
    {
      icon: Cpu,
      title: "Practical Innovation",
      description: "Engineering focus is centered on solving real operational problems with tangible outcomes. Production-grade reliability and low latency are prioritized over marketing buzzwords and speculative use cases."
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
            Core Principles
          </h2>
          <h3 className="text-3xl font-bold text-primary tracking-tight">
            Engineering Philosophy
          </h3>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className="p-6 flex flex-col items-start space-y-4"
              >
                <div className="p-3 bg-muted text-primary border border-border">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-primary">
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
