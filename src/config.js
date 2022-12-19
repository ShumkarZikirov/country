import axios from "axios";

axios.defaults.baseURL = 'https://restcountries.com/v3.1/'

export const getCountry = () => {
    return axios.get('all')
}
export const getCountryRegion = (region) => {
    return axios.get(`/region/${region}`)
}
export const getSearchCountry = (name) => {
  return axios.get(`/name/${name}`)
}