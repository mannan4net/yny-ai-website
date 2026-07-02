import { motion } from "framer-motion";

export function EnterpriseReality() {
  const challenges = [
    {
      title: "Fragmented Knowledge",
      desc: "Critical business logic, domain expertise, and operational data are siloed across disparate departments and legacy systems."
    },
    {
      title: "Disconnected Systems",
      desc: "Enterprise architecture often consists of disjointed applications, making seamless integration and data flow inherently difficult."
    },
    {
      title: "Loss of Institutional Memory",
      desc: "As experienced personnel transition, undocumented processes and deep technical knowledge leave the organization."
    },
    {
      title: "Governance Complexity",
      desc: "Adopting modern technologies introduces significant risks related to data sovereignty, compliance, and strict access controls."
    },
    {
      title: "Enterprise AI Friction",
      desc: "Bridging the gap between conceptual AI capabilities and practical, secure, governed enterprise deployment remains a significant challenge."
    },
    {
      title: "Information Overload",
      desc: "Teams spend excessive time searching for context and verifying information rather than executing high-value strategic work."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-2 py-0.5 bg-muted border border-border">
                The Environment
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mt-4 leading-tight">
                The Modern Enterprise Reality
              </h3>
              <div className="w-16 h-1 bg-primary mt-6"></div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
              Organizations operate in increasingly complex environments. Resolving these challenges requires architectural discipline before software implementation.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {challenges.map((challenge, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-base font-bold text-primary flex items-center gap-2">
                  <span className="text-accent font-mono text-xs">{(index + 1).toString().padStart(2, '0')} //</span>
                  {challenge.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
