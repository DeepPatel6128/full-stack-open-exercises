/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import countryService from './services/countryService'
import CountryTable from './CountryTable';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  const filterCountries = (e)=>{
    const value = e.target.value.toLowerCase();
    setFilterValue(value)
        const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(value)
    );
    setFilteredCountries(filtered);
  }

  useEffect(()=>{
    countryService.getAllCountries().then((res)=>{
      setCountries(res.data);
      //console.log(countries[101].name.common)
    }).catch((e)=>{
      console.log(e.message)
    })
  }, [])
  return (
    <div>
      <CountryTable countries = {filteredCountries} filterValue={filterValue} filterCountries={filterCountries}/>
    </div>
  )
}

export default App
