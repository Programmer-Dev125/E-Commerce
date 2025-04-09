import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    received: false,
    danger: false,
    message: "",
  },
  reducers: {
    onResponse: (state, action) => {
      state.received = action.payload.received;
      state.danger = action.payload.danger;
      state.message = action.payload.message;
    },
    closeResponse: (state) => {
      state.received = false;
      state.danger = false;
      state.message = "";
    },
  },
});

export const { onResponse, closeResponse } = responseSlice.actions;
export default responseSlice.reducer;
