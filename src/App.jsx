import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetail/MovieDetails";
import MovieLists from "./components/movieList/MovieLists";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/:type" element={<MovieLists />} />
            <Route path="/*" element={<h1>Error Page</h1>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
