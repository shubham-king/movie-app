import { useEffect, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { MovieType } from '../types';
import { fetchMovies } from '../api';

const useFetch = (urlParams: string) => {
  const { state, dispatch } = useAppContext();

  const fetchData = useCallback(async () => {
    dispatch({ type: 'SET_LOADING' });

    try {
      const movies = await fetchMovies(urlParams);
      dispatch({ type: 'SET_DATA', payload: movies as MovieType[] });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
    }
  }, [urlParams, dispatch]);

  useEffect(() => {
    fetchData();
  }, [urlParams, fetchData]);

  return state;
};

export default useFetch;
