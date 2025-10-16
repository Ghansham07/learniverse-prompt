import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer at Google",
      content: "EduMaster transformed my career. The hands-on projects and mentorship helped me land my dream job at Google within 3 months of completing the course.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Scientist at Amazon",
      content: "The Data Science program is incredibly comprehensive. Real-world projects and expert guidance gave me the confidence to transition into tech successfully.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Frontend Developer at Microsoft",
      content: "Best investment in my career! The curriculum is up-to-date, instructors are top-notch, and the career support is exceptional. Highly recommended!",
      rating: 5,
    },
  ];

  const partners = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Success Stories from Our <span className="gradient-text">Students</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who've transformed their careers with EduMaster
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:shadow-large transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hiring Partners */}
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Trusted by Leading Companies</h3>
            <p className="text-muted-foreground">Our students work at top tech companies worldwide</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-smooth"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
