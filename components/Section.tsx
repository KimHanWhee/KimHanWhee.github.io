import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  title, 
  subtitle,
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-primary text-white' : 'bg-transparent text-slate-800'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`max-w-2xl mx-auto text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
            <div className={`w-20 h-1 mx-auto mt-6 rounded ${dark ? 'bg-secondary' : 'bg-secondary'}`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
