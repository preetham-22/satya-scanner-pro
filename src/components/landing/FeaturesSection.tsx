import { Shield, AlertTriangle, GraduationCap, Eye } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Instant Trust Score",
      description: "Provides an at-a-glance credibility rating from 0 to 100, helping you make a quick initial judgment."
    },
    {
      icon: AlertTriangle,
      title: "Red Flag Detection",
      description: "Our AI is trained to identify specific manipulation techniques, such as Urgency Tactics, Ad Hominem attacks, and the use of loaded language. We show you exactly which tactics are being used."
    },
    {
      icon: GraduationCap,
      title: "The Educational Breakdown",
      description: "This is the core of SatyaCheck. We provide a detailed but simple explanation of the red flags found. This feature is designed to empower you with the critical thinking skills needed to navigate the modern internet safely."
    },
    {
      icon: Eye,
      title: "Uncover Hidden Bias",
      description: "The tool analyzes the tone and framing of the text to identify potential political, commercial, or other forms of bias, helping you see the bigger picture."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Personal Digital Literacy Coach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered features designed to educate and protect you from misinformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-1 border border-border/50 hover:border-accent/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center shadow-card group-hover:shadow-elevated group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
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