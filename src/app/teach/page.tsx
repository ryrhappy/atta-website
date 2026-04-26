import Link from "next/link";
import { tracks } from "../lib/courses";

export default function TeachPage() {
  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
            Teacher Dashboard
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            教师工作台
          </h1>
          <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
            选择课程轨道 → 查看教案 → 按步骤授课。每个步骤都有话术、计时和注意事项。
          </p>
        </div>

        {/* Track Selector */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tracks.map((track) => {
            const borderColor =
              track.color === "green"
                ? "border-green-400/20 hover:border-green-400/40"
                : track.color === "blue"
                ? "border-blue-400/20 hover:border-blue-400/40"
                : "border-orange-400/20 hover:border-orange-400/40";
            const bgColor =
              track.color === "green"
                ? "bg-green-400/[0.03]"
                : track.color === "blue"
                ? "bg-blue-400/[0.03]"
                : "bg-orange-400/[0.03]";

            return (
              <Link
                key={track.id}
                href={`/teach/${track.id}`}
                className={`block rounded-2xl p-6 border ${borderColor} ${bgColor} transition-colors`}
              >
                <div className="text-3xl mb-3">{track.icon}</div>
                <h2 className="text-xl font-bold mb-1">{track.name}</h2>
                <p className="text-white/30 text-sm mb-4">{track.age}</p>
                <div className="text-sm text-white/50 space-y-1">
                  <p>{track.totalLessons} 课 × {track.lessonDuration}</p>
                  <p className="font-semibold text-white/70">已录入 {track.lessons.length} 课</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Guide */}
        <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06]">
          <h3 className="font-semibold mb-4 text-lg">📖 使用指南</h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm text-white/50">
            <div>
              <p className="text-white/70 font-medium mb-1">1️⃣ 选轨道</p>
              <p>点击上方卡片选择课程轨道</p>
            </div>
            <div>
              <p className="text-white/70 font-medium mb-1">2️⃣ 选课程</p>
              <p>浏览课程列表，点击进入教案</p>
            </div>
            <div>
              <p className="text-white/70 font-medium mb-1">3️⃣ 看步骤</p>
              <p>按时间轴逐步授课，含话术和动作</p>
            </div>
            <div>
              <p className="text-white/70 font-medium mb-1">4️⃣ 查物料</p>
              <p>课前检查物料清单，课后发学习报告</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
