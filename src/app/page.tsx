import ContactCooperateButton from "./lib/contactCooperateButton";

const courseModules = [
  {
    num: "01",
    title: "AI 学习作品法",
    desc: "用古诗图、单词卡、知识地图等作品，把 AI 变成孩子自己的学习帮手。",
  },
  {
    num: "02",
    title: "AI 人工智能通识",
    desc: "理解 AI 会什么、不会什么，学会提问、验证、判断，而不是盲目相信答案。",
  },
  {
    num: "03",
    title: "AIGC 内容创作",
    desc: "从图片、故事、海报到短视频分镜，让孩子完整经历一次创意生产流程。",
  },
  {
    num: "04",
    title: "综合项目展示",
    desc: "整理作品集，讲清创作过程、工具选择和改进思路，形成可展示成果。",
  },
];

const trialSteps = [
  { step: "01", title: "听见古诗", desc: "先闭眼听《宿新市徐公店》，说出脑子里出现的画面。" },
  { step: "02", title: "拆成四问", desc: "谁？在哪里？在做什么？什么感觉？把诗句拆成 AI 听得懂的素材。" },
  { step: "03", title: "逐句生图", desc: "每一句都完成关键词、提示词、即梦出图、看图反馈的闭环。" },
  { step: "04", title: "作品复盘", desc: "四幅图连成古诗图卷，再用互动游戏复习诗句和画面。" },
];

export default function Home() {
  return (
    <main className="min-h-screen grid-bg relative overflow-hidden">
      <div className="particles-bg pointer-events-none absolute inset-0" />
      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0A1628]/80 border-b border-white/5">
        <div className="relative w-full px-6 h-14 flex items-center">
          <a href="/" className="absolute left-6 flex items-center gap-3 group">
            <span className="font-bold tracking-wide text-[15px]">ATTA</span>
            <span className="text-[12px] text-white/25 border-l border-white/10 pl-3">阿塔 AI</span>
          </a>
          <div className="absolute right-6 flex items-center gap-8 text-[13px] text-white/40">
            <a href="/teach" className="hover:text-white/70 transition-colors">教师工作台</a>
            <a href="/partner" className="hover:text-white/70 transition-colors">机构合作</a>
            <a href="https://github.com/ryrhappy/atta-ai-curriculum" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="sect pt-40 pb-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#FF6B2C]/6 blur-[160px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <img
            src="/atta-sphere.jpg"
            alt="ATTA"
            className="mx-auto mb-8 w-40 h-40 rounded-full object-cover sphere"
          />
          <h1 className="text-[5rem] md:text-[7rem] font-bold tracking-tighter leading-none mb-3">
            <span className="grad">ATTA</span>
          </h1>
          <p className="text-2xl text-white/75 font-medium mb-4 tracking-wide">AI 创客实战营</p>
          <p className="text-[15px] text-white/30 leading-relaxed max-w-xl mx-auto mb-10">
            面向 10–15 岁青少年的 AI 学习作品课<br />
            20 课 × 120 分钟，用 AI 做出反过来帮助自己学习的作品
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-[12px] text-white/45">
            <span className="chip tech-chip">10–15 岁</span>
            <span className="chip tech-chip">20 课时</span>
            <span className="chip tech-chip">5980 元</span>
            <span className="chip tech-chip">机构合作</span>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="sect tech-section">
        <div className="content-shell">
          <div className="text-center mb-20">
            <span className="chip tech-chip">Method</span>
            <h2 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-6">
              AI 学习作品法
            </h2>
            <p className="tech-lead text-[15px] md:text-[16px]">
              不是让 AI 替孩子写作业，而是让孩子用 AI 做出一件能帮助自己学习的作品。<br />
              每节课都要看得见、讲得清、带得走。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "轻学科化",
                desc: "结合古诗、英语、知识整理等真实学习场景，但重点教 AI 工具流程，不替代学科老师。"
              },
              {
                num: "02",
                title: "作品驱动",
                desc: "一节课一个作品：古诗图、知识卡、故事海报、项目展示页。孩子和家长都能看见结果。"
              },
              {
                num: "03",
                title: "真实工作流",
                desc: "从提问、拆解、生成、修改到展示，训练的是未来真实使用 AI 的完整流程。"
              },
              {
                num: "04",
                title: "安全与判断",
                desc: "每节课都加入 AI 边界、信息验证和原创标注，让孩子知道什么时候该自己思考。"
              },
            ].map((item) => (
              <div key={item.num} className="tech-panel p-8 md:p-9 flex flex-col items-center text-center gap-4">
                <span className="text-white/[0.12] text-3xl font-bold tabular-nums">{item.num}</span>
                <div>
                  <h3 className="tech-title font-semibold text-[18px] mb-3">{item.title}</h3>
                  <p className="tech-desc text-[15px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Course ── */}
      <section id="tracks" className="sect tech-section">
        <div className="content-shell">
          <div className="text-center mb-20">
            <span className="chip tech-chip">Curriculum</span>
            <h2 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">10–15 岁单轨主线课</h2>
            <p className="tech-lead text-[15px] md:text-[16px]">
              为第一家机构试讲和后续合作售卖设计：一套课，覆盖 AI 通识、学习辅助、AIGC 创作与项目展示。
            </p>
          </div>

          <div className="tech-panel tech-panel-highlight p-8 md:p-10 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: "年龄", value: "10–15 岁" },
                { label: "课时", value: "20 课 × 120min" },
                { label: "定价", value: "5980 元" },
                { label: "模式", value: "机构合作 / 课程授权" },
              ].map((item) => (
                <div key={item.label} className="tech-panel p-6">
                  <p className="text-white/25 text-[12px] mb-2">{item.label}</p>
                  <p className="tech-title text-[18px] font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courseModules.map((item) => (
              <div key={item.num} className="tech-panel p-8 md:p-9 text-center">
                <p className="text-white/20 text-[24px] font-bold mb-3 tabular-nums">{item.num}</p>
                <h3 className="tech-title font-semibold text-[18px] mb-3">{item.title}</h3>
                <p className="tech-desc text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-[13px] mt-8">合作方案请参阅 <a href="/partner" className="underline underline-offset-4 hover:text-white/60 transition-colors">机构合作</a></p>
        </div>
      </section>

      {/* ── Trial Class ── */}
      <section className="sect tech-section">
        <div className="content-shell">
          <div className="text-center mb-20">
            <span className="chip tech-chip">Trial Class</span>
            <h2 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">
              AI 古诗导演体验课
            </h2>
            <p className="tech-lead text-[15px] md:text-[16px]">
              以《宿新市徐公店》为例，把一整首古诗变成四幅画。<br />
              课堂重点不是背 Prompt，而是让孩子把诗句拆成画面，再用即梦 AI 逐句生成。
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {trialSteps.map((item) => (
              <div key={item.step} className="tech-panel p-7 text-center">
                <p className="text-white/20 text-[22px] font-bold mb-3 tabular-nums">{item.step}</p>
                <h3 className="tech-title font-semibold text-[16px] mb-3">{item.title}</h3>
                <p className="tech-desc text-[14px]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="tech-panel p-8 md:p-9 text-center">
            <p className="tech-copy text-[15px]">
              体验课产出：每个孩子完成 1 组古诗分镜图，理解“AI 是学习帮手，不是作业替身”。视频生成作为课后延展，避免现场排队影响课堂节奏。
            </p>
          </div>
        </div>
      </section>

      {/* ── How ATTA Works ── */}
      <section className="sect tech-section">
        <div className="content-shell">
          <div className="text-center mb-20">
            <span className="chip tech-chip">How It Works</span>
            <h2 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">
              ATTA(阿塔AI) 如何支持机构落地
            </h2>
            <p className="tech-lead text-[15px] md:text-[16px]">
              不自营招生和场地，专注课程内容、试讲资产、讲师工作流和可复制交付。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                phase: "课前",
                desc: "提供互动 HTML 课件、讲师逐字稿、提示词清单、任务单和课堂流程表。"
              },
              {
                phase: "课中",
                desc: "按步骤完成拆解、生成、反馈和作品展示，降低普通老师上 AI 课的门槛。"
              },
              {
                phase: "课后",
                desc: "整理学生作品、生成家长反馈素材，并沉淀成下一次招生和合作案例。"
              },
            ].map((item, idx) => (
              <div key={item.phase} className={`tech-panel p-8 md:p-9 text-center ${idx === 2 ? "md:col-span-2" : ""}`}>
                <p className="tech-title text-[18px] font-semibold mb-4">{item.phase}</p>
                <p className="tech-desc text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <section className="sect tech-section">
        <div className="content-shell text-center">
          <span className="chip tech-chip">Open Source</span>
          <h2 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">
            开源课程框架，可被机构二次落地
          </h2>
          <p className="tech-lead text-[15px] md:text-[16px] mb-20">
            ATTA(阿塔AI) 的课程结构、教案数据和部分示例资产开放在 GitHub。<br />
            商业上课与机构授权可在此基础上定制。
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              { title: "课程框架", desc: "统一的课程数据结构，方便持续扩展 20 课主线和体验课资产" },
              { title: "教师工作台", desc: "按步骤查看目标、产出、伦理提醒、物料和课堂流程" },
              { title: "机构合作", desc: "围绕试讲、课程授权、师资培训和后续交付形成标准合作包" },
            ].map((item, idx) => (
              <div key={item.title} className={`tech-panel p-8 md:p-9 text-center ${idx === 2 ? "md:col-span-2" : ""}`}>
                <h3 className="tech-title font-semibold text-[18px] mb-4">{item.title}</h3>
                <p className="tech-desc text-[15px]">{item.desc}</p>
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
      <section className="sect tech-section">
        <div className="content-shell text-center">
          <div className="text-center mb-20">
            <span className="chip tech-chip">Cooperation</span>
            <h2 className="tech-heading text-3xl md:text-4xl font-bold mt-6 mb-4">
              让孩子用 <span className="grad">AI</span><br />做出自己的学习作品
            </h2>
            <p className="tech-lead text-[15px] md:text-[16px]">
              适合培训机构、学校、少年宫先用体验课验证，再导入 20 课主线课程。
            </p>
          </div>
          <div className="tech-panel p-10 md:p-12">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <ContactCooperateButton className="inline-flex min-w-[190px] justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#EAF7FF] to-[#CFEFFF] text-[#0A1628] text-[15px] font-semibold shadow-[0_10px_30px_rgba(160,220,255,0.28)] hover:shadow-[0_14px_34px_rgba(160,220,255,0.38)] hover:-translate-y-0.5 transition-all duration-300" />
              <a href="/partner" className="inline-flex min-w-[190px] justify-center px-10 py-4 rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-100 text-[15px] font-semibold hover:bg-cyan-300/20 hover:border-cyan-200/70 transition-all duration-300">
                查看方案
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="tech-footer py-10 px-6">
        <div className="content-shell flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-[12px] text-white/20 text-center">
          <span>ATTA  © 2026</span>
          <span>基于教育部 2025 指南设计</span>
          <a href="https://atta-website.pages.dev" className="hover:text-white/45 transition-colors">atta-website.pages.dev</a>
        </div>
      </footer>
    </main>
  );
}
