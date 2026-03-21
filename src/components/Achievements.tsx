import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Medal, Code } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Achievements = () => {
  const sectionRef = useScrollReveal(90);

  const achievements = [
    { icon: Trophy, title: "Codeforces Rating", description: "Achieved highest rating of 1404 on Codeforces platform", highlight: "1404 Rating" },
    { icon: Target, title: "CodeChef Contest", description: "Ranked 12 out of 6573 participants in Codechef Starters 11", highlight: "Top 0.2%" },
    { icon: Code, title: "LeetCode Contest", description: "Secured rank 563 out of 24770 participants in Biweekly Contest 115", highlight: "Top 2.3%" },
    { icon: Medal, title: "JEE Advanced 2020", description: "All India Rank 7546 out of 1.5 Lakh+ candidates", highlight: "AIR 7546" },
    { icon: Medal, title: "JEE Mains 2020", description: "Ranked 3472 out of 8.69 Lakh+ aspirants", highlight: "Top 0.4%" },
    { icon: Trophy, title: "Dosa Hub Startup", description: "Co-founded food startup generating ₹1.2 lakhs/month at IIT Patna, awarded most popular startup by ECell", highlight: "₹1.2L/month" },
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(260_55%_58%/0.06),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_80%_55%/0.04),_transparent_50%)]" />
      <div className="floating-orb w-72 h-72 bg-accent/8 top-0 right-10" style={{ animationDuration: '13s' }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Recognition in competitive programming and entrepreneurship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="card-stagger gradient-border hover:glow-effect transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/40 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="shrink-0 text-xs font-bold text-accent px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20">
                          {achievement.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
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

export default Achievements;
