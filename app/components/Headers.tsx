'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Headers() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 处理页面滚动效果
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // 添加星星鼠标指针效果
    const navLinks = document.querySelectorAll('.nav-link');
    
    const handleMouseEnter = () => {
      document.body.classList.add('nav-star-cursor');
    };
    
    const handleMouseLeave = () => {
      document.body.classList.remove('nav-star-cursor');
    };
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-white/80 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="font-bold text-xl sm:text-2xl site-title-en transition-all duration-300 group-hover:scale-105">
              JINDIAN&apos;S WEB
            </div>
          </Link>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* 桌面端导航 */}
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/" className="nav-link">首页</Link></li>
            <li><Link href="/articles" className="nav-link">文章</Link></li>
            <li><Link href="/about" className="nav-link">关于我</Link></li>
          </ul>
        </nav>

        {/* 移动端导航菜单 */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-60 opacity-100 my-4' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col space-y-4 py-4">
            <li><Link href="/" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>首页</Link></li>
            <li><Link href="/articles" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>文章</Link></li>
            <li><Link href="/about" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>关于我</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
} 