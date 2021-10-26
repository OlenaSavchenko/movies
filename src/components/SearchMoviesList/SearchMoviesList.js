import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import SearchMoviesItem from '../SearchMoviesItem';
import './SearchMoviesList.css';

const SearcMoviesList = ({ movies, url }) => (
  <ul className="MoviesList">
    {movies.map(({ id, ...movie }) => (
      <li key={id} className="MoviesItem" title={movie.title || movie.name}>
        <Link to={`${url}/${id}`} className="MoviesLink">
          <SearchMoviesItem movie={movie} />
        </Link>
      </li>
    ))}
  </ul>
);

SearcMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  url: string.isRequired,
};

export default SearcMoviesList;
