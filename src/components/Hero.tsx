import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Bhanu Macharla
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Building scalable web applications at <span className="text-primary font-semibold">BINTIX</span>. 
              IIT Patna graduate passionate about creating exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/macharlabhanu169"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/macharlabhanu169"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:macharlabhanu169@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src={profileImage}
                alt="Bhanu Macharla"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover object-center rounded-full border-4 border-primary/30 shadow-2xl glow-effect image-rendering-crisp"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
