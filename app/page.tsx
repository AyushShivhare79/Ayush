'use client';

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Projects from './Project';
import Experience from './Experience';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Prisma', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Docker', level: 65 },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-md border-l-4 border-cyan-500 bg-gray-900/80 p-3"
  >
    <h2 className="text-2xl font-semibold sm:text-3xl">{children}</h2>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50" />

      <div className="relative mx-auto h-full w-11/12 space-y-16 border-r border-l border-gray-800 p-4 pb-12 sm:w-3/5 lg:w-2/4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col-reverse items-center justify-between gap-8 sm:flex-row"
        >
          <div className="space-y-6 text-center sm:text-left">
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-cyan-400"
              >
                👋 Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl"
              >
                Ayush Shivhare
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-400"
              >
                Full Stack Developer
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <InteractiveHoverButton className="text-md text-black sm:text-xl">
                Work with me
              </InteractiveHoverButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl" />
            <Image
              src="https://pbs.twimg.com/profile_images/1867139291182510080/Bt9Z46O0_400x400.jpg"
              alt="Ayush Shivhare"
              width={180}
              height={180}
              className="relative rounded-full border-2 border-gray-700 transition-transform duration-300 hover:scale-105"
              priority
            />
            <div className="mt-5 flex justify-center gap-4 text-2xl">
              {[
                { href: 'https://www.linkedin.com/in/ayushshivhare51/', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://github.com/AyushShivhare79', icon: FaGithub, label: 'GitHub' },
                { href: 'https://x.com/AyushShivhare79', icon: FaXTwitter, label: 'Twitter' },
              ].map((social, i) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-justify text-lg leading-relaxed text-gray-400">
            I am a passionate software engineer specializing in building{' '}
            <span className="text-white">full-stack web applications</span>. I love working with{' '}
            <span className="text-cyan-400">Next.js</span>,{' '}
            <span className="text-cyan-400">React</span>, and{' '}
            <span className="text-cyan-400">Node.js</span>, and I care about clean design, solid
            architecture, and always learning something new. In my free time, I contribute to
            open-source projects and explore emerging technologies.
          </p>
        </motion.section>

        {/* Skills Section */}
        <section className="space-y-7">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="space-y-7">
          <SectionTitle>Reviews</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent className="-ml-4">
                {[1, 2, 3].map((num) => (
                  <CarouselItem key={num} className="pl-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 transition-all duration-300 hover:border-gray-600">
                      <Image
                        src={`/reviews/image${num}.png`}
                        alt={`Review ${num}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-2"
                        priority={num === 1}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 border-gray-700 bg-gray-900 text-white transition-colors hover:border-cyan-500 hover:bg-gray-800 hover:text-cyan-400" />
              <CarouselNext className="absolute -right-4 border-gray-700 bg-gray-900 text-white transition-colors hover:border-cyan-500 hover:bg-gray-800 hover:text-cyan-400" />
            </Carousel>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="space-y-7">
          <SectionTitle>Projects</SectionTitle>
          <Projects />
        </section>

        {/* Experience Section */}
        <section className="space-y-7">
          <SectionTitle>Experience</SectionTitle>
          <Experience />
        </section>

        {/* GitHub Contribution Section */}
        <section className="space-y-7">
          <SectionTitle>GitHub Contributions</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50 p-4"
          >
            <GitHubCalendar
              username="ayushshivhare79"
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
            />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="space-y-7">
          <SectionTitle>Get In Touch</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center"
          >
            <p className="mb-6 text-gray-400">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
            <Link
              href="mailto:ayushshivhare79@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <HiMail size={20} />
              Say Hello
            </Link>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500"
        >
          <p>© 2025 Developed with 🩵 by Ayush Shivhare</p>
          <p className="mt-2 text-sm text-gray-600">Built with Next.js & Tailwind CSS</p>
        </motion.footer>
      </div>
    </div>
  );
}
