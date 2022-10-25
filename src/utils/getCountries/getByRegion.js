import axios from 'axios';
import { transformData } from 'helpers/transformData';

export const getByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  return transformData(data);
};
