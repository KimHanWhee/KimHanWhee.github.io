import React from 'react';
import { PROJECTS } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12">
        Work Experience <span className="text-sky-400">.</span>
      </h1>

      <div className="space-y-16">
        {PROJECTS.map((project) => (
          <div key={project.id} className="relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2">
            
            {/* Header: Title & Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                {project.title}
              </h2>
              <span className="font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap">
                {project.period}
              </span>
            </div>

            {/* Role */}
            <div className="text-lg font-medium text-slate-700 mb-4">
              {project.role}
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>

            {/* Tech Stack - Text style instead of buttons */}
            <div className="mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="bg-slate-50 px-1.5 rounded text-slate-600">
                   #{tech}
                </span>
              ))}
            </div>

            {/* Key Achievements - Simple list */}
            <ul className="space-y-2 text-slate-600 list-disc list-outside pl-4">
              {project.keyAchievements.map((ach, idx) => (
                <li key={idx} className="pl-1 marker:text-sky-300">
                  {ach}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;