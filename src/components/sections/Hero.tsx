import { Link } from "wouter";
import { motion } from "framer-motion";

export function Hero() {

  return (
    <section className="relative overflow-hidden bg-white min-h-[75vh] lg:min-h-[85vh] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-border">
      {/* Abstract geometric background with architectural grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Brand Copy & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.05] max-w-3xl">
                <span className="block text-primary">Knowledge.</span>
                <span className="block text-primary">Intelligence.</span>
                <span className="block text-primary">Execution.</span>
                <span className="block text-accent/80 text-lg md:text-xl lg:text-2xl font-bold tracking-tight mt-6 leading-relaxed">
                  Enterprise AI Platforms Built on Real Architecture Experience.
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              YnY AI builds practical AI, legal intelligence, and engineering platforms backed by deep enterprise architecture experience across national e-health systems, payment reconciliation platforms, and large-scale digital transformations.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/products"
                className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-none shadow-sm"
                data-testid="link-products-hero"
              >
                Explore Platforms
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-white border border-border text-primary font-semibold hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-none shadow-sm"
                data-testid="link-contact-hero"
              >
                Talk to Us
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Enterprise Architecture Illustration */}
          <motion.div 
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full aspect-square border border-border p-6 bg-white shadow-sm flex items-center justify-center relative select-none">
              <img
                src="/images/architecture/KIEHomePageImage.png"
                alt="YnY AI Enterprise Architecture"
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}


