import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//this wouldn't work because promises are async which means by the time we 
//fetch the data , the root componenet will already be created and whatever data
//we pass will be undefined
// let notes;
//  const promise = axios.get('http://localhost:3001/notes')
//   promise.then((res)=>{
//     notes = res.data;
//   }).catch((e)=>{console.log(e.message)});
//   console.log(notes)


  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)


