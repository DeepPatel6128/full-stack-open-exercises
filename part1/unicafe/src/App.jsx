import { useState } from "react"
import Button from "./Button";
import StatisticLine from "./StatisticLine";

//please do not give me any suggestions
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function setGoodValue(value){
    setGood(value);
  }
  function setNeutralValue(value){
    setNeutral(value);
  }

  function setBadValue(value){
    setBad(value);
  }

  function calcAvg(total){
    return (good-bad)/total;
  }

  function calcPercentage(good, total){
    console.log(good, total);
    return (good/total*100 + ' %');
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
          <Button handleClick= {()=> setGoodValue(good+1)} title={'Good'}/>
          <Button handleClick= {()=> setNeutralValue(neutral+1)} title={'Neutral'}/>
          <Button handleClick= {()=> setBadValue(bad+1)} title={'Bad'} />
      </div>
      <h2>Statistics</h2>
      <div>
        {good+bad+neutral == 0 ? <p>No feedback given yet</p> : 
  <table>
    <tbody>
      <tr><td><StatisticLine count={good} title={'Good'}/></td></tr>
      <tr><td><StatisticLine count={neutral} title={'Neutral'}/></td></tr>
      <tr><td><StatisticLine count={bad} title={'Bad'}/></td></tr>
      <tr><td><StatisticLine count={good+bad+neutral} title={'All'}/></td></tr>
      <tr><td><StatisticLine count={calcAvg(good+bad+neutral)} title={'Average'}/></td></tr>
      <tr><td><StatisticLine count={calcPercentage(good, good+bad+neutral)} title={'Positive'}/></td></tr>
    </tbody>
  </table>
}
      </div>
    </div>
  )
}

export default App
