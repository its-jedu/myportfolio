"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
    // Smooth scroll handled by browser for anchor links
  };

  return (
    <nav className="fixed top-0 w-full glassmorphism z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center">
        <div className="text-lg md:text-xl font-bold">
          <span className="text-blue-500">Adebanjo</span>
          <span className="text-zinc-300">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-zinc-400 hover:text-blue-400 transition-colors text-sm lg:text-base"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <Link href="/OlajideCV..pdf" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm lg:text-base min-h-[44px]">
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-zinc-400 hover:text-blue-400 hover:bg-zinc-800/50 rounded-lg transition-colors min-h-[44px] flex items-center"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <Link href="/OlajideCV..pdf" target="_blank" className="block" onClick={handleNavClick}>
              <Button className="w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 mt-2">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}