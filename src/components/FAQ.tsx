import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What prerequisites do I need for these courses?",
      answer: "No prior coding experience is required for our Web Development course. For Data Science, basic programming knowledge is helpful but not mandatory. We start from fundamentals and progress gradually.",
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Both courses are self-paced. On average, students complete Web Development in 4-6 months and Data Science in 5-7 months, studying 10-15 hours per week. You have lifetime access, so learn at your own pace.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer: "Yes! You'll receive an industry-recognized certificate of completion that you can add to your LinkedIn profile and resume. Our certificates are valued by top tech companies.",
    },
    {
      question: "What kind of job support do you provide?",
      answer: "Our career services include resume reviews, portfolio guidance, mock interviews, and direct introductions to our hiring partners. We also provide ongoing mentorship even after course completion.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, we'll provide a full refund—no questions asked.",
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices. Learn anywhere, anytime.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our courses and learning platform
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
