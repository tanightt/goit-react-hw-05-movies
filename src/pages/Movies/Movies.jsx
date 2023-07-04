import { useHttp } from 'hooks/useHttp';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [searchValue] = useHttp(fetchSearchMovie, value);
  const search = searchValue.results;

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchForm = e.currentTarget;
    searchForm.reset();
  };

  return (
    <>
      <form style={{ padding: '15px' }} onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} style={{ width: '300px' }} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {search?.map(s => (
          <li key={s.id}>
            <Link to={`/movies/${s.id}`}>{s.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
};
