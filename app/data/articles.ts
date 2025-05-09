/**
 * 文章数据
 * 此文件包含所有文章的元数据，用于在不同页面间共享和同步数据
 */

/**
 * 文章数据类型定义
 */
export interface ArticleData {
  id: string;
  title: string;
  date: string;
  lastUpdated: string;
  author: string;
  readingTime: string;
  summary: string;
  coverImage: string;
  altText: string;
}

export const articlesData: ArticleData[] = [
  {
    id: 'design-to-ai',
    title: 'AI学坏了，开始刻意讨好人类了？！',
    date: '2025-4-25',
    lastUpdated: '2024-4-28',
    author: '金典',
    readingTime: '约7分钟',
    summary: '大家有没有发现，现在有些 AI 特别会"讨好"人，比如不管问啥都先夸一顿，或者顺着你的话说。这背后和强化学习技术的应用有关，今天咱们就来聊聊这些现象、背后的问题以及解决思路。',
    coverImage: '/images/aizhenchnegjiaohu2.png',
    altText: 'AI与人类的深度交互'
  },
  {
    id: 'design-trends',
    title: '互联网产品设计的未来趋势',
    date: '2024-03-08',
    lastUpdated: '2024-03-12',
    author: '金典',
    readingTime: '约12分钟',
    summary: '探讨人工智能、元宇宙和Web3对互联网产品设计的影响，以及设计师如何应对这些技术变革。随着技术的不断发展，产品设计也在发生翻天覆地的变化，本文将探讨这些变革对设计师提出的新要求和创造的新机遇。',
    coverImage: '/images/article2.jpg',
    altText: '互联网产品设计的未来趋势'
  },
  {
    id: 'ux-principles',
    title: '深度解析用户体验设计原则',
    date: '2024-02-28',
    lastUpdated: '2024-03-05',
    author: '金典',
    readingTime: '约10分钟',
    summary: '深入探讨用户体验设计的核心原则，从心理学角度分析用户行为与交互设计的关系。本文将带你了解用户体验设计的本质，以及如何通过理解用户心理来创造更好的产品体验。',
    coverImage: '/images/article3.jpg',
    altText: '深度解析用户体验设计原则'
  },
  {
    id: 'ai-trainer-daily-work',
    title: '你了解 AI 训练师吗？',
    date: '2025-01-23',
    lastUpdated: '2025-02-21',
    author: '金典',
    readingTime: '约15分钟',
    summary: '在人工智能早已融入日常生活的今天，当你与智能客服顺畅交流、用手机拍照搜题秒出解析、甚至收到个性化推荐的购物清单时，或许不曾想过：这些 "懂你" 的 AI 背后，有一群默默打造 "AI 大脑" 的幕后功臣 ——AI 训练师。',
    coverImage: '/images/fallback.jpg',
    altText: 'AI训练师的工作日常'
  }
];

/**
 * 根据文章ID获取文章数据
 * @param {string} id - 文章ID
 * @returns {ArticleData|null} - 文章数据或null
 */
export function getArticleById(id: string): ArticleData | null {
  return articlesData.find(article => article.id === id) || null;
}

/**
 * 获取所有文章数据
 * @returns {ArticleData[]} - 文章数据数组
 */
export function getAllArticles(): ArticleData[] {
  return articlesData;
} 