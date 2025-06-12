import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 bg-gray-900 text-center font-bold">
      <div className="text-white">
        &copy; {new Date().getFullYear()}{' '}
        <Link
          className="text-gray-500"
          href={'https://www.themoviedb.org'}
          target="_blank"
        >
          TMDB
        </Link>
        Flix. All rights reserved.
      </div>
    </footer>
  );
}
