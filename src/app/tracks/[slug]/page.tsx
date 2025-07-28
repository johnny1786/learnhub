import { tracks } from "@/data/tracks";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = tracks.find((t) => t.slug === params.slug);

  if (!track) return notFound();

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold">{track.title}</h1>
      <p className="text-gray-600 mt-2">{track.description}</p>

      <div className="mt-6">
  <h2 className="text-xl font-semibold mb-2">Resources</h2>
  <div className="space-y-3">
    {track.resources?.map((res, index) => (
      <Link
        href={res.url}
        key={index}
        target="_blank"
        className="block border p-3 rounded-lg hover:bg-gray-100 transition"
      >
        <div className="text-sm text-gray-700 font-medium">{res.title}</div>
        <div className="text-xs text-gray-500">{res.type.toUpperCase()}</div>
      </Link>
    ))}
  </div>
</div>
    </main>
  );
}
