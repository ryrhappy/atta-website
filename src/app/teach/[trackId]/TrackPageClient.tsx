"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { tracks } from "../../lib/courses";

export default function TrackPageClient() {
  const { trackId } = useParams<{ trackId: string }>();
  const track = tracks.find((t) => t.id === trackId);

  if (!track) {
    return (
      <main className="min-h-screen grid-bg relative overflow-hidden pt-20 pb-16">
        <div className="particles-bg pointer-events-none absolute inset-0" />
        <div className="content-shell relative z-10 text-center py-24">
          <h1 className="tech-heading text-2xl font-bold mb-4">轨道未找到</h1>
          <Link href="/teach" className="text-cyan-100/75 hover:text-cyan-50 text-[14px]">
            返回工作台
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid-bg relative overflow-hidden pt-20 pb-20">
      <div className="particles-bg pointer-events-none absolute inset-0" />
      <div className="content-shell relative z-10">
        {/* Back */}
        <Link href="/teach" className="text-[13px] text-cyan-100/60 hover:text-cyan-50 transition-colors">
          ← 工作台
        </Link>

        {/* Header */}
        <div className="mt-8 mb-16 text-center">
          <span className="chip tech-chip mb-4 inline-block">{track.subtitle}</span>
          <h1 className="tech-heading text-3xl font-bold mb-3">{track.name}</h1>
          <div className="flex justify-center gap-6 text-[14px] tech-copy mt-2">
            <span>{track.age}</span>
            <span>{track.totalLessons} 课 × {track.lessonDuration}</span>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-3">
          {track.lessons.map((lesson, i) => (
            <Link
              key={lesson.id}
              href={`/teach/${track.id}/${lesson.id}`}
              className="tech-panel flex items-center gap-5 rounded-xl p-5 transition-colors group"
            >
              <span className="text-white/20 text-[13px] font-mono w-8 shrink-0 text-right tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="tech-title font-medium text-[16px] group-hover:text-cyan-200 transition-colors">
                  {lesson.title}
                </h3>
                <p className="tech-copy text-[13px] truncate">{lesson.objective}</p>
              </div>
              <span className="text-cyan-100/70 text-[12px] shrink-0">{lesson.duration}</span>
            </Link>
          ))}
        </div>

        {track.lessons.length < track.totalLessons && (
          <p className="text-center text-white/35 text-[13px] mt-8">
            更多课程持续录入
          </p>
        )}
      </div>
    </main>
  );
}
