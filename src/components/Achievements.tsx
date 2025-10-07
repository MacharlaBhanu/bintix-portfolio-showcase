import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Medal, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Codeforces Rating",
      description: "Achieved highest rating of 1404 on Codeforces platform",
      highlight: "1404 Rating"
    },
    {
      icon: Target,
      title: "CodeChef Contest",
      description: "Ranked 12 out of 6573 participants in Codechef Starters 11",
      highlight: "Top 0.2%"
    },
    {
      icon: Code,
      title: "LeetCode Contest",
      description: "Secured rank 563 out of 24770 participants in Biweekly Contest 115",
      highlight: "Top 2.3%"
    },
    {
      icon: Medal,
      title: "JEE Advanced 2020",
      description: "All India Rank 7546 out of 1.5 Lakh+ candidates",
      highlight: "AIR 7546"
    },
    {
      icon: Medal,
      title: "JEE Mains 2020",
      description: "Ranked 3472 out of 8.69 Lakh+ aspirants",
      highlight: "Top 0.4%"
    },
    {
      icon: Trophy,
      title: "Dosa Hub Startup",
      description: "Co-founded food startup generating ₹1.2 lakhs/month at IIT Patna, awarded most popular startup by ECell",
      highlight: "₹1.2L/month"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition in competitive programming and entrepreneurship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="gradient-border hover:glow-effect transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-xs font-bold text-accent px-2 py-1 rounded bg-accent/10">
                          {achievement.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
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
