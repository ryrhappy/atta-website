import { tracks } from "@/app/lib/courses";
import LessonPageClient from "./LessonPageClient";

export function generateStaticParams() {
  return tracks.flatMap((track) =>
    track.lessons.map((lesson) => ({
      trackId: track.id,
      lessonId: lesson.id,
    }))
  );
}

export default function LessonPage() {
  return <LessonPageClient />;
}
