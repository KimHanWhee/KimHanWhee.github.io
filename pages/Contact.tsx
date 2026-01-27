import React, { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "hanwhee2@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
        Contact <span className="text-sky-400">.</span>
      </h1>

      <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12">
        <p>
          <br />
          궁금한 점이 있으시다면 편하게 연락주세요💬
        </p>
      </div>

      <div className="mb-12">
        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Email</label>
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded">
            {email}
          </span>
          <button 
            onClick={handleCopyEmail}
            className="p-2 text-slate-400 hover:text-sky-600 transition-colors"
            aria-label="Copy email address"
          >
            {copied ? <Check size={20} className="text-sky-500" /> : <Copy size={20} />}
          </button>
        </div>
      </div>

      <div>
        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4">Social</label>
        <div className="flex flex-col space-y-3 items-start">
           <a 
             href="https://github.com/KimHanWhee" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2"
           >
             Github <ExternalLink size={14} className="opacity-50" />
           </a>
           {/* <a 
             href="https://linkedin.com/in/hanwhee" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-blue-400 underline-offset-4 decoration-2"
           >
             LinkedIn <ExternalLink size={14} className="opacity-50" />
           </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;