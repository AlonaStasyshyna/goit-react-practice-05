import axios from "axios";
import { transformCountry } from "helpers/transformCountry";

export const getCoutry = async id => {
    const { data } = await axios.get(`/name/${id}`);
    const country = transformCountry(data);
    return country;
}