import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [currentMovieInfo, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=40483c9f3c0f0a703a690b4f57c64855`
      );
      if (!response.ok) throw new Error("Failed to fetch movie details");
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Detail_Page">
      <div className="movie">
        <div className="movie__intro">
          {currentMovieInfo?.poster_path ? (
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${currentMovieInfo.poster_path}`}
              alt="Movie Poster"
            />
          ) : (
            <SkeletonTheme baseColor="#282828" highlightColor="#282828">
              <Skeleton width={"100%"} height={500} duration={2} />
            </SkeletonTheme>
          )}
        </div>

        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox">
              {currentMovieInfo?.poster_path ? (
                <img
                  className="movie__poster"
                  src={`https://image.tmdb.org/t/p/original${currentMovieInfo.poster_path}`}
                  alt="Movie Poster"
                />
              ) : (
                <SkeletonTheme baseColor="#282828" highlightColor="#282828">
                  <Skeleton height={300} width={300} duration={2} />
                </SkeletonTheme>
              )}
            </div>
          </div>

          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {currentMovieInfo?.original_title || ""}
              </div>
              <div className="movie__tagline">
                {currentMovieInfo?.tagline || ""}
              </div>
              <div className="movie__rating">
                {currentMovieInfo?.vote_average || ""}{" "}
                <i className="fas fa-star" />
                <span className="movie__voteCount">
                  {currentMovieInfo
                    ? `(${currentMovieInfo.vote_count}) votes`
                    : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {currentMovieInfo?.runtime
                  ? `${currentMovieInfo.runtime} mins`
                  : ""}
              </div>
              <div className="movie__releaseDate">
                {currentMovieInfo?.release_date
                  ? `Release date: ${currentMovieInfo.release_date}`
                  : ""}
              </div>
              <div className="movie__genres">
                {currentMovieInfo?.genres?.map((genre) => (
                  <span key={genre.id} className="movie__genre">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{currentMovieInfo?.overview || ""}</div>
            </div>
          </div>
        </div>

        <div className="movie__links">
          <div className="movie__heading">Useful Links</div>
          {currentMovieInfo?.homepage && (
            <a
              href={currentMovieInfo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__homeButton movie__Button">
                  Homepage <i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
          {currentMovieInfo?.imdb_id && (
            <a
              href={`https://www.imdb.com/title/${currentMovieInfo.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__imdbButton movie__Button">
                  IMDb <i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
        </div>

        <div className="movie__heading">Production Companies</div>
        <div className="movie__production">
          {currentMovieInfo?.production_companies?.map((company) =>
            company.logo_path ? (
              <span key={company.id} className="productionCompanyImage">
                <img
                  className="movie__productionCompany"
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                  alt={company.name}
                />
                <span>{company.name}</span>
              </span>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
