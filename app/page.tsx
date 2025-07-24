"use client";

import Image from "next/image";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="border space-y-7 p-4 border-white h-full w-2/4 mx-auto">
          <section className="flex my-10 items-center justify-between">
            <div>
              <h1 className="text-5xl">Hi, I am Ayush</h1>
              <div>Work with me(Button)</div>
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
            <p className="text-lg text-gray-600">
              I am a software engineer with a passion for building full stack
              web applications. I love working with Next.js, React and Node.js,
              and I care about clean design, solid architecture, and always
              learning something new. In my free time, I like to contribute to
              open-source projects and explore new technologies.
            </p>
          </section>

          <section>
            <Image
              src="/reviews/4.png"
              alt="Review Image"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
            />
          </section>

          <section>
            <h1>Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <MagicCard>
                  <div className="p-4">
                    <h1>PHOTO AI</h1>
                    <p>
                      PhotoAI lets you turn your words into beautiful images
                      with the help of AI. Just type what you imagine, and watch
                      it come to life in a few seconds.
                    </p>
                    <Link href={"https://photoai-images.vercel.app/"}>
                      photoai-images.vercel.app
                    </Link>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Image kit</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                  </div>
                </MagicCard>
              ))}
            </div>
          </section>

          <section>
            <h1>Experience</h1>
          </section>

          <section>
            <h1>Github Contribution</h1>
          </section>
        </div>
      </div>
    </>
  );
}
