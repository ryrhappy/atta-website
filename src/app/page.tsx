export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0A1628]/80 border-b border-white/5">
        <div className="max-w-[1080px] mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-wide text-[15px]">ATTA</a>
          <div className="flex items-center gap-8 text-[13px] text-white/40">
            <a href="/teach" className="hover:text-white/70 transition-colors">教师工作台</a>
            <a href="/partner" className="hover:text-white/70 transition-colors">机构合作</a>
            <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="sect pt-36 pb-28 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#0066FF]/12 to-[#FF6B2C]/8 blur-[140px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="mx-auto mb-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] sphere" />
          <h1 className="text-[4.5rem] md:text-[6rem] font-bold tracking-tight leading-none mb-2">
            <span className="grad">ATTA</span>
          </h1>
          <p className="text-xl text-white/60 font-medium mb-2">AI 创客实战营</p>
          <p className="text-[15px] text-white/30 leading-relaxed mb-12 max-w-md mx-auto">
            面向 8–15 岁青少年的开源 AI 教育课程体系<br />三轨九级，实战为主
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#about" className="px-7 py-2.5 rounded-full bg-white text-[#0A1628] text-[14px] font-semibold hover:bg-white/90 transition-colors">
              了解 ATTA
            </a>
            <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="px-7 py-2.5 rounded-full border border-white/15 text-white/60 text-[14px] font-semibold hover:bg-white/5 transition-colors">
              开源仓库
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="sect">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-20">
            <span className="chip mb-4">About</span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-4 mb-6">
              认识 <span className="grad">ATTA</span>
            </h2>
            <div className="max-w-lg mx-auto">
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                <strong className="text-white">A</strong>rtificial&nbsp;
                <strong className="text-white">T</strong>alent&nbsp;
                <strong className="text-white">T</strong>ech&nbsp;
                <strong className="text-white">A</strong>gent
              </p>
              <p className="text-white/35 text-[15px] leading-relaxed">
                人工智能天才技术智能体 — 发音短促有力，像一道精密指令。<br />
                不只是课程品牌，更是贯穿每个教学环节的 AI 助手。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "课前", desc: "自动生成教案、PPT、任务单，让老师 10 分钟备好一节课" },
              { title: "课中", desc: "实时答疑、Prompt 辅导、作品点评，1 个老师也能带好班" },
              { title: "课后", desc: "生成学习报告、推荐练习、追踪进度，家长看得见的成长" },
            ].map((item) => (
              <div key={item.title} className="card p-8">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-white/40 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Tracks */}
      <section id="curriculum" className="sect">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-20">
            <span className="chip mb-4">Curriculum</span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-4 mb-4">分龄三轨课程体系</h2>
            <p className="text-white/30 max-w-md mx-auto text-[15px] leading-relaxed">
              每个年龄都有最适合的学习路径
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="card p-8 flex flex-col">
              <span className="chip text-green-400/60 border-green-400/20 mb-5 self-start">启蒙轨道</span>
              <h3 className="text-xl font-bold mb-1">AI 小探索家</h3>
              <p className="text-white/25 text-[13px] mb-6">3–4 年级 · 8–10 岁</p>
              <ul className="space-y-2.5 text-[14px] text-white/45 mb-8 flex-1">
                <li>12 课 × 60 分钟</li>
                <li>每节课一个可视作品</li>
                <li>玩中学，发朋友圈</li>
                <li>培养兴趣为主</li>
              </ul>
              <p className="text-xl font-bold">¥2,980</p>
            </div>

            {/* Builder */}
            <div className="card p-8 flex flex-col border-blue-400/15 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-[11px] font-bold px-4 py-1 rounded-full">
                主力产品
              </span>
              <span className="chip text-blue-400/60 border-blue-400/20 mb-5 self-start">进阶轨道</span>
              <h3 className="text-xl font-bold mb-1">AI 开发者</h3>
              <p className="text-white/25 text-[13px] mb-6">5–6 年级 · 10–12 岁</p>
              <ul className="space-y-2.5 text-[14px] text-white/45 mb-8 flex-1">
                <li>18 课 × 90 分钟</li>
                <li>3 个真实项目产出</li>
                <li>项目制 + 竞赛冲刺</li>
                <li>可参加 NOC / 蓝桥杯</li>
              </ul>
              <p className="text-xl font-bold">¥4,980</p>
            </div>

            {/* Champion */}
            <div className="card p-8 flex flex-col">
              <span className="chip text-orange-400/60 border-orange-400/20 mb-5 self-start">竞赛轨道</span>
              <h3 className="text-xl font-bold mb-1">AI 竞赛选手</h3>
              <p className="text-white/25 text-[13px] mb-6">7–9 年级 · 12–15 岁</p>
              <ul className="space-y-2.5 text-[14px] text-white/45 mb-8 flex-1">
                <li>12 课 × 120 分钟</li>
                <li>瞄准 1–2 个赛事深挖</li>
                <li>全程专业指导参赛</li>
                <li>伦理审查差异化加分</li>
              </ul>
              <p className="text-xl font-bold">¥6,980</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ATTA */}
      <section className="sect">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-20">
            <span className="chip mb-4">Why ATTA</span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-4">
              为什么选择 <span className="grad">ATTA</span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              { title: "实战派，不是理论派", desc: "不教「什么是 AI」，教「用 AI 做出真实项目」。孩子上完课，拥有可访问的网站、可运行的 APP、可参赛的作品。" },
              { title: "伦理内建，不是最后一节课提一下", desc: "每节课都有伦理讨论环节，竞赛轨道还有专门的伦理审查报告 — 这是评委眼中的差异化加分项。" },
              { title: "独立开发者授课", desc: "老师是真正做产品的独立开发者，教的是真实的产品开发流程，不是教材上的案例。" },
              { title: "竞赛直通", desc: "每节课标注赛事能力项，进阶和竞赛轨道有专属冲刺模块，直接对接 NOC、蓝桥杯、宋庆龄奖。" },
            ].map((item, i) => (
              <div key={i} className="card p-7 flex gap-5 items-start">
                <span className="text-white/10 text-2xl font-bold shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-white/35 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="sect">
        <div className="max-w-[1080px] mx-auto text-center">
          <span className="chip mb-4">Open Source</span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-4 mb-4">开源基础设施</h2>
          <p className="text-white/30 mb-20 max-w-md mx-auto text-[15px] leading-relaxed">
            AI 教育界的 Kubernetes — 不办学，让所有人都能办学
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "开源课程框架", desc: "标准化的课程接口，任何人可扩展新轨道" },
              { title: "AI 课件生成引擎", desc: "输入课程大纲，自动生成教案 / PPT / 任务单" },
              { title: "教育标准接口", desc: "AI 教育工具的通用数据格式和 API" },
            ].map((item) => (
              <div key={item.title} className="card p-7">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-white/35 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/40 hover:text-white/60 transition-colors underline underline-offset-4">
            github.com/ryrhappy/atta-ai-curriculum
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="sect">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0066FF]/8 to-[#FF6B2C]/4 rounded-3xl p-14 border border-white/[0.06]">
            <div className="w-14 h-14 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF6B2C] sphere" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              让每个孩子都能用 <span className="grad">AI</span> 创造未来
            </h2>
            <p className="text-white/30 text-[14px] mb-8">家长、老师、机构 — 都有适合的合作方式</p>
            <a href="mailto:atta@yiaya.com" className="inline-block px-8 py-2.5 rounded-full bg-white text-[#0A1628] text-[14px] font-semibold hover:bg-white/90 transition-colors">
              联系合作
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-[1080px] mx-auto flex justify-between items-center text-[12px] text-white/20">
          <span>ATTA AI 创客实战营  © 2026</span>
          <span>基于教育部 2025 指南设计</span>
        </div>
      </footer>
    </main>
  );
}
