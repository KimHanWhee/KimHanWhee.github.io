import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Instagram, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900">
      
      {/* Blog Style Navbar */}
      <header className="w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity">
          Whee<span className="text-sky-500">'s</span> Log<span className="text-sky-500">.</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.filter(item => item.label !== 'Home').map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3'
                    : 'text-slate-500 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a 
            href="https://github.com/KimHanWhee" 
            target="_blank" 
            rel="noreferrer" 
            className="relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200"
          >
            <Github size={20} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
              Hanwhee's GitHub
            </span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-2xl font-bold ${
                    isActive ? 'text-sky-600' : 'text-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content - Centered & Narrower for reading experience */}
      <main className="flex-grow w-full max-w-3xl mx-auto px-6 pb-20">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <footer className="w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <div>
          © {new Date().getFullYear()} Hanwhee Kim.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/KimHanWhee" className="hover:text-slate-600"><Github size={16} /></a>
          {/* <a href="mailto:hanwhee2@gmail.com" className="hover:text-slate-600">Email</a> */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;