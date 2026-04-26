import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0066FF]/20 to-[#FF6B2C]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* ATTA Sphere */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] atta-sphere flex items-center justify-center">
            <span className="text-5xl font-bold text-white">AT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">ATTA</span>
            <span className="text-white/80 text-3xl md:text-4xl block mt-2">AI创客实战营</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-4 max-w-2xl mx-auto">
            面向 8-15 岁青少年的开源 AI 教育课程体系
          </p>
          <p className="text-lg text-white/40 mb-10 max-w-xl mx-auto">
            从兴趣培养到竞赛冲刺，三轨九级，实战为主
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#curriculum"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              查看课程体系
            </Link>
            <a
              href="https://github.com/ryrhappy/atta-ai-curriculum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-lg hover:bg-white/5 transition-colors"
            >
              GitHub 开源仓库 →
            </a>
          </div>
        </div>
      </section>

      {/* What is ATTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            什么是 <span className="gradient-text">ATTA</span>？
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">
            ATTA = AI Teaching & Training Assistant（AI教学与训练助手）
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 card-hover">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3">课前</h3>
              <p className="text-white/60">自动生成教案、PPT、任务单，让老师 10 分钟备好一节课</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 card-hover">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">课中</h3>
              <p className="text-white/60">实时答疑、Prompt 辅导、作品点评，1 个老师也能带好班</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 card-hover">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">课后</h3>
              <p className="text-white/60">生成学习报告、推荐练习、追踪进度，家长看得见的成长</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tracks */}
      <section id="curriculum" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            分龄三轨课程体系
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">
            不是一套课打天下，而是每个年龄都有最适合的学习路径
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-2xl p-8 border border-green-500/20 card-hover">
              <div className="text-3xl mb-2">🌱</div>
              <div className="text-sm text-green-400 font-semibold mb-1">启蒙轨道</div>
              <h3 className="text-2xl font-bold mb-2">AI 小探索家</h3>
              <div className="text-white/40 text-sm mb-4">3-4 年级 · 8-10 岁</div>
              <ul className="space-y-2 text-white/60 text-sm mb-6">
                <li>✦ 12 课 × 60 分钟</li>
                <li>✦ 每节课一个可视作品</li>
                <li>✦ 玩中学，发朋友圈</li>
                <li>✦ 培养兴趣为主</li>
              </ul>
              <div className="text-2xl font-bold text-white/80">¥2,980</div>
            </div>

            {/* Builder */}
            <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20 card-hover relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-xs font-bold px-4 py-1 rounded-full">
                ⭐ 主力产品
              </div>
              <div className="text-3xl mb-2">🔨</div>
              <div className="text-sm text-blue-400 font-semibold mb-1">进阶轨道</div>
              <h3 className="text-2xl font-bold mb-2">AI 开发者</h3>
              <div className="text-white/40 text-sm mb-4">5-6 年级 · 10-12 岁</div>
              <ul className="space-y-2 text-white/60 text-sm mb-6">
                <li>✦ 18 课 × 90 分钟</li>
                <li>✦ 3 个真实项目产出</li>
                <li>✦ 项目制+竞赛冲刺</li>
                <li>✦ 可参加 NOC/蓝桥杯</li>
              </ul>
              <div className="text-2xl font-bold text-white/80">¥4,980</div>
            </div>

            {/* Champion */}
            <div className="bg-gradient-to-b from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20 card-hover">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-sm text-orange-400 font-semibold mb-1">竞赛轨道</div>
              <h3 className="text-2xl font-bold mb-2">AI 竞赛选手</h3>
              <div className="text-white/40 text-sm mb-4">7-9 年级 · 12-15 岁</div>
              <ul className="space-y-2 text-white/60 text-sm mb-6">
                <li>✦ 12 课 × 120 分钟</li>
                <li>✦ 瞄准 1-2 个赛事深挖</li>
                <li>✦ 全程专业指导</li>
                <li>✦ 伦理审查差异化加分</li>
              </ul>
              <div className="text-2xl font-bold text-white/80">¥6,980</div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            为什么选择 <span className="gradient-text">ATTA</span>？
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: "⚡",
                title: "实战派，不是理论派",
                desc: "不教「什么是AI」，教「用AI做出真实项目」。孩子上完课，拥有可访问的网站、可运行的APP、可参赛的作品。",
              },
              {
                icon: "🛡️",
                title: "伦理内建，不是最后一节课提一下",
                desc: "每节课都有伦理讨论环节，竞赛轨道还有专门的伦理审查报告——这是评委眼中的差异化加分项。",
              },
              {
                icon: "👨‍💻",
                title: "独立开发者授课，不是培训机构",
                desc: "老师是真正做产品的独立开发者，教的是真实的产品开发流程，不是教材上的案例。",
              },
              {
                icon: "🏆",
                title: "竞赛直通，不是泛泛而谈",
                desc: "每节课标注赛事能力项，进阶和竞赛轨道有专属冲刺模块，直接对接 NOC、蓝桥杯、宋庆龄奖。",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开源基础设施
          </h2>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto">
            ATTA 做的是 AI 教育界的 Kubernetes——我们不办学，让所有人都能办学
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-3">📂</div>
              <h3 className="font-semibold mb-2">开源课程框架</h3>
              <p className="text-white/50 text-sm">标准化的课程接口，任何人可扩展新轨道</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-semibold mb-2">AI 课件生成引擎</h3>
              <p className="text-white/50 text-sm">输入课程大纲 → 自动生成教案/PPT/任务单</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-3">🔌</div>
              <h3 className="font-semibold mb-2">教育标准接口</h3>
              <p className="text-white/50 text-sm">AI 教育工具的通用数据格式和 API</p>
            </div>
          </div>

          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            查看开源仓库
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0066FF]/20 to-[#FF6B2C]/10 rounded-3xl p-12 border border-white/10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] atta-sphere flex items-center justify-center">
              <span className="text-3xl font-bold text-white">AT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              让每个孩子都能用 <span className="gradient-text">AI</span> 创造未来
            </h2>
            <p className="text-white/50 mb-8">
              无论是家长、老师还是机构，ATTA 都有适合的合作方式
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:atta@yiaya.com"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                联系合作
              </a>
              <Link
                href="#curriculum"
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-lg hover:bg-white/5 transition-colors"
              >
                了解课程详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] flex items-center justify-center">
              <span className="text-sm font-bold text-white">AT</span>
            </div>
            <span className="text-white/40">ATTA AI创客实战营 © 2026</span>
          </div>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="hover:text-white/60">GitHub</a>
            <span>基于教育部 2025 指南设计</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
