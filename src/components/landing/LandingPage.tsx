import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { FeaturesSection } from "./FeaturesSection";
import { CTASection } from "./CTASection";
import { FooterSection } from "./FooterSection";

interface LandingPageProps {
  onNavigateToApp: () => void;
}

export const LandingPage = ({ onNavigateToApp }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection onNavigateToApp={onNavigateToApp} />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection onNavigateToApp={onNavigateToApp} />
      <FooterSection />
    </div>
  );
};