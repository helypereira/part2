/* eslint-disable react/prop-types */
const Button = ({buttonName, onClick}) => {
    return(
        <button onClick={onClick}>{buttonName}</button>
    )
}


export default Button;