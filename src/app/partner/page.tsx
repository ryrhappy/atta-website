export default function PartnerPage() {
  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
            For Partners
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            机构合作
          </h1>
          <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
            培训机构、学校、少年宫——无需自己研发课程，ATTA 提供完整课程体系
          </p>
        </div>

        {/* What you get */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">合作方获得什么？</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📚",
                title: "完整教案",
                desc: "每节课的详细教学步骤、话术、时间分配、互动设计，照着念就能上课",
              },
              {
                icon: "🖼️",
                title: "教学 PPT",
                desc: "配套演示文稿，含动画和互动环节，投影即用",
              },
              {
                icon: "📝",
                title: "学生手册 + 任务单",
                desc: "每个学生人手一份，课上填、课后带回家",
              },
              {
                icon: "📊",
                title: "评价量表",
                desc: "标准化能力评估，每课可量化学生学习成果",
              },
              {
                icon: "🛡️",
                title: "伦理教案",
                desc: "每课 3-5 分钟伦理讨论设计，这是竞赛差异化加分项",
              },
              {
                icon: "📱",
                title: "家长沟通模板",
                desc: "每节课自动生成「今日学习报告」，家长看得见的成长",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06]"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">合作方案</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Course License */}
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="font-bold text-lg mb-2">课程授权</h3>
              <p className="text-white/30 text-sm mb-4">1 个轨道的完整教学资源</p>
              <p className="text-3xl font-bold mb-1">8,000–15,000<span className="text-base text-white/30">元/轨道/年</span></p>
              <ul className="mt-6 space-y-2 text-sm text-white/50">
                <li>✦ 完整教案 + PPT + 任务单</li>
                <li>✦ 学生手册 + 评价量表</li>
                <li>✦ 1 年更新权限</li>
              </ul>
            </div>

            {/* Full Package */}
            <div className="bg-gradient-to-b from-[#0066FF]/10 to-transparent rounded-2xl p-8 border border-[#0066FF]/20">
              <div className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                推荐
              </div>
              <h3 className="font-bold text-lg mb-2">全套合作</h3>
              <p className="text-white/30 text-sm mb-4">课程 + 师资 + 答疑</p>
              <p className="text-3xl font-bold mb-1">30,000–50,000<span className="text-base text-white/30">元/年</span></p>
              <ul className="mt-6 space-y-2 text-sm text-white/50">
                <li>✦ 3 个轨道完整授权</li>
                <li>✦ 师资培训（2 天）</li>
                <li>✦ 教学答疑支持</li>
                <li>✦ 竞赛指导方案</li>
              </ul>
            </div>

            {/* Workshop */}
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="font-bold text-lg mb-2">单次工作坊</h3>
              <p className="text-white/30 text-sm mb-4">半天体验课，试水合作</p>
              <p className="text-3xl font-bold mb-1">3,000–5,000<span className="text-base text-white/30">元/场</span></p>
              <ul className="mt-6 space-y-2 text-sm text-white/50">
                <li>✦ 1 节体验课完整方案</li>
                <li>✦ 物料清单 + 模板</li>
                <li>✦ 适合招生引流</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Start */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">合作流程</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { step: "1", title: "浏览课程体系", desc: "查看我们的开源课程框架，了解课程设计理念" },
              { step: "2", title: "预约体验课", desc: "我们提供 1 节免费体验课试讲，感受教学质量" },
              { step: "3", title: "选择合作方案", desc: "根据机构规模和需求，选择课程授权或全套合作" },
              { step: "4", title: "师资培训", desc: "2 天集中培训，让您的老师也能上好 ATTA 课程" },
              { step: "5", title: "开班授课", desc: "获得全部教学资源，正式开课" },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06] mb-16">
          <h3 className="font-semibold mb-3">📂 开源资源</h3>
          <p className="text-white/40 text-sm mb-4 leading-relaxed">
            ATTA 课程框架在 GitHub 开源，你可以先浏览课程大纲和体验课设计：
          </p>
          <a
            href="https://github.com/ryrhappy/atta-ai-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#00D4FF] hover:underline"
          >
            github.com/ryrhappy/atta-ai-curriculum ↗
          </a>
          <p className="text-white/30 text-xs mt-4">
            开源内容采用 CC BY-NC-SA 4.0 协议，可自由分享但不可商用。商业授权请联系我们。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:atta@yiaya.com"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            联系合作
          </a>
          <p className="text-white/30 text-sm mt-4">atta@yiaya.com</p>
        </div>
      </div>
    </main>
  );
}
