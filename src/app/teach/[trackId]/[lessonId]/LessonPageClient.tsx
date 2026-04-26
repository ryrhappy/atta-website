"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { tracks } from "../../../lib/courses";
import { useState } from "react";

export default function LessonPageClient() {
  const { trackId, lessonId } = useParams<{ trackId: string; lessonId: string }>();
  const track = tracks.find((t) => t.id === trackId);
  const lesson = track?.lessons.find((l) => l.id === lessonId);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  if (!track || !lesson) {
    return (
      <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center py-20">
          <p className="text-6xl mb-6">🤷</p>
          <h1 className="text-2xl font-bold mb-4">课程未找到</h1>
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

  const accentBg =
    track.color === "green"
      ? "bg-green-400/10 border-green-400/20"
      : track.color === "blue"
      ? "bg-blue-400/10 border-blue-400/20"
      : "bg-orange-400/10 border-orange-400/20";

  const lessonIndex = track.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? track.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < track.lessons.length - 1
      ? track.lessons[lessonIndex + 1]
      : null;

  return (
    <main className="min-h-screen grid-bg pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <Link href="/teach" className="hover:text-white/50 transition-colors">工作台</Link>
          <span>/</span>
          <Link href={`/teach/${track.id}`} className="hover:text-white/50 transition-colors">
            {track.name}
          </Link>
          <span>/</span>
          <span className="text-white/50">{lesson.title}</span>
        </div>

        {/* Lesson Header */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{lesson.icon}</span>
            <div>
              <p className={`text-xs font-semibold tracking-widest uppercase ${accentColor} mb-1`}>
                第 {lessonIndex + 1} 课
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{lesson.title}</h1>
              <p className="text-white/40">{lesson.objective}</p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] text-center">
            <p className="text-white/30 text-xs mb-1">时长</p>
            <p className="font-semibold">{lesson.duration}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] text-center">
            <p className="text-white/30 text-xs mb-1">产出</p>
            <p className="font-semibold text-sm">{lesson.output}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] text-center">
            <p className="text-white/30 text-xs mb-1">竞赛衔接</p>
            <p className="font-semibold text-sm">{lesson.contest}</p>
          </div>
          <div className={`${accentBg} rounded-xl p-4 border text-center`}>
            <p className={`${accentColor} text-xs mb-1`}>🛡️ 伦理</p>
            <p className="font-semibold text-sm">{lesson.ethics}</p>
          </div>
        </div>

        {/* Timeline / Steps */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-6">📋 教学步骤</h2>
          <div className="space-y-3">
            {lesson.steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={i}
                  onClick={() => setActiveStep(isActive ? null : i)}
                  className={`cursor-pointer rounded-xl border transition-colors ${
                    isActive
                      ? `${accentBg} border-white/10`
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center gap-4 p-5">
                    <span className="text-2xl shrink-0">{step.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white/20 text-xs font-mono">{step.time}</span>
                      </div>
                      <p className="font-semibold">{step.title}</p>
                    </div>
                    <span className="text-white/20 text-lg">{isActive ? "▲" : "▼"}</span>
                  </div>

                  {/* Step Detail (expandable) */}
                  {isActive && (
                    <div className="px-5 pb-5 border-t border-white/[0.06] pt-4 space-y-4">
                      {step.script && (
                        <div>
                          <p className="text-xs text-white/30 mb-1.5 font-medium">💬 话术</p>
                          <div className="bg-white/[0.03] rounded-lg p-4 text-sm text-white/70 leading-relaxed italic">
                            「{step.script}」
                          </div>
                        </div>
                      )}
                      {step.action && (
                        <div>
                          <p className="text-xs text-white/30 mb-1.5 font-medium">🎯 动作</p>
                          <p className="text-sm text-white/60 leading-relaxed">{step.action}</p>
                        </div>
                      )}
                      {step.tips && (
                        <div>
                          <p className="text-xs text-white/30 mb-1.5 font-medium">💡 提示</p>
                          <p className="text-sm text-[#FF6B2C]/70 leading-relaxed">{step.tips}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Materials */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06]">
            <h3 className="font-semibold mb-4">📦 课前物料</h3>
            <ul className="space-y-2 text-sm text-white/50">
              {lesson.materials.map((m, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-white/20 shrink-0">☐</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06]">
            <h3 className="font-semibold mb-4">⚠️ 教师注意</h3>
            <ul className="space-y-2 text-sm text-white/50">
              {lesson.teacherNotes.map((n, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className={`${accentColor} shrink-0`}>!</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/[0.06]">
          {prevLesson ? (
            <Link
              href={`/teach/${track.id}/${prevLesson.id}`}
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link
              href={`/teach/${track.id}/${nextLesson.id}`}
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              {nextLesson.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}
