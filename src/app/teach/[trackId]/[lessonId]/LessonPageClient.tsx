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
      <main className="min-h-screen grid-bg relative overflow-hidden pt-20 pb-16">
        <div className="particles-bg pointer-events-none absolute inset-0" />
        <div className="content-shell relative z-10 text-center py-24">
          <h1 className="tech-heading text-2xl font-bold mb-4">课程未找到</h1>
          <Link href="/teach" className="text-cyan-100/75 hover:text-cyan-50 text-[14px]">返回工作台</Link>
        </div>
      </main>
    );
  }

  const lessonIndex = track.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? track.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < track.lessons.length - 1 ? track.lessons[lessonIndex + 1] : null;

  return (
    <main className="min-h-screen grid-bg relative overflow-hidden pt-20 pb-20">
      <div className="particles-bg pointer-events-none absolute inset-0" />
      <div className="content-shell relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-1.5 text-[12px] text-white/35 mb-10">
          <Link href="/teach" className="hover:text-cyan-50 transition-colors">工作台</Link>
          <span>/</span>
          <Link href={`/teach/${track.id}`} className="hover:text-cyan-50 transition-colors">{track.name}</Link>
          <span>/</span>
          <span className="text-cyan-100/80">{lesson.title}</span>
        </div>

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="chip tech-chip mb-3 inline-block">第 {lessonIndex + 1} 课</span>
          <h1 className="tech-heading text-3xl font-bold mb-4">{lesson.title}</h1>
          <p className="tech-lead text-[15px]">{lesson.objective}</p>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="tech-panel p-5 text-center">
            <p className="text-white/20 text-[11px] uppercase tracking-wider mb-1">时长</p>
            <p className="font-semibold text-[15px]">{lesson.duration}</p>
          </div>
          <div className="tech-panel p-5 text-center">
            <p className="text-white/20 text-[11px] uppercase tracking-wider mb-1">产出</p>
            <p className="font-medium text-[13px] text-cyan-100/75">{lesson.output}</p>
          </div>
          <div className="tech-panel p-5 text-center">
            <p className="text-white/20 text-[11px] uppercase tracking-wider mb-1">竞赛</p>
            <p className="font-medium text-[13px] text-cyan-100/75">{lesson.contest}</p>
          </div>
          <div className="tech-panel p-5 text-center border-[#FF6B2C]/25">
            <p className="text-[#FFB084]/75 text-[11px] uppercase tracking-wider mb-1">伦理</p>
            <p className="font-medium text-[13px] text-cyan-100/75">{lesson.ethics}</p>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <h2 className="tech-heading text-[30px] font-bold mb-10 text-center">教学步骤</h2>
          <div className="space-y-6">
            {lesson.steps.map((step, i) => {
              const isOpen = openStep === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenStep(isOpen ? null : i)}
                  className={`tech-panel cursor-pointer ${isOpen ? "active border-cyan-300/40" : ""}`}
                >
                  {/* Row */}
                  <div className="flex items-center gap-7 px-8 py-9">
                    <span className="text-white/35 text-[13px] font-mono w-20 shrink-0">{step.time}</span>
                    <span className="flex-1 text-[18px] font-semibold text-cyan-50/95">{step.title}</span>
                    <span className="text-cyan-100/65 text-[12px] shrink-0">{isOpen ? "收起" : "展开"}</span>
                  </div>
                  {/* Detail */}
                  {isOpen && (
                    <div className="px-8 pb-12 pt-7 border-t border-white/[0.08] space-y-8">
                      {step.script && (
                        <div>
                          <p className="text-[11px] text-white/25 uppercase tracking-wider mb-2">话术</p>
                          <p className="text-[16px] text-cyan-100/85 leading-8">「{step.script}」</p>
                        </div>
                      )}
                      {step.action && (
                        <div>
                          <p className="text-[11px] text-white/25 uppercase tracking-wider mb-2">动作</p>
                          <p className="text-[16px] text-cyan-100/75 leading-8">{step.action}</p>
                        </div>
                      )}
                      {step.tips && (
                        <div>
                          <p className="text-[11px] text-white/25 uppercase tracking-wider mb-2">提示</p>
                          <p className="text-[16px] text-[#FFB084]/80 leading-8">{step.tips}</p>
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
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="tech-panel p-11">
            <h3 className="text-[12px] text-white/25 uppercase tracking-wider mb-6">课前物料</h3>
            <ul className="space-y-5 text-[15px] text-cyan-100/80 leading-8">
              {lesson.materials.map((m, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-white/15 shrink-0">-</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tech-panel p-11">
            <h3 className="text-[12px] text-white/25 uppercase tracking-wider mb-6">教师注意</h3>
            <ul className="space-y-5 text-[15px] text-cyan-100/80 leading-8">
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
        <div className="flex justify-between items-center pt-8 border-t border-cyan-200/10 text-[13px]">
          {prevLesson ? (
            <Link href={`/teach/${track.id}/${prevLesson.id}`} className="text-cyan-100/55 hover:text-cyan-50 transition-colors">
              ← {prevLesson.title}
            </Link>
          ) : <span />}
          {nextLesson ? (
            <Link href={`/teach/${track.id}/${nextLesson.id}`} className="text-cyan-100/55 hover:text-cyan-50 transition-colors">
              {nextLesson.title} →
            </Link>
          ) : <span />}
        </div>
      </div>
    </main>
  );
}
