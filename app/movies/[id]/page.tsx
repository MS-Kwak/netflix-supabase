import { getMovie } from '@/actions/movie.action';
import UI from './ui';

export async function generateMetadata({ params, searchParams }) {
  const { id } = params;
  console.log('Generating metadata for movie ID:', id);
  const movie = await getMovie(id);

  return {
    title: movie.title,
    description:
      movie.overview || 'No description available for this movie.',
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function MovieDetailPage({ params }) {
  const { id } = params;
  console.log('Movie ID:', id);

  const movie = await getMovie(id);

  return (
    <main className="flex items-center py-20 min-h-screen bg-gray-200">
      {movie ? (
        <UI movie={movie} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold">Movie Not Found</h1>
          <p className="mt-2 text-gray-600">
            The movie you are looking for does not exist.
          </p>
        </div>
      )}
    </main>
  );
}
