import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout, Server, Award, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["C/C++", "Python", "JavaScript", "HTML", "CSS", "TypeScript"],
      color: "text-primary"
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["React.js", "Material UI", "Tailwind CSS", "Responsive Design"],
      color: "text-secondary"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Authentication"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "Sequelize", "Database Design"],
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Competitive Programming",
      skills: ["Codeforces (1404)", "CodeChef", "LeetCode", "DSA"],
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Other Skills",
      skills: ["OOP", "Problem Solving", "Team Collaboration", "Agile"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and competencies developed through professional work and competitive programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="gradient-border hover:glow-effect transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-card border border-border group-hover:border-primary transition-colors`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-muted text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
