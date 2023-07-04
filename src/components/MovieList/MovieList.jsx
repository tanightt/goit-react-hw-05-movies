import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ list }) => {
  const location = useLocation();

  return (
    <ul>
      {list?.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
