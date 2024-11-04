/* eslint-disable react/prop-types */

const Header = ({ course }) => {
    
    return (
        <div key={course.id}>
            <h2>{course.name}</h2>
        </div>
    )
}

export default Header;