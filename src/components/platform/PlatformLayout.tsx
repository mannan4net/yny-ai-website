import React, { ReactNode, useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface PlatformLayoutProps {
  children: ReactNode;
  breadcrumb?: string;
  breadcrumbHref?: string;
}

export function PlatformLayout({ children, breadcrumb = "All Products", breadcrumbHref = "/products" }: PlatformLayoutProps) {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "business-value", label: "Business Value" },
    { id: "capabilities", label: "Capabilities" },
    { id: "architecture", label: "Architecture" },
    { id: "use-cases", label: "Use Cases" },
    { id: "roadmap", label: "Roadmap" }
  ];

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // Adjust to trigger when section is in upper third
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Platform Sub-navigation */}
      <div className="border-b border-border bg-slate-50 sticky top-20 z-40 hidden md:block">
        <div className="container mx-auto px-6 h-12 flex items-center justify-between">
          <Link href={breadcrumbHref} className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to {breadcrumb}
          </Link>
          <div className="flex space-x-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === s.id ? "text-primary border-b-2 border-primary h-12" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Mobile Table of Contents (Sticky) */}
          <div className="lg:hidden sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-border -mx-6 px-6 flex overflow-x-auto gap-4 no-scrollbar">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-full transition-colors ${
                  activeSection === s.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Sticky Sidebar for Desktop */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-40 space-y-2 border-l border-border pl-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">On This Page</h4>
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`block text-left w-full text-sm font-medium py-1.5 transition-all ${
                    activeSection === s.id ? "text-primary translate-x-1" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-24 pb-24">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
