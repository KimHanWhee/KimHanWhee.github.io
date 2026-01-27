import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
        Skills
      </h1>
      <p className="text-slate-500 mb-12">
        지금까지 사용해본 기술들입니다.
      </p>

      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {category.items.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 text-lg">
                      {skill.name}
                    </span>
                  </div>
                  {/* <p className="text-slate-600 text-sm leading-relaxed">
                    {skill.description}
                  </p> */}
                </div>
              ))}
            </div>
            
            <hr className="mt-10 border-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;