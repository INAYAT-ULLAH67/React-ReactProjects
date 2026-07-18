import { useState } from 'react'
import './App.css'

function App() {
  // REVISION NOTE: State is read-only per render cycle (like a snapshot). 
  // Always use the setter function (setCounter) to update it, never mutate directly.
  const [counter, setCounter] = useState(15)

  function updataValue(){
    if (counter < 20) {
      // setCounter(counter+1)
// setCounter(prevCounter => prevCounter + 1) 
// setCounter(prevCounter => prevCounter + 1) 
// setCounter(prevCounter => prevCounter + 1) 
// setCounter(prevCounter => prevCounter + 1)
      /* 💡 REVISION: THE FUNCTIONAL UPDATER (prevCounter => ...)
        
        Why does this update 4 times instead of just once?
        
        1. CRITICAL PROBLEM WITH STANDARD WAY: 
           If you write `setCounter(counter + 1)`, React uses a "snapshot" of the state 
           locked at the start of the function (e.g., 15). Calling it 4 times just passes 
           `15 + 1` repeatedly. React batches them together and only renders 16 once.

        2. THE SOLUTION (Passing a Callback Function):
           When you pass a function `prevCounter => prevCounter + 1`, you are telling React:
           "Don't look at the snapshot. Instead, put this math operation into a queue."
           
        3. THE QUEUE PROCESS:
           React executes the queued functions sequentially during the next render:
           - 1st call: Takes current state (15) -> returns 16
           - 2nd call: Takes previous output (16) -> returns 17
           - 3rd call: Takes previous output (17) -> returns 18
           - 4th call: Takes previous output (18) -> returns 19
           
        Final Output on UI: Jumps instantly by +4 on a single click!
      */
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  function decreaseValue(){
    // REVISION: This conditional prevents the counter from dropping below 0 (clamping)
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Learning Hooks!</h1>
      <p>Value is: {counter}</p>

      <button onClick={updataValue}>Update Value</button>
      <br />
      <button onClick={decreaseValue}>Remove Value</button>
    </>
  )
}

export default App


