import { Link } from "react-router-dom";
import placeholderImage from "@/assets/placeholder.svg";
import { MovieListProps } from "@/types/index";

const MovieList = ({ data }: MovieListProps) => {
  if (!data) return <div>No movies found</div>;

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 movie-list ">
      {data?.map((movie) => (
        <div
          key={movie.imdbID}
          className="flex flex-col justify-between items-center p-6 movie-item"
        >
          <Link to={`/movie/${movie.imdbID}`}>
            <img
              className="rounded-lg glow-wrapper"
              src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage}
              width={300}
              height={500}
              alt="poster"
            />
          </Link>
          <div>
            <p className="mt-2">{movie?.Title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
