import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartSidebar() {
  const { caRt, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = caRt.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-gray-900 border-b pb-4 mb-4">Your Cart Summary</h2>

      {caRt.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm">Your basket is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="max-h-[300px] overflow-y-auto space-y-4 pr-1">
            {caRt.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b pb-4 last:border-0 last:pb-0">
                <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-gray-800 truncate">{item.title}</h4>
                  <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="flex items-center gap-2 border rounded-md p-1 bg-gray-50">
                  <button 
                    onClick={() => removeFromCart(item)}
                    className="px-1.5 hover:bg-gray-200 text-gray-600 font-bold text-xs rounded"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-gray-700">{item.quantity}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="px-1.5 hover:bg-gray-200 text-gray-600 font-bold text-xs rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-gray-900 border-t pt-2 mt-2">
              <span>Total Bill</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-xs transition-colors shadow-sm">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;