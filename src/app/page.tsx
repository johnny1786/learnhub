import TrackCard  from "@/components/TrackCard";
import {tracks} from "@/data/tracks";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4"> LearnHub Tracks</h1>
      <p>Your personalized learning journey starts here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tracks.map((track) => (
          <TrackCard key={track.slug} 
          title={track.title} 
          description={track.description} 
          slug={track.slug} />
        ))}
      </div>
    </main>
  );
}