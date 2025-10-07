import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "macharlabhanu169@gmail.com",
      link: "mailto:macharlabhanu169@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6302376836",
      link: "tel:+916302376836"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/macharlabhanu169",
      link: "https://www.linkedin.com/in/macharlabhanu169"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/macharlabhanu169",
      link: "https://github.com/macharlabhanu169"
    },
    {
      icon: MapPin,
      label: "Education",
      value: "IIT Patna (B.Tech, CPI: 7.97/10)",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-border glow-effect">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary transition-colors"
                          >
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

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Currently working as a Full Stack Developer at BINTIX
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
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
