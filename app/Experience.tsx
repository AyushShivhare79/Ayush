'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import data from '@/lib/experience.json';

export default function Experience() {
  return (
    <div className="relative space-y-6">
      <div className="absolute top-2 left-[7px] h-[calc(100%-2rem)] w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

      {data.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8"
        >
          {/* Timeline dot */}
          <div className="absolute top-2 left-0 h-4 w-4 rounded-full border-2 border-cyan-500 bg-black" />

          <div className="group rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900">
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
              <span className="text-sm text-cyan-400">{exp.duration}</span>
            </div>
            <p className="mb-2 text-sm font-medium text-gray-400">{exp.role}</p>
            <p className="mb-4 text-gray-500">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <Badge key={i} variant="outline" className="border-gray-700 text-xs text-gray-400">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
