import { Brain, BookMarked, ListChecks, Mail, ExternalLink, Gauge } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Issue Classification",
    description: "AI analyzes your problem and categorizes it under the right legal domain automatically.",
  },
  {
    icon: BookMarked,
    title: "Law Mapping",
    description: "Maps your issue to relevant employment laws from verified and up-to-date legal sources.",
  },
  {
    icon: ListChecks,
    title: "Step-by-Step Guidance",
    description: "Clear, actionable steps tailored to your specific workplace situation.",
  },
  {
    icon: Mail,
    title: "Complaint Draft Generation",
    description: "Auto-generates professional complaint emails ready to send to your employer or authorities.",
  },
  {
    icon: ExternalLink,
    title: "Official Portal Links",
    description: "Direct links to government complaint portals and relevant regulatory bodies.",
  },
  {
    icon: Gauge,
    title: "Confidence Scoring",
    description: "Transparent confidence levels so you understand the strength of your legal position.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Everything You Need to Take Action
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="group glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-4 transition-colors">
                <item.icon className="h-5 w-5 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
