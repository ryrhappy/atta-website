"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { tracks } from "../../lib/courses";

export default function TrackPageClient() {
  const { trackId } = useParams<{ trackId: string }>();
  const track = tracks.find((t) => t.id === trackId);

  if (!track) {
    return (
      <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center py-20">
          <p className="text-6xl mb-6">🤷</p>
          <h1 className="text-2xl font-bold mb-4">轨道未找到</h1>
          <Link href="/teach" className="text-[#00D4FF] hover:underline">
            ← 返回教师工作台
          </Link>
        </div>
      </main>
    );
  }

  const accentColor =
    track.color === "green"
      ? "text-green-400"
      : track.color === "blue"
      ? "text-blue-400"
      : "text-orange-400";

  const accentBorder =
    track.color === "green"
      ? "border-green-400/15 hover:border-green-400/30"
      : track.color === "blue"
      ? "border-blue-400/15 hover:border-blue-400/30"
      : "border-orange-400/15 hover:border-orange-400/30";

  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/teach"
          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/60 transition-colors mb-8"
        >
          ← 返回工作台
        </Link>

        {/* Track Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{track.icon}</span>
            <div>
              <p className={`text-xs font-semibold tracking-widest uppercase ${accentColor}`}>
                {track.subtitle}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold">{track.name}</h1>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-white/40 mt-3">
            <span>{track.age}</span>
            <span>{track.totalLessons} 课 × {track.lessonDuration}</span>
            <span>¥{track.price}</span>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          {track.lessons.map((lesson, i) => (
            <Link
              key={lesson.id}
              href={`/teach/${track.id}/${lesson.id}`}
              className={`flex items-center gap-4 rounded-xl p-5 border border-white/[0.06] ${accentBorder} bg-white/[0.02] transition-colors group`}
            >
              <span className="text-white/20 text-sm font-mono w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl shrink-0">{lesson.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold group-hover:text-white transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-white/30 text-sm truncate">{lesson.objective}</p>
              </div>
              <span className="text-white/20 text-sm shrink-0">{lesson.duration}</span>
              <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
            </Link>
          ))}
        </div>

        {track.lessons.length < track.totalLessons && (
          <div className="mt-8 text-center text-white/20 text-sm">
            更多课程教案持续录入中…
          </div>
        )}
      </div>
    </main>
  );
}
