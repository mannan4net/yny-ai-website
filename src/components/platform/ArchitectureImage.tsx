import React, { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";

interface ArchitectureImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ArchitectureImage({ src, alt, className = "" }: ArchitectureImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div 
        className={`relative group cursor-zoom-in border border-slate-200 bg-white p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
        />
        {/* Subtle expand indicator icon in bottom right */}
        <div className="absolute bottom-4 right-4 bg-slate-900/60 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 size={16} />
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close full view"
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            />
            {alt && (
              <div 
                className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-center text-white/80 text-sm font-medium tracking-wide bg-black/50 px-4 py-1.5 rounded-full"
                onClick={(e) => e.stopPropagation()}
              >
                {alt}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
