import React, { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { useSelector } from 'react-redux'

function App() {
  // 1. Local state to manage which page to display ('products' or 'cart')
  const [view, setView] = useState('products')
  
  // 2. Grab the cart items from Redux to display a real-time badge count on the Cart tab
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full antialiased">
      {/* 3. Global Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h1 
          onClick={() => setView('products')} 
          className="text-xl font-black text-blue-600 cursor-pointer tracking-tight hover:opacity-90 transition-opacity"
        >
          React Redux Store
        </h1>
        
        <div className="flex gap-4">
          {/* Products Catalog Tab */}
          <button 
            onClick={() => setView('products')}
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
              view === 'products' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Products
          </button>
          
          {/* Cart Page Tab with dynamic notification badge */}
          <button 
            onClick={() => setView('cart')}
            className={`relative text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              view === 'cart' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Cart
            {totalItemsCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-200">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* 4. Conditional Page Rendering */}
      <main className="flex-grow">
        {view === 'products' ? (
          <ProductList />
        ) : (
          <Cart />
        )}
      </main>
    </div>
  )
}

export default App