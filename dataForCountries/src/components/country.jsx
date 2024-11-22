/* eslint-disable react/prop-types */
import Button from "./button";
import Weather from "./weather";

const Country = ({ countries,onClickAct }) => {
    const message = countries.length > 6 && 'Too many matches, please refine your search.';

    return (
    <div>
        {/* Renderiza el mensaje solo si es verdadero (no 'false') */}
        {message && <p>{message}</p>}

        {/* Mostrar la lista de países solo si hay 6 o menos coincidencias */}
        {countries.length <= 6 && countries.length > 0 && (
            <div>
                {countries.map((country, index) => (
                    <div key={index}>
                        <span>{country.name}</span>
                        {countries.length > 1 && <Button onClick={()=>onClickAct(country.name)} buttonName='Show'/> }                        
                        
                    </div>
                ))}
            </div>
        )}

        {countries.length === 1 && (<div>
                {countries.map((country, index) => (
                    <div key={index}>
                        Capital: {country.capital}<br />
                        Area: {country.area}
                        <p>Languages</p>
                        <ul>
                            {/* Object.values(): Se usa para convertir el objeto languages en un arreglo de sus valores (que son los nombres de los idiomas). */}
                            {country.languages && Object.values(country.languages).map((language, i) => (
                                <li key={i}>{language}</li>
                            )) }
                        </ul>
                        <img src={country.flags.png} alt={country.flag}/>
                        <Weather countryName={country.name} />
                    </div>
                ))}
            </div>)}
    </div>
    );
};  

export default Country;
