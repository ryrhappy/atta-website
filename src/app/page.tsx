export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0A1628]/80 border-b border-white/5">
        <div className="max-w-[1080px] mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <span className="font-bold tracking-wide text-[15px]">ATTA</span>
            <span className="text-[12px] text-white/25 border-l border-white/10 pl-3">阿塔 AI · 青少年创客教育</span>
          </a>
          <div className="flex items-center gap-8 text-[13px] text-white/40">
            <a href="/teach" className="hover:text-white/70 transition-colors">教师工作台</a>
            <a href="/partner" className="hover:text-white/70 transition-colors">机构合作</a>
            <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="sect pt-40 pb-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#FF6B2C]/6 blur-[160px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <img
            src="/atta-sphere.jpg"
            alt="ATTA"
            className="mx-auto mb-8 w-40 h-40 rounded-full object-cover sphere"
          />
          <h1 className="text-[5rem] md:text-[7rem] font-bold tracking-tighter leading-none mb-3">
            <span className="grad">ATTA</span>
          </h1>
          <p className="text-lg text-white/35 font-medium mb-1">阿塔 AI</p>
          <p className="text-2xl text-white/70 font-medium mb-3">AI 创客实战营</p>
          <p className="text-[15px] text-white/30 leading-relaxed max-w-sm mx-auto mb-14">
            面向 8–15 岁青少年的开源 AI 教育体系<br />
            三轨九级，从兴趣启蒙到竞赛冲刺
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#tracks" className="group px-8 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-[14px] font-semibold shadow-[0_0_24px_rgba(0,102,255,0.3)] hover:shadow-[0_0_36px_rgba(0,102,255,0.45)] transition-all">
              查看课程体系
            </a>
            <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/15 text-white/60 text-[14px] font-semibold hover:bg-white/5 transition-colors">
              开源仓库
            </a>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="sect">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-16">
            <span className="chip">Philosophy</span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-6">
              不是学 AI，是<span className="grad">用</span> AI
            </h2>
            <p className="text-white/35 text-[15px] leading-relaxed max-w-md mx-auto">
              ATTA 的每一节课都以作品产出为目标。<br />
              孩子带走的不止知识，是可运行的项目、可展示的作品、可参赛的成果。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "作品驱动",
                desc: "每节课结束，孩子拥有一个可视、可分享、可运行的作品。不是学完忘完，是做出来、带回家。"
              },
              {
                num: "02",
                title: "伦理内建",
                desc: "AI 伦理不是最后一节课的附录。每节课都有讨论环节，竞赛轨道更有专门的伦理审查报告——评委眼中的差异化加分项。"
              },
              {
                num: "03",
                title: "真实开发流程",
                desc: "授课老师是独立开发者，教的是真实的产品思维和开发流程。不是教材案例，是真实世界的工作方式。"
              },
              {
                num: "04",
                title: "竞赛直通",
                desc: "每节课标注赛事能力项，进阶和竞赛轨道有专属冲刺模块。直通 NOC、蓝桥杯、宋庆龄少年儿童发明奖。"
              },
            ].map((item) => (
              <div key={item.num} className="card p-7 flex gap-6 items-start">
                <span className="text-white/[0.07] text-3xl font-bold shrink-0 w-10 tabular-nums">{item.num}</span>
                <div>
                  <h3 className="font-semibold text-[15px] mb-1.5">{item.title}</h3>
                  <p className="text-white/35 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Tracks ── */}
      <section id="tracks" className="sect">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-16">
            <span className="chip">Curriculum</span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">三轨课程体系</h2>
            <p className="text-white/30 max-w-md mx-auto text-[15px] leading-relaxed">
              每个年龄，都有最适合的学习路径
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Starter */}
            <div className="card p-8 flex flex-col">
              <span className="chip text-emerald-400/60 border-emerald-400/20 mb-6 self-start">启蒙轨道</span>
              <h3 className="text-2xl font-bold mb-1">AI 小探索家</h3>
              <p className="text-white/25 text-[13px] mb-8">3–4 年级 · 8–10 岁</p>
              <div className="space-y-3 text-[14px] text-white/45 mb-auto">
                <div className="flex justify-between"><span>课时</span><span className="text-white/70">12 课 × 60min</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>产出</span><span className="text-white/70">每课一个可视作品</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>方式</span><span className="text-white/70">玩中学，分享驱动</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>目标</span><span className="text-white/70">激发兴趣，建立自信</span></div>
              </div>
            </div>

            {/* Builder — featured */}
            <div className="card p-8 flex flex-col border-blue-400/20 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wide">
                主力产品
              </span>
              <span className="chip text-blue-400/60 border-blue-400/20 mb-6 self-start">进阶轨道</span>
              <h3 className="text-2xl font-bold mb-1">AI 开发者</h3>
              <p className="text-white/25 text-[13px] mb-8">5–6 年级 · 10–12 岁</p>
              <div className="space-y-3 text-[14px] text-white/45 mb-auto">
                <div className="flex justify-between"><span>课时</span><span className="text-white/70">18 课 × 90min</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>产出</span><span className="text-white/70">3 个真实项目</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>方式</span><span className="text-white/70">项目制 + 竞赛冲刺</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>目标</span><span className="text-white/70">NOC / 蓝桥杯参赛</span></div>
              </div>
            </div>

            {/* Champion */}
            <div className="card p-8 flex flex-col">
              <span className="chip text-orange-400/60 border-orange-400/20 mb-6 self-start">竞赛轨道</span>
              <h3 className="text-2xl font-bold mb-1">AI 竞赛选手</h3>
              <p className="text-white/25 text-[13px] mb-8">7–9 年级 · 12–15 岁</p>
              <div className="space-y-3 text-[14px] text-white/45 mb-auto">
                <div className="flex justify-between"><span>课时</span><span className="text-white/70">12 课 × 120min</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>产出</span><span className="text-white/70">1–2 个竞赛作品</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>方式</span><span className="text-white/70">全程指导参赛</span></div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex justify-between"><span>目标</span><span className="text-white/70">伦理审查差异化加分</span></div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/20 text-[13px] mt-8">详细定价请参阅<a href="/partner" className="underline underline-offset-4 hover:text-white/40 transition-colors">机构合作</a></p>
        </div>
      </section>

      {/* ── How ATTA Works ── */}
      <section className="sect">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-16">
            <span className="chip">How It Works</span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">
              ATTA 如何运转
            </h2>
            <p className="text-white/30 max-w-md mx-auto text-[15px] leading-relaxed">
              AI 贯穿教学全流程，让一个老师也能高质量带班
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                phase: "课前",
                desc: "ATTA 自动生成教案、PPT、任务单。老师 10 分钟备好一节课。"
              },
              {
                phase: "课中",
                desc: "实时答疑、Prompt 辅导、作品点评。1 个老师也能带好 20 人班。"
              },
              {
                phase: "课后",
                desc: "生成学习报告、推荐练习、追踪进度。家长看得见的成长。"
              },
            ].map((item) => (
              <div key={item.phase} className="card p-7 text-center">
                <p className="text-[15px] font-semibold mb-3">{item.phase}</p>
                <p className="text-white/35 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <section className="sect">
        <div className="max-w-[720px] mx-auto text-center">
          <span className="chip">Open Source</span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">
            开源，是最大的护城河
          </h2>
          <p className="text-white/35 text-[15px] leading-relaxed max-w-md mx-auto mb-16">
            ATTA 不办学，让所有人都能办学。<br />
            课程框架、教案引擎、数据接口，全部开源。
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { title: "课程框架", desc: "标准化的课程接口，任何人都可扩展新轨道" },
              { title: "教案引擎", desc: "输入课程大纲，自动生成教案、PPT、任务单" },
              { title: "数据接口", desc: "AI 教育工具的通用数据格式和 API 标准" },
            ].map((item) => (
              <div key={item.title} className="card p-7">
                <h3 className="font-semibold text-[15px] mb-2">{item.title}</h3>
                <p className="text-white/35 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white/60 transition-colors"
          >
            <span>github.com/ryrhappy/atta-ai-curriculum</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sect">
        <div className="max-w-lg mx-auto text-center">
          <img
            src="/atta-sphere.jpg"
            alt="ATTA"
            className="w-20 h-20 mx-auto mb-10 rounded-full object-cover sphere"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            让每个孩子<br />都能用 <span className="grad">AI</span> 创造
          </h2>
          <p className="text-white/30 text-[15px] mb-10">家长、老师、机构 — 都有适合的合作方式</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:atta@yiaya.com" className="px-8 py-3 rounded-full bg-white text-[#0A1628] text-[14px] font-semibold hover:bg-white/90 transition-colors">
              联系合作
            </a>
            <a href="/partner" className="px-8 py-3 rounded-full border border-white/15 text-white/60 text-[14px] font-semibold hover:bg-white/5 transition-colors">
              查看方案
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-[1080px] mx-auto flex justify-between items-center text-[12px] text-white/20">
          <span>ATTA  © 2026</span>
          <span>基于教育部 2025 指南设计</span>
        </div>
      </footer>
    </main>
  );
}
