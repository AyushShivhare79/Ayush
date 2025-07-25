"use client";

import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Projects from "./Project";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="border-0 border-l border-r border-gray-700 space-y-7 p-4  h-full w-2/4 mx-auto">
          <section className="flex my-10 items-center justify-between">
            <div className="space-y-10">
              <h1 className="text-6xl">Hi, I am Ayush</h1>
              <InteractiveHoverButton className="text-black">
                Work with me
              </InteractiveHoverButton>
            </div>

            <Image
              src={
                "https://pbs.twimg.com/profile_images/1867139291182510080/Bt9Z46O0_400x400.jpg"
              }
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </section>

          <section>
            <p className="text-lg text-gray-500">
              I am a software engineer with a passion for building full stack
              web applications. I love working with Next.js, React and Node.js,
              and I care about clean design, solid architecture, and always
              learning something new. In my free time, I like to contribute to
              open-source projects and explore new technologies.
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
            <div className="bg-gray-900 p-2 border-l-4 rounded-md">
              <h1 className="text-3xl">Projects</h1>
            </div>
            <Projects />
          </section>

          {/* <section className="space-y-7">
            <h1 className="text-3xl">Experience</h1>
            <Experience />
          </section> */}

          <section className="space-y-7">
            <div className="bg-gray-900 p-2 border-l-4 rounded-md">
              <h1 className="text-3xl">Github Contribution</h1>
            </div>
            <GitHubCalendar username="ayushshivhare79" />
          </section>

          <footer className="text-center">
            © 2025 Developed with 🩵 by Ayush
          </footer>
        </div>
      </div>
    </>
  );
}
