import { useState, useCallback, useEffect, useRef } from 'react' // 💡 Added useRef import
import './App.css'

function App() {
  let [lenght, setlenght] = useState(8);
  let [num, setnum] = useState(false);
  let [char, setChar] = useState(false);
  const [password, setPassword] = useState('')

  // 💡 1. Create the reference point for the input field
  const passwordRef = useRef(null)

  // 💡 2. Wrapped the actual generation logic directly inside useCallback to cache it properly
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += '0123456789'
    if (char) str += '@#$%&!'
    
    for (let i = 0; i < lenght; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [lenght, num, char]); // Only recreates the function if these change

  // 💡 3. Copy handler using the reference select method safely
  const copyToclipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99); // Good practice for mobile support
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // 💡 4. Triggers generation automatically when configurations scale
  useEffect(() => {
    passwordGenerator();
  }, [lenght, num, char, passwordGenerator]);

  return (
    <>
      <div className="main my-3 border border-white h-25 ml-48 mr-48 ">
        <div className="input-entry">
          <div className="flex flex-row items-stretch w-full max-w-md mx-auto m-4">
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef} // 💡 5. Linked the input DOM node to your hook reference
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md bg-white text-gray-900 focus:outline-none focus:border-blue-500 border-r-0"
            />
            <button 
              className="bg-blue-600 px-4 border border-blue-600 rounded-r-md text-sm font-medium text-white hover:bg-blue-800 transition-colors cursor-pointer"
              onClick={copyToclipBoard}
            >
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 w-full max-w-md mx-auto m-4 ">
          <input
            type="range"
            min={8}
            max={25}
            value={lenght}
            onChange={(e) => { setlenght(Number(e.target.value)) }}
            className="cursor-pointer"
          />
          <label className='text-white min-w-[90px]'> Length: {lenght}</label>
          
          <input type="checkbox"
            defaultChecked={num}
            id='numinput'
            onChange={() => setnum((prev) => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="numinput" className='text-white min-w-[90px] cursor-pointer'>Numbers</label>
          
          <input type="checkbox"
            defaultChecked={char}
            id="charinput"
            onChange={() => setChar((prev) => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="charinput" className='text-white min-w-[90px] cursor-pointer'>Characters</label>
        </div>
      </div>
    </>
  )
}
export default App