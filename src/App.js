import './App.css';
import { useState } from 'react';

function App() {
  const [square, setSquare] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [sum, setSum] = useState(num1 + num2)
  const [min, setMin] = useState(num1 - num2)

  function calculateSquare(value){
    setSquare(value * value)
  }

  function calculateSum() {
    setSum(num1 + num2);
  }

  function calculateMin() {
    setMin(num1 - num2);
  }

  return (
    <div class="Row">
      <h1>Web-page for some basic math calculation</h1>

    <span>Square of: </span>
        <input 
          type="number" 
          onChange={e => calculateSquare(e.target.value)}
        />
    <span> {square}</span>
    <div/>
    <div class="bottomBox">
    <span>First num: </span>
        <input class="fristNumber"
          type="number" 
          value={num1}
          onChange={e => setNum1(+e.target.value)}
        />
        </div>
        <div>
    <span>Second num: </span>
        <input 
          type="number" 
          value={num2}
          onChange={e => setNum2(+e.target.value)}
        />
        </div>
        <div class="mathButtons">
    <button class="sampleButton" onClick={calculateSum}>Sum</button>
    <span> {sum}</span>
    <button class="sampleButton" onClick={calculateMin}>Min</button>
    <span> {min}</span>
    
    </div>
    </div>
  );
}

export default App;
