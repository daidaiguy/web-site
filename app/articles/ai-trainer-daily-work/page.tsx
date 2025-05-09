import Link from 'next/link';
import Image from 'next/image';
import { getArticleById, getAllArticles, ArticleData } from '../../data/articles';

export default function AITrainerDailyWorkArticle() {
  const articleId = 'ai-trainer-daily-work';
  const articleData = getArticleById(articleId);
  
  if (!articleData) {
    return <div>文章不存在</div>;
  }
  
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{articleData.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">{articleData.date}</span>
            <span className="mr-4">·</span>
            <span className="mr-4">作者：{articleData.author}</span>
            <span className="mr-4">·</span>
            <span>阅读时间：{articleData.readingTime}</span>
          </div>
          <p className="text-xl text-gray-700">{articleData.summary}</p>
        </div>
      </div>

      {/* 文章主体 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 主图 */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src={articleData.coverImage}
            alt={articleData.altText}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-white text-xl md:text-2xl font-bold">AI训练师：AI世界的启蒙老师</h2>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">在人工智能早已融入日常生活的今天，当你与智能客服顺畅交流、用手机拍照搜题秒出解析、甚至收到个性化推荐的购物清单时，或许不曾想过：这些 &ldquo;懂你&rdquo; 的 AI 背后，有一群默默打造 &ldquo;AI 大脑&rdquo; 的幕后功臣 ——AI 训练师。他们就像 AI 世界的 &ldquo;启蒙老师&rdquo;，用专业和耐心教会机器理解人类的语言与需求。今天，就让我们走进这个神秘的职业，看看他们如何让冰冷的代码拥有 &ldquo;智慧&rdquo;。</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">一、AI 训练师：AI 团队的 &ldquo;翻译官&rdquo; 与 &ldquo;质检师&rdquo;</h2>
          <p>如果把 AI 比作一个学生，那么 AI 训练师就是手把手教它 &ldquo;读懂世界&rdquo; 的老师。在 AI 团队里，他们连接着天马行空的产品构想和脚踏实地的数据落地，扮演着 &ldquo;翻译官&rdquo; 和 &ldquo;质检师&rdquo; 的双重角色。</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">1. 团队里的 &ldquo;关键桥梁&rdquo;</h3>
          <p>一个完整的 AI 团队通常有四类核心成员：</p>
          
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AI 产品经理</strong>：像 &ldquo;需求设计师&rdquo;，挖掘业务场景（比如让 AI 分析用户购买意图提升销量），明确模型要 &ldquo;学什么&rdquo;。</li>
              <li><strong>AI 算法工程师</strong>：是 &ldquo;技术架构师&rdquo;，选择模型框架、优化算法，决定 AI &ldquo;怎么学&rdquo;。</li>
              <li><strong>AI 训练师</strong>：充当 &ldquo;翻译官 + 质检师&rdquo;，把抽象的需求转化为可执行的标注规则，监管数据生产，确保 AI &ldquo;学对内容&rdquo;。</li>
              <li><strong>数据标注师</strong>：则是 &ldquo;基层执行者&rdquo;，按规则给数据打标签，让 AI &ldquo;学习素材&rdquo; 更精准。</li>
            </ul>
          </div>
          
          <p>举个生活中的例子：当产品经理说 &ldquo;我要让 AI 听懂用户的购车咨询&rdquo;，算法工程师选好模型后，训练师就要细化规则：&ldquo;用户说&lsquo;价格多少&rsquo;标&lsquo;强购买意图&rsquo;，&lsquo;再考虑一下&rsquo;标&lsquo;中&rsquo;，&lsquo;不需要&rsquo;标&lsquo;弱&rsquo;&rdquo;，然后监督标注师给上万条对话打标签，确保 AI &ldquo;学习资料&rdquo; 质量过硬。</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">2. 传统标注 vs 大模型标注：从 &ldquo;填鸭式&rdquo; 到 &ldquo;启发式&rdquo;</h3>
          <p>AI 训练师的工作可不是简单 &ldquo;打标签&rdquo;。对比传统数据标注，大模型时代的标注更像 &ldquo;培养一个能举一反三的学霸&rdquo;：</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">任务更灵活</h4>
              <p>传统标注像 &ldquo;流水线工人&rdquo;，标车牌、标病历，标准固定；大模型标注要应对开放场景，比如标问答逻辑、代码生成，规则随场景变（比如标 &ldquo;数学题解析&rdquo; 和 &ldquo;闲聊对话&rdquo; 规则完全不同）。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">质量要求更高</h4>
              <p>传统标注靠 &ldquo;量&rdquo; 堆效果，大模型标注靠 &ldquo;质&rdquo; 激发能力，比如用少量但多样的对话数据，让 AI 学会理解人类语言的 &ldquo;潜台词&rdquo;。</p>
            </div>
          </div>
          
          <p>团队更专业：传统标注多依赖第三方低价团队，大模型团队更愿意培养自己的 &ldquo;精锐部队&rdquo;，因为高质量标注数据是 AI 的 &ldquo;核心竞争力&rdquo;。</p>
          
          {/* 第一张图片位置 */}
          <div className="relative w-full h-[350px] my-12 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/fallback.jpg" 
              alt="AI训练团队协作示意图" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm">AI训练团队协作过程，从需求到数据再到模型的完整闭环</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">二、AI 训练师的日常：从 &ldquo;需求翻译&rdquo; 到 &ldquo;全流程闯关&rdquo;</h2>
          <p>AI 训练师的工作就像 &ldquo;闯关游戏&rdquo;，每个环节都需要 &ldquo;脑力 + 沟通力&rdquo; 双重在线。</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">1. 需求承接：把 &ldquo;模糊想法&rdquo; 变成 &ldquo;执行手册&rdquo;</h3>
          <p>当业务方说 &ldquo;我想要 AI 分析用户情绪&rdquo;，训练师会掏出 &ldquo;5W2H 神器&rdquo;：</p>
          
          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <ul className="list-none space-y-3">
              <li><strong>What</strong>：明确任务（标情绪类别：开心、生气、中立）。</li>
              <li><strong>Why</strong>：搞懂目的（帮客服优化回复策略）。</li>
              <li><strong>How</strong>：设计规则（&ldquo;用户说&lsquo;气死了&rsquo;标&lsquo;生气&rsquo;，&lsquo;不错&rsquo;标&lsquo;开心&rsquo;&rdquo;）。</li>
              <li><strong>How much</strong>：预估资源（需要多少数据？标 1000 条还是 10 万条？）。</li>
            </ul>
          </div>
          
          <p>这一步就像 &ldquo;翻译文言文&rdquo;，要把业务方的模糊需求写成标注员能看懂的 &ldquo;执行手册&rdquo;，比如标 &ldquo;购买意图&rdquo; 时，要明确 &ldquo;问价格 = 强意图，说&lsquo;太贵了&rsquo;= 弱意图&rdquo;，避免歧义。</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">2. 规则文档优化：先 &ldquo;试错&rdquo; 再 &ldquo;完善&rdquo;</h3>
          <p>光写规则还不够，训练师会先找几个标注员 &ldquo;试标&rdquo;：比如拿 10 条对话让他们标 &ldquo;购买意图&rdquo;，如果有人把 &ldquo;再看看&rdquo; 标 &ldquo;强&rdquo;，有人标 &ldquo;中&rdquo;，就说明规则不够细，需要补充 &ldquo;未明确拒绝但无具体行动的标&lsquo;中&rsquo;&rdquo;。这个过程像 &ldquo;老师批改作业&rdquo;，通过分析错误案例，把规则打磨得更精准。</p>
          
          {/* 第二张图片位置 */}
          <div className="relative w-full h-[300px] my-12 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/fallback.jpg" 
              alt="AI训练过程示意图" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm">AI训练师精细调整规则与数据质量的工作场景</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">3. 全流程管理：从 &ldquo;培训&rdquo; 到 &ldquo;质检&rdquo; 的闭环</h3>
          
          <div className="flex flex-col md:flex-row gap-4 my-6">
            <div className="bg-blue-50 p-4 rounded-lg md:w-1/3">
              <p className="font-semibold mb-2">前期</p>
              <p>培训标注员 &ldquo;吃透&rdquo; 规则，比如用具体对话案例讲解 &ldquo;强 / 中 / 弱&rdquo; 的区别，避免 &ldquo;理解偏差&rdquo;。</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg md:w-1/3">
              <p className="font-semibold mb-2">中期</p>
              <p>像 &ldquo;项目经理&rdquo; 一样分配任务（10 人团队，5 人标数据、3 人质检、2 人验收），随时解决标注员的疑问，监控进度，避免延期。</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg md:w-1/3">
              <p className="font-semibold mb-2">后期</p>
              <p>整理数据报告（比如标注准确率 95%，但 &ldquo;弱意图&rdquo; 标错率高 10%），交付前反复质检，确保 AI &ldquo;学习资料&rdquo; 无死角。</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">4. 项目复盘：让 AI &ldquo;越学越聪明&rdquo;</h3>
          <p>项目结束后，训练师会像 &ldquo;考试后总结错题&rdquo;：分析哪些数据标错率高（比如长对话中的 &ldquo;购买意图&rdquo; 容易漏标），哪些规则需要优化（比如增加 &ldquo;沉默超过 10 秒标&lsquo;弱意图&rsquo;&rdquo;），为下一次训练积累经验。</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">三、真实案例：当 AI 训练师遇到 &ldquo;购车对话标注&rdquo;</h2>
          <p>以某汽车厂商的需求为例：想让 AI 分析用户购车意图，提升销售效率。</p>
          
          <div className="bg-gray-100 p-6 rounded-lg my-6 border-l-4 border-blue-500">
            <ol className="list-decimal pl-4 space-y-4">
              <li>
                <strong>第一步</strong>：训练师发现原始通话记录长达 30-60 分钟，直接标注重量太大，于是按 &ldquo;话题结束 + 语气停顿&rdquo; 切成 2000 字左右的小段（比如把 &ldquo;聊价格&rdquo;&ldquo;聊配置&rdquo; 分成不同段落）。
              </li>
              <li>
                <strong>第二步</strong>：设计标注规则：&ldquo;问优惠政策 = 强意图&rdquo;&ldquo;说&lsquo;回去和家人商量&rsquo;= 中意图&rdquo;&ldquo;明确拒绝 = 弱意图&rdquo;，还安排 3 人同时标注同一数据，减少主观偏差（类似 &ldquo;三人阅卷取平均分&rdquo;）。
              </li>
              <li>
                <strong>第三步</strong>：质检时发现 &ldquo;用户说&lsquo;太贵了&rsquo;&rdquo; 有人标 &ldquo;弱&rdquo; 有人标 &ldquo;中&rdquo;，于是细化规则：&ldquo;抱怨价格但未拒绝 = 中，明确说&lsquo;买不起&rsquo;= 弱&rdquo;。
              </li>
            </ol>
          </div>
          
          <p>通过这样的 &ldquo;精雕细琢&rdquo;，AI 最终能精准识别用户的购买意愿，帮助销售团队 &ldquo;有的放矢&rdquo;。</p>
          
          {/* 第三张图片位置 */}
          <div className="relative w-full h-[350px] my-12 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/fallback.jpg" 
              alt="AI训练成果展示" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm">通过精细训练后，AI能够准确理解用户意图并做出相应响应</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">四、成为 AI 训练师：需要 &ldquo;耐心 + 脑力 + 沟通力&rdquo;</h2>
          <p>如果你觉得 AI 训练师的工作很 &ldquo;高大上&rdquo;，那你需要具备这些能力：</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">需求拆解能力</h4>
              <p>像 &ldquo;侦探&rdquo; 一样从模糊需求中提炼关键信息。</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">规则撰写能力</h4>
              <p>把专业知识转化为 &ldquo;接地气&rdquo; 的标注指南。</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">流程管理能力</h4>
              <p>协调团队、把控质量，确保数据按时按质交付。</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">持续学习能力</h4>
              <p>AI 技术更新快，要紧跟大模型趋势，比如学习 &ldquo;如何用少量数据提升模型效果&rdquo;。</p>
            </div>
          </div>
          
          <p>简单来说，他们既要懂业务、懂数据，还要会 &ldquo;教&rdquo; 机器理解人类的 &ldquo;言外之意&rdquo;，是典型的 &ldquo;复合型选手&rdquo;。</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">五、结语：AI 训练师，让机器更 &ldquo;懂&rdquo; 人类</h2>
          <p className="text-lg font-medium bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            从让 AI 听懂 &ldquo;妈妈的唠叨&rdquo; 到理解 &ldquo;用户的潜在需求&rdquo;，AI 训练师用细致的工作赋予机器 &ldquo;理解世界&rdquo; 的能力。他们或许不像算法工程师那样 &ldquo;高大上&rdquo;，也不像产品经理那样 &ldquo;抛头露面&rdquo;，但却是 AI 从 &ldquo;笨拙&rdquo; 到 &ldquo;智能&rdquo; 的关键推手。下次当你感叹 AI &ldquo;真懂我&rdquo; 时，别忘了背后有一群默默付出的 AI 训练师，他们才是 AI 世界里的 &ldquo;灵魂工程师&rdquo;。
          </p>
          
          <p>如果你对 AI 如何 &ldquo;学说话、学思考&rdquo; 充满好奇，那么 AI 训练师的工作或许能为你打开一扇窗 —— 原来，让机器更 &ldquo;人性化&rdquo; 的秘密，就藏在每一条精心标注的数据里。</p>
        </article>

        {/* 文章页脚 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">发布于：{articleData.date}</p>
              <p className="text-gray-600">最后更新：{articleData.lastUpdated}</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                收藏
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
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
            {getAllArticles()
              .filter((article: ArticleData) => article.id !== articleId)
              .slice(0, 2)
              .map((article: ArticleData) => (
                <Link key={article.id} href={`/articles/${article.id}`} className="block group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image src={article.coverImage} alt={article.altText} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600">{article.title}</h4>
                      <p className="text-gray-600">{article.summary.length > 120 ? article.summary.slice(0, 120) + '...' : article.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 