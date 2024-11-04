/* eslint-disable react/prop-types */

const Filter = ({ filter, handleInputChange }) => (
    <div>
        filter shown with <input name="filter" value={filter} onChange={handleInputChange} />
    </div>
)

export default Filter
