import { useEffect, useCallback } from "react";
import { useAppContext } from "../context/AppContext";
import { MovieType } from "../types";
import { fetchMovies, fetchMovieDetails } from "../api";

const useFetch = (urlParams: string, isDetails: boolean = false) => {
  const { state, dispatch } = useAppContext();

  const fetchData = useCallback(async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      const data = isDetails
        ? await fetchMovieDetails(urlParams)
        : await fetchMovies(urlParams);

      dispatch({
        type: "SET_DATA",
        payload: isDetails ? [data] : (data as MovieType[]),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: "SET_ERROR", payload: (error as Error).message });
    }
  }, [urlParams, isDetails, dispatch]);

  useEffect(() => {
    fetchData();
  }, [urlParams, fetchData]);

  return state;
};

export default useFetch;
