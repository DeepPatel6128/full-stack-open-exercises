import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";
const getAllCountries = () => {
  return axios.get(baseURL);
};

export default { getAllCountries };
