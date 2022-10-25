import { useState } from 'react';

export const SearchForm = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={onSubmit}>
      <select name="region" required onChange={handleChange}>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
};
