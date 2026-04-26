import ContactCooperateButton from "../lib/contactCooperateButton";

export default function PartnerPage() {
  return (
    <main className="min-h-screen grid-bg relative overflow-hidden pt-20 pb-20">
      <div className="particles-bg pointer-events-none absolute inset-0" />
      <div className="content-shell relative z-10">
        <section className="tech-section mb-24">
          <div className="text-center mb-20">
            <span className="chip tech-chip">For Partners</span>
            <h1 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">机构合作</h1>
            <p className="tech-lead text-[15px] md:text-[16px]">
              培训机构、学校、少年宫 — 无需自己研发课程，ATTA 提供完整体系
            </p>
          </div>
        </section>

        <section className="tech-section mb-24">
          <div className="text-center mb-16">
            <span className="chip tech-chip">Partner Value</span>
            <h2 className="tech-heading text-[2rem] md:text-[2.4rem] font-bold mt-6 mb-4">合作方获得什么</h2>
            <p className="tech-lead text-[15px]">标准化内容 + 实战型交付，机构开班更快、更稳、更可复制</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "完整教案", desc: "每节课的详细教学步骤、话术、时间分配、互动设计" },
              { title: "教学 PPT", desc: "配套演示文稿，含动画和互动环节" },
              { title: "学生手册 + 任务单", desc: "每个学生人手一份，课上填、课后带回家" },
              { title: "评价量表", desc: "标准化能力评估，每课可量化学习成果" },
              { title: "伦理教案", desc: "每课 3-5 分钟伦理讨论设计，竞赛差异化加分项" },
              { title: "家长沟通模板", desc: "每节课自动生成「今日学习报告」" },
            ].map((item) => (
              <div key={item.title} className="tech-panel p-8 md:p-9 text-center">
                <h3 className="tech-title font-semibold text-[18px] mb-3">{item.title}</h3>
                <p className="tech-desc text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-section mb-24">
          <div className="text-center mb-16">
            <span className="chip tech-chip">Pricing</span>
            <h2 className="tech-heading text-[2rem] md:text-[2.4rem] font-bold mt-6 mb-4">合作方案</h2>
            <p className="tech-lead text-[15px]">按机构阶段选择，从试水合作到全套落地均可快速启用</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="tech-panel p-8 text-center">
              <h3 className="tech-title font-bold text-[17px] mb-2">课程授权</h3>
              <p className="tech-copy text-[14px] mb-5">1 个轨道完整教学资源</p>
              <p className="text-2xl font-bold">8,000<span className="text-sm text-white/35 font-normal"> - 15,000 元/年</span></p>
              <ul className="mt-6 space-y-2 text-[14px] tech-copy">
                <li>完整教案 + PPT + 任务单</li>
                <li>学生手册 + 评价量表</li>
                <li>1 年更新权限</li>
              </ul>
            </div>

            <div className="tech-panel tech-panel-highlight p-8 text-center">
              <span className="chip text-blue-200 border-blue-300/50 bg-blue-400/15 mb-5 mx-auto">推荐</span>
              <h3 className="tech-title font-bold text-[17px] mb-2">全套合作</h3>
              <p className="tech-copy text-[14px] mb-5">课程 + 师资 + 答疑</p>
              <p className="text-2xl font-bold">30,000<span className="text-sm text-white/35 font-normal"> - 50,000 元/年</span></p>
              <ul className="mt-6 space-y-2 text-[14px] tech-copy">
                <li>3 个轨道完整授权</li>
                <li>师资培训（2 天）</li>
                <li>教学答疑支持</li>
                <li>竞赛指导方案</li>
              </ul>
            </div>

            <div className="tech-panel p-8 text-center">
              <h3 className="tech-title font-bold text-[17px] mb-2">单次工作坊</h3>
              <p className="tech-copy text-[14px] mb-5">半天体验课，试水合作</p>
              <p className="text-2xl font-bold">3,000<span className="text-sm text-white/35 font-normal"> - 5,000 元/场</span></p>
              <ul className="mt-6 space-y-2 text-[14px] tech-copy">
                <li>1 节体验课完整方案</li>
                <li>物料清单 + 模板</li>
                <li>适合招生引流</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="tech-section mb-24">
          <div className="text-center mb-16">
            <span className="chip tech-chip">Process</span>
            <h2 className="tech-heading text-[2rem] md:text-[2.4rem] font-bold mt-6 mb-4">合作流程</h2>
            <p className="tech-lead text-[15px]">从体验到开班 5 个步骤，过程透明、交付明确</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: "01", title: "浏览课程体系", desc: "查看开源课程框架，了解设计理念" },
              { step: "02", title: "预约体验课", desc: "1 节免费体验课试讲" },
              { step: "03", title: "选择合作方案", desc: "根据机构规模和需求选择" },
              { step: "04", title: "师资培训", desc: "2 天集中培训" },
              { step: "05", title: "开班授课", desc: "获得全部教学资源，正式开课" },
            ].map((item) => (
              <div key={item.step} className="tech-panel p-8 text-center">
                <p className="text-white/20 text-[20px] font-bold mb-2 tabular-nums">{item.step}</p>
                <h3 className="tech-title font-semibold text-[18px] mb-3">{item.title}</h3>
                <p className="tech-desc text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-section mb-16">
          <div className="tech-panel p-10 text-center">
            <h3 className="tech-title font-semibold text-[22px] mb-3">开源资源</h3>
            <p className="tech-desc text-[15px] mb-5">
              ATTA 课程框架在 GitHub 开源，你可以先浏览课程大纲和体验课设计
            </p>
            <a
              href="https://github.com/ryrhappy/atta-ai-curriculum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-cyan-100/85 hover:text-cyan-50 transition-colors underline underline-offset-4"
            >
              github.com/ryrhappy/atta-ai-curriculum
            </a>
            <p className="text-white/30 text-[12px] mt-5">
              开源内容采用 CC BY-NC-SA 4.0 协议。商业授权请联系我们。
            </p>
          </div>
        </section>

        <section className="text-center">
          <ContactCooperateButton className="inline-flex min-w-[190px] justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#EAF7FF] to-[#CFEFFF] text-[#0A1628] text-[15px] font-semibold shadow-[0_10px_30px_rgba(160,220,255,0.28)] hover:shadow-[0_14px_34px_rgba(160,220,255,0.38)] hover:-translate-y-0.5 transition-all duration-300" />
          <p className="text-white/35 text-[13px] mt-4">atta@yiaya.com</p>
        </section>
      </div>
    </main>
  );
}
