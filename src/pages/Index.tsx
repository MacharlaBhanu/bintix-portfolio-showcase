import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Macharla Venkata Bhanu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
