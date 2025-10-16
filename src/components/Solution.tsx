import { CheckCircle2 } from "lucide-react";

const Solution = () => {
  const solutions = [
    "Industry-relevant curriculum designed by tech leaders",
    "Live coding sessions with expert instructors",
    "Real-world projects for your portfolio",
    "One-on-one mentorship and career guidance",
    "Job placement support and interview prep",
    "Lifetime access to course materials and updates",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Your Path to a <span className="gradient-text">Successful Tech Career</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We bridge the gap between education and employment with practical, 
              career-focused learning that gets results.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-medium transition-smooth"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">{solution}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 gradient-primary rounded-2xl text-center shadow-large">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 10,000+ Students Building Their Dream Careers
            </h3>
            <p className="text-white/90 text-lg">
              Start learning today and transform your future with skills that employers actually need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
