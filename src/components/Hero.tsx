import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_hsl(220_80%_55%/0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,_hsl(190_75%_45%/0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_60%,_hsl(260_55%_58%/0.08),_transparent_50%)]" />

      {/* Floating orbs */}
      <div className="floating-orb w-80 h-80 bg-primary/15 top-10 -left-24" style={{ animationDuration: '10s' }} />
      <div className="floating-orb w-96 h-96 bg-secondary/10 -bottom-40 right-0" style={{ animation: 'float-drift-alt 12s ease-in-out infinite' }} />
      <div className="floating-orb w-48 h-48 bg-accent/8 top-1/3 left-1/2" style={{ animationDuration: '14s' }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
                  className="p-3 rounded-xl bg-card/60 border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_hsl(220_80%_55%/0.15)] active:scale-95"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile image — top right */}
          <div className="flex-shrink-0 lg:mt-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 blur-2xl" style={{ animation: 'subtle-pulse 4s ease-in-out infinite' }} />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/20" />
              <img
                src={profileImage}
                alt="Bhanu Macharla"
                className="relative w-[150px] h-[195px] md:w-[170px] md:h-[220px] object-contain rounded-2xl shadow-2xl bg-card"
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
