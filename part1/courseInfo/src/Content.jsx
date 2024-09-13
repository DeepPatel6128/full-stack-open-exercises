/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Part from "./Part";
function Content(props) {
    let partArr = props.part;
  return (
    <div>
    {partArr.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </div>
  )
}
export default Content;
