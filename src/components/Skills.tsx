import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout, Server, Award, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const sectionRef = useScrollReveal(90);

  const skillCategories = [
    { icon: Code2, title: "Languages", skills: ["C/C++", "Python", "JavaScript", "HTML", "CSS", "TypeScript"], color: "text-primary" },
    { icon: Layout, title: "Frontend", skills: ["React.js", "Material UI", "Tailwind CSS", "Responsive Design"], color: "text-secondary" },
    { icon: Server, title: "Backend", skills: ["Node.js", "Express", "REST APIs", "Authentication"], color: "text-accent" },
    { icon: Database, title: "Database", skills: ["MongoDB", "Sequelize", "Database Design"], color: "text-primary" },
    { icon: Award, title: "Competitive Programming", skills: ["Codeforces (1404)", "CodeChef", "LeetCode", "DSA"], color: "text-secondary" },
    { icon: TrendingUp, title: "Other Skills", skills: ["OOP", "Problem Solving", "Team Collaboration", "Agile"], color: "text-accent" },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(199_89%_48%/0.06),_transparent_60%)]" />
      <div className="floating-orb w-64 h-64 bg-secondary/10 bottom-10 -left-32" style={{ animation: 'float-drift-alt 11s ease-in-out infinite' }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Technical skills and competencies developed through professional work and competitive programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="card-stagger gradient-border hover:glow-effect transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-card border border-border group-hover:border-primary/40 transition-colors duration-300">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-muted/60 text-sm font-medium hover:bg-primary/15 hover:text-primary transition-colors duration-200 cursor-default">
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
