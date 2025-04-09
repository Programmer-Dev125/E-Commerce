import { createSlice } from "@reduxjs/toolkit";

const cartModel = createSlice({
  name: "cartModel",
  initialState: { value: false },
  reducers: {
    closeCart: (state) => {
      state.value = false;
    },
    openCart: (state) => {
      state.value = true;
    },
  },
});

export const { closeCart, openCart } = cartModel.actions;
export default cartModel.reducer;
