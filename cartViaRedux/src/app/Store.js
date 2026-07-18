import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/CartSlice'; // Imports your cart slice reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Registers the cart reducer under the 'cart' state key
  },
});