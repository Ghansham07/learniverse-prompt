import { Code2, Users, Briefcase } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Real Projects",
      description: "Build portfolio-worthy projects with real-world applications. Learn by doing, not just watching.",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Get personalized guidance from industry professionals with years of experience in top tech companies.",
    },
    {
      icon: Briefcase,
      title: "Job Support",
      description: "Access our career services including resume reviews, interview prep, and direct connections to hiring partners.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Choose <span className="gradient-text">EduMaster</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to launch a successful career in tech, all in one platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-large transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-medium">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
