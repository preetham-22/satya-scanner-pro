export const FooterSection = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                SatyaCheck 🕵️‍♂️
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Empowering India with the tools to navigate digital misinformation and build a more informed society.
              </p>
            </div>
            
            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Learn More</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    About SatyaCheck
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    Digital Literacy Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="space-y-2 text-sm">
                <p className="text-primary-foreground/80">
                  Building a safer digital India, one analysis at a time.
                </p>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:support@satyacheck.in" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    support@satyacheck.in
                  </a>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 SatyaCheck. Made with ❤️ for a more informed India. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};