const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (searchQuery: string, page: number, resultsPerPage: number) => {
  const cacheKey = `movies_${searchQuery}_page${page}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(`${API_ENDPOINT}&s=${searchQuery}&page=${page}`);
    const data = await response.json();

    if (!response.ok || data.Response !== "True") {
      throw new Error(data.Error || "Failed to fetch movies");
    }

    const movies = data.Search.slice(0, resultsPerPage);
    localStorage.setItem(cacheKey, JSON.stringify({ data: movies, totalResults: data.totalResults }));
    return { data: movies, totalResults: data.totalResults };
  } catch (error) {
    throw new Error((error as Error).message || "Failed to fetch movies");
  }
};

export const fetchMovieDetails = async (id: string) => {
  const cacheKey = `movie_${id}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();

    if (!response.ok || data.Response !== "True") {
      throw new Error(data.Error || "Failed to fetch movie details");
    }

    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error(
      (error as Error).message || "Failed to fetch movie details"
    );
  }
};
