import React from 'react';
import { Link } from 'react-router-dom';
import { loadPosts } from '../utils/posts';

const Blog: React.FC = () => {
  const posts = loadPosts();

  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
        Blog <span className="text-sky-400">.</span>
      </h1>
      <p className="text-slate-500 mb-12">
        생각을 정리하고 배운 것을 공유합니다.
      </p>

      <div className="flex flex-col space-y-10">
        {posts.map((post) => (
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
                {post.tags.map(tag => (
                   <span key={tag} className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                     #{tag}
                   </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;