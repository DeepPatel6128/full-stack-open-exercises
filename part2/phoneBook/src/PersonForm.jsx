/* eslint-disable react/prop-types */


export default function PersonForm({addContactInfo, name, setNameField, number, setNumberField}) {
  return (
    <div>
      <h3>Add new contact</h3>
      <form onSubmit={addContactInfo}>
        <label htmlFor='name'>Enter name: </label>
        <input id='name' type='text' value={name} onChange={setNameField}/>
        <br></br>
        <br></br>
        <label htmlFor='number'>Enter number: </label>
        <input id='number' type='text' value={number} onChange={setNumberField}/>
        <button type='submit'>Add</button>
      </form>
      <br></br>
      </div>
  )
}
