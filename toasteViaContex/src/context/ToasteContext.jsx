// src/context/ToasteContext.jsx
import { createContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const notify = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {

      setToasts((prev) => prev.filter((t) => t.id !== id));

      
    }, 500);
  }, []);



  return (
    <ToastContext.Provider value={{ toasts, notify }}>
      {children}
    </ToastContext.Provider>
  );
}

export { ToastContext };