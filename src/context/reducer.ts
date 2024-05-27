import { State, Action, MovieType, MovieData } from "../types";

export const initialState: State<MovieType[]> = {
  isLoading: false,
  error: { show: false, msg: "" },
  data: null,
  query: localStorage.getItem("lastSearch") || "friends",
  currentPage: Number(localStorage.getItem("currentPage")) || 1,
  totalPages: 1,
};

const reducer = (
  state: State<MovieType[]>,
  action: Action<MovieType[]>
): State<MovieType[]> => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true, error: { show: false, msg: "" } };
    case "SET_DATA":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        totalPages: Math.ceil(
          action.payload.totalResults / action.payload.resultsPerPage
        ),
        error: { show: false, msg: "" },
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        error: { show: true, msg: action.payload },
      };
    case "SET_QUERY":
      localStorage.setItem("lastSearch", action.payload as string);
      return {
        ...state,
        query: action.payload as string,
        currentPage: 1,
      };
    case "SET_PAGE":
      localStorage.setItem("currentPage", action.payload as string);
      return {
        ...state,
        currentPage: action.payload as number,
      };
    case "SET_LOCAL_DATA":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        totalPages: Math.ceil(
          action.payload.totalResults / action.payload.resultsPerPage
        ),
        error: { show: false, msg: "" },
      };
    default:
      return state;
  }
};

export default reducer;
