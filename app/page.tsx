import Footer from "./components/Footer";
import Headers from "./components/Headers";
import ArticleSlider from "./components/ArticleSlider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      <Headers />
      
      <main className="flex-grow">
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
              <span>博客</span>
              <span>·</span>
              <span>设计</span>
              <span>·</span>
              <span>分享</span>
              <span>·</span>
              <span>创意</span>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">最新文章</h2>
            
            <ArticleSlider />
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
