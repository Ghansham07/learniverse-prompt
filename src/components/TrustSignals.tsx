import { Shield, Award, RefreshCw } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "256-bit SSL encryption for all transactions",
    },
    {
      icon: Award,
      title: "Certified by Experts",
      description: "Industry-recognized certification upon completion",
    },
    {
      icon: RefreshCw,
      title: "Money-Back Guarantee",
      description: "30-day full refund if you're not satisfied",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-background rounded-xl shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <signal.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{signal.title}</h4>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
