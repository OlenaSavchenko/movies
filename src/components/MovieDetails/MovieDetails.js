import React from 'react';
import PropTypes from 'prop-types';
import "./MovieDetails.css"

const baseURL = 'https://image.tmdb.org/t/p/w500';
const MovieDetails = ({ movie, onButtonClick }) => (
  <>
    <button type="button" onClick={onButtonClick} className="MoviesBackBtn">
      Back
    </button>
    <div className="MovieDetailsBox">
      <h1 className="MovieDetailsTitle"> {movie.title || movie.name}</h1>
      {(movie.backdrop_path || movie.poster_path) && (
        <img className="MovieDetailsImg"
          src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.name}
        />
      )}
      <div className="MovieDetailsContent">
        {movie.overview && <p> {movie.overview}</p>}
        {movie.runtime && <p> Duration: {movie.runtime} minutes </p>}
        {movie.original_language && (
          <p>Original language: {movie.original_language} </p>
        )}
        {(movie.release_date || movie.first_air_date) && (
          <p>Date of release: {movie.release_date || movie.first_air_date}</p>
        )}
        {movie.vote_average > 0 && <p>Average mark: {movie.vote_average}</p>}

        {movie.homepage && (
          <p>
            <a href={movie.homepage} rel="noopener noreferrer" target="_blank">
              Homepage
            </a>
          </p>
        )}
      </div>
    </div>
  </>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    original_language: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
    homepage: PropTypes.string,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

MovieDetails.defaultProps = {
  title: '',
  name: '',
  backdrop_path: '',
  poster_path: '',
  overview: '',
  runtime: null,
  original_language: '',
  release_date: '',
  first_air_date: '',
  vote_average: null,
  homepage: '',
};
export default MovieDetails;
