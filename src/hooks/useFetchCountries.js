import { useEffect, useState } from 'react';
import { getCountries } from 'utils/getCountries/getCountries';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCountries()
      .then(setCountries)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { countries, error, isLoading };
};
