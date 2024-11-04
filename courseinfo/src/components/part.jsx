/* eslint-disable react/prop-types */

const Part = ( {course} )=>{
    return (
        <div>
            {course.parts.map(part => (
                    <div key={part.id}>
                        <span>{part.name} {part.exercises}</span>
                    </div>
                ))}
        </div>
    )
}

export default Part;