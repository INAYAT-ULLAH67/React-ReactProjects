import React, { useState } from 'react'

function LoginForm({onLogin, isLoading }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
onLogin(username, password)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col gap-5'
      >
        <div className='text-center mb-2'>
          <div className='w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-4 font-mono text-lg'>
            🔒
          </div>
          <h2 className='text-2xl font-semibold text-slate-900'>Welcome back</h2>
          <p className='text-sm text-slate-500 mt-1'>Log in to continue</p>
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-xs font-medium text-slate-600'>Username</label>
          <input
            type='text'
            placeholder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors'
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-xs font-medium text-slate-600'>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors'
          />
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='bg-slate-900 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-slate-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2'
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm