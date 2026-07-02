import React, { ReactNode, useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Home, 
  TrendingUp, 
  Grid3X3, 
  Network, 
  Briefcase, 
  Route 
} from "lucide-react";

interface PlatformLayoutProps {
  children: ReactNode;
  breadcrumb?: string;
  breadcrumbHref?: string;
}

export function PlatformLayout({ children, breadcrumb = "All Products", breadcrumbHref = "/products" }: PlatformLayoutProps) {
  const sections = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "business-value", label: "Business Value", icon: TrendingUp },
    { id: "capabilities", label: "Capabilities", icon: Grid3X3 },
    { id: "architecture", label: "Architecture", icon: Network },
    { id: "use-cases", label: "Use Cases", icon: Briefcase },
    { id: "roadmap", label: "Roadmap", icon: Route }
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
      const headerOffset = 100; // Adjusted offset for single header
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
      {/* Main Content Area */}
      <div className="container mx-auto px-6 pt-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Mobile Table of Contents (Sticky) */}
          <div className="lg:hidden sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-border -mx-6 px-6 flex overflow-x-auto gap-3 no-scrollbar">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`flex items-center gap-2 text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                    isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sticky Sidebar for Desktop */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="sticky top-24 border-l border-border pl-6 flex flex-col">
              {/* Back to Products Link (Desktop) */}
              <Link 
                href={breadcrumbHref} 
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to {breadcrumb}
              </Link>

              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-5">On This Page</h4>
              <div className="space-y-3">
                {sections.map((s) => {
                  const Icon = s.icon;
                  const isActive = activeSection === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`flex items-center gap-2.5 text-left w-full text-sm font-medium py-1.5 transition-all cursor-pointer ${
                        isActive ? "text-primary translate-x-1" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon size={16} strokeWidth={1.5} className="shrink-0" />
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 xl:col-span-10 space-y-24 pb-24">
            {/* Back to Products Link (Mobile Only) */}
            <div className="mb-4 lg:hidden">
              <Link 
                href={breadcrumbHref} 
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to {breadcrumb}
              </Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
