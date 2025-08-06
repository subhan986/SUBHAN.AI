
"use client";
import Image from 'next/image';
import { ShinyCard } from './shiny-card';
import { useState } from 'react';

export function AboutSection() {
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    if (newClickCount === 5) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      setClickCount(0); // Reset counter
    }
  };

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
              <p className="italic text-foreground/60 text-sm">
                P.S. Some say this portrait holds a secret if you click it 5 times.
              </p>
            </div>
             <div className="relative md:hidden w-full mt-8" onClick={handleImageClick}>
                <ShinyCard className="rounded-lg">
                    <Image
                        src="/unanmed.jpg"
                        alt="A portrait of Muhammad Subhan"
                        width={400}
                        height={400}
                        className="object-contain rounded-lg mx-auto"
                        quality={100}
                    />
                </ShinyCard>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2" onClick={handleImageClick}>
            <ShinyCard className="rounded-lg">
                <div className="relative w-full h-auto rounded-lg overflow-hidden">
                     <Image
                        src="/unanmed.jpg"
                        alt="A portrait of Muhammad Subhan"
                        width={500}
                        height={500}
                        className="object-contain rounded-lg"
                        quality={100}
                      />
                </div>
            </ShinyCard>
          </div>
        </div>
      </div>
    </section>
  );
}
