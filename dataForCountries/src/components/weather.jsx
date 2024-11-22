/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios';

const Weather = ({countryName}) => {
    const [weather,setWeather] = useState(null);
    
        useEffect(() => {
            if (!countryName) return;
            const api_key = import.meta.env.VITE_SOME_KEY;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${api_key}&units=metric`)
                .then(res => {
                    const temperature = res.data.main.temp;
                    const iconUrl = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
                    const wind = res.data.wind.speed;
                    setWeather({ temperature, iconUrl, wind });
                
                })
                .catch(error => console.log(error))
            },[countryName]);
    
    if (!weather) {
        return <p>Loading weather data...</p>;
    }        
    return (
        <div>
            <h2>Weather in {countryName}</h2>
            <p>Temperature: {weather.temperature} °C</p>
            <img src={weather.iconUrl} alt={`Weather icon for ${countryName}`} />
            <p>Wind: {weather.wind} m/s</p>
        </div>
    );
}


export default Weather;