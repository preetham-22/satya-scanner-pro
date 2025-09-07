import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, AlertTriangle, CheckCircle, Brain, RotateCcw } from "lucide-react";

export const AnalysisApp = () => {
  const [content, setContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!content.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with progressive loading messages
    const loadingMessages = [
      "Analyzing text structure...",
      "Checking for emotional triggers...",
      "Identifying potential sources...",
      "Evaluating credibility markers...",
      "Generating educational breakdown..."
    ];
    
    // Simulate progressive loading
    for (let i = 0; i < loadingMessages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    // Mock analysis results
    const mockResults = {
      trustScore: Math.floor(Math.random() * 40) + 30, // 30-70 range
      bias: ["Appears Neutral", "Slightly Positive", "Political Lean", "Commercial Intent"][Math.floor(Math.random() * 4)],
      summary: "This content contains several characteristics commonly found in misleading information, including emotionally charged language and unverifiable claims.",
      redFlags: [
        "Emotional Language",
        "Unverified Claims", 
        "Urgency Tactics",
        "Missing Sources"
      ].slice(0, Math.floor(Math.random() * 3) + 2),
      educationalBreakdown: `Our analysis reveals several concerning patterns in this content:

**Language Analysis**: The text uses emotionally charged words designed to provoke strong reactions rather than inform. This is a common technique in misinformation to bypass critical thinking.

**Source Verification**: No credible sources or references are provided to support the claims made. Reliable information typically includes verifiable sources.

**Urgency Tactics**: The content creates artificial time pressure ("Share immediately", "Before it's too late") which is designed to prevent fact-checking.

**Critical Thinking Tips**: 
- Always ask "Who benefits from me believing this?"
- Check if the same information is reported by multiple credible news sources
- Look for emotional manipulation rather than factual presentation
- Verify any statistics or claims through official sources`
    };
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const handleReset = () => {
    setContent("");
    setResults(null);
  };

  const getTrustScoreColor = (score: number) => {
    if (score >= 70) return "text-accent";
    if (score >= 50) return "text-warning";
    return "text-destructive";
  };

  const getTrustScoreIcon = (score: number) => {
    if (score >= 70) return CheckCircle;
    return AlertTriangle;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              SatyaCheck 🕵️‍♂️
            </h1>
            <Badge variant="outline" className="text-xs">
              AI-Powered Analysis
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Input Section */}
          <Card className="p-6 shadow-card">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="content" className="text-lg font-semibold text-foreground">
                  Analyze Content for Misinformation
                </label>
                <p className="text-sm text-muted-foreground">
                  Paste any suspicious text, news article, or social media content below
                </p>
              </div>
              
              <Textarea
                id="content"
                placeholder="Paste your WhatsApp forward, news URL, or any suspicious text here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] resize-none text-base"
                disabled={isAnalyzing}
              />
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {content.length} characters
                </span>
                <Button 
                  onClick={handleAnalyze}
                  disabled={!content.trim() || isAnalyzing}
                  size="lg"
                  variant="accent"
                  className="px-8"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Analyze Content
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          {!results && !isAnalyzing && (
            <Card className="p-8 text-center shadow-card">
              <div className="space-y-4 animate-fade-in">
                <Brain className="w-16 h-16 text-muted-foreground mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">
                  Your detailed analysis report will appear here
                </h3>
                <p className="text-muted-foreground">
                  Paste any content above and click "Analyze Content" to get started
                </p>
              </div>
            </Card>
          )}

          {/* Loading State */}
          {isAnalyzing && (
            <Card className="p-8 shadow-card">
              <div className="flex flex-col items-center space-y-6 animate-fade-in">
                <Loader2 className="w-12 h-12 animate-spin text-accent" />
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Analyzing Content...
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI is examining the text for signs of misinformation
                  </p>
                </div>
                <div className="w-full max-w-md bg-secondary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
              </div>
            </Card>
          )}

          {/* Analysis Results */}
          {results && (
            <div className="space-y-6 animate-fade-in">
              {/* Metrics */}
              <Card className="p-6 shadow-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Trust Score</h3>
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      {(() => {
                        const Icon = getTrustScoreIcon(results.trustScore);
                        return <Icon className={`w-8 h-8 ${getTrustScoreColor(results.trustScore)}`} />;
                      })()}
                      <span className={`text-4xl font-bold ${getTrustScoreColor(results.trustScore)}`}>
                        {results.trustScore}/100
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Detected Bias</h3>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {results.bias}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Summary */}
              <Card className="p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Summary</h3>
                <blockquote className="italic text-muted-foreground border-l-4 border-accent pl-4">
                  {results.summary}
                </blockquote>
              </Card>

              {/* Red Flags */}
              <Card className="p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Red Flags Detected</h3>
                <div className="flex flex-wrap gap-2">
                  {results.redFlags.map((flag: string, index: number) => (
                    <Badge 
                      key={index}
                      variant="destructive"
                      className="bg-warning text-warning-foreground hover:bg-warning/90"
                    >
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {flag}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Educational Breakdown */}
              <Card className="p-6 shadow-card bg-info-light border-info/20">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  📚 Educational Breakdown
                </h3>
                <div className="prose max-w-none text-foreground">
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {results.educationalBreakdown}
                  </div>
                </div>
              </Card>

              {/* Reset Button */}
              <div className="text-center">
                <Button 
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start New Analysis
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};