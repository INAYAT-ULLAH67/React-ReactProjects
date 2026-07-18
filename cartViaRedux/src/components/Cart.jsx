import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// 1. Import removeFromCart from your slice
import { removeFromCart } from '../features/CartSlice' 

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500">Go back to the catalog to add some awesome items!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
          Shopping Cart
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Left Side: Product Image & Details */}
                <div className="flex items-center gap-4 flex-1 min-w-0 w-full sm:w-auto">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 p-1 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-gray-800 truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Right Side: Quantity, Price, Subtotal, and Delete Button */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-0 pt-4 sm:pt-0">
                  {/* Unit Price */}
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-gray-400">Unit Price</p>
                    <p className="text-sm font-medium text-gray-700">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Indicator */}
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <span className="text-xs text-gray-500 mr-1">Qty:</span>
                    <span className="text-sm font-bold text-gray-800">{item.quantity}</span>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right min-w-[80px]">
                    <p className="text-xs text-gray-400">Subtotal</p>
                    <p className="text-sm font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* REMOVE BUTTON (Trash Icon) */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))} // 💡 FIXED: Passing item.id directly
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  title="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>

                </div>
              </li>
            ))}
          </ul>

          {/* Cart Summary (Footer) */}
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">
                Total items in cart:{' '}
                <span className="font-semibold text-gray-800">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </p>
            </div>
            
            <div className="flex items-center gap-6 self-end sm:self-auto">
              <span className="text-gray-500 text-sm font-medium">Grand Total:</span>
              <span className="text-2xl font-black text-gray-900">
                ${totalCartPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart