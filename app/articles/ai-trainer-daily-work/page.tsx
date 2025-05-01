import Link from 'next/link';
import Image from 'next/image';

export default function AITrainerDailyWorkArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 文章头部 */}
      <div className="pt-32 pb-10 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Link href="/articles" className="text-blue-600 hover:text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回文章列表
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">AI训练师的日常工作与挑战</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">2024-03-01</span>
            <span className="mr-4">·</span>
            <span className="mr-4">作者：金典</span>
            <span className="mr-4">·</span>
            <span>阅读时间：约12分钟</span>
          </div>
          <p className="text-xl text-gray-700">AI训练师需要面对哪些日常挑战？如何有效地对AI模型进行训练和优化？本文将分享AI训练师的工作经验和实用技巧，帮助你理解这个新兴职业的核心价值。</p>
        </div>
      </div>

      {/* 文章主体 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/fallback.jpg"
            alt="AI训练师的日常工作与挑战"
            fill
            className="object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          {/* 此处是文章内容区域，您可以根据需要填写具体内容 */}
          <p>这里是文章的具体内容。您可以在此处填写关于AI训练师日常工作与挑战的详细分析和见解。</p>
          
          <h2>AI训练师的主要职责</h2>
          <p>请在这里描述AI训练师的主要工作内容和职责范围。</p>
          
          <h2>数据收集与处理的挑战</h2>
          <p>请在这里分析AI训练过程中数据收集和处理面临的主要挑战。</p>
          
          <h2>模型训练与优化技巧</h2>
          <p>请在这里分享AI模型训练和优化的实用技巧和方法。</p>
          
          <h2>常见问题及解决方案</h2>
          <p>请在这里列举AI训练过程中常见的问题，以及相应的解决方案。</p>
          
          <h2>AI训练师的职业发展</h2>
          <p>请在这里分析AI训练师这一职业的未来发展前景和职业规划建议。</p>
        </article>

        {/* 文章页脚 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">发布于：2024-03-01</p>
              <p className="text-gray-600">最后更新：2024-03-10</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                收藏
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                分享
              </button>
            </div>
          </div>
        </div>

        {/* 相关推荐 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">相关推荐</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/design-to-ai" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src="/images/article1.jpg" alt="AI学坏了，开始刻意讨好人类了？！" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600">AI学坏了，开始刻意讨好人类了？！</h4>
                  <p className="text-gray-600">从一名设计师到AI训练师的转型之路，分享我在大厂的经历、转型的思考以及对AI行业的展望。</p>
                </div>
              </div>
            </Link>
            <Link href="/articles/design-trends" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src="/images/article2.jpg" alt="互联网产品设计的未来趋势" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600">互联网产品设计的未来趋势</h4>
                  <p className="text-gray-600">探讨人工智能、元宇宙和Web3对互联网产品设计的影响，以及设计师如何应对这些技术变革。</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 