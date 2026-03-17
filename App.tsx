import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

const LOADING_DURATION = 3000; // ms
const DOT_INTERVAL = 400; // ms

const LoadingScreen: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, DOT_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* 이모티콘 + 그림자 */}
      <div className="flex flex-col items-center mb-6">
        <style>{`
          @keyframes emoji-shadow {
            0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
            50%       { transform: scaleX(1);   opacity: 0.35; }
          }
        `}</style>
        <span className="text-5xl inline-block animate-[bounce_2s_infinite] select-none">
          😎
        </span>
        <div
          className="w-10 h-2 bg-slate-400 rounded-full blur-sm mt-1"
          style={{
            animation: "emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite",
          }}
        />
      </div>

      {/* Now Loading + 점 애니메이션 */}
      <span className="text-xl md:text-2xl font-mono font-bold text-sky-400 select-none tracking-wide">
        Now Coding
        <span style={{ opacity: dotCount >= 1 ? 1 : 0 }}>.</span>
        <span style={{ opacity: dotCount >= 2 ? 1 : 0 }}>.</span>
        <span style={{ opacity: dotCount >= 3 ? 1 : 0 }}>.</span>
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisible(false), LOADING_DURATION);
    const removeTimer = setTimeout(
      () => setIsLoading(false),
      LOADING_DURATION + 500,
    );
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen visible={visible} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
