import './App.css'
import { AuthProvider, useAuth } from './context/AuthContext'
import LoginForm from './LoginForm/LoginForm'
import Dashboard from './Dashboard/Dashboard'

function AppContent() {
  const { isLoggedIn, username, login, logout } = useAuth()

  if (isLoggedIn) {
    return <Dashboard username={username} onLogout={logout} />
  }

  return <LoginForm onLogin={login} />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App