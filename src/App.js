import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { MoviesDashboard } from "./components/MoviesDashboard";
import { SingleMovieDetails } from "./components/SingleMovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<MoviesDashboard />} />
      <Route path="/SingleMovieDetails/:id" element={<SingleMovieDetails />} />
    </Routes>
  );
}

export default App;
