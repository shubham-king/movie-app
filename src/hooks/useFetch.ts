import { useEffect, useCallback } from "react";
import { useAppContext } from "../context/AppContext";
import { MovieType } from "../types";
import { fetchMovies, fetchMovieDetails } from "../api";

const useFetch = (urlParams: string, isDetails: boolean = false) => {
  const { state, dispatch } = useAppContext();
  const { query, currentPage } = state;

  const fetchData = useCallback(async () => {
    dispatch({ type: "SET_LOADING" });

    const cacheKey = isDetails ? `movie_${urlParams}` : `movies_${query}_page${currentPage}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      dispatch({
        type: "SET_LOCAL_DATA",
        payload: JSON.parse(cachedData),
      });
      return;
    }

    try {
      const data = isDetails
        ? await fetchMovieDetails(urlParams)
        : await fetchMovies(query, currentPage, 10);

      localStorage.setItem(cacheKey, JSON.stringify({
        data: isDetails ? [data] : data.data,
        totalResults: data.totalResults,
        resultsPerPage: 10,
      }));

      dispatch({
        type: "SET_DATA",
        payload: {
          data: isDetails ? [data] : (data.data as MovieType[]),
          totalResults: data.totalResults,
          resultsPerPage: 10,
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: "SET_ERROR", payload: (error as Error).message });
    }
  }, [urlParams, isDetails, dispatch, query, currentPage]);

  useEffect(() => {
    fetchData();
  }, [urlParams, fetchData, currentPage]);

  return state;
};

export default useFetch;
