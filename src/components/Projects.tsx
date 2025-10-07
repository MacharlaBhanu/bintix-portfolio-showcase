import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const bintixProjects = [
    {
      title: "UAT Master V2",
      description: "Master admin application for BINTIX with custom pagination, enhanced text boxes, clickable functionality, infinite scrolling in MUI Data Grid, image grids, and extensive UI improvements.",
      link: "https://uatmasterv2.bintix.com/",
      technologies: ["React.js", "Node.js", "MongoDB", "MUI Data Grid", "CSS"],
      type: "Professional"
    },
    {
      title: "GCF Master V2",
      description: "Global Configuration Framework master application with advanced data management features and responsive UI design.",
      link: "https://uatgcfmasterv2.bintix.com/",
      technologies: ["React.js", "Node.js", "Sequelize", "MongoDB"],
      type: "Professional"
    },
    {
      title: "WVI Master V2",
      description: "Web Visualization Interface master application featuring real-time data updates and enhanced user experience.",
      link: "https://uatwvimasterv2.bintix.com/",
      technologies: ["React.js", "Express", "MongoDB", "Node.js"],
      type: "Professional"
    }
  ];

  const personalProjects = [
    {
      title: "Chat Application",
      description: "Real-time chat application with user registration, authentication using JWT, profile pictures, emojis, and password reset functionality.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      type: "Personal",
      github: "#"
    },
    {
      title: "Entertainment Hub",
      description: "Modern movie browsing app with API integration for real-time movie data, ratings, and reviews. Built with Material UI for a sleek, responsive design.",
      technologies: ["React.js", "Material UI", "REST API"],
      type: "Personal",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work at BINTIX and personal projects
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full" />
            BINTIX Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bintixProjects.map((project, index) => (
              <Card key={index} className="gradient-border hover:glow-effect transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-secondary rounded-full" />
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project, index) => (
              <Card key={index} className="gradient-border hover:glow-effect transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-secondary/50 hover:bg-secondary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
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
  );
};

export default Projects;
