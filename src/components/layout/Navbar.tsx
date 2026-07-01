import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";
import { 
  captureCurrentView, 
  captureFullPage, 
  captureAllViews, 
  captureEntireWebsite 
} from "@/lib/capture";
import logoSrc from "/yny-logo.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Methodology", href: "/methodology" },
    { label: "Consulting", href: "/consulting" },
    { label: "Products", href: "/products" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ];

  const allRoutes = [
    "/", "/methodology", "/products", "/products/paai", "/products/sdlc-factory",
    "/products/legalpa", "/products/aiuniverse", "/products/global-tutor",
    "/about", "/services", "/consulting", "/insights", "/contact"
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={logoSrc}
            alt="YnY Platforms"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-primary leading-none">YnY AI</span>
            <span className="text-[8px] md:text-[9px] font-mono font-bold text-accent uppercase tracking-widest mt-1 opacity-70 whitespace-nowrap">
              Knowledge • Intelligence • Execution
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hide-on-capture">
                <Camera size={16} />
                Capture
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 hide-on-capture">
              <DropdownMenuItem onSelect={() => captureCurrentView()}>
                1. Capture Current View
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => captureAllViews()}>
                2. Capture All Views
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => captureFullPage()}>
                3. Capture Full Page
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => captureEntireWebsite(allRoutes)}>
                4. Capture Entire Website
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 rounded-none hide-on-capture">
            Book a Conversation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary hide-on-capture"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4 hide-on-capture">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-base font-medium py-2 ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-2 pt-2 pb-2 border-y border-border">
            <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <Camera size={16} /> Capture Options
            </span>
            <button onClick={() => { captureCurrentView(); setMobileMenuOpen(false); }} className="text-left text-sm font-medium py-1 text-muted-foreground hover:text-primary">1. Capture Current View</button>
            <button onClick={() => { captureAllViews(); setMobileMenuOpen(false); }} className="text-left text-sm font-medium py-1 text-muted-foreground hover:text-primary">2. Capture All Views</button>
            <button onClick={() => { captureFullPage(); setMobileMenuOpen(false); }} className="text-left text-sm font-medium py-1 text-muted-foreground hover:text-primary">3. Capture Full Page</button>
            <button onClick={() => { captureEntireWebsite(allRoutes); setMobileMenuOpen(false); }} className="text-left text-sm font-medium py-1 text-muted-foreground hover:text-primary">4. Capture Entire Website</button>
          </div>

          <Link 
            href="/contact" 
            className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Conversation
          </Link>
        </div>
      )}
    </header>
  );
}