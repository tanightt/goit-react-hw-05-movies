// import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  // const [value, setValue] = useState('');

  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <>
      <form style={{ padding: '15px' }} onSubmit={handleSearch}>
        <input type="text" style={{ width: '300px' }} />
        <button type="submit">Search</button>
      </form>

      <Outlet />
    </>
  );
};
