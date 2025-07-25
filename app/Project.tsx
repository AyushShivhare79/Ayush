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
import { FaGithub } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import data from "@/lib/projects.json";
import { div } from "motion/react-client";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((project) => (
        <Card className="bg-black overflow-hidden relative text-white border border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl">{project.name}</CardTitle>
            <CardAction>
              <Link href={project.github} target="_blank">
                <FaGithub size={25} />
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-gray-300">{project.description}</p>

              <Link
                target="_blank"
                className="hover:text-blue-500 text-gray-400"
                href={project.link}
              >
                <span className="flex items-center gap-1">
                  {project.linkText}
                  <HiArrowTopRightOnSquare size={17} />
                </span>
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-4">
            {project.stack.map((tech, index) => (
              <Badge className="p-2" key={index} variant="default">
                <span className="text-sm">{tech}</span>
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
