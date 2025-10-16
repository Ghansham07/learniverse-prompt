import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start Learning Today –{" "}
              <span className="gradient-text">Enroll Now</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your career with industry-leading courses, expert mentorship, 
              and hands-on projects. Your future in tech starts here.
            </p>
            <Button 
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-large text-lg px-10 py-7"
              onClick={scrollToForm}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">EduMaster</h3>
              <p className="text-sm text-muted-foreground">
                Empowering the next generation of tech professionals with world-class education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-smooth cursor-pointer">Web Development</li>
                <li className="hover:text-primary transition-smooth cursor-pointer">Data Science</li>
                <li className="hover:text-primary transition-smooth cursor-pointer">All Courses</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-smooth cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-smooth cursor-pointer">Careers</li>
                <li className="hover:text-primary transition-smooth cursor-pointer">Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-smooth cursor-pointer">Privacy Policy</li>
                <li className="hover:text-primary transition-smooth cursor-pointer">Terms of Service</li>
                <li className="hover:text-primary transition-smooth cursor-pointer">Refund Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EduMaster. All rights reserved. Building futures, one student at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
