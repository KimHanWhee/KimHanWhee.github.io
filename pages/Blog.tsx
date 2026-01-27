import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadPosts } from '../utils/posts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const POSTS_PER_PAGE = 5;

const Blog: React.FC = () => {
  const posts = loadPosts();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
        Blog <span className="text-sky-400">.</span>
      </h1>
      <p className="text-slate-500 mb-12">
        생각을 정리하고 배운 것을 공유합니다.
      </p>

      <div className="flex flex-col space-y-10">
        {currentPosts.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.id}`} className="block">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono">
                {post.date}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                {post.description}
              </p>
              <div className="flex gap-2">
                {post.tags?.map(tag => (
                   <span key={tag} className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                     #{tag}
                   </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="이전 페이지"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-sky-500 text-white'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="다음 페이지"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;