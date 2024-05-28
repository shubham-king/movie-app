
import { API_ENDPOINT } from "./const";

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