const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (
  searchQuery: string,
  page: number,
  resultsPerPage: number
) => {

  try {
    const response = await fetch(
      `${API_ENDPOINT}&s=${searchQuery}&page=${page}`
    );
    const data = await response.json();

    if (!response.ok || data.Response !== "True") {
      throw new Error(data.Error || "Failed to fetch movies");
    }

    const movies = data.Search.slice(0, resultsPerPage);
    
    return { data: movies, totalResults: data.totalResults };
  } catch (error) {
    throw new Error((error as Error).message || "Failed to fetch movies");
  }
};

export const fetchMovieDetails = async (id: string) => {

  try {
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();

    if (!response.ok || data.Response !== "True") {
      throw new Error(data.Error || "Failed to fetch movie details");
    }

    return data;
  } catch (error) {
    throw new Error(
      (error as Error).message || "Failed to fetch movie details"
    );
  }
};
