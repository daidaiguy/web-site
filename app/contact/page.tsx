import Image from 'next/image';
import Headers from '../components/Headers';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-12">联系我</h1>
          
          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="/images/lianxi.jpg"
              alt="联系方式"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 