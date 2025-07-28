import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function TrackCard({ title, description, slug }: Props) {
  return (
    <Link href={`/tracks/${slug}`} className="block">
        <div className="border rounded-xl p-4 shadow-md bg-gray-50 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </Link>
  );
}
