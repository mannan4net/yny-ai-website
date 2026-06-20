import { motion } from "framer-motion";

export function WhyYnY() {
  const cards = [
    {
      title: "Deep Enterprise Experience",
      desc: "More than two decades of experience designing enterprise systems, cloud transformations, and digital platforms across highly regulated industries like healthcare, government, and finance."
    },
    {
      title: "Architecture First Thinking",
      desc: "Every engagement begins with a structured architectural assessment. Systemic risks and constraints are identified before writing code, ensuring every technology investment is sound and scalable."
    },
    {
      title: "Practical AI Adoption",
      desc: "Focusing on building pragmatic, production-grade AI solutions that solve real business problems, rather than chasing generic industry hype."
    },
    {
      title: "Product Mindset",
      desc: "Solutions are approached from a product development perspective, balancing long-term engineering rigor with near-term delivery needs."
    },
    {
      title: "Scalable Solutions",
      desc: "Engineering and platform standards are built to scale from day one, establishing standardized environments that increase developer productivity."
    },
    {
      title: "Long-Term Technology Vision",
      desc: "Helping organizations build durable system foundations and modernization roadmaps that align with business growth and enable agility."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-primary">Why Organizations Work With Abdul Mannan</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organizations work with Abdul Mannan because of the unique combination of enterprise architecture discipline, practical AI strategy, and hands-on product building expertise.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, index) => (
              <div key={index} className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
