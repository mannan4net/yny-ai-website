import { Link } from "wouter";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-32 bg-primary text-center">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Need guidance on architecture, AI adoption or digital transformation?</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Let's discuss your goals and identify the right strategy for your organization.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-16 px-12 bg-white text-primary font-bold text-lg hover:bg-muted transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            data-testid="link-contact-cta"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
