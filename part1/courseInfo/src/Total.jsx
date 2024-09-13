/* eslint-disable react/prop-types */

export default function Total(props) {
  let sum = 0;
  let parts = props.parts;
  parts.forEach((part)=>{
    sum += part.exercises;
  })
  console.log(sum);
  return <p>Number of exercises: {sum}</p>;
}