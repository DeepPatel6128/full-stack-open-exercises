/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import noteService from './services/notes'

function Note({note, toggleImportance}){
  const label = note.important ? ' make not important' : ' make important';
  return(
    <li>{note.content}   <button onClick={toggleImportance}>{label}</button></li>
  )
}

function App() {
  const [newNotes, setNotes] = useState([]);
  const [singleNote, setSingleNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const addNote = (e)=>{
    e.preventDefault();
    const note = {
      content: singleNote, important: Math.random() < 0.5
    }
     
      noteService.create(note)
     .then((res)=>{
      setNotes(newNotes.concat(res.data))
      setSingleNote('');  
    })
     .catch((e)=>console.log(e.message));
     
  }

  const updateSingleNote = (e)=>{
    setSingleNote(e.target.value);
  }

  const filteredNotes = showAll ? newNotes : newNotes.filter(note=> note.important)

  //empty brackets means it is only called in the first render
  useEffect(()=>{
    noteService.getAll().then((res)=>{
      console.log(res.data)
      setNotes(res.data);
      console.log("Inside useEffect")
    })
  }, [])

  const toggleImportance = (id)=>{
    const note = newNotes.find(n => n.id == id);
    const updatedNote = {...note, important: !note.important};
    console.log(id)
    noteService.update(id, updatedNote)
    .then((res)=> {
      setNotes(newNotes.map(n => n.id !== id ? n : res.data))
      console.log(res)
    })
    .catch((e)=>e.message)
  }
  //learning about event loop
  // function callback(){
  //   console.log('Callback function');
  // }
  // function hello(){
  //   setTimeout(callback, 1000);
  //   console.log('Before callback');
  // }
  // hello();

  //Axios example
 
  return (
    <>
      <ul>
        {/* Map always creates a new copy of the array */}
        {filteredNotes.map((note, index)=>(
          <div key={index+1}>
          <Note note = {note} toggleImportance={()=>toggleImportance(note.id)} />
          <br></br>
          </div>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" placeholder="Enter a note" value={singleNote} onChange={updateSingleNote}/>
        <button type="submit">Add note</button>
        <br></br>
        <br></br>
        <input type="checkbox" checked ={showAll} id="show" onChange={()=>setShowAll(!showAll)}/>
        <label>Show all notes ?</label>
      </form>
    </>
  )
}

export default App
