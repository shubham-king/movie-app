
import useFetch from '../hooks/useFetch';
import { Link } from "react-router-dom";

const MovieList = () => {
  const { data, isLoading, error } = useFetch('&s=friends');

  if (isLoading) return <div>Loading...</div>;
  if (error.show) return <div>Error: {error.msg}</div>;

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {data && data.map((movie, index) => (
       <div
       key={index}
       className="flex flex-col justify-between items-center p-6 "
     >
       <Link to={`/${movie.imdbID}`}>
         <img
           className="rounded-lg glow-wrapper"
           src={movie.Poster}
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

export default MovieList