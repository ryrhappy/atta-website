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
        <div className="max-w-[720px] mx-auto text-center py-24">
          <h1 className="text-2xl font-bold mb-4">轨道未找到</h1>
          <Link href="/teach" className="text-white/40 hover:text-white/60 text-[14px]">
            返回工作台
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Back */}
        <Link href="/teach" className="text-[13px] text-white/30 hover:text-white/50 transition-colors">
          ← 工作台
        </Link>

        {/* Header */}
        <div className="mt-8 mb-12">
          <span className="chip mb-4 inline-block">{track.subtitle}</span>
          <h1 className="text-3xl font-bold mb-2">{track.name}</h1>
          <div className="flex gap-6 text-[13px] text-white/30 mt-2">
            <span>{track.age}</span>
            <span>{track.totalLessons} 课 × {track.lessonDuration}</span>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-2">
          {track.lessons.map((lesson, i) => (
            <Link
              key={lesson.id}
              href={`/teach/${track.id}/${lesson.id}`}
              className="flex items-center gap-5 rounded-lg p-4 border border-transparent hover:border-white/[0.06] hover:bg-white/[0.02] transition-colors group"
            >
              <span className="text-white/10 text-[13px] font-mono w-7 shrink-0 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] group-hover:text-[#00D4FF] transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-white/25 text-[13px] truncate">{lesson.objective}</p>
              </div>
              <span className="text-white/15 text-[12px] shrink-0">{lesson.duration}</span>
            </Link>
          ))}
        </div>

        {track.lessons.length < track.totalLessons && (
          <p className="text-center text-white/15 text-[13px] mt-8">
            更多课程持续录入
          </p>
        )}
      </div>
    </main>
  );
}
