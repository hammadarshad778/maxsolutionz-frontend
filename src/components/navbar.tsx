"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/faq', label: 'FAQs' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
      >
        <div className="w-full max-w-screen-2xl bg-background/70 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/20 rounded-full px-4 md:px-6 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/logo.png" 
              alt="MaxSolutionz Logo" 
              width={150} 
              height={40} 
              className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform"
              style={{ width: 'auto' }}
            />
          </Link>
          
          <div className="hidden md:flex gap-1 items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors hover:text-primary rounded-full ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild className="rounded-full border-white/20 hover:bg-white/10 text-white transition-all duration-300">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild className="rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-2 mt-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-bold py-4 border-b border-white/5 transition-colors ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 mt-8">
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild 
                  className="rounded-xl h-14 text-lg w-full border-white/20 text-white hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  asChild 
                  className="rounded-xl h-14 text-lg w-full bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
