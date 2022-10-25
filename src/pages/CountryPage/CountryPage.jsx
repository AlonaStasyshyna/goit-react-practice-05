import { useFetchCountry } from "hooks/useFetchCountry"
import { Loader } from "components/Loader/Loader";
import { CountryDetails } from "components/CountryDetails/CountryDetails";

export const CountryPage = () => {
    const { country, isLoading, error } = useFetchCountry();

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>Ooops! Something went wrong.</p>}
            {country && <CountryDetails country={country[0]} />}
        </>
    )
}