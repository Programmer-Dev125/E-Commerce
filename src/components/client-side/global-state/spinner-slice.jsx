import { createSlice } from "@reduxjs/toolkit";

const spin = createSlice({
  name: "spin",
  initialState: { value: false },
  reducers: {
    onSpin: (state) => {
      state.value = !state.value;
    },
  },
});

export const { onSpin } = spin.actions;
export default spin.reducer;
