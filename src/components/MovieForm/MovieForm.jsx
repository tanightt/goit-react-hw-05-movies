import PropTypes from 'prop-types';
import { useState } from 'react';

export const MovieForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(value ? { query: value } : {});
    setValue('');
  };

  return (
    <form style={{ padding: '15px' }} onSubmit={handleFormSubmit}>
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
  );
};

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
