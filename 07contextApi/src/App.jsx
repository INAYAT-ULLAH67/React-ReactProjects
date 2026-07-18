// ===== OLD VERSION (prop drilling / broken attempt) =====
// import { createContext, useState } from 'react'
// import './App.css'
// import MianCard from './components/MianCard'
// import { createContext, useContext, useState } from 'react'
//
// const ThemeContext = createContext()
//
// function App() {
//   // let create context!
//
//   const [theme, setTheme] = useState('#ffffff')
//
//   const toggleTheme = () => {
//     setTheme((prev) => (prev === '#ffffff' ? '#1e293b' : '#ffffff'))
//   }
//
//   return (
//     // App owns theme/toggleTheme and passes them into MianCard as props.
//     // The <> fragment itself shares nothing — it's just grouping syntax.
//     // MianCard only exists here to relay these props further down to
//     // InnerCard, which is the real problem Context is meant to fix.
//     // <>
//     //   <MianCard theme={theme} toggleTheme={toggleTheme} />
//     // </>
//
//     <>
//     </>
//   )
// }
//
// export default App


// ===== NEW VERSION (Context API) =====
import { createContext, useContext, useState } from 'react'
import './App.css'
import MianCard from './components/MianCard'

const ThemeContext = createContext()

function App() {
  // let create context
  const [theme, setTheme] = useState('#ffffff')

  const toggleTheme = () => {
    setTheme((prev) => (prev === '#ffffff' ? '#1e293b' : '#ffffff'))
  }

  return (
    // App owns theme/toggleTheme and provides them via Context.
    // Any component nested inside — no matter how deep — can now
    // access theme/toggleTheme directly using useContext(ThemeContext),
    // without needing it passed down as props through every level.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MianCard />
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }