import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success! 🎉",
      description: "We'll be in touch soon with course details and next steps.",
    });
    
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <section id="lead-form" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Start Learning?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get you started on your journey to a tech career.
            </p>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="p-8 bg-card rounded-2xl shadow-large border border-border animate-fade-in-up"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="course">Select Course</Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                >
                  <SelectTrigger id="course" className="h-12">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="both">Both Courses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-medium h-14 text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-center text-muted-foreground">
                By enrolling, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
