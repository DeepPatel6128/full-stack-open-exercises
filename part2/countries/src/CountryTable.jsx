import { useState } from "react";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function CountryTable({ countries, filterValue, filterCountries }) {
  const [selectedCountry, setSelectedCountry] = useState({});

   useEffect(() => {
    if (countries.length === 1) {
      setSelectedCountry(countries[0]);
    }
    else setSelectedCountry({});
  }, [countries]);
  
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <label htmlFor='search'>find countries </label>
      <input type='text' id='search' value={filterValue} onChange={filterCountries} />
      {filterValue === '' || countries.length == 0 ? (
        <div>No countries found yet</div>
      ) : countries.length > 10 ? (
        <div>More than 10 countries</div>
      ) : (countries.length > 1 && Object.keys(selectedCountry).length === 0)? (
        <table>
          <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
          <td>
            {country.name.common}
            <button onClick={() => handleCountryClick(country)}>show</button>
          </td>
          </tr>
        ))}
          </tbody>
        </table>
      ) : <div>
            <h1 key={selectedCountry?.cca3}>{selectedCountry?.name?.common || 'Country not found'}</h1>
            <p>Capital {selectedCountry?.capital || 'Capital not found'}</p>
            <p>area {selectedCountry?.area || 'Capital not found'}</p>
            <b><p>languages</p></b>
            <ul>
              {selectedCountry?.languages ? (
                Object?.keys(selectedCountry?.languages).map(key=>(
                <li key={key}>{selectedCountry?.languages[key] || 'No language found'}</li>
              ))
              ) : <li>No languages found</li>}
              
            </ul>
            <img src={selectedCountry?.flags?.png || 'No image found'}/>
          </div>}
    </div>
  );
}
