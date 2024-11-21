/* eslint-disable react/prop-types */
const Input = ({value, onChange}) => {
    return(
    // Find countries: <input value={value} onChange={handleChange}/>
        <span>
            Find Country: <input value={value} name="countryName" onChange={onChange}/>
        </span>
    )
};


export default Input