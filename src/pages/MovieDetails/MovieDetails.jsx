import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BackBtn, Details, Genres, MovieCard } from './MovieDetails.styled';
import { useHttp } from 'hooks/useHttp';
import { fetchDetails } from 'services/api';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieItem] = useHttp(fetchDetails, movieId);
  const { poster_path, title, vote_average, overview, genres } = movieItem;
  const userScore = Math.ceil(vote_average * 10);
  return (
    <>
      {' '}
      <Link to={location.state?.from ?? '/'}>
        <BackBtn>Go back</BackBtn>
      </Link>
      <MovieCard>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
          width="300"
        />
        <div>
          <h2>{title}</h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <Genres>
            {' '}
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Genres>
        </div>
      </MovieCard>
      <div>
        <p>Additional information</p>
        <Details>
          <li>
            <Link to={`/movies/${movieId}/cast`} state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ ...location.state }}
            >
              Reviews
            </Link>
          </li>
        </Details>
      </div>
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
