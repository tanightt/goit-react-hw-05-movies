import { MovieForm } from 'components/MovieForm/MovieForm';
import { MovieList } from 'components/MovieList/MovieList';
import { useHttp } from 'hooks/useHttp';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movie] = useHttp(fetchSearchMovie, query);
  const search = movie.results;

  const handleSubmit = query => {
    setSearchParams(query);
  };

  return (
    <>
      <MovieForm onSubmit={handleSubmit} />
      <MovieList list={search} />
    </>
  );
};
