import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%/0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(199_89%_48%/0.1),_transparent_50%)]" />

      {/* Floating orbs */}
      <div className="floating-orb w-72 h-72 bg-primary/20 top-20 -left-20" style={{ animationDuration: '10s' }} />
      <div className="floating-orb w-96 h-96 bg-secondary/15 -bottom-32 right-0" style={{ animation: 'float-drift-alt 12s ease-in-out infinite' }} />
      <div className="floating-orb w-48 h-48 bg-accent/10 top-1/2 left-1/3" style={{ animationDuration: '14s' }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <span className="inline-block text-secondary font-semibold text-sm tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5">
              Full Stack Developer
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Bhanu Macharla</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed" style={{ textWrap: 'pretty' }}>
              Building scalable web applications at{" "}
              <span className="text-primary font-semibold">BINTIX</span>.
              IIT Patna graduate passionate about creating exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group active:scale-[0.97] transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10 active:scale-[0.97] transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { href: "https://www.linkedin.com/in/macharlabhanu169", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/macharlabhanu169", icon: Github, label: "GitHub" },
                { href: "mailto:macharlabhanu169@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-card/60 border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.15)] active:scale-95"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-3xl" style={{ animation: 'subtle-pulse 4s ease-in-out infinite' }} />
              <img
                src={profileImage}
                alt="Bhanu Macharla"
                className="relative w-[150px] h-[180px] md:w-[175px] md:h-[215px] object-cover rounded-2xl border-2 border-primary/30 shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
