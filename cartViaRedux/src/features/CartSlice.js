import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          category: action.payload.category,
          quantity: 1,
        };
        state.cartItems.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
        const idToRemove = action.payload.id

        const existingItem = state.cartItems.find((item) => item.id === idToRemove)

        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== idToRemove)
        }
      }
  }
});

// Make sure BOTH are exported here!
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;