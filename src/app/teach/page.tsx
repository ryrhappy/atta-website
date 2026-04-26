import Link from "next/link";
import { tracks } from "../lib/courses";

export default function TeachPage() {
  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="chip mb-4">Teacher Dashboard</span>
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold mt-4 mb-4">教师工作台</h1>
          <p className="text-white/30 text-[15px] max-w-md mx-auto leading-relaxed">
            选择课程轨道，查看教案，按步骤授课
          </p>
        </div>

        {/* Track Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {tracks.map((track) => (
            <Link
              key={track.id}
              href={`/teach/${track.id}`}
              className="card p-7 block group"
            >
              <span className="chip mb-5 inline-block">
                {track.subtitle}
              </span>
              <h2 className="text-lg font-bold mb-1 group-hover:text-[#00D4FF] transition-colors">
                {track.name}
              </h2>
              <p className="text-white/25 text-[13px] mb-5">{track.age}</p>
              <p className="text-white/35 text-[13px]">
                {track.totalLessons} 课 × {track.lessonDuration}
              </p>
              <p className="text-white/50 text-[13px] mt-1">
                已录入 {track.lessons.length} / {track.totalLessons} 课
              </p>
            </Link>
          ))}
        </div>

        {/* Guide */}
        <div className="card p-8">
          <h3 className="font-semibold mb-6 text-[15px] text-white/60">使用指南</h3>
          <div className="grid md:grid-cols-4 gap-8 text-[13px]">
            {[
              { step: "01", label: "选轨道", desc: "点击上方卡片" },
              { step: "02", label: "选课程", desc: "浏览课程列表" },
              { step: "03", label: "看步骤", desc: "逐步授课，含话术和动作" },
              { step: "04", label: "查物料", desc: "课前检查清单" },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-white/10 font-bold text-lg mb-1">{item.step}</p>
                <p className="text-white/70 font-medium mb-0.5">{item.label}</p>
                <p className="text-white/25">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
