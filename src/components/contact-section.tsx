
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">Connect With Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-body">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
          </p>
          <div className="mt-8 flex justify-center items-center flex-wrap gap-4 font-body">
            <Button asChild size="lg">
              <a href="mailto:subyounas@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                subyounas@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/muhammad-subhan-younas/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/subhan-younas" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
