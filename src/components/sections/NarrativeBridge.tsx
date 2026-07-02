import { motion } from "framer-motion";

export function NarrativeBridge() {
  return (
    <section className="py-24 bg-muted border-b border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="mx-auto w-12 h-1 bg-accent mb-8"></div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight tracking-tight">
            Over two decades of enterprise architecture revealed the same foundational problems across industries.
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Rather than redesigning the same architectural foundations for every engagement, reusable enterprise platforms were engineered. The products presented below are the practical implementation of those architectural foundations.
          </p>
          
          <div className="mx-auto w-12 h-1 bg-accent mt-8"></div>
        </motion.div>
      </div>
    </section>
  );
}
