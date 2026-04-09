import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPost, loadPosts } from "../utils/posts";
import { BlogPost as BlogPostType } from "../types";
import {
  ArrowLeft,
  Calendar,
  Tag,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

const PAGE_SIZE = 3;

const OtherPosts: React.FC<{ currentId: string }> = ({ currentId }) => {
  const all = loadPosts();
  const allPosts = all.filter((p) => p.id !== currentId);
  // 현재 글 기준으로 가장 가까운 글들이 있는 페이지를 초기값으로
  const currentIndex = all.findIndex((p) => p.id === currentId);
  const neighborIndex = all
    .filter((p) => p.id !== currentId)
    .findIndex((_, i) => i >= Math.max(0, currentIndex - 1));
  const [page, setPage] = useState(
    Math.max(0, Math.floor(Math.max(0, neighborIndex) / PAGE_SIZE)),
  );
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  const pagePosts = allPosts.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  if (allPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-10 border-t border-slate-100">
      <h2 className="text-lg font-bold text-primary mb-6">다른 글 보기</h2>
      <ul className="space-y-3">
        {pagePosts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-xl border border-slate-100 hover:border-secondary/30 hover:bg-slate-50 transition-colors group"
            >
              <span className="font-mono text-xs text-slate-400 shrink-0">
                {post.date}
              </span>
              <span className="font-semibold text-slate-700 group-hover:text-secondary transition-colors line-clamp-1 flex-1">
                {post.title}
              </span>
              <div className="flex gap-1.5 flex-wrap">
                {post.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-secondary/40 hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm text-slate-500 font-mono">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-secondary/40 hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
      <div className="flex justify-center mt-6">
        <Link
          to="/blog"
          className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-sky-500 transition-colors shadow-lg shadow-slate-900/20"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </div>
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
              {post.tags?.map((tag) => (
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
        <div className="overflow-x-hidden">
          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl">
            <style>{`
              pre {
                position: relative;
                padding-top: 2.5rem !important;
                border-radius: 0.75rem !important;
                background-color: #1e293b !important;
                font-family: 'JetBrains Mono', monospace !important;
                overflow-x: auto;
                max-width: 100%;
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

        {/* 다른 글 보기 */}
        {id && <OtherPosts currentId={id} />}

        {/* Footer Navigation */}
        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
      <Giscus term={id} />
    </div>
  );
};

export default BlogPost;
