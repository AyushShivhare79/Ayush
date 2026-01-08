'use client';

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Projects from './Project';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="mx-auto h-full w-2/4 space-y-7 border-r border-l border-gray-700 p-4">
          <section className="mt-10 flex items-center justify-between">
            <div className="space-y-8">
              <h1 className="text-6xl font-semibold">Hi, I am Ayush</h1>
              <InteractiveHoverButton className="text-black">Work with me</InteractiveHoverButton>
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
            <p className="text-lg leading-relaxed text-gray-500">
              I am a software engineer with a passion for building full stack web applications. I
              love working with Next.js, React and Node.js, and I care about clean design, solid
              architecture, and always learning something new. In my free time, I like to contribute
              to open-source projects and explore new technologies.
            </p>
          </section>

          <section>
            <Image
              src="/reviews/image.png"
              alt="Review Image"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
            />
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
