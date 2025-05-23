import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Carts.css";
import { NavLink } from "react-router-dom";

const Carts = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#282828" highlightColor="grey">
            <Skeleton height={300} duration={1.5} />
          </SkeletonTheme>
        </div>
      ) : (
        <NavLink
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              /* className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}*/
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie ? movie.original_title : "Movie Poster"}
            />
            <div className="cards__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default Carts;
