'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <div className="col-span-1 relative">
      {/* image 부분 */}
      <Image
        src={movie.image_url}
        width={500}
        height={750}
        alt="Dune: Part Two"
        className="w-full"
      />
      {/* Title Dim */}
      <Link href={`/movies/${movie.id}`}>
        <div className="absolute group top-0 left-0 w-full h-full z-10 bg-black/0 hover:bg-black/80 transition-all duration-300 flex items-center justify-center">
          <p className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {movie.title}
          </p>
        </div>
      </Link>
    </div>
  );
}
