
const Part = ({ name, exercises }) => {
    return (
        <p key={name}>
            {name} {exercises}
        </p>
    )
}

export default Part