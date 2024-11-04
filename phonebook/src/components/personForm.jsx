/* eslint-disable react/prop-types */

const PersonForm = ({addContact, handleInputChange, newName, newNumber}) => (
        <form onSubmit={addContact}>
        <div>
            name: <input onChange={handleInputChange} value={newName} name="name"/>
        </div>
        <div>
            number: <input onChange={handleInputChange} value={newNumber} name="number"/>
        </div>
        <div>
        <button type="submit" >add</button>
        </div>
        </form>
    
)


export default PersonForm;