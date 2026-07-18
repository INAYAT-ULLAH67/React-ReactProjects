import React from "react";
import { CartProvider } from "./context/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSidebar from "./components/CartSidebar.jsx"; // 💡 Fixed line

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col w-full antialiased">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
          {/* Responsive two-column structural dashboard block layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Left Column: Product grid gallery takes 3 spaces */}
            <div className="lg:col-span-3">
              <ProductList />
            </div>

            {/* Right Column: Checkout totals sidebar panel takes 1 space */}
            <div className="lg:col-span-1">
              <CartSidebar />
            </div>

          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;