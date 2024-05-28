import { Link } from "react-router-dom";
import placeholderImage from "@/assets/placeholder.svg";

const MovieList = () => {

  if (isLoading) return <div>Loading...</div>;
  if (error.show) return <div>{error.msg}</div>;

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 movie-list ">
      {data &&
        data.map((movie, index) => (
          <div
            key={index}
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
