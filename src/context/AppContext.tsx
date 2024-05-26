import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch,
} from "react";
import reducer, { initialState } from "./reducer";
import { State, Action, MovieType } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextType {
  state: State<MovieType[]>;
  dispatch: Dispatch<Action<MovieType[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
