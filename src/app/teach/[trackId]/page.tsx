import { tracks } from "@/app/lib/courses";
import TrackPageClient from "./TrackPageClient";

export function generateStaticParams() {
  return tracks.map((track) => ({ trackId: track.id }));
}

export default function TrackPage() {
  return <TrackPageClient />;
}
