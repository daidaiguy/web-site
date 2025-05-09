'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Headers() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

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

  // 处理页面导航加载动画
  useEffect(() => {
    const handleLinkClick = () => {
      setIsLoading(true);
    };

    // 添加一些模拟的路由监听，真实项目中应使用Next.js的路由事件
    document.addEventListener('click', function(e) {
      const el = e.target as HTMLElement;
      if (el.tagName === 'A' && el.getAttribute('href')?.startsWith('/')) {
        handleLinkClick();
        // 模拟路由延迟
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    });

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // 判断链接是否为当前页面
  const isActive = (path: string) => {
    if (path === '/') return pathname === path;
    return pathname?.startsWith(path);
  };

  return (
    <>
      {/* 加载提示 */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[60] bg-white/70 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">内容加载中...</p>
          </div>
        </div>
      )}

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-white/80 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <Link 
              href="/" 
              className="flex items-center group"
              aria-label="首页"
            >
              <div className="font-bold text-xl sm:text-2xl site-title-en transition-all duration-300 group-hover:scale-105">
                JINDIAN&apos;S WEB
              </div>
            </Link>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-12 mr-6">
                <li className="group relative">
                  <Link
                    href="/articles"
                    className={`nav-link relative text-base px-1 py-1 transition-all duration-300 hover:text-orange-500 
                      ${isActive('/articles') ? 'text-orange-500 font-bold' : 'text-gray-600'}`}
                    aria-label="浏览所有文章"
                    aria-current={isActive('/articles') ? 'page' : undefined}
                  >
                    文章
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 
                      ${isActive('/articles') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    href="/about"
                    className={`nav-link relative text-base px-1 py-1 transition-all duration-300 hover:text-orange-500
                      ${isActive('/about') ? 'text-orange-500 font-bold' : 'text-gray-600'}`}
                    aria-label="了解作者信息"
                    aria-current={isActive('/about') ? 'page' : undefined}
                  >
                    关于
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300
                      ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    href="/contact"
                    className={`nav-link relative text-base px-1 py-1 transition-all duration-300 hover:text-orange-500
                      ${isActive('/contact') ? 'text-orange-500 font-bold' : 'text-gray-600'}`}
                    aria-label="联系我们"
                    aria-current={isActive('/contact') ? 'page' : undefined}
                  >
                    联系
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300
                      ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              </ul>
              
              {/* 搜索按钮 */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105"
                aria-label="打开搜索"
                aria-expanded={searchOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors mr-2 transform active:scale-90"
                aria-label="打开搜索"
                aria-expanded={searchOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
              
              <button 
                className="flex flex-col space-y-1.5 p-2 rounded-md hover:bg-gray-100 transition-colors transform active:scale-90"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="打开菜单"
                aria-expanded={mobileMenuOpen}
              >
                <span className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </nav>

          {/* 搜索框 */}
          <div className={`transition-all duration-300 overflow-hidden ${
            searchOpen ? 'max-h-20 opacity-100 my-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex items-center border-2 border-blue-500 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="搜索文章、创意..."
                className="flex-1 px-4 py-2 focus:outline-none"
                aria-label="搜索框"
              />
              <button 
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors transform active:scale-95"
                aria-label="搜索"
              >
                搜索
              </button>
            </div>
          </div>

          {/* 移动端导航菜单 */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-72 opacity-100 my-4' : 'max-h-0 opacity-0'
          }`}>
            <nav>
              <ul className="flex flex-col space-y-4 py-4 rounded-lg bg-white shadow-md p-2">
                <li>
                  <Link 
                    href="/articles" 
                    className={`nav-link block py-2 px-3 rounded-md transition-all duration-200 hover:bg-orange-50 
                      ${isActive('/articles') ? 'text-orange-500 font-bold bg-orange-50' : 'text-gray-600'}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="浏览所有文章"
                    aria-current={isActive('/articles') ? 'page' : undefined}
                  >
                    文章
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className={`nav-link block py-2 px-3 rounded-md transition-all duration-200 hover:bg-orange-50
                      ${isActive('/about') ? 'text-orange-500 font-bold bg-orange-50' : 'text-gray-600'}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="了解作者信息"
                    aria-current={isActive('/about') ? 'page' : undefined}
                  >
                    关于
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className={`nav-link block py-2 px-3 rounded-md transition-all duration-200 hover:bg-orange-50
                      ${isActive('/contact') ? 'text-orange-500 font-bold bg-orange-50' : 'text-gray-600'}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="联系我们"
                    aria-current={isActive('/contact') ? 'page' : undefined}
                  >
                    联系
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
} 