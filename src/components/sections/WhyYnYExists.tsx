import { motion } from "framer-motion";

export function WhyYnYExists() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-mono font-bold text-accent uppercase tracking-widest px-3 py-1 bg-muted border border-border">
            Enterprise Architecture
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight md:leading-[1.15] tracking-tight">
            YnY is an Enterprise AI Architecture company built upon more than two decades of enterprise architecture experience, designing intelligent platforms for enterprise knowledge, legal operations, software engineering, education, and business intelligence.
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mt-12 opacity-80"></div>
        </motion.div>
      </div>
    </section>
  );
}
