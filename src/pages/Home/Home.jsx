import { MovieList } from 'components/MovieList/MovieList';
import { useHttp } from 'hooks/useHttp';
import { fetchMovieList } from 'services/api';

export const Home = () => {
  const [movieList] = useHttp(fetchMovieList);
  const list = movieList.results;
  return (
    <>
      <h1 style={{ padding: '15px', margin: '0' }}>Trending today</h1>
      <MovieList list={list} />
    </>
  );
};
