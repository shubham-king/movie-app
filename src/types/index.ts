export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Genre: string;
  Poster: string;
  Released?: string;
  Runtime?: string;
  Plot?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  imdbRating?: string;
  Awards?: string;
  BoxOffice?: string;
};

export interface ErrorState {
  show: boolean;
  msg: string;
}

export interface State<T> {
  isLoading: boolean;
  error: ErrorState;
  data: T | null;
  query: string;
  currentPage: number;
  totalPages: number;
}

export interface MovieData {
  data: MovieType[];
  totalResults: number;
  resultsPerPage: number;
}

export type Action<T> =
  | { type: "SET_LOADING" }
  | { type: "SET_DATA"; payload: MovieData }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_LOCAL_DATA"; payload: MovieData };
