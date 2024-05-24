
import useFetch from '../hooks/useFetch';

const MovieList = () => {
  const { data, isLoading, error } = useFetch('&s=friends');

  if (isLoading) return <div>Loading...</div>;
  if (error.show) return <div>Error: {error.msg}</div>;

  return (
    <div>
      {data && data.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </div>
  );
};

export default MovieList