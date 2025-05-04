'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '../data/articles';

export default function ArticleSlider() {
  const articles = getAllArticles();
  
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-48 md:h-[500px] overflow-hidden">
          <Image 
            src="/images/zuixinwenzhang.png"
            alt="文章专栏"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">最新文章专栏</h3>
          
          <div className="space-y-4 mb-8">
            {articles.map((article, index) => {
              // 为每篇文章分配不同的边框颜色
              const borderColors = ['border-blue-600', 'border-green-600', 'border-purple-600', 'border-yellow-600'];
              const borderColor = borderColors[index % borderColors.length];
              
              return (
                <div key={article.id} className={`border-l-4 ${borderColor} pl-4`}>
                  <Link href={`/articles/${article.id}`} className="block hover:text-blue-600 transition-colors">
                    <h4 className="font-bold text-lg">{article.title}</h4>
                    <p className="text-gray-500 text-sm">{article.date} · {article.author}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          
          <Link 
            href="/articles"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
          >
            查看全部文章
          </Link>
        </div>
      </div>
    </div>
  );
} 