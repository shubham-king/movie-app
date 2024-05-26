import { State, Action, MovieType } from "../types";

export const initialState: State<MovieType[]> = {
  isLoading: false,
  error: { show: false, msg: "" },
  data: null,
  query: localStorage.getItem("lastSearch") || "friends",
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
        data: action.payload,
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
      };
    default:
      return state;
  }
};

export default reducer;
