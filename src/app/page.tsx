export default function Home() {
  return (
    <main className="min-h-screen grid-bg">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0A1628]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] flex items-center justify-center text-xs font-bold">
              AT
            </div>
            <span className="font-semibold tracking-wide">ATTA</span>
          </div>
          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#0066FF]/15 to-[#FF6B2C]/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="mx-auto mb-10 w-28 h-28 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] atta-sphere flex items-center justify-center">
            <span className="text-4xl font-bold">AT</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-3">
            <span className="gradient-text">ATTA</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 font-medium mb-6">
            AI 创客实战营
          </p>
          <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
            面向 8–15 岁青少年的开源 AI 教育课程体系<br />
            从兴趣培养到竞赛冲刺，三轨九级，实战为主
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              了解 ATTA
            </a>
            <a
              href="https://github.com/ryrhappy/atta-ai-curriculum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-white/15 text-white/70 font-semibold hover:bg-white/5 transition-colors"
            >
              开源仓库 →
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ATTA ─── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            认识 <span className="gradient-text">ATTA</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-lg text-white/70 mb-4 leading-relaxed">
              <strong className="text-white">A</strong>rtificial&nbsp;
              <strong className="text-white">T</strong>alent&nbsp;
              <strong className="text-white">T</strong>ech&nbsp;
              <strong className="text-white">A</strong>gent
            </p>
            <p className="text-base text-white/40 leading-relaxed">
              人工智能天才技术智能体——发音短促有力，像一道精密指令。<br />
              ATTA 不只是课程品牌的名字，更是贯穿每个教学环节的 AI 助手。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
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
                className="text-center bg-white/[0.03] rounded-3xl p-10 border border-white/[0.06] card-hover"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THREE TRACKS ─── */}
      <section id="curriculum" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            分龄三轨课程体系
          </h2>
          <p className="text-white/40 text-center mb-20 max-w-lg mx-auto leading-relaxed">
            不是一套课打天下，而是每个年龄都有最适合的学习路径
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="rounded-3xl p-8 border border-green-400/15 bg-green-400/[0.03] card-hover flex flex-col">
              <div className="text-4xl mb-3">🌱</div>
              <p className="text-green-400 text-xs font-semibold tracking-wider uppercase mb-1">
                启蒙轨道
              </p>
              <h3 className="text-2xl font-bold mb-1">AI 小探索家</h3>
              <p className="text-white/30 text-sm mb-6">3–4 年级 · 8–10 岁</p>

              <ul className="space-y-3 text-sm text-white/50 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-green-400/60">✦</span> 12 课 × 60 分钟</li>
                <li className="flex gap-2"><span className="text-green-400/60">✦</span> 每节课一个可视作品</li>
                <li className="flex gap-2"><span className="text-green-400/60">✦</span> 玩中学，发朋友圈</li>
                <li className="flex gap-2"><span className="text-green-400/60">✦</span> 培养兴趣为主</li>
              </ul>

              <p className="text-2xl font-bold">¥2,980</p>
            </div>

            {/* Builder */}
            <div className="rounded-3xl p-8 border border-blue-400/20 bg-blue-400/[0.05] card-hover flex flex-col relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wide">
                ⭐ 主力产品
              </div>
              <div className="text-4xl mb-3">🔨</div>
              <p className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-1">
                进阶轨道
              </p>
              <h3 className="text-2xl font-bold mb-1">AI 开发者</h3>
              <p className="text-white/30 text-sm mb-6">5–6 年级 · 10–12 岁</p>

              <ul className="space-y-3 text-sm text-white/50 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-blue-400/60">✦</span> 18 课 × 90 分钟</li>
                <li className="flex gap-2"><span className="text-blue-400/60">✦</span> 3 个真实项目产出</li>
                <li className="flex gap-2"><span className="text-blue-400/60">✦</span> 项目制 + 竞赛冲刺</li>
                <li className="flex gap-2"><span className="text-blue-400/60">✦</span> 可参加 NOC / 蓝桥杯</li>
              </ul>

              <p className="text-2xl font-bold">¥4,980</p>
            </div>

            {/* Champion */}
            <div className="rounded-3xl p-8 border border-orange-400/15 bg-orange-400/[0.03] card-hover flex flex-col">
              <div className="text-4xl mb-3">🏆</div>
              <p className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1">
                竞赛轨道
              </p>
              <h3 className="text-2xl font-bold mb-1">AI 竞赛选手</h3>
              <p className="text-white/30 text-sm mb-6">7–9 年级 · 12–15 岁</p>

              <ul className="space-y-3 text-sm text-white/50 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-orange-400/60">✦</span> 12 课 × 120 分钟</li>
                <li className="flex gap-2"><span className="text-orange-400/60">✦</span> 瞄准 1–2 个赛事深挖</li>
                <li className="flex gap-2"><span className="text-orange-400/60">✦</span> 全程专业指导参赛</li>
                <li className="flex gap-2"><span className="text-orange-400/60">✦</span> 伦理审查差异化加分</li>
              </ul>

              <p className="text-2xl font-bold">¥6,980</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY ATTA ─── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
            为什么选择 <span className="gradient-text">ATTA</span>？
          </h2>

          <div className="space-y-8">
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
                className="flex gap-5 items-start bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06]"
              >
                <div className="text-3xl shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN SOURCE ─── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            开源基础设施
          </h2>
          <p className="text-white/40 mb-20 max-w-xl mx-auto leading-relaxed">
            ATTA 做的是 AI 教育界的 Kubernetes——我们不办学，让所有人都能办学
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "📂", title: "开源课程框架", desc: "标准化的课程接口，任何人可扩展新轨道" },
              { icon: "🤖", title: "AI 课件生成引擎", desc: "输入课程大纲 → 自动生成教案 / PPT / 任务单" },
              { icon: "🔌", title: "教育标准接口", desc: "AI 教育工具的通用数据格式和 API" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06] card-hover"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 text-white/60 font-semibold hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            查看开源仓库
          </a>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0066FF]/10 to-[#FF6B2C]/5 rounded-[2rem] p-14 border border-white/[0.08]">
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] atta-sphere flex items-center justify-center">
              <span className="text-2xl font-bold">AT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              让每个孩子都能用 <span className="gradient-text">AI</span> 创造未来
            </h2>
            <p className="text-white/40 mb-10 leading-relaxed">
              无论是家长、老师还是机构，ATTA 都有适合的合作方式
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:atta@yiaya.com"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                联系合作
              </a>
              <a
                href="#curriculum"
                className="px-8 py-3.5 rounded-full border border-white/15 text-white/60 font-semibold hover:bg-white/5 transition-colors"
              >
                课程详情
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] flex items-center justify-center text-[10px] font-bold">
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
