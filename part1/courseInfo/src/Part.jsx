/* eslint-disable react/prop-types */


export default function Part(props) {
  return (
    <p key={props.key}>{props.part} {props.exercise}</p>
  )
}
