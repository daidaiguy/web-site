import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 px-4 border-t border-gray-200" role="contentinfo" aria-label="网站页脚">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* 网站标题与介绍 */}
          <div className="col-span-1">
            <div className="text-lg font-bold mb-4 site-title">JINDIAN</div>
            <p className="text-sm text-gray-500 mb-4">热爱·分享·创意</p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="GitHub主页">
                <i className="bi bi-github text-xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Twitter主页">
                <i className="bi bi-twitter-x text-xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="LinkedIn主页">
                <i className="bi bi-linkedin text-xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="邮件联系">
                <i className="bi bi-envelope-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* 核心导航 */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">网站导航</h3>
            <nav aria-label="页脚导航">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/articles" 
                    className="hover:text-orange-500 transition-colors inline-block py-1 border-b border-transparent hover:border-orange-500"
                    aria-label="浏览所有文章分类"
                  >
                    文章
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="hover:text-orange-500 transition-colors inline-block py-1 border-b border-transparent hover:border-orange-500"
                    aria-label="了解作者介绍"
                  >
                    关于
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="hover:text-orange-500 transition-colors inline-block py-1 border-b border-transparent hover:border-orange-500"
                    aria-label="联系我们"
                  >
                    联系
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* 热门标签 */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">热门标签</h3>
            <div className="flex flex-wrap gap-2" role="navigation" aria-label="热门标签导航">
              <Link 
                href="#" 
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-orange-200 hover:text-orange-800 transition-colors transform hover:scale-105"
                aria-label="查看关于用户体验设计的所有文章"
              >
                用户体验设计
              </Link>
              <Link 
                href="#" 
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-orange-200 hover:text-orange-800 transition-colors transform hover:scale-105"
                aria-label="查看关于AI训练师的所有文章"
              >
                AI训练师
              </Link>
              <Link 
                href="#" 
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-orange-200 hover:text-orange-800 transition-colors transform hover:scale-105"
                aria-label="查看关于职业转型的所有文章"
              >
                职业转型
              </Link>
              <Link 
                href="#" 
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-orange-200 hover:text-orange-800 transition-colors transform hover:scale-105"
                aria-label="查看关于创意思考的所有文章"
              >
                创意思考
              </Link>
            </div>
          </div>
          
          {/* 推荐阅读 */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">推荐阅读</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="#" 
                  className="hover:text-orange-500 transition-colors block py-1 border-l-2 border-transparent hover:border-orange-500 pl-2 hover:pl-3"
                  aria-label="阅读职业转型相关文章"
                >
                  从设计师到AI训练师的职业转型
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-orange-500 transition-colors block py-1 border-l-2 border-transparent hover:border-orange-500 pl-2 hover:pl-3"
                  aria-label="阅读用户体验设计相关文章"
                >
                  深度解析用户体验设计原则
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-orange-500 transition-colors block py-1 border-l-2 border-transparent hover:border-orange-500 pl-2 hover:pl-3"
                  aria-label="阅读AI工具相关文章"
                >
                  如何利用AI工具提升创作效率
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 金典 版权所有</p>
            <p className="mt-2">使用 <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Next.js</a> 搭建</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 