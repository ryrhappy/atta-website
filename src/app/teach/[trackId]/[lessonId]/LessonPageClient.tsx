"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { tracks } from "../../../lib/courses";
import { useState } from "react";

export default function LessonPageClient() {
  const { trackId, lessonId } = useParams<{ trackId: string; lessonId: string }>();
  const track = tracks.find((t) => t.id === trackId);
  const lesson = track?.lessons.find((l) => l.id === lessonId);
  const [openStep, setOpenStep] = useState<number | null>(null);

  if (!track || !lesson) {
    return (
      <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
        <div className="max-w-[720px] mx-auto text-center py-24">
          <h1 className="text-2xl font-bold mb-4">课程未找到</h1>
          <Link href="/teach" className="text-white/40 hover:text-white/60 text-[14px]">返回工作台</Link>
        </div>
      </main>
    );
  }

  const lessonIndex = track.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? track.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < track.lessons.length - 1 ? track.lessons[lessonIndex + 1] : null;

  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[12px] text-white/25 mb-10">
          <Link href="/teach" className="hover:text-white/40 transition-colors">工作台</Link>
          <span>/</span>
          <Link href={`/teach/${track.id}`} className="hover:text-white/40 transition-colors">{track.name}</Link>
          <span>/</span>
          <span className="text-white/40">{lesson.title}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="chip mb-3 inline-block">第 {lessonIndex + 1} 课</span>
          <h1 className="text-3xl font-bold mb-3">{lesson.title}</h1>
          <p className="text-white/35 text-[15px]">{lesson.objective}</p>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div className="card p-4 text-center">
            <p className="text-white/20 text-[11px] uppercase tracking-wider mb-1">时长</p>
            <p className="font-semibold text-[15px]">{lesson.duration}</p>
          </div>
          <div className="card p-4 text-center">
            <p className="text-white/20 text-[11px] uppercase tracking-wider mb-1">产出</p>
            <p className="font-medium text-[13px] text-white/60">{lesson.output}</p>
          </div>
          <div className="card p-4 text-center">
            <p className="text-white/20 text-[11px] uppercase tracking-wider mb-1">竞赛</p>
            <p className="font-medium text-[13px] text-white/60">{lesson.contest}</p>
          </div>
          <div className="card p-4 text-center border-[#FF6B2C]/15">
            <p className="text-[#FF6B2C]/50 text-[11px] uppercase tracking-wider mb-1">伦理</p>
            <p className="font-medium text-[13px] text-white/60">{lesson.ethics}</p>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-12">
          <h2 className="text-lg font-bold mb-6">教学步骤</h2>
          <div className="space-y-2">
            {lesson.steps.map((step, i) => {
              const isOpen = openStep === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenStep(isOpen ? null : i)}
                  className={`step-row cursor-pointer ${isOpen ? "active" : ""}`}
                >
                  {/* Row */}
                  <div className="flex items-center gap-4 p-4">
                    <span className="text-white/10 text-[12px] font-mono w-16 shrink-0">{step.time}</span>
                    <span className="flex-1 text-[14px] font-medium">{step.title}</span>
                    <span className="text-white/15 text-[11px] shrink-0">{isOpen ? "收起" : "展开"}</span>
                  </div>
                  {/* Detail */}
                  {isOpen && (
                    <div className="px-4 pb-5 pt-1 border-t border-white/[0.04] space-y-4 ml-16">
                      {step.script && (
                        <div>
                          <p className="text-[11px] text-white/20 uppercase tracking-wider mb-1">话术</p>
                          <p className="text-[14px] text-white/55 leading-relaxed">「{step.script}」</p>
                        </div>
                      )}
                      {step.action && (
                        <div>
                          <p className="text-[11px] text-white/20 uppercase tracking-wider mb-1">动作</p>
                          <p className="text-[14px] text-white/40 leading-relaxed">{step.action}</p>
                        </div>
                      )}
                      {step.tips && (
                        <div>
                          <p className="text-[11px] text-white/20 uppercase tracking-wider mb-1">提示</p>
                          <p className="text-[14px] text-[#FF6B2C]/60 leading-relaxed">{step.tips}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="card p-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-wider mb-4">课前物料</h3>
            <ul className="space-y-2.5 text-[13px] text-white/40">
              {lesson.materials.map((m, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-white/15 shrink-0">-</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-[11px] text-white/20 uppercase tracking-wider mb-4">教师注意</h3>
            <ul className="space-y-2.5 text-[13px] text-white/40">
              {lesson.teacherNotes.map((n, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#FF6B2C]/40 shrink-0">!</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nav */}
        <div className="flex justify-between items-center pt-8 border-t border-white/[0.04] text-[13px]">
          {prevLesson ? (
            <Link href={`/teach/${track.id}/${prevLesson.id}`} className="text-white/25 hover:text-white/50 transition-colors">
              ← {prevLesson.title}
            </Link>
          ) : <span />}
          {nextLesson ? (
            <Link href={`/teach/${track.id}/${nextLesson.id}`} className="text-white/25 hover:text-white/50 transition-colors">
              {nextLesson.title} →
            </Link>
          ) : <span />}
        </div>
      </div>
    </main>
  );
}
