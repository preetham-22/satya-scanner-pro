import { Clipboard, Brain, FileCheck } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Clipboard,
      title: "1. Paste Anything",
      description: "Copy any suspicious text—a WhatsApp forward, a social media post, or a news article URL—and paste it into our tool."
    },
    {
      icon: Brain,
      title: "2. Analyze with AI",
      description: "Our advanced AI, powered by Google's Gemini, reads the content in seconds. It checks for emotional language, unverifiable claims, logical fallacies, and other red flags."
    },
    {
      icon: FileCheck,
      title: "3. Understand the 'Why'",
      description: "Receive an instant, easy-to-read report. We don't just give you a score; we give you an educational breakdown so you can learn to spot misinformation yourself."
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three Simple Steps to Certainty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SatyaCheck makes it easy to verify any content you encounter online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-card group-hover:animate-pulse-glow transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-20 w-24 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};