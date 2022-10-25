import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getByRegion } from 'utils/getCountries/getByRegion';

export const useFetchByRegion = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);
    getByRegion(searchQuery).then(setCountries).catch(setError).finally(setIsLoading(false));
  }, [searchQuery]);

  return { countries, isLoading, error, handleSubmit };
};
