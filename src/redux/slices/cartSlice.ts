import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { items: { id: number; quantity: number; price: number }[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard(state, action: PayloadAction<{ id: number; quantity: number; price: number }>) {
      state.items.find((item) => item.id === action.payload.id)
        ? (state.items = [...state.items.filter((item) => item.id !== action.payload.id)])
        : state.items.push(action.payload);
    },
  },
});

export const { addToCard } = cartSlice.actions;

export default cartSlice.reducer;
