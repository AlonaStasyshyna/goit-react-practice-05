import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCoutry } from 'utils/getCountries/getCountry';

export const useFetchCountry = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCoutry(id)
      .then(setCountry)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  return { country, isLoading, error };
};
