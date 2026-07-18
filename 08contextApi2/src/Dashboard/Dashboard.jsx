import React from 'react'

function Dashboard({ username, onLogout }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
      <div className='w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col items-center text-center gap-4'>
        <div className='w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-mono'>
          {username ? username[0].toUpperCase() : '?'}
        </div>

        <div>
          <h2 className='text-xl font-semibold text-slate-900'>
            Welcome back, {username} 👋
          </h2>
          <p className='text-sm text-slate-500 mt-1'>
            You are successfully logged in.
          </p>
        </div>

        <button
          onClick={onLogout}
          className='bg-red-500 text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-red-600 active:scale-[0.98] transition-all mt-2'
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard