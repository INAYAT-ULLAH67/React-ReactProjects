import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  // Grab the cart array from your context
  const { caRt } = useContext(CartContext);

  // Derive total item count safely
  const totalItems = caRt ? caRt.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-6 py-4 w-full block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-600">⚡ QuickShop</h1>
        <div className="text-gray-700 font-medium">
          Cart ({totalItems})
        </div>
      </div>
    </nav>
  );
}

export default Navbar;