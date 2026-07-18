import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const CORRECT_USERNAME = "inayat"
  const CORRECT_PASSWORD = "1234"

  const login = (usernameInput, passwordInput) => {
    if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
      setIsLoggedIn(true)
      setUsername(usernameInput)
      setError('')
    } else {
      setError('Please provide correct credentials')
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}