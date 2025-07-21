import { SummaryToneChanger } from './summary-tone-changer';
import Image from 'next/image';

export function AboutSection() {
  const personalSummary = `As a 19-year-old developer and AI builder, I stand at the intersection of creativity, code, and cognitive science. My passion lies in pushing the boundaries of what's possible with Large Language Models (LLMs) and crafting futuristic, intelligent user interfaces. I'm particularly drawn to building tools that empower students and democratize education, like my project StudySync AI. From exploring synthetic gene circuits to visualizing complex data in 3D, I am driven by a relentless curiosity to learn in public and build a future where technology and design are seamlessly integrated for the benefit of all.`;

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">About Me</h2>
            <div className="text-lg text-foreground/80 space-y-4">
              <p>
                I'm a developer and AI builder from Faisalabad, Pakistan, passionate about the fusion of creativity, code, and intelligence. 
              </p>
              <p>
                My work revolves around building meaningful digital experiences, with a special focus on Large Language Models, futuristic UIs, and innovative tools for students. I thrive on exploring new frontiers, from Bio-AI projects to rapid MVP development at hackathons.
              </p>
            </div>
             <div className="relative md:hidden w-full h-80 rounded-lg overflow-hidden shadow-lg shadow-primary/10">
              <Image
                src="https://placehold.co/400x600.png"
                alt="Muhammad Subhan"
                layout="fill"
                objectFit="cover"
                className="scale-105"
                data-ai-hint="portrait professional"
              />
            </div>
            <SummaryToneChanger initialSummary={personalSummary} />
          </div>
          <div className="hidden md:block md:col-span-2">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg shadow-primary/10">
              <Image
                src="https://placehold.co/400x600.png"
                alt="Muhammad Subhan"
                layout="fill"
                objectFit="cover"
                className="scale-105"
                data-ai-hint="portrait professional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
