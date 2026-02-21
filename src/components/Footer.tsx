import { Scale, Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-muted" />
            <span className="font-display font-bold text-muted text-sm">Legal Rights Assistant</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Made by Himanshu · AI-Powered Legal Guidance Platform
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:himanshu.mali701@gmail.com"
              className="text-muted-foreground hover:text-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/HimanshuMali701"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
             </a> 
            <a
              href="https://www.linkedin.com/in/himanshu-mali701/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              </a>  
            
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Legal Rights Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
