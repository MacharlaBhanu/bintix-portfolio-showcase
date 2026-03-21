import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import customerAppImage from "@/assets/customer-app.png";
import uatImage from "@/assets/uat.jpg";
import bintelligenceImage from "@/assets/bintelligence.png";
import binsightsImage from "@/assets/binsights.png";
import gcfImage from "@/assets/gcf.png";
import wviImage from "@/assets/wvi.png";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const sectionRef = useScrollReveal(100);

  const bintixProjects = [
    { title: "UAT Master V2", description: "Master admin application for BINTIX with custom pagination, enhanced text boxes, clickable functionality, infinite scrolling in MUI Data Grid, image grids, and extensive UI improvements.", link: "https://uatmasterv2.bintix.com/", technologies: ["React.js", "Node.js", "MongoDB", "MUI Data Grid", "CSS"], type: "Professional", image: uatImage },
    { title: "GCF Master V2", description: "Global Configuration Framework master application with advanced data management features and responsive UI design.", link: "https://uatgcfmasterv2.bintix.com/", technologies: ["React.js", "Node.js", "Sequelize", "MongoDB"], type: "Professional", image: gcfImage },
    { title: "WVI Master V2", description: "Web Visualization Interface master application featuring real-time data updates and enhanced user experience.", link: "https://uatwvimasterv2.bintix.com/", technologies: ["React.js", "Express", "MongoDB", "Node.js"], type: "Professional", image: wviImage },
    { title: "Customer App", description: "Customer-facing application with intuitive interface and seamless user experience for BINTIX platform.", link: "https://uatmasterv2.bintix.com/", technologies: ["React.js", "Node.js", "MongoDB"], type: "Professional", image: customerAppImage },
    { title: "BINTELLIGENCE", description: "Intelligence dashboard with advanced analytics and data visualization capabilities.", link: "https://uatgcfmasterv2.bintix.com/", technologies: ["React.js", "Node.js", "Analytics"], type: "Professional", image: bintelligenceImage },
    { title: "BINSIGHTS", description: "Insights platform providing comprehensive reporting and business intelligence features.", link: "https://uatwvimasterv2.bintix.com/", technologies: ["React.js", "Node.js", "Business Intelligence"], type: "Professional", image: binsightsImage },
  ];

  const personalProjects = [
    { title: "Chat Application", description: "Real-time chat application with user registration, authentication using JWT, profile pictures, emojis, and password reset functionality.", technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"], type: "Personal", github: "#" },
    { title: "Entertainment Hub", description: "Modern movie browsing app with API integration for real-time movie data, ratings, and reviews. Built with Material UI for a sleek, responsive design.", technologies: ["React.js", "Material UI", "REST API"], type: "Personal", github: "#" },
  ];

  return (
    <>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-primary/20 bg-card">
          <div className="relative">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all active:scale-95">
              <X className="h-5 w-5" />
            </button>
            {selectedImage && (
              <div className="relative">
                <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto animate-scale-in" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <section id="projects" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_80%_55%/0.05),_transparent_70%)]" />
        <div className="floating-orb w-80 h-80 bg-primary/8 top-20 -right-40" style={{ animationDuration: '12s' }} />
        <div className="floating-orb w-56 h-56 bg-accent/6 bottom-40 -left-20" style={{ animation: 'float-drift-alt 15s ease-in-out infinite' }} />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
              A showcase of my work at BINTIX and personal projects
            </p>
          </div>

          <div className="mb-20 section-reveal">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
              BINTIX Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bintixProjects.map((project, index) => (
                <Card key={index} className="card-stagger gradient-border hover:glow-effect transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <Badge variant="secondary" className="w-fit bg-primary/15 text-primary border-primary/20 mb-3">
                      {project.type}
                    </Badge>
                    {project.image && (
                      <div
                        className="relative overflow-hidden rounded-lg mb-3 cursor-pointer group/image h-48"
                        onClick={() => setSelectedImage({ src: project.image!, title: project.title })}
                      >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover/image:scale-105" />
                        <div className="absolute inset-0 bg-primary/0 group-hover/image:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-foreground text-sm font-medium bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover/image:opacity-100 translate-y-2 group-hover/image:translate-y-0 transition-all duration-300">
                            Click to enlarge
                          </span>
                        </div>
                      </div>
                    )}
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-border/60 text-muted-foreground">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 active:scale-[0.97] transition-all" onClick={() => window.open(project.link, '_blank')}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="section-reveal">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-secondary to-accent rounded-full" />
              Personal Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <Card key={index} className="card-stagger gradient-border hover:glow-effect transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit bg-secondary/15 text-secondary border-secondary/20 mb-2">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-border/60 text-muted-foreground">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50 active:scale-[0.97] transition-all" onClick={() => window.open(project.github, '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
