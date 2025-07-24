"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>PHOTO AI</CardTitle>
            <CardAction>GITHUB</CardAction>
          </CardHeader>
          <CardContent>
            <p>
              PhotoAI lets you turn your words into beautiful images with the
              help of AI. Just type what you imagine, and watch it come to life
              in a few seconds.
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
        </Card>
      ))}
    </div>
  );
}
