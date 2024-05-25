import { Routes, Route, BrowserRouter } from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
