import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductList() {
  const { products, addToCart } = useContext(CartContext);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg font-medium text-gray-500 animate-pulse">Loading items...</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group flex flex-col justify-between bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-gray-100"
        >
          <div className="w-full bg-white flex items-center justify-center h-48 p-2">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform ease-in-out duration-200"
            />
          </div>

          <div className="mt-4 flex flex-col flex-grow">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
            <h3 className="text-sm font-semibold text-gray-700 line-clamp-2 min-h-[40px] mb-2">{product.title}</h3>
            <p className="text-lg font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
            
            <button
              onClick={() => addToCart(product)}
              className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors text-sm shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;