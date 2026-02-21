import { AlertTriangle, Clock, Ban, ShieldOff, DollarSign } from "lucide-react";

const problems = [
  { icon: DollarSign, label: "Salary delays" },
  { icon: Ban, label: "Unfair termination" },
  { icon: ShieldOff, label: "Workplace harassment" },
  { icon: AlertTriangle, label: "Denial of benefits" },
  { icon: Clock, label: "Overtime violations" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-elevated">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Workplace Issues Are Common —{" "}
          <span className="text-gradient">Legal Clarity Is Not</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
          Every day, employees face workplace violations but lack the knowledge and resources to understand their legal options. Navigating employment law shouldn't require a law degree.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {problems.map((item, i) => (
            <div
              key={item.label}
              className={`glass-card rounded-xl p-6 flex flex-col items-center gap-3 animate-fade-up animate-fade-up-delay-${Math.min(i, 3)}`}
            >
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
