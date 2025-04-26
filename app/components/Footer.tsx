import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-lg font-bold mb-4 md:mb-0 site-title">JINDIAN</div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">博客</Link>
            <Link href="/articles" className="hover:text-blue-600 transition-colors">文章</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">关于我</Link>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
            <i className="bi bi-github text-xl"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
            <i className="bi bi-twitter-x text-xl"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
            <i className="bi bi-linkedin text-xl"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
            <i className="bi bi-envelope-fill text-xl"></i>
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2024 金典 版权所有</p>
          <p className="mt-2">使用 Next.js 搭建</p>
        </div>
      </div>
    </footer>
  );
} 