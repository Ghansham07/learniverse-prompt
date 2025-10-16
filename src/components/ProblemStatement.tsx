import { AlertCircle } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Challenge Most Students Face
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Traditional education often falls short in preparing students for real-world tech careers. 
            Theory-heavy courses lack practical application, leaving graduates struggling to land their 
            first job. Without mentorship and hands-on projects, building a strong portfolio becomes nearly impossible.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-background rounded-xl shadow-soft">
              <div className="text-4xl font-bold text-destructive mb-2">70%</div>
              <p className="text-sm text-muted-foreground">
                Feel unprepared for job market
              </p>
            </div>
            
            <div className="p-6 bg-background rounded-xl shadow-soft">
              <div className="text-4xl font-bold text-destructive mb-2">85%</div>
              <p className="text-sm text-muted-foreground">
                Lack practical experience
              </p>
            </div>
            
            <div className="p-6 bg-background rounded-xl shadow-soft">
              <div className="text-4xl font-bold text-destructive mb-2">60%</div>
              <p className="text-sm text-muted-foreground">
                Struggle with portfolio building
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
