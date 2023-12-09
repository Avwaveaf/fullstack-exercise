
const Total = ({ parts }) => {
    const courseCountTotal = parts.reduce((acc, curr) => {

        return curr.exercises + acc;
    }, 0);
    return (
        <p>Total exercises = {courseCountTotal}</p>
    )
}

export default Total