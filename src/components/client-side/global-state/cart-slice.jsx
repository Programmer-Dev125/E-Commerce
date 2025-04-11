import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCart, addCart, removeCart } = cart.actions;
export default cart.reducer;
