'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const demoArticles: Article[] = [
  {
    id: 1,
    title: '从设计师到AI训练师的职业转型',
    excerpt: '从一名设计师到AI训练师的转型之路，分享我在大厂的经历、转型的思考以及对AI行业的展望。',
    date: '2024-03-15',
    author: '金典',
    image: '/images/article1.jpg',
    slug: '/articles/design-to-ai'
  },
  {
    id: 2,
    title: '互联网产品设计的未来趋势',
    excerpt: '探讨人工智能、元宇宙和Web3对互联网产品设计的影响，以及设计师如何应对这些技术变革。',
    date: '2024-03-08',
    author: '金典',
    image: '/images/article2.jpg',
    slug: '/articles/design-trends'
  },
  {
    id: 3,
    title: '深度解析用户体验设计原则',
    excerpt: '深入探讨用户体验设计的核心原则，从心理学角度分析用户行为与交互设计的关系。',
    date: '2024-02-28',
    author: '金典',
    image: '/images/article3.jpg',
    slug: '/articles/ux-principles'
  }
];

export default function ArticleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === demoArticles.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? demoArticles.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
      <div 
        ref={slideRef}
        className="relative h-[400px] md:h-[500px] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="absolute inset-0 flex">
          {demoArticles.map((article, index) => (
            <div 
              key={article.id}
              className="min-w-full h-full flex flex-col md:flex-row"
              style={{
                transform: `translateX(${index * 100}%)`
              }}
            >
              <div className="relative w-full md:w-1/2 h-48 md:h-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">图片加载中</span>
                </div>
                {article.image && (
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <span className="text-sm text-gray-500 mb-2">{article.date} · {article.author}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h3>
                <p className="text-gray-700 mb-6">{article.excerpt}</p>
                <Link 
                  href={article.slug}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                >
                  阅读全文
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 控制按钮 */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md z-10"
        aria-label="上一篇文章"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md z-10"
        aria-label="下一篇文章"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* 指示器 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {demoArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            aria-label={`切换到第${index + 1}篇文章`}
          />
        ))}
      </div>
    </div>
  );
} 