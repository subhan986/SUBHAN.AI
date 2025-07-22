"use client";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, PenTool, GraduationCap, Dna, Rocket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShinyCard } from "./shiny-card";

const skills = [
  {
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: "Web Development",
    description: "HTML, CSS, JS, Node.js, Firebase, and Next.js for building modern web applications.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "AI Integration",
    description: "Experience with OpenAI & Gemini APIs to build prompt-based tools and intelligent systems.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: "Product Design + Front-End",
    description: "Crafting beautiful UIs with Tailwind CSS and creating fluid user experiences with animations.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    title: "EdTech Projects",
    description: "Building educational tools like StudySync AI to help students learn more effectively.",
  },
  {
    icon: <Dna className="w-10 h-10 text-primary" />,
    title: "Bio x AI Projects",
    description: "Exploring synthetic gene circuits, 3D visualizations, and real-time AI in biology.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Hackathon & MVP Builds",
    description: "Rapidly prototyping ideas, like a 3D gravity simulator, for hackathons and MVPs.",
  },
];

export function SkillsSection() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="skills" className="py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">What I Do</h2>
          <p className="mt-2 text-lg text-foreground/80 font-headline">A fusion of creativity, code, and intelligence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <ShinyCard className="h-full">
                <Card className="h-full bg-card/50 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="flex flex-col items-center text-center">
                    {skill.icon}
                    <CardTitle className="mt-4 font-headline">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-foreground/80 font-headline">
                    <p>{skill.description}</p>
                  </CardContent>
                </Card>
              </ShinyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
