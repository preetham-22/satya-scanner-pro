import { useState } from "react";
import { LandingPage } from "@/components/landing/LandingPage";
import { AnalysisApp } from "@/components/analysis/AnalysisApp";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"landing" | "app">("landing");

  const navigateToApp = () => {
    setCurrentPage("app");
  };

  const navigateToLanding = () => {
    setCurrentPage("landing");
  };

  if (currentPage === "app") {
    return <AnalysisApp />;
  }

  return <LandingPage onNavigateToApp={navigateToApp} />;
};

export default Index;
