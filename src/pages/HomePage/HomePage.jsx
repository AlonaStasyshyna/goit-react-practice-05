import { useFetchCountries } from "hooks/useFetchCountries";
import { Loader } from "components/Loader/Loader";
import { CountriesList } from "components/CountriesList/CountriesList";

export const HomePage = () => {
  const { countries, error, isLoading } = useFetchCountries();

  return (
    <>
      {error && <h2>Ooops! Something went wrong.</h2>}
      {isLoading && <Loader />}
      {countries && <CountriesList countries={countries} />}
    </>
  )
};
