/* eslint-disable react/prop-types */

const Statistics = ({parts}) => {
    const initialValue = 0;
    // At each iteration, you access the exercises property of each part and add it to the accumulator.
        // ->  currentValue.exercices
    const sumWithInitial = parts.reduce((accumulator, currentValue)=> accumulator + currentValue.exercises, initialValue);
    console.log(sumWithInitial)
    return(
        <h5>Total of {sumWithInitial} exercices</h5>
    )
}


export default Statistics;