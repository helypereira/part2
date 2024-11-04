
const Content = ( {parts} ) => {

    return (
        parts.map(
            part => (
                <div key={part.id}>
                    {part.name} 
                </div>
                    )
        )
    )
}

export default Content;