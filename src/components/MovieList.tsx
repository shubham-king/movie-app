import { Link } from "react-router-dom";
import placeholderImage from "@/assets/placeholder.svg";
import { useAppContext } from "@/context/AppContext";
import useFetch from "../hooks/useFetch";

const MovieList = () => {
  const { state } = useAppContext();
  const { query } = state;
  const { data, isLoading, error } = useFetch(`&s=${query}`);

  if (isLoading) return <div>Loading...</div>;
  if (error.show) return <div>{error.msg}</div>;

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {data &&
        data.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center p-6 "
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
