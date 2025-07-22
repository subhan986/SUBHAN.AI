
"use client";
import { motion } from "framer-motion";
import { Tv, BookOpen, Headphones, Keyboard, PencilRuler } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShinyCard } from "./shiny-card";

const favorites = [
  {
    icon: <Tv className="w-10 h-10 text-primary pulsing-icon" />,
    title: "Anime",
    description: "Jojo's Bizarre Adventure & Death Note are my top picks.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary pulsing-icon" />,
    title: "Books",
    description: "Always looking for a good story to dive into.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-primary pulsing-icon" />,
    title: "Music",
    description: "Exploring different genres and finding new artists.",
  },
  {
    icon: <Keyboard className="w-10 h-10 text-primary pulsing-icon" />,
    title: "Web Development",
    description: "Building and creating things for the web.",
  },
  {
    icon: <PencilRuler className="w-10 h-10 text-primary pulsing-icon" />,
    title: "UI Design",
    description: "Passionate about creating beautiful and intuitive interfaces.",
  },
];

export function FavoritesSection() {
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
    <section id="favorites" className="py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">Favorites</h2>
          <p className="mt-2 text-lg text-foreground/80 font-body">A few of the things I enjoy.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {favorites.map((fav, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <ShinyCard className="h-full">
                <Card className="h-full bg-card/50 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                   <div className="animated-gradient absolute inset-0 -z-10"></div>
                  <CardHeader className="flex flex-col items-center text-center">
                    {fav.icon}
                    <CardTitle className="mt-4 font-headline text-lg">{fav.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-foreground/80 font-body text-sm">
                    <p>{fav.description}</p>
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
