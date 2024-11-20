import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = () => {
  return axios.get(baseURL);
};

const getGeoCode = (city) => {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${
      import.meta.env.VITE_SOME_KEY
    }`
  );
};

const getWeather = (lon, lat) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_SOME_KEY
    }`
  );
};
export default { getAllCountries, getGeoCode, getWeather };
