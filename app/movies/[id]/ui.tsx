import Image from 'next/image';

export default function UI({ movie }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <Image
        src={movie.image_url}
        width={500}
        height={750}
        alt="Dune: Part Two"
        className="w-1/3"
      />
      <div className="md:w-2/3 w-full items-center md:items-start flex flex-col p-5 gap-3">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-gray-700 text-lg font-medium">
          {movie.overview}
        </p>
        <div className="font-bold text-lg">
          <i className="fa fa-star mr-2" />
          {`Vote Average : ${movie.vote_average}`}
        </div>
        <div className="font-bold text-lg">{`Popularity : ${movie.popularity}`}</div>
        <div className="font-bold text-lg">
          {`Release Date : ${movie.release_date}`}
        </div>
      </div>
    </div>
  );
}
