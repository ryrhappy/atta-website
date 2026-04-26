export default function Home() {
  return (
    <main className="min-h-screen grid-bg">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A1628]/90 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] flex items-center justify-center text-xs font-bold shadow-lg shadow-[#0066FF]/20">
              AT
            </div>
            <span className="font-semibold text-base">ATTA</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/teach" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              教师工作台
            </a>
            <a href="/partner" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              机构合作
            </a>
            <a
              href="https://github.com/ryrhappy/atta-ai-curriculum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-36 pb-24 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#FF6B2C]/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] atta-sphere flex items-center justify-center shadow-2xl shadow-[#0066FF]/30">
              <span className="text-4xl font-bold">AT</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="gradient-text">ATTA</span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-4">
            AI 创客实战营
          </p>

          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            面向 8–15 岁青少年的开源 AI 教育课程体系
            <br />
            从兴趣培养到竞赛冲刺，三轨九级，实战为主
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#0066FF]/20"
            >
              了解 ATTA
            </a>
            <a
              href="https://github.com/ryrhappy/atta-ai-curriculum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white/80 font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
            >
              开源仓库 →
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ATTA ─── */}
      <section id="about" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              认识 <span className="gradient-text">ATTA</span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-4 tracking-wide">
                <strong className="gradient-text font-bold">A</strong>rtificial&nbsp;
                <strong className="gradient-text font-bold">T</strong>alent&nbsp;
                <strong className="gradient-text font-bold">T</strong>ech&nbsp;
                <strong className="gradient-text font-bold">A</strong>gent
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                人工智能天才技术智能体——发音短促有力，像一道精密指令。
                <br className="hidden sm:block" />
                ATTA 不只是课程品牌的名字，更是贯穿每个教学环节的 AI 助手。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📝",
                title: "课前",
                desc: "自动生成教案、PPT、任务单，让老师 10 分钟备好一节课",
              },
              {
                icon: "🤖",
                title: "课中",
                desc: "实时答疑、Prompt 辅导、作品点评，1 个老师也能带好班",
              },
              {
                icon: "📊",
                title: "课后",
                desc: "生成学习报告、推荐练习、追踪进度，家长看得见的成长",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center bg-white/[0.04] rounded-2xl p-8 border border-white/10 card-hover"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THREE TRACKS ─── */}
      <section id="curriculum" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              分龄三轨课程体系
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
              不是一套课打天下，而是每个年龄都有最适合的学习路径
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-2xl p-7 border border-green-400/20 bg-green-400/[0.05] card-hover flex flex-col h-full">
              <div className="text-4xl mb-4">🌱</div>
              <div className="mb-4">
                <p className="text-green-400 text-sm font-bold tracking-wider uppercase mb-2">
                  启蒙轨道
                </p>
                <h3 className="text-2xl font-bold mb-2">AI 小探索家</h3>
                <p className="text-white/40 text-base">3–4 年级 · 8–10 岁</p>
              </div>

              <ul className="space-y-3 text-base text-white/60 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✦</span>
                  <span>12 课 × 60 分钟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✦</span>
                  <span>每节课一个可视作品</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✦</span>
                  <span>玩中学，发朋友圈</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✦</span>
                  <span>培养兴趣为主</span>
                </li>
              </ul>

              <p className="text-3xl font-bold text-white">¥2,980</p>
            </div>

            {/* Builder */}
            <div className="rounded-2xl p-7 border-2 border-blue-400/30 bg-blue-400/[0.08] card-hover flex flex-col h-full relative shadow-lg shadow-blue-400/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide shadow-lg">
                ⭐ 主力产品
              </div>
              <div className="text-4xl mb-4">🔨</div>
              <div className="mb-4">
                <p className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-2">
                  进阶轨道
                </p>
                <h3 className="text-2xl font-bold mb-2">AI 开发者</h3>
                <p className="text-white/40 text-base">5–6 年级 · 10–12 岁</p>
              </div>

              <ul className="space-y-3 text-base text-white/60 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>18 课 × 90 分钟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>3 个真实项目产出</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>项目制 + 竞赛冲刺</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>可参加 NOC / 蓝桥杯</span>
                </li>
              </ul>

              <p className="text-3xl font-bold text-white">¥4,980</p>
            </div>

            {/* Champion */}
            <div className="rounded-2xl p-7 border border-orange-400/20 bg-orange-400/[0.05] card-hover flex flex-col h-full">
              <div className="text-4xl mb-4">🏆</div>
              <div className="mb-4">
                <p className="text-orange-400 text-sm font-bold tracking-wider uppercase mb-2">
                  竞赛轨道
                </p>
                <h3 className="text-2xl font-bold mb-2">AI 竞赛选手</h3>
                <p className="text-white/40 text-base">7–9 年级 · 12–15 岁</p>
              </div>

              <ul className="space-y-3 text-base text-white/60 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✦</span>
                  <span>12 课 × 120 分钟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✦</span>
                  <span>瞄准 1–2 个赛事深挖</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✦</span>
                  <span>全程专业指导参赛</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✦</span>
                  <span>伦理审查差异化加分</span>
                </li>
              </ul>

              <p className="text-3xl font-bold text-white">¥6,980</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY ATTA ─── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            为什么选择 <span className="gradient-text">ATTA</span>？
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "⚡",
                title: "实战派，不是理论派",
                desc: "不教「什么是 AI」，教「用 AI 做出真实项目」。孩子上完课，拥有可访问的网站、可运行的 APP、可参赛的作品。",
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
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 items-start bg-white/[0.04] rounded-2xl p-7 border border-white/10 card-hover"
              >
                <div className="text-4xl shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN SOURCE ─── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            开源基础设施
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
            ATTA 做的是 AI 教育界的 Kubernetes——我们不办学，让所有人都能办学
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "📂", title: "开源课程框架", desc: "标准化的课程接口，任何人可扩展新轨道" },
              { icon: "🤖", title: "AI 课件生成引擎", desc: "输入课程大纲 → 自动生成教案 / PPT / 任务单" },
              { icon: "🔌", title: "教育标准接口", desc: "AI 教育工具的通用数据格式和 API" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.04] rounded-2xl p-7 border border-white/10 card-hover"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white/80 font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            查看开源仓库
          </a>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0066FF]/15 to-[#FF6B2C]/10 rounded-3xl p-12 border border-white/10 shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] atta-sphere flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold">AT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              让每个孩子都能用 <span className="gradient-text">AI</span> 创造未来
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              无论是家长、老师还是机构，ATTA 都有适合的合作方式
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:atta@yiaya.com"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#0066FF]/20"
              >
                联系合作
              </a>
              <a
                href="#curriculum"
                className="px-8 py-4 rounded-full border-2 border-white/20 text-white/80 font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
              >
                课程详情
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-base text-white/40">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] flex items-center justify-center text-xs font-bold">
              AT
            </div>
            <span>ATTA AI 创客实战营 © 2026</span>
          </div>
          <span>基于教育部 2025 指南设计</span>
        </div>
      </footer>
    </main>
  );
}
