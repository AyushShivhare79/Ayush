'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { motion } from 'motion/react';
import data from '@/lib/projects.json';

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {data.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group relative h-80 overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black text-white transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-cyan-500/10">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <CardHeader className="relative">
              <CardTitle className="text-2xl transition-colors group-hover:text-cyan-400">
                {project.name}
              </CardTitle>
              <CardAction>
                <Link
                  href={project.github}
                  target="_blank"
                  className="transition-transform hover:scale-110"
                >
                  <FaGithub size={25} className="transition-colors hover:text-gray-400" />
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3">
                <p className="leading-relaxed text-gray-400">{project.description}</p>
                <Link
                  target="_blank"
                  className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-cyan-400"
                  href={project.link}
                >
                  <span className="flex items-center gap-1">
                    {project.linkText}
                    <HiArrowTopRightOnSquare
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </div>
            </CardContent>
            <CardFooter className="relative flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <Badge
                  className="border-gray-700 bg-gray-800/50 px-2 py-1 text-xs text-gray-300 transition-colors hover:border-cyan-500/50 hover:bg-gray-800"
                  key={i}
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
