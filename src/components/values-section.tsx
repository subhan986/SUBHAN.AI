
"use client";
import { motion } from "framer-motion";
import { Globe, Sparkles, Share2 } from "lucide-react";
import { ShinyCard } from "./shiny-card";

const values = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Access for All",
    description: "Building technology that is inclusive and accessible to everyone.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Design × Function",
    description: "Creating products that are not only functional but also beautiful and delightful to use.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Learn in Public",
    description: "Sharing my journey, learnings, and projects openly to grow with the community.",
  },
];

export function ValuesSection() {
    const listVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    const itemVariants = {
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
        hidden: { opacity: 0, x: -50 },
    };

  return (
    <section id="values" className="py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">Core Values</h2>
        </div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {values.map((value, index) => (
            <motion.li key={index} variants={itemVariants}>
              <ShinyCard>
                <div className="flex flex-col items-center space-y-4 p-6 bg-card/50 rounded-lg border border-transparent hover:border-primary transition-colors duration-300">
                  <div className="p-3 bg-primary/10 rounded-full">{value.icon}</div>
                  <h3 className="text-xl font-bold font-headline">{value.title}</h3>
                  <p className="text-foreground/80 font-body">{value.description}</p>
                </div>
              </ShinyCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
