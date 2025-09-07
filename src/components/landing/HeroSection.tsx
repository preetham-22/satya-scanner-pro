import { Button } from "@/components/ui/button";
import heroAnimation from "@/assets/hero-animation.jpg";

interface HeroSectionProps {
  onNavigateToApp: () => void;
}

export const HeroSection = ({ onNavigateToApp }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Navigate the Noise.{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Find the Truth.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  SatyaCheck is a free AI tool for the Indian digital community. Instantly analyze news articles and social media messages to detect misinformation, scams, and manipulation before you trust or share.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  variant="accent"
                  onClick={onNavigateToApp}
                  className="text-lg px-8 py-4 shadow-elevated hover:shadow-card transition-all duration-300 animate-pulse-glow"
                >
                  Launch SatyaCheck Tool 🕵️‍♂️
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Right column - Hero image */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in">
              <div className="relative">
                <img 
                  src={heroAnimation} 
                  alt="Tangled lines resolving into clarity - representing SatyaCheck's mission to bring truth from chaos"
                  className="w-full max-w-lg h-auto rounded-2xl shadow-elevated"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};