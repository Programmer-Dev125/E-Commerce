import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { value: false },
  reducers: {
    menuOpen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { menuOpen } = menuSlice.actions;
export default menuSlice.reducer;
