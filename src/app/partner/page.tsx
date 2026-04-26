export default function PartnerPage() {
  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="chip mb-4">For Partners</span>
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold mt-4 mb-4">机构合作</h1>
          <p className="text-white/30 text-[15px] max-w-md mx-auto leading-relaxed">
            培训机构、学校、少年宫 — 无需自己研发课程，ATTA 提供完整体系
          </p>
        </div>

        {/* What you get */}
        <div className="mb-24">
          <h2 className="text-xl font-bold text-center mb-10">合作方获得什么</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "完整教案", desc: "每节课的详细教学步骤、话术、时间分配、互动设计" },
              { title: "教学 PPT", desc: "配套演示文稿，含动画和互动环节" },
              { title: "学生手册 + 任务单", desc: "每个学生人手一份，课上填、课后带回家" },
              { title: "评价量表", desc: "标准化能力评估，每课可量化学习成果" },
              { title: "伦理教案", desc: "每课 3-5 分钟伦理讨论设计，竞赛差异化加分项" },
              { title: "家长沟通模板", desc: "每节课自动生成「今日学习报告」" },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-semibold mb-2 text-[15px]">{item.title}</h3>
                <p className="text-white/35 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-24">
          <h2 className="text-xl font-bold text-center mb-10">合作方案</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="card p-7">
              <h3 className="font-bold text-[15px] mb-2">课程授权</h3>
              <p className="text-white/25 text-[13px] mb-5">1 个轨道完整教学资源</p>
              <p className="text-2xl font-bold">8,000<span className="text-sm text-white/30 font-normal"> - 15,000 元/年</span></p>
              <ul className="mt-6 space-y-2 text-[13px] text-white/40">
                <li>完整教案 + PPT + 任务单</li>
                <li>学生手册 + 评价量表</li>
                <li>1 年更新权限</li>
              </ul>
            </div>

            <div className="card p-7 border-blue-400/15 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                推荐
              </span>
              <h3 className="font-bold text-[15px] mb-2">全套合作</h3>
              <p className="text-white/25 text-[13px] mb-5">课程 + 师资 + 答疑</p>
              <p className="text-2xl font-bold">30,000<span className="text-sm text-white/30 font-normal"> - 50,000 元/年</span></p>
              <ul className="mt-6 space-y-2 text-[13px] text-white/40">
                <li>3 个轨道完整授权</li>
                <li>师资培训（2 天）</li>
                <li>教学答疑支持</li>
                <li>竞赛指导方案</li>
              </ul>
            </div>

            <div className="card p-7">
              <h3 className="font-bold text-[15px] mb-2">单次工作坊</h3>
              <p className="text-white/25 text-[13px] mb-5">半天体验课，试水合作</p>
              <p className="text-2xl font-bold">3,000<span className="text-sm text-white/30 font-normal"> - 5,000 元/场</span></p>
              <ul className="mt-6 space-y-2 text-[13px] text-white/40">
                <li>1 节体验课完整方案</li>
                <li>物料清单 + 模板</li>
                <li>适合招生引流</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="text-xl font-bold text-center mb-10">合作流程</h2>
          <div className="max-w-lg mx-auto space-y-6">
            {[
              { step: "01", title: "浏览课程体系", desc: "查看开源课程框架，了解设计理念" },
              { step: "02", title: "预约体验课", desc: "1 节免费体验课试讲" },
              { step: "03", title: "选择合作方案", desc: "根据机构规模和需求选择" },
              { step: "04", title: "师资培训", desc: "2 天集中培训" },
              { step: "05", title: "开班授课", desc: "获得全部教学资源，正式开课" },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="text-white/10 text-lg font-bold shrink-0 w-8">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-[15px] mb-0.5">{item.title}</h3>
                  <p className="text-white/30 text-[13px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div className="card p-8 mb-16">
          <h3 className="font-semibold mb-3 text-[15px]">开源资源</h3>
          <p className="text-white/35 text-[14px] mb-4 leading-relaxed">
            ATTA 课程框架在 GitHub 开源，你可以先浏览课程大纲和体验课设计
          </p>
          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-white/40 hover:text-white/60 transition-colors underline underline-offset-4"
          >
            github.com/ryrhappy/atta-ai-curriculum
          </a>
          <p className="text-white/20 text-[12px] mt-4">
            开源内容采用 CC BY-NC-SA 4.0 协议。商业授权请联系我们。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:atta@yiaya.com"
            className="inline-block px-8 py-2.5 rounded-full bg-white text-[#0A1628] text-[14px] font-semibold hover:bg-white/90 transition-colors"
          >
            联系合作
          </a>
          <p className="text-white/20 text-[12px] mt-3">atta@yiaya.com</p>
        </div>
      </div>
    </main>
  );
}
