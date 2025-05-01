import Link from 'next/link';
import Image from 'next/image';

export default function DesignToAIArticle() {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">AI训练师是什么？</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">2024-03-15</span>
            <span className="mr-4">·</span>
            <span className="mr-4">作者：金典</span>
            <span className="mr-4">·</span>
            <span>阅读时间：约15分钟</span>
          </div>
          <p className="text-xl text-gray-700">从一名设计师到AI训练师的转型之路，分享我在大厂的经历、转型的思考以及对AI行业的展望。在这篇文章中，我将详细讲述我的职业转变过程中所面临的挑战、学到的经验以及对未来AI行业发展的一些思考。</p>
        </div>
      </div>

      {/* 文章主体 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/article1.jpg"
            alt="从设计师到AI训练师的职业转型"
            fill
            className="object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          {/* 此处是文章内容区域，您可以根据需要填写具体内容 */}
          <p>这里是文章的具体内容。您可以在此处填写关于设计师转型为AI训练师的详细经历、思考和见解。</p>
          
          <h2>转型的契机</h2>
          <p>请在这里填写您转型为AI训练师的契机和背景。</p>
          
          <h2>从设计到AI的学习之路</h2>
          <p>请在这里描述您是如何学习AI相关知识和技能的。</p>
          
          <h2>在大厂的工作经历</h2>
          <p>请在这里分享您在大厂担任AI训练师的工作经历和感受。</p>
          
          <h2>AI行业的未来展望</h2>
          <p>请在这里分享您对AI行业未来发展的看法和展望。</p>
          
          <h2>给想要转型的设计师的建议</h2>
          <p>请在这里给想要向AI领域转型的设计师提供一些建议和指导。</p>
        </article>

        {/* 文章页脚 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">发布于：2024-03-15</p>
              <p className="text-gray-600">最后更新：2024-03-20</p>
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
            <Link href="/articles/design-trends" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src="/images/article2.jpg" alt="互联网产品设计的未来趋势" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600">互联网产品设计的未来趋势</h4>
                  <p className="text-gray-600">探讨人工智能、元宇宙和Web3对互联网产品设计的影响，以及设计师如何应对这些技术变革。随着技术的不断发展，产品设计也在发生翻天覆地的变化。</p>
                </div>
              </div>
            </Link>
            <Link href="/articles/ux-principles" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src="/images/article3.jpg" alt="深度解析用户体验设计原则" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600">深度解析用户体验设计原则</h4>
                  <p className="text-gray-600">深入探讨用户体验设计的核心原则，从心理学角度分析用户行为与交互设计的关系。本文将带你了解用户体验设计的本质。</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 