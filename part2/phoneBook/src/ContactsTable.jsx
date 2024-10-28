/* eslint-disable react/prop-types */

export default function ContactsTable({contacts, deleteFunction}) {
  return (
    <table>
        <tbody>
        {contacts.map((contact, index)=>(
          <tr key={index}><td>{contact.name} - {contact.number} <button onClick={()=>deleteFunction(contact._id, contact.name)}>delete</button></td></tr>
        ))}
        </tbody>
    </table>
  )
}
