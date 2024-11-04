/* eslint-disable react/prop-types */
import Header from "./header";
import Part from "./part";
import Statistics from "./statistics";

const Course = ( {course} ) => {

    return (
        <div>
            {course.map(x =>( 
                <div key={x.id}>
                    <Header course={x}/>
                    <Part course={x}/>
                    <Statistics parts={x.parts}/>
                </div>
                ))}
        </div>
    )

}

export default Course;


