import './App.css'
import TestButton from './components/TestContexCom'
import { ToastProvider } from './context/ToasteContext'

function App() {
  return (
    <ToastProvider>
      <TestButton />
      
    </ToastProvider>
  )
}

export default App