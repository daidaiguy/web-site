import Headers from "../components/Headers";
import Footer from "../components/Footer";
import Link from "next/link";
import { getAllArticles, ArticleData } from "../data/articles";

export default function Articles() {
  const articles = getAllArticles();
  
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
            {articles.map((article: ArticleData, index: number) => (
              <article key={article.id} className={index < articles.length - 1 ? "mb-16" : ""}>
                <h2 className="text-3xl font-bold mb-3">
                  <Link href={`/articles/${article.id}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-500 mb-6">{article.date} {article.author}</div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {article.summary}
                </p>
                <div className="flex items-center mb-12">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <Link 
                    href={`/articles/${article.id}`}
                    className="mx-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                    阅读全文
                  </Link>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 