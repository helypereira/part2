import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/country'
import Input from './components/input'

const App = () => {
  const [country, setCountry] = useState([])
  const [value, setValue] = useState('')
  const [countryList, setCountryList] = useState([])



useEffect(() => {
  axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
  .then(response => {
    const countries = response.data;

    const infoCountries = countries.map(country => ({
      name: country.name.common,
      capital: country.capital,
      area: country.area,
      languages: country.languages,
      flags: country.flags
    }));

    setCountryList(infoCountries);
    //infoCountries.forEach(country => console.log(country.flag.png))

  })
  .catch(error => console.log(error));
  }, []);

//const paises = axios.get('https://studies.cs.helsinki.fi/restcountries/api/name/spain').then(response => console.log(response.data.name['common']))

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setValue(inputValue)

    if(inputValue === ""){
      setCountry([])
    } else {
      const foundCountry = countryList.filter(country => country.name.toLowerCase().includes(inputValue));
      setCountry(foundCountry);
      //foundCountry.forEach(country => console.log(country.name))
    }
  }

// Recibe el nombre del país como argumento y lo utiliza para filtrar la información completa.
  const handleClick = (countryName) => {
    setValue(countryName.toLowerCase());
    const foundCountry = countryList.filter(country =>
      country.name.toLowerCase() === countryName.toLowerCase()
    );
    setCountry(foundCountry);
  }

  return (
    <div>
      <form >
        <Input value={value} onChange={handleChange} />
      </form>
        <Country countries={country} onClickAct={handleClick}/>

    </div>
  )
}

export default App