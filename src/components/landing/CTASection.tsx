import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onNavigateToApp: () => void;
}

export const CTASection = ({ onNavigateToApp }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Safer Digital India{" "}
              <span className="text-accent-foreground">Starts with You.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Take the first step. Analyze a message and see the truth for yourself.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                variant="accent"
                onClick={onNavigateToApp}
                className="text-lg px-10 py-4 bg-white text-primary hover:bg-white/90 shadow-elevated hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Launch SatyaCheck for Free 🚀
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 pt-8 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm">100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm">No Registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};