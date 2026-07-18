import { useState } from 'react'

import './App.css'


function App() {
  const [color, setcolor] = useState('white')

  return (
    <>
    <div className="main h-screen" style={{backgroundColor:color}}>


      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 p-6"> 
          <div className="bg-red-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('red')}>Red</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('blue')}>Blue</div>
          <div className="bg-green-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('green')}>Green</div>
          <div className="bg-yellow-500 text-black p-4 rounded-lg cursor-pointer" onClick={() => setcolor('yellow')}>Yellow</div>
          <div className="bg-pink-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('pink')}>Pink</div>
          <div className="bg-purple-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('purple')}>Purple</div>
          <div className="bg-orange-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('orange')}>Orange</div>
          <div className="bg-teal-500 text-white p-4 rounded-lg cursor-pointer" onClick={() => setcolor('teal')}>Teal</div>
      </div>


    </div>
   

   
      
    </>
  )
}

export default App
