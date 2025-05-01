'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleSlider() {
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
            <div className="border-l-4 border-blue-600 pl-4">
              <Link href="/articles/design-to-ai" className="block hover:text-blue-600 transition-colors">
                <h4 className="font-bold text-lg">AI学坏了，开始刻意讨好人类了？！</h4>
                <p className="text-gray-500 text-sm">2024-03-15 · 金典</p>
              </Link>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <Link href="/articles/design-trends" className="block hover:text-blue-600 transition-colors">
                <h4 className="font-bold text-lg">互联网产品设计的未来趋势</h4>
                <p className="text-gray-500 text-sm">2024-03-08 · 金典</p>
              </Link>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4">
              <Link href="/articles/ux-principles" className="block hover:text-blue-600 transition-colors">
                <h4 className="font-bold text-lg">深度解析用户体验设计原则</h4>
                <p className="text-gray-500 text-sm">2024-02-28 · 金典</p>
              </Link>
            </div>
            
            <div className="border-l-4 border-yellow-600 pl-4">
              <Link href="/articles/ai-trainer-daily-work" className="block hover:text-blue-600 transition-colors">
                <h4 className="font-bold text-lg">AI训练师的日常工作与挑战</h4>
                <p className="text-gray-500 text-sm">2024-03-01 · 金典</p>
              </Link>
            </div>
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