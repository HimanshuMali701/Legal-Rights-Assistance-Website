import { DollarSign, Ban, ShieldAlert, HeartOff, Clock } from "lucide-react";

const domains = [
  { icon: DollarSign, title: "Salary Delay", color: "bg-secondary" },
  { icon: Ban, title: "Unfair Termination", color: "bg-primary" },
  { icon: ShieldAlert, title: "Workplace Harassment", color: "bg-secondary" },
  { icon: HeartOff, title: "Denial of Benefits", color: "bg-primary" },
  { icon: Clock, title: "Overtime Violation", color: "bg-secondary" },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Coverage</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Supported Legal Domains
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Our AI is trained to handle the most common workplace legal issues employees face.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {domains.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 rounded-full px-6 py-3 bg-card border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up animate-fade-up-delay-${Math.min(i, 3)}`}
            >
              <div className={`h-10 w-10 rounded-full ${item.color} flex items-center justify-center`}>
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-foreground">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
