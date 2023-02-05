import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import liked from './slices/likedSlice';

export const store = configureStore({
  reducer: { cart, liked },
});
