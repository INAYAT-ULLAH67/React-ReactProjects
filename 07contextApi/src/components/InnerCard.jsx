// ===== OLD VERSION (prop drilling) =====
// Why Context API exists:
// InnerCard depended entirely on MianCard remembering to pass down
// theme and toggleTheme as props. If MianCard forgot, or a new
// component was inserted between App and InnerCard, this would break —
// with no warning until runtime. Context solves this below by letting
// InnerCard pull theme/toggleTheme directly, regardless of how many
// components sit in between.

// import React from 'react'
//
// function InnerCard({ theme, toggleTheme }) {
//   return (
//     <>
//       <div className='h-30 w-40' style={{ background: theme }}>
//         <button
//           onClick={toggleTheme}
//           className='bg-white text-slate-900 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-slate-200 transition-colors'
//         >
//           Toggle Theme
//         </button>
//       </div>
//     </>
//   )
// }
//
// export default InnerCard


// ===== NEW VERSION (Context API) =====
import React, { useContext } from 'react'
import { ThemeContext } from '../App'   // import the same context object

function InnerCard() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      className='h-40 w-64 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center justify-center gap-4 p-6 transition-colors duration-300'
      style={{ background: theme }}
    >
      <p className='text-white text-sm font-mono'>
        Theme: <span className='opacity-70'>{theme}</span>
      </p>
      <button
        onClick={toggleTheme}
        className='bg-white text-slate-900 text-sm font-medium px-5 py-2 rounded-full hover:bg-slate-200 active:scale-95 transition-all shadow-sm'
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default InnerCard