import Headers from "../components/Headers";
import Footer from "../components/Footer";
import Image from "next/image";

console.log("About page component loaded");

export default function About() {
  console.log("About page rendered");
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Headers />
      
      <main className="flex-grow">
        {/* 标题区域 */}
        <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">关于我</h1>
          <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
        </section>
        
        {/* 个人介绍区域 */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src="/image/myself.jpg" 
                    alt="个人照片" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold border-l-4 border-blue-500 pl-3">联系方式</h3>
                  <p className="flex items-center space-x-2">
                    <span className="font-medium">邮箱:</span>
                    <span className="text-gray-600">3775352319.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-medium">微信:</span>
                    <span className="text-gray-600">z17758936213</span>
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">关于金典</h2>
                <div className="prose max-w-none">
                  <p className="mb-4 leading-relaxed">
                    你好，我是金典，一名热爱创作和分享的内容创作者。我在人工智能领域有着一定的经验，喜欢探索新技术带来的可能性。
                  </p>
                  <p className="mb-4 leading-relaxed">
                    抱着一身热血，勇于探索新领域，喜欢学习新知识，从化学类工作转型为AI训练师，我会不断的进步，致力于探索这些新工具如何赋能。我相信AI将彻底改变我们的生活，也欢迎你与我一起大胆的向前走。
                  </p>
                  <p className="mb-8 leading-relaxed">
                    在这个网站上，我会分享我的专业见解、行业趋势分析以及一些实用技巧。希望这些内容能够为同样对设计和技术感兴趣的你提供一些启发。
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">专业技能</h3>
                  <ul className="list-disc pl-5 mb-8 space-y-2">
                    <li>AI训练与评测</li>
                    <li>沟通与培训</li>
                    <li>内容创作与策划</li>
                    <li>化学相关知识</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4">关于本站</h3>
                  <p className="leading-relaxed">
                    本网站使用Next.js构建，主要用于分享个人文章和相关信息。网站设计灵感来源于极简主义，注重内容的清晰呈现和良好的用户体验。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 