import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [currentMovieInfo, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=40483c9f3c0f0a703a690b4f57c64855`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
      
  };
  return (
    <div>
      <div className="movie">
        <div className="movie__intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieInfo ? currentMovieInfo.backdrop_path : ""
            }`}
          />
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieInfo ? currentMovieInfo.poster_path : ""
                }`}
              />
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {currentMovieInfo ? currentMovieInfo.original_title : ""}
              </div>
              <div className="movie__tagline">
                {currentMovieInfo ? currentMovieInfo.tagline : ""}
              </div>
              <div className="movie__rating">
                {currentMovieInfo ? currentMovieInfo.vote_average : ""}{" "}
                <i class="fas fa-star" />
                <span className="movie__voteCount">
                  {currentMovieInfo
                    ? "(" + currentMovieInfo.vote_count + ") votes"
                    : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {currentMovieInfo ? currentMovieInfo.runtime + " mins" : ""}
              </div>
              <div className="movie__releaseDate">
                {currentMovieInfo
                  ? "Release date: " + currentMovieInfo.release_date
                  : ""}
              </div>
              <div className="movie__genres">
                {currentMovieInfo && currentMovieInfo.genres
                  ? currentMovieInfo.genres.map((genre) => (
                      <>
                        <span className="movie__genre" id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{currentMovieInfo ? currentMovieInfo.overview : ""}</div>
            </div>
          </div>
        </div>
        <div className="movie__links">
          <div className="movie__heading">Useful Links</div>
          {currentMovieInfo && currentMovieInfo.homepage && (
            <a
              href={currentMovieInfo.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__homeButton movie__Button">
                  Homepage <i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
          {currentMovieInfo && currentMovieInfo.imdb_id && (
            <a
              href={"https://www.imdb.com/title/" + currentMovieInfo.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__imdbButton movie__Button">
                  IMDb<i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
        </div>
        <div className="movie__heading">Production companies</div>
        <div className="movie__production">
          {currentMovieInfo &&
            currentMovieInfo.production_companies &&
            currentMovieInfo.production_companies.map((company) => (
              <>
                {company.logo_path && (
                  <span className="productionCompanyImage">
                    <img
                      className="movie__productionComapany"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
