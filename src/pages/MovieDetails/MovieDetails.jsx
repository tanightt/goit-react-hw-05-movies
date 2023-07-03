import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { BackBtn, Details, Genres, MovieCard } from './MovieDetails.styled';
import { useHttp } from 'hooks/useHttp';
import { fetchDetails } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieItem] = useHttp(fetchDetails, movieId);
  const { poster_path, title, vote_average, overview, genres } = movieItem;
  const userScore = Math.ceil(vote_average * 10);
  return (
    <>
      <BackBtn onClick={() => navigate('/')}>Go back</BackBtn>
      <MovieCard>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
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
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </Details>
      </div>

      <Outlet />
    </>
  );
};
