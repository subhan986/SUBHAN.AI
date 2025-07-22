import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">About Me</h2>
            <div className="text-lg text-foreground/80 space-y-4 font-headline">
              <p>
                I'm a 15-year-old developer and AI enthusiast from Faisalabad, Pakistan, on a mission to blend creativity with code to build tomorrow's digital experiences. My fascination isn't just with technology itself, but with its power to reshape how we learn, create, and connect.
              </p>
              <p>
                From crafting intelligent systems with Large Language Models to designing futuristic UIs, I'm driven by a desire to explore uncharted territories. Whether it's a deep dive into Bio-AI or rapidly prototyping an idea at a hackathon, I'm constantly seeking new challenges that push the boundaries of what's possible. My goal is simple: to build tools that are not only powerful but also intuitive and empowering for everyone, especially students.
              </p>
            </div>
             <div className="relative md:hidden w-full h-80 rounded-lg overflow-hidden shadow-lg shadow-primary/10">
                <Image
                    src="/about.png"
                    alt="Muhammad Subhan"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
          </div>
          <div className="hidden md:block md:col-span-2">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg shadow-primary/10">
               <Image
                  src="/about.png"
                  alt="Muhammad Subhan"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
