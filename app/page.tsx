import Footer from "./components/Footer";
import Headers from "./components/Headers";
import ArticleSlider from "./components/ArticleSlider";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      <Headers />
      
      <main className="flex-grow pt-16">
        <section className="py-32 text-center relative">
          <div className="container mx-auto px-4">
            <div className="mb-10 inline-block title-container">
              <div className="relative">
                <div className="art-title-glow" data-text="Jindian"></div>
                <h1 className="art-title" data-text="Jindian">Jindian</h1>
                <div className="art-title-overlay" data-text="Jindian"></div>
              </div>
            </div>
            <div className="flex justify-center space-x-8 text-lg text-gray-600">
              <span>热爱</span>
              <span>·</span>
              <span>分享</span>
              <span>·</span>
              <span>探索</span>
            </div>
          </div>
          <div className="absolute -bottom-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-blue-50/30 pointer-events-none"></div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">最新文章</h2>
            
            <ArticleSlider />
            
            <div className="flex flex-wrap gap-4 py-4">
              <Link href="/articles" className="bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium px-5 py-2 rounded-md flex items-center transition-colors">
                <span>文章</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/about" className="bg-purple-50 hover:bg-purple-100 text-purple-800 font-medium px-5 py-2 rounded-md flex items-center transition-colors">
                <span>关于</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="bg-yellow-50 hover:bg-yellow-100 text-yellow-800 font-medium px-5 py-2 rounded-md flex items-center transition-colors">
                <span>联系</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
