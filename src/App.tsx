import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
