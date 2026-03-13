import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPost } from "../utils/posts";
import { ArrowLeft, Calendar, Tag, ChevronUp } from "lucide-react";
import Giscus from "@/components/Giscus";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPost(id) : undefined;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary">
      {/* Header Section */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
          {/* Background Deco */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <div className="text-9xl font-bold font-mono text-slate-900 tracking-tighter">
              {/* {"<DEV/>"} */}
            </div>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Tech Notes
          </Link>

          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-secondary" />
              <span className="font-medium font-mono text-sm">{post.date}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-3 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm"
                >
                  <Tag size={12} className="mr-1.5 text-slate-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl">
          <style>{`
            /* Custom syntax highlighting look for code blocks */
            pre {
              position: relative;
              padding-top: 2.5rem !important;
              border-radius: 0.75rem !important;
              background-color: #1e293b !important; /* slate-800 */
              font-family: 'JetBrains Mono', monospace !important;
              overflow-x: auto;
            }
            /* MacOS like window dots */
            pre::before {
              content: '';
              position: absolute;
              top: 1rem;
              left: 1rem;
              width: 0.75rem;
              height: 0.75rem;
              border-radius: 50%;
              background-color: #ff5f56;
              box-shadow: 1.25rem 0 0 #ffbd2e, 2.5rem 0 0 #27c93f;
            }
            code {
               font-family: 'JetBrains Mono', monospace;
            }
            blockquote {
              font-style: normal;
              font-weight: 500;
              border-left-width: 4px;
              border-left-color: #3b82f6; /* secondary */
              background-color: #f8fafc;
              padding: 1rem 1.5rem;
              border-radius: 0 0.5rem 0.5rem 0;
            }
            blockquote p:first-of-type::before {
              content: '';
            }
            blockquote p:last-of-type::after {
              content: '';
            }
          `}</style>

          {/* 
            Rendering HTML content. 
            In a real app, use a sanitizer or a proper Markdown parser.
          */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          <Link
            to="/blog"
            className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            다른 글 보러가기
          </Link>
        </div>
      </div>
      <Giscus term={id} />
    </div>
  );
};

export default BlogPost;
