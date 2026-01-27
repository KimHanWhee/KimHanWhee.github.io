import React from 'react';
import { EDUCATION } from '../constants';
import { Link } from 'react-router-dom';

const Education: React.FC = () => {
  const educationItems = EDUCATION.filter(item => item.category === 'Education');
  const certifications = EDUCATION.filter(item => item.category === 'Certification');

  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
        Education & Certs
      </h1>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-6">
          Education
        </h2>
        <div className="space-y-10">
          {educationItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-32 flex-shrink-0 mb-1 md:mb-0">
                <span className="font-mono text-sm text-slate-400">{item.period}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  <a href={item.link} className="hover:underline">
                    {item.institution}
                  </a>
                </h3>
                <div className="text-slate-700 font-medium mb-3">
                  {item.degree}
                </div>
                <ul className="text-slate-600 text-sm space-y-1 list-disc list-outside pl-4">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-6">
          Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:gap-8 items-start">
              <div className="md:w-32 flex-shrink-0">
                <span className="font-mono text-sm text-slate-400">{item.period}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.institution}
                </h3>
                <p className="text-slate-600">
                  {item.details[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;