
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShinyCard } from "./shiny-card";

const projects = [
  {
    title: "StudySync AI",
    description: "An AI-powered assistant for students, providing personalized quizzes, flashcards from notes, and document summaries to enhance learning.",
    image: "https://placehold.co/600x400.png",
    imageHint: "education technology",
    tags: ["Next.js", "AI", "Firebase", "EdTech"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Bio-AI Simulation Platform",
    description: "A platform for real-time 3D simulation and visualization of gene circuits, leveraging AI to predict biological interactions.",
    image: "https://placehold.co/600x400.png",
    imageHint: "biotechnology abstract",
    tags: ["Next.js", "3D", "AI", "Biology"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "3D Gravity Simulator",
    description: "A hackathon project building an interactive 3D gravity and orbital mechanics simulator using JavaScript.",
    image: "https://placehold.co/600x400.png",
    imageHint: "galaxy space",
    tags: ["JavaScript", "Physics", "3D"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Code Assistant",
    description: "A smart assistant integrated into the IDE that suggests code, finds bugs, and explains complex algorithms to streamline development.",
    image: "https://placehold.co/600x400.png",
    imageHint: "code programming",
    tags: ["AI", "VS Code", "TypeScript", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Decentralized Social Media App",
    description: "A concept for a social media platform built on blockchain technology, ensuring user privacy and data ownership.",
    image: "https://placehold.co/600x400.png",
    imageHint: "blockchain network",
    tags: ["Web3", "Solidity", "React", "IPFS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Interactive Data Visualization Dashboard",
    description: "A powerful dashboard that allows users to upload datasets and generate beautiful, interactive charts and graphs to discover insights.",
    image: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
    tags: ["D3.js", "React", "DataViz", "SaaS"],
    liveUrl: "#",
    githubUrl: "#",
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
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-foreground/80 mb-4 flex-grow font-body">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center space-x-4 mt-auto pt-4 border-t border-border font-body">
                    <Button variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </ShinyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
