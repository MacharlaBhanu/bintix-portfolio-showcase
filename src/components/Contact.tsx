import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const sectionRef = useScrollReveal();

  const contactInfo = [
    { icon: Mail, label: "Email", value: "macharlabhanu169@gmail.com", link: "mailto:macharlabhanu169@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6302376836", link: "tel:+916302376836" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/macharlabhanu169", link: "https://www.linkedin.com/in/macharlabhanu169" },
    { icon: Github, label: "GitHub", value: "github.com/macharlabhanu169", link: "https://github.com/macharlabhanu169" },
    { icon: MapPin, label: "Education", value: "IIT Patna (B.Tech, CPI: 7.97/10)", link: null },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217_91%_60%/0.08),_transparent_60%)]" />
      <div className="floating-orb w-64 h-64 bg-primary/10 -bottom-20 left-1/4" style={{ animation: 'float-drift-alt 10s ease-in-out infinite' }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto section-reveal">
          <Card className="gradient-border glow-effect">
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="card-stagger flex items-start gap-4 group">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors break-all">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-5">
                  Currently working as a Full Stack Developer at BINTIX
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect active:scale-[0.97] transition-all"
                  onClick={() => window.open('mailto:macharlabhanu169@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
