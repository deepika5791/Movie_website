import React, { useEffect, useState } from "react";
import "./MovieLists.css";
import { useParams } from "react-router-dom";
import Carts from "../cart/Carts";

const MovieLists = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=40483c9f3c0f0a703a690b4f57c64855&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div>
      <div className="movie__list">
        <h2 className="list__title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Carts movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
