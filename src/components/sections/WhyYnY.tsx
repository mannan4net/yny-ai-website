import { motion } from "framer-motion";

export function WhyYnY() {
  const cards = [
    {
      title: "Architectural Oversight",
      desc: "Founder-led review on every platform deployment, ensuring long-term system stability and compliance."
    },
    {
      title: "Zero Vendor Lock-In",
      desc: "Platforms built on open standards, fully supporting self-hosted deployment and cloud portability."
    },
    {
      title: "Rigorous Compliance",
      desc: "Architected to align natively with GDPR, HIPAA, and Indian data sovereignty regulations."
    },
    {
      title: "Integration Native",
      desc: "Engineered to connect directly to your existing cloud configurations and relational database schemas."
    },
    {
      title: "Outcome Driven",
      desc: "System deployments evaluated and prioritized based on measurable business-value metrics."
    },
    {
      title: "Platform Modernization",
      desc: "Continuous software updates tracking the latest developments in AI and platform engineering research."
    }
  ];

  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dominant Vision Block */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-2 py-0.5 bg-muted border border-border">
                Strategic Vision
              </span>
              <h3 className="text-3xl font-bold text-primary tracking-tight mt-3">
                Why Organizations Partner With Us
              </h3>
              <div className="w-20 h-1 bg-primary mt-4"></div>
            </div>

            <div className="border-l-4 border-primary pl-8 py-4 space-y-6">
              <p className="text-lg md:text-xl font-bold text-primary leading-relaxed">
                "We believe organizations should be able to access knowledge, make decisions, and execute work faster through trustworthy AI systems."
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                YnY is building a portfolio of platforms that connect knowledge, intelligence, and execution into a unified enterprise ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 6 Trust Cards Grid */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-primary mb-2">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

