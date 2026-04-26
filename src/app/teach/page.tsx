import Link from "next/link";
import { tracks } from "../lib/courses";

export default function TeachPage() {
  return (
    <main className="min-h-screen grid-bg relative overflow-hidden pt-20 pb-20">
      <div className="particles-bg pointer-events-none absolute inset-0" />
      <div className="content-shell relative z-10">
        <section className="tech-section mb-20">
          <div className="text-center mb-20">
            <span className="chip tech-chip">Teacher Dashboard</span>
            <h1 className="tech-heading text-[2.5rem] md:text-[3rem] font-bold mt-6 mb-4">教师工作台</h1>
            <p className="tech-lead text-[15px] md:text-[16px]">
              选择课程轨道，查看教案，按步骤授课
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {tracks.map((track) => (
              <Link
                key={track.id}
                href={`/teach/${track.id}`}
                className="tech-panel p-8 md:p-9 block group text-center"
              >
                <span className="chip tech-chip mb-5 inline-block">
                  {track.subtitle}
                </span>
                <h2 className="tech-title text-[24px] font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                  {track.name}
                </h2>
                <p className="tech-copy text-[14px] mb-5">{track.age}</p>
                <p className="tech-desc text-[14px]">
                  {track.totalLessons} 课 × {track.lessonDuration}
                </p>
                <p className="text-cyan-100/65 text-[14px] mt-2">
                  已录入 {track.lessons.length} / {track.totalLessons} 课
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="tech-section">
          <div className="text-center mb-14">
            <span className="chip tech-chip">Guide</span>
            <h2 className="tech-heading text-[2rem] md:text-[2.3rem] font-bold mt-6 mb-4">使用指南</h2>
            <p className="tech-lead text-[15px]">4 个步骤快速进入授课状态，课前课中更从容</p>
          </div>
          <div className="tech-panel p-8 md:p-10">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { step: "01", label: "选轨道", desc: "点击上方卡片" },
                { step: "02", label: "选课程", desc: "浏览课程列表" },
                { step: "03", label: "看步骤", desc: "逐步授课，含话术和动作" },
                { step: "04", label: "查物料", desc: "课前检查清单" },
              ].map((item) => (
                <div key={item.step} className="tech-panel p-6">
                  <p className="text-white/20 font-bold text-xl mb-1 tabular-nums">{item.step}</p>
                  <p className="tech-title font-semibold text-[15px] mb-1">{item.label}</p>
                  <p className="tech-copy text-[13px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
