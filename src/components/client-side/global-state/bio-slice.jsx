import { createSlice } from "@reduxjs/toolkit";

const bioSlice = createSlice({
  name: "bio",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setBio: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setBio } = bioSlice.actions;
export default bioSlice.reducer;
