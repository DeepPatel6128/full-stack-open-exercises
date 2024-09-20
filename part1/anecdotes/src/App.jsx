import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  //whenever updating a complex data structure in a state , always make a copy first which is filled of all the
  //old values then update the copy and give the returned value
  const upVote = (selectedValue)=>{
      setPoints(prevPoints => {
        const newPoints = [...prevPoints];
        newPoints[selectedValue] += 1;
        return newPoints;
      });
  }

  const selectRandomAnecdote = ()=>{
    let newIndex = 0;
     do {
      newIndex = Math.floor(Math.random() * anecdotes.length);
    } while (newIndex === selected);
    setSelected(newIndex);
  }

  const getMostVotes = ()=>{
    let max = -1;
    let idx = 0;
    for(let i=0; i<anecdotes.length; i++){
      if(points[i] > max){
        max = points[i];
        idx = i;
      }
    }
    return {ane: anecdotes[idx] , votes: max};
  }
  return (
      <div>
       <h2>Anectode of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]}</p>
      <button onClick={()=>upVote(selected)}>Vote</button>
      <button onClick={()=>selectRandomAnecdote()}>Next Anectode</button>

      <h2>Anectode with most votes</h2>
      <p>{getMostVotes().ane}</p>
      <p>has {getMostVotes().votes} votes</p>
      </div>
  )
}

export default App
