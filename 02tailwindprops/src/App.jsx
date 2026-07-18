import { useState } from 'react'

// ==========================================
// 1. CARD4 COMPONENT DEFINITION
// ==========================================
export function Card4({subjName}) {
  return (
    <div className="relative max-w-lg p-8 border border-gray-100 bg-black shadow-xl rounded-xl">
      <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
        4.3
      </span>

      <div className="mt-4 text-gray-200 sm:pr-8">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fixed attributes to camelCase here: */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          ></path>
        </svg>

        <h5 className="mt-4 text-xl font-bold text-gray-300">Science of {subjName}</h5>

        <p className="mt-2 text-sm text-gray-400">
          You can manage phone, email and chat conversations all from a single mailbox.
        </p>
      </div>
    </div>
  )
}

// ==========================================
// 2. MAIN APP COMPONENT
// ==========================================
function App() {
  return (
    <div className="p-8 bg-zinc-900 min-h-screen"> 
      <div className='text-[#50d71e] mb-6 font-bold text-lg'>
         Tailwind CSS Test
      </div>
      
      {/* flex-col: stacks them vertically on mobile
        sm:flex-row: switches to side-by-side on tablet/desktop
        gap-6: adds beautiful spacing between the cards automatically 
      */}
      <div className="flex flex-col sm:flex-row gap-6 m-5">
        <Card4 subjName="Chemistry"/>
        <Card4 subjName="Physics"/>
      </div>
    </div>
  )
}

export default App