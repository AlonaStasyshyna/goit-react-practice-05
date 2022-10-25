import { CountriesList } from "components/CountriesList/CountriesList"
import { Loader } from "components/Loader/Loader"
import { SearchForm } from "components/SearchForm/SearchForm"
import { useFetchByRegion } from "hooks/useFetchByRegion"

export const SearchPage = () => {
    const { countries, isLoading, error, handleSubmit } = useFetchByRegion()
    return (
        <>
            <SearchForm handleSubmit={handleSubmit} />
            {error && <p>Ooops! Something went wrong.</p>}
            {isLoading && <Loader />}
            {countries.length > 0 && <CountriesList countries={countries}/>}
        </>
    )
}