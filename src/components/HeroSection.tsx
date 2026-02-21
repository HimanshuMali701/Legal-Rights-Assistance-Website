import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-primary-foreground/80">AI-Powered Legal Guidance</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              AI Legal Assistant for{" "}
              <span className="text-gradient">Workplace Rights</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 leading-relaxed">
              Understand your legal rights. Take action with confidence. Get structured guidance on employment law issues in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://legal-rights-assistance.streamlit.app/" target="_blank" rel="noopener noreferrer">
                  Ask Your Query <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-2 hidden md:block">
            <img
              src={heroImage}
              alt="AI Legal Assistant illustration"
              className="w-full rounded-2xl shadow-2xl shadow-secondary/10"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
