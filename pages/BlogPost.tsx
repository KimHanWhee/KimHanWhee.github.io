import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPost } from "../utils/posts";
import { ArrowLeft, Calendar, Tag, ChevronUp } from "lucide-react";
import Giscus from "@/components/Giscus";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w가-힣-]/g, "");
    headings.push({ id, text, level });
  }
  return headings;
}

function addIdsToHeadings(html: string): string {
  return html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level, attrs, content) => {
      const text = content.replace(/<[^>]+>/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w가-힣-]/g, "");
      return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
    },
  );
}

const TableOfContents: React.FC<{ headings: Heading[] }> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
        목차
      </p>
      <ul className="space-y-1">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={[
                "block text-sm leading-snug transition-colors py-0.5 break-words",
                level === 3 ? "pl-3" : "",
                activeId === id
                  ? "text-secondary font-semibold"
                  : "text-slate-400 hover:text-slate-700",
              ].join(" ")}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPost(id) : undefined;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const headings = extractHeadings(post.content);
  const contentWithIds = addIdsToHeadings(post.content);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary">
      {/* Header Section */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <div className="text-9xl font-bold font-mono text-slate-900 tracking-tighter"></div>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Tech Notes
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
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
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* TOC — 글 오른쪽 바깥에 절대 위치 */}
        <aside className="hidden xl:block absolute top-0 left-full pl-8 w-52 h-full">
          <TableOfContents headings={headings} />
        </aside>

        {/* Article */}
        <div>
          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl">
            <style>{`
              pre {
                position: relative;
                padding-top: 2.5rem !important;
                border-radius: 0.75rem !important;
                background-color: #1e293b !important;
                font-family: 'JetBrains Mono', monospace !important;
                overflow-x: auto;
              }
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
                border-left-color: #3b82f6;
                background-color: #f8fafc;
                padding: 1rem 1.5rem;
                border-radius: 0 0.5rem 0.5rem 0;
              }
              blockquote p:first-of-type::before { content: ''; }
              blockquote p:last-of-type::after  { content: ''; }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
          </article>
        </div>

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
