import { Link } from "wouter";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-16 bg-primary text-center">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Discuss Your Enterprise Architecture
          </h2>
          <p className="text-base text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're exploring legal intelligence, enterprise AI, knowledge retrieval, or software acceleration, we'd love to understand your challenges.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 bg-white text-primary font-bold hover:bg-muted transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded-none"
              data-testid="link-contact-cta"
            >
              Schedule an Architecture Discussion
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

