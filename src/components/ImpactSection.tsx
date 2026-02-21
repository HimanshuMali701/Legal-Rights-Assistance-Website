import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactSection = () => {
  return (
    <section className="py-20 md:py-28 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Empowering Employees Through{" "}
          <span className="text-gradient">Access to Justice</span>
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          We believe every employee deserves to understand their workplace rights. By combining AI with verified legal knowledge, we're breaking down barriers to legal literacy and empowering workers to take informed, confident action against workplace violations.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="https://legal-rights-assistance.streamlit.app/" target="_blank" rel="noopener noreferrer">
            Get Started Now <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ImpactSection;
