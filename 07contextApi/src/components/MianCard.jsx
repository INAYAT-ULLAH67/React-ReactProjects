// ===== OLD VERSION (prop drilling) =====
// MianCard.jsx
// MianCard never used theme/toggleTheme itself — it only received them
// so it could forward them to InnerCard. This was the "middleman" problem
// Context solves: MianCard shouldn't need to know theme exists at all.

// import React from 'react'
// import InnerCard from './InnerCard'
//
// function MianCard({ theme, toggleTheme }) {
//   return (
//     <div className='ml-50 my-5 Main-card h-120 w-150 rounded-2xl bg-slate-500 p-6 flex flex-col text-white'>
//       <h2 className='text-2xl font-semibold mb-2'>Main Card</h2>
//       <p className='text-slate-200 text-sm mb-4'>
//         This is the outer card. It doesn't use theme itself.
//       </p>
//
//       <InnerCard theme={theme} toggleTheme={toggleTheme} />
//     </div>
//   )
// }
//
// export default MianCard


// ===== NEW VERSION (Context API) =====
// No props needed anymore — MianCard has zero knowledge that theme exists.
// Compare this to the prop-drilling version above: this is the whole point of Context.
import React from 'react'
import InnerCard from './InnerCard'

function MianCard() {
  return (
    <div className='ml-50 my-5 Main-card h-120 w-150 rounded-2xl bg-slate-500 p-6 flex flex-col text-white'>
      <h2 className='text-2xl font-semibold mb-2'>Main Card</h2>
      <p className='text-slate-200 text-sm mb-4'>
        This is the outer card. It doesn't use theme itself.
      </p>
      <InnerCard />
    </div>
  )
}

export default MianCard