import { useHttp } from 'hooks/useHttp';
import { Link } from 'react-router-dom';
import { fetchMovieList } from 'services/api';

export const Home = () => {
  const [movieList] = useHttp(fetchMovieList);
  const list = movieList.results;
  return (
    <>
      <h1 style={{ padding: '15px', margin: '0' }}>Trending today</h1>
      <ul>
        {list?.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
