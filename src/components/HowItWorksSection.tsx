import { MessageSquare, BookOpen, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe Your Issue",
    description: "Explain your workplace problem in simple, everyday language. No legal jargon required.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Law Identification",
    description: "Our system maps your issue to relevant employment laws from verified legal sources.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Action Steps",
    description: "Receive structured guidance, complaint drafts, and links to official portals.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Three Simple Steps to Legal Clarity
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20" />

          {steps.map((item, i) => (
            <div key={item.step} className={`relative text-center animate-fade-up animate-fade-up-delay-${i}`}>
              <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary text-primary-foreground mb-6 mx-auto shadow-lg shadow-primary/20">
                <item.icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
