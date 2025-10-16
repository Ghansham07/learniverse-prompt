import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <Testimonials />
      <TrustSignals />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
