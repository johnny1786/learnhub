import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          LearnHub
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Tracks
          </Link>
          {/* Future: Add About / Profile / Login */}
        </div>
      </div>
    </nav>
  );
}
