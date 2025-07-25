
"use client";
import Image from 'next/image';
import { LiquidChromeBackground } from './liquid-chrome-background';
import { ShinyCard } from './shiny-card';
import { motion } from 'framer-motion';

const PlayerTag = () => {
  return (
    <motion.div 
      className="absolute left-1/2 -translate-x-1/2 top-[20%] z-20"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="bg-black/50 text-white font-minecraft text-xs px-2 py-1 rounded-sm shadow-lg">
        Subhan
      </div>
    </motion.div>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">About Me</h2>
            <div className="text-lg text-foreground/80 space-y-4 font-body">
              <p>
                I'm a 15-year-old developer and AI enthusiast from Faisalabad, Pakistan, on a golden mission to blend creativity with code to build tomorrow's digital experiences. My fascination isn't just with technology itself, but with its power to reshape how we learn, create, and connect.
              </p>
              <p>
                From crafting intelligent systems with Large Language Models to designing futuristic UIs, I'm driven by a desire to explore uncharted territories. Whether it's a deep dive into Bio-AI or rapidly prototyping an idea at a hackathon, I'm constantly seeking new challenges that push the boundaries of what's possible. My goal is simple: to build tools that are not only powerful but also intuitive and empowering for everyone, especially students.
              </p>
            </div>
             <div className="relative md:hidden w-full h-80">
                <PlayerTag />
                <LiquidChromeBackground />
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover rounded-lg -z-10">
                  <source src="/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10"></div>
                <Image
                    src="/unnamed.jpg"
                    alt="A portrait of Muhammad Subhan"
                    fill
                    className="object-contain"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2">
            <ShinyCard className="rounded-lg">
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                     <PlayerTag />
                     <LiquidChromeBackground />
                     <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                        <source src="/about-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                     <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10"></div>
                     <Image
                        src="/unnamed.jpg"
                        alt="A portrait of Muhammad Subhan"
                        fill
                        className="object-contain"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                </div>
            </ShinyCard>
          </div>
        </div>
      </div>
    </section>
  );
}
