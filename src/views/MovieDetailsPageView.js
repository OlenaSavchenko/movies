import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CastList from '../components/CastList';
import ReviewsList from '../components/ReviewsList';
import MovieDetails from '../components/MovieDetails';
import routes from '../routes';
import { getMovieApi } from '../services/api';
import "./MovieDetailsPageView.css"

class MovieDetailsPageView extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.objectOf.isRequired,
      }),
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getMovieApi(movieId)
      .then(response => {
        this.setState({ movie: response });
      })
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(routes.movies);
  };

  render() {
    const { movie } = this.state;

    const { url } = this.props.match;

    return (
      <>
        <MovieDetails movie={movie} onButtonClick={this.handleGoBack} />
        <div className="MovieDetailsLinksWrapper">
          <NavLink to={`${url}/cast`} className="MovieCastLink" activeClassName="MovieCastLink--active">
            <p>The cast</p>
          </NavLink>

          <NavLink to={`${url}/reviews`} className="MovieReviewsLink" activeClassName="MovieReviewsLink--active">
            <p>Reviews</p>
          </NavLink>
        </div>
        <Route path={routes.movieCast} component={CastList} />
        <Route path={routes.movieReviews} component={ReviewsList} />
      </>
    );
  }
}

export default MovieDetailsPageView;
