import { useState } from "react";

import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState();
  const [input, setInput] = useState('')

  useEffect(() => {
    const getCountries = () => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
        })
        .catch((err) => console.log(err));
    };
    getCountries();
  }, []);
  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="bg-zinc-500 ">
      <input type="text" onChange={inputChange} name="Search" className='' />
    
      <div className="grid grid-cols-4 gap-20 p-20 text-white">
        {countries?.map((country) => (
          <div key={country.ccn3} className="space-y-4">
            <img src={country.flags.png} alt="" />
          <p>Country: {country.name.official}</p>
          <p>Population: {country.population}</p>
          <p>Capital: {country.capital}</p>
          <p>Continent: {country.continents}</p>
          <p>Region: {country.region}</p>
          <p>Week: {country.startOfWeek}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Timezones: {country.timezones}</p>
        <p>Languagues:{}</p>
          </div>
        ))}
      </div>
      </div>
  );
}

export default App;
