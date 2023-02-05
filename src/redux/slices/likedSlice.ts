import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { items: { id: number }[] } = {
  items: [],
};

const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addToLiked(state, action: PayloadAction<{ id: number }>) {
      state.items.find((item) => item.id === action.payload.id)
        ? (state.items = [...state.items.filter((item) => item.id !== action.payload.id)])
        : state.items.push(action.payload);
    },
  },
});

export const { addToLiked } = likedSlice.actions;

export default likedSlice.reducer;
