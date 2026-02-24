
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShinyCard } from "./shiny-card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "StudySync AI",
    description: "An AI-powered learning companion designed to help students supercharge their studies. It can generate personalized quizzes, create flashcards from uploaded notes, and provide concise summaries of complex documents, transforming dense material into manageable insights.",
    image: "/studysync.png",
    imageHint: "education technology",
    tags: ["Next.js", "AI", "Firebase", "EdTech"],
  },
  {
    title: "Quantum Labs",
    description: "A sophisticated platform for exploring quantum computing concepts and experiments. It provides interactive visualizations and simulations of quantum circuits, helping researchers and students understand the principles of superposition and entanglement.",
    image: "https://picsum.photos/seed/quantum/600/400",
    imageHint: "quantum physics",
    tags: ["Next.js", "Quantum", "Scientific", "React"],
    link: "https://atom-sepia.vercel.app/",
  },
  {
    title: "Bio-AI Simulation Platform",
    description: "A cutting-edge platform for visualizing and simulating synthetic gene circuits in real-time 3D. This tool leverages AI to predict and display complex biological interactions, offering researchers an intuitive way to explore genetic engineering concepts.",
    image: "/bioai.png",
    imageHint: "biotechnology abstract",
    tags: ["Next.js", "3D", "AI", "Biology"],
  },
  {
    title: "3D Gravity Simulator",
    description: "Developed during a weekend hackathon, this interactive 3D simulator models gravitational forces and orbital mechanics. Users can create celestial bodies and watch as their gravitational interactions form stable (or chaotic) solar systems.",
    image: "/Gravitysimulator.png",
    imageHint: "galaxy space",
    tags: ["JavaScript", "Physics", "3D"],
    link: "https://spacetime-theta.vercel.app",
  },
  {
    title: "AI-Powered Code Assistant",
    description: "A smart assistant integrated directly into the VS Code IDE. It goes beyond simple autocompletion by suggesting optimized code blocks, identifying potential bugs, and explaining complex algorithms, acting as a true pair programmer.",
    image: "/ai code assistant.png",
    imageHint: "purple code",
    tags: ["AI", "VS Code", "TypeScript", "Machine Learning"],
  },
  {
    title: "Decentralized Social Media App",
    description: "A conceptual prototype for a next-generation social media platform built on Web3 principles. It utilizes blockchain technology and IPFS to ensure user data ownership, privacy, and censorship resistance, rethinking how we connect online.",
    image: "/social media.png",
    imageHint: "purple network",
    tags: ["Web3", "Solidity", "React", "IPFS"],
  },
  {
    title: "Interactive Data Visualization Dashboard",
    description: "A powerful SaaS tool that allows users to upload raw datasets and instantly generate a variety of beautiful, interactive charts and graphs. The dashboard makes it easy to explore data, uncover hidden trends, and share insights with others.",
    image: "/dataapp.png",
    imageHint: "purple dashboard",
    tags: ["D3.js", "React", "DataViz", "SaaS"],
  },
];

export function ProjectsSection() {
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
    <section id="projects" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">Featured Projects</h2>
          <p className="mt-2 text-lg text-foreground/80 font-body">My work has no weaknesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="h-full"
            >
              <ShinyCard className="h-full">
                <Card className="h-full flex flex-col bg-card/50 border-border overflow-hidden group transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-sans">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-foreground/80 mb-4 font-body">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                  {project.link && (
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </ShinyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
