import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { loadPosts } from "../utils/posts";
import { ArrowRight } from "lucide-react";

const Main: React.FC = () => {
  const recentPosts = loadPosts().slice(0, 4);

  return (
    <div className="pt-4 md:pt-10 animate-fade-in-up">
      {/* Intro Header */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          BackEnd Developer Hanwhee
          <span className="inline-flex flex-col items-center align-bottom">
            <style>{`
              @keyframes emoji-shadow {
                0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
                50%       { transform: scaleX(1);   opacity: 0.35; }
              }
            `}</style>
            <span className="inline-block animate-[bounce_2s_infinite]">
              😎
            </span>
            <span
              className="w-8 h-1.5 bg-slate-900 rounded-full blur-sm"
              style={{
                animation: "emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite",
              }}
            />
          </span>
        </h1>

        <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed">
          <p>
            안녕하세요!{" "}
            <span className="font-bold text-slate-900 bg-mint px-1">
              백엔드 개발자 김한휘
            </span>
            입니다!
          </p>
          <p>
            스탠다드네트웍스에서 3년간 근무하며 대용량 트래픽 환경에서 자라며
            MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요.
          </p>
          <p>
            서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥
          </p>
        </div>
      </section>

      {/* Work History Section - List Style */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🌱</span>
          <h2 className="text-2xl font-bold bg-sky-100 px-2 leading-none">
            My Career
          </h2>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${
                index !== PROJECTS.length - 1 ? "border-b border-slate-100" : ""
              } hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`}
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {project.title.split("(")[0]}
                </h3>
              </div>
              <div className="flex flex-col md:items-end text-slate-500 text-sm md:text-base">
                <span className="font-medium text-slate-700">
                  {project.role}
                </span>
                <span className="text-xs md:text-sm font-mono mt-1 text-slate-400">
                  {project.period}
                </span>
              </div>
            </div>
          ))}

          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400">
            <div>
              <h3 className="text-lg font-bold">... To Be Continued...</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <h2 className="text-2xl font-bold bg-sky-100 px-2 leading-none">
                Recent Posts
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors"
            >
              전체보기 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex flex-col">
            {recentPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${
                  index !== recentPosts.length - 1
                    ? "border-b border-slate-100"
                    : ""
                } hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`}
              >
                <div className="mb-2 md:mb-0 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                    {post.description}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 md:ml-4">
                  {post.date}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Quick Links / Featured */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/skills"
          className="block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group"
        >
          <h3 className="font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center">
            Skills{" "}
            <ArrowRight
              size={16}
              className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
            />
          </h3>
          <p className="text-sm text-slate-500">
            지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️
          </p>
        </Link>
        <Link
          to="/education"
          className="block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group"
        >
          <h3 className="font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center">
            Education{" "}
            <ArrowRight
              size={16}
              className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
            />
          </h3>
          <p className="text-sm text-slate-500">
            개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Main;
