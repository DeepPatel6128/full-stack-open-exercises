/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

export default function Notification({message, classname}) {
    if(message == ''){
        return '';
    }
  return (
    <p id='positive-message' className={classname}>{message}</p>
  )
}
