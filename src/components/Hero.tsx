import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Master Future Tech Skills with{" "}
              <span className="gradient-text">Expert-Led Courses</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Build your career with flexible, practical learning from industry experts. 
              Get hands-on experience and real-world projects that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-medium text-base sm:text-lg px-8 py-6"
                onClick={scrollToForm}
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-base sm:text-lg px-8 py-6"
              >
                Explore Courses
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-in relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Students learning on laptop with modern workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
