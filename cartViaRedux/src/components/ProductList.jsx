import React, { useState, useEffect } from 'react'
// 1. Import useDispatch from react-redux to send actions to our store
import { useDispatch } from 'react-redux'
// 2. Import your addToCart action creator (adjust path as necessary)
import { addToCart } from '../features/CartSlice'

function ProductList() {
  const [products, setProducts] = useState([])
  
  // 3. Initialize the dispatch hook
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  // 4. Action handler dispatching the Redux action
  const handleAddToCart = (product) => {
    // dispatch re-render addToCart method! run this method
    dispatch(addToCart(product))
  }

  // Handle the loading state while the API is fetching
  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
          Product Catalog
        </h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col justify-between bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 border border-gray-100"
            >
              {/* Image Container */}
              <div className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center h-48 p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4 flex flex-col ">
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
                  {product.category}
                </p>

                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 ">
                  {product.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-3 mb-4 ">
                  {product.description}
                </p>

                {/* Price and ID Section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mb-4">
                  <span className="text-xl font-extrabold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    ID: #{product.id}
                  </span>
                </div>

                {/* ADD TO CART BUTTON */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add to Cart
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList;