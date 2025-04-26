import Headers from "../components/Headers";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Articles() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Headers />
      
      <main className="flex-grow">
        {/* 标题区域 */}
        <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">文章</h1>
          <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
        </section>
        
        {/* 文章列表区域 */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="mb-16">
              <h2 className="text-3xl font-bold mb-3">
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  从设计师到AI训练师的职业转型
                </Link>
              </h2>
              <div className="text-sm text-gray-500 mb-6">2024-03-15 金典</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                从一名设计师到AI训练师的转型之路，分享我在大厂的经历、转型的思考以及对AI行业的展望。在这篇文章中，我将详细讲述我的职业转变过程中所面临的挑战、学到的经验以及对未来AI行业发展的一些思考。
              </p>
              <div className="flex items-center mb-12">
                <div className="flex-grow border-t border-gray-200"></div>
                <Link 
                  href="#" 
                  className="mx-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                  阅读全文
                </Link>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </article>
            
            <article className="mb-16">
              <h2 className="text-3xl font-bold mb-3">
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  互联网产品设计的未来趋势
                </Link>
              </h2>
              <div className="text-sm text-gray-500 mb-6">2024-03-08 金典</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                探讨人工智能、元宇宙和Web3对互联网产品设计的影响，以及设计师如何应对这些技术变革。随着技术的不断发展，产品设计也在发生翻天覆地的变化，本文将探讨这些变革对设计师提出的新要求和创造的新机遇。
              </p>
              <div className="flex items-center mb-12">
                <div className="flex-grow border-t border-gray-200"></div>
                <Link 
                  href="#" 
                  className="mx-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                  阅读全文
                </Link>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </article>
            
            <article>
              <h2 className="text-3xl font-bold mb-3">
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  如何利用AI工具提升创作效率
                </Link>
              </h2>
              <div className="text-sm text-gray-500 mb-6">2024-02-20 金典</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                分享我在日常工作中使用的AI工具和方法，帮助内容创作者和设计师提高工作效率。从AI绘图、文本生成到自动化工作流，这些工具正在彻底改变我们的工作方式。
              </p>
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <Link 
                  href="#" 
                  className="mx-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                  阅读全文
                </Link>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 