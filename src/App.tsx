import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Header from "./components/Header";
import AsideNavigation from "./components/AsideNavigation";

function App() {
  return (
    <BrowserRouter>
      <AsideNavigation />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
