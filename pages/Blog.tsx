import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { loadPosts } from '../utils/posts';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

const POSTS_PER_PAGE = 5;

const Blog: React.FC = () => {
  const posts = loadPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 전체 태그 목록 (중복 제거, 사용 횟수 포함)
  const allTags = useMemo(() => {
    const tagCount: Record<string, number> = {};
    posts.forEach(post => {
      post.tags?.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  // 검색 + 태그 필터 적용
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === null ||
        post.tags?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(prev => prev === tag ? null : tag);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag(null);
    setCurrentPage(1);
  };

  const isFiltered = searchQuery.trim() !== '' || selectedTag !== null;

  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
        Blog <span className="text-sky-400">.</span>
      </h1>
      <p className="text-slate-500 mb-8">
        생각을 정리하고 배운 것을 공유합니다.
      </p>

      {/* 검색 입력 */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="제목으로 검색..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* 태그 필터 */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => handleTagSelect(tag)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                selectedTag === tag
                  ? 'bg-sky-500 text-white border-sky-500'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-500'
              }`}
            >
              #{tag}
              <span className={`ml-1 ${selectedTag === tag ? 'text-sky-100' : 'text-slate-400'}`}>
                {count}
              </span>
            </button>
          ))}
          {isFiltered && (
            <button
              onClick={clearFilters}
              className="text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors flex items-center gap-1"
            >
              <X size={11} />
              초기화
            </button>
          )}
        </div>
      )}

      {/* 검색 결과 수 */}
      {isFiltered && (
        <p className="text-sm text-slate-400 mb-6">
          {filteredPosts.length}개의 글
          {selectedTag && <span> · <span className="text-sky-500">#{selectedTag}</span></span>}
          {searchQuery && <span> · "<span className="text-slate-600">{searchQuery}</span>"</span>}
        </p>
      )}

      {/* 포스트 목록 */}
      {currentPosts.length > 0 ? (
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
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map(tag => (
                    <span
                      key={tag}
                      onClick={(e) => { e.preventDefault(); handleTagSelect(tag); }}
                      className={`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        selectedTag === tag
                          ? 'bg-sky-100 text-sky-600'
                          : 'text-slate-400 bg-slate-50 hover:bg-sky-50 hover:text-sky-500'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <Search size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">검색 결과가 없습니다.</p>
        </div>
      )}

      {/* 페이지네이션 */}
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
