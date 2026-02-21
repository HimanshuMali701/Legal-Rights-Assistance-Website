import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-secondary" />
          <span className="font-display font-bold text-lg text-foreground">Legal Rights Assistant</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#domains" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Domains</a>
          <Button size="sm" asChild>
            <a href="https://legal-rights-assistance.streamlit.app/" target="_blank" rel="noopener noreferrer">Ask Your Query</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#how-it-works" className="text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#features" className="text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#domains" className="text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Domains</a>
          <Button size="sm" asChild>
            <a href="https://YOUR-STREAMLIT-LINK.streamlit.app" target="_blank" rel="noopener noreferrer">Ask Your Query</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
