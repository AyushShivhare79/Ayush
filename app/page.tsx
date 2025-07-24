"use client";

import Image from "next/image";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GitHubCalendar from "react-github-calendar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="border border-white space-y-7 p-4  h-full w-2/4 mx-auto">
          <section className="flex my-10 items-center justify-between">
            <div>
              <h1 className="text-5xl">Hi, I am Ayush</h1>
              <InteractiveHoverButton>Work with me</InteractiveHoverButton>
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
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>PHOTO AI</CardTitle>
                    <CardAction>GITHUB</CardAction>
                  </CardHeader>
                  <CardContent>
                    <p>
                      PhotoAI lets you turn your words into beautiful images
                      with the help of AI. Just type what you imagine, and watch
                      it come to life in a few seconds.
                    </p>
                    <div>
                      <Link href={"https://photoai-images.vercel.app/"}>
                        photoai-images.vercel.app
                      </Link>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Image kit</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                  </CardFooter>

                  {/* <div className="p-4 space-y-4">
                    <h1>PHOTO AI</h1>
                    <p>
                      PhotoAI lets you turn your words into beautiful images
                      with the help of AI. Just type what you imagine, and watch
                      it come to life in a few seconds.
                    </p>

                    <div>
                      <Link href={"https://photoai-images.vercel.app/"}>
                        photoai-images.vercel.app
                      </Link>
                    </div>

                    <div>
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">Image kit</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  </div> */}
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h1>Experience</h1>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Nocage</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Palisadoes foundation</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>S.W.O.S</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-O4">
                  <AccordionTrigger>100Xdevs</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section>
            <h1>Github Contribution</h1>
            <GitHubCalendar username="ayushshivhare79" />
          </section>

          <section className="text-center">
            © 2025 Developed with 🩵 by Ayush
          </section>
        </div>
      </div>
    </>
  );
}
