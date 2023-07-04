import { useHttp } from 'hooks/useHttp';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

export const Movies = () => {
  const location = useLocation();
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movie] = useHttp(fetchSearchMovie, query);
  const search = movie.results;

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(value ? { query: value } : {});
    setValue('');
  };

  return (
    <>
      <form style={{ padding: '15px' }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          style={{ width: '300px' }}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {search?.map(s => (
          <li key={s.id}>
            <Link to={`/movies/${s.id}`} state={{ from: location }}>
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
