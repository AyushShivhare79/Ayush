'use client';

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Projects from './Project';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="mx-auto h-full w-11/12 space-y-7 border-r border-l border-gray-700 p-4 sm:w-2/4">
          <section className="mt-10 flex items-center justify-between">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold sm:text-6xl">Hi, I am Ayush</h1>
              <InteractiveHoverButton className="text-md text-black sm:text-xl">
                Work with me
              </InteractiveHoverButton>
            </div>

            <div>
              <Image
                src={
                  'https://pbs.twimg.com/profile_images/1867139291182510080/Bt9Z46O0_400x400.jpg'
                }
                alt="Profile Picture"
                width={180}
                height={180}
                className="rounded-full"
              />
              <div className="mt-4 flex justify-center gap-4 text-2xl">
                <Link
                  href={'https://www.linkedin.com/in/ayushshivhare51/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href={'https://github.com/AyushShivhare79'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </section>

          <section>
            <p className="text-justify text-lg leading-relaxed text-gray-500">
              I am a software engineer with a passion for building full stack web applications. I
              love working with Next.js, React and Node.js, and I care about clean design, solid
              architecture, and always learning something new. In my free time, I like to contribute
              to open-source projects and explore new technologies.
            </p>
          </section>

          <section className="space-y-7">
            <div className="rounded-md border-l-4 bg-gray-900 p-2">
              <h1 className="text-3xl">Reviews</h1>
            </div>
            <div className="relative w-full">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent className="-ml-4">
                  {[1, 2, 3].map((num) => (
                    <CarouselItem key={num} className="pl-4">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
                        <Image
                          src={`/reviews/image${num}.png`}
                          alt={`Review Image ${num}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain p-2"
                          priority={num === 1}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-white" />
                <CarouselNext className="absolute -right-4 border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-white" />
              </Carousel>
            </div>
          </section>

          <section className="space-y-7">
            <div className="rounded-md border-l-4 bg-gray-900 p-2">
              <h1 className="text-3xl">Projects</h1>
            </div>
            <Projects />
          </section>

          {/* <section className="space-y-7">
            <h1 className="text-3xl">Experience</h1>
            <Experience />
          </section> */}

          <section className="space-y-7">
            <div className="rounded-md border-l-4 bg-gray-900 p-2">
              <h1 className="text-3xl">Github Contribution</h1>
            </div>
            <GitHubCalendar username="ayushshivhare79" />
          </section>

          <footer className="text-center">© 2025 Developed with 🩵 by Ayush</footer>
        </div>
      </div>
    </>
  );
}
