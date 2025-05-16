import React, { useEffect, useState } from "react";
import "./MovieLists.css";
import { useParams } from "react-router-dom";
import Carts from "../cart/Carts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieLists = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=40483c9f3c0f0a703a690b4f57c64855&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setIsLoading(false);
      });
  }, [type]);

  return (
    <div>
      <div className="movie__list">
        <h2 className="list__title">
          {(type ? type.replace(/_/g, " ") : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {isLoading
            ? [...Array()].map((_, index) => (
                <Carts key={index} loading={true} />
              ))
            : movieList.map((movie) => (
                <Carts key={movie.id} movie={movie} loading={true} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
