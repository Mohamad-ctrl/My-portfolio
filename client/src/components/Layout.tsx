import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl border-2 border-transparent group-hover:border-accent transition-colors">
              M
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase hidden sm:inline-block">
              Mohamad Sharif
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent hover:underline decoration-2 underline-offset-4",
                  location === item.path ? "text-accent underline" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-[2px] bg-border mx-2"></div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Mohamad-cntrl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-transparent hover:border-border"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamad-sharif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-transparent hover:border-border"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            className="md:hidden h-10 w-10 p-0 border-2 border-transparent hover:border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden pt-20 px-6 animate-in slide-in-from-top-10 duration-200">
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-2xl font-bold uppercase tracking-widest py-4 border-b-2 border-border/10 hover:text-accent hover:border-accent transition-colors",
                  location === item.path ? "text-accent border-accent" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/Mohamad-cntrl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamad-sharif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohammadalsharif03@gmail.com"
                className="p-4 border-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-muted/30 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-lg uppercase tracking-tighter">Mohamad Sharif</span>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} // Built with React & Tailwind
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:mohammadalsharif03@gmail.com" className="text-sm font-mono hover:text-accent hover:underline decoration-2 underline-offset-4">
              mohammadalsharif03@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
