import { createSlice } from "@reduxjs/toolkit";

const searchModel = createSlice({
  name: "searchModel",
  initialState: { value: false },
  reducers: {
    onClose: (state) => {
      state.value = false;
    },
    onOpen: (state) => {
      state.value = true;
    },
  },
});

export const { onClose, onOpen } = searchModel.actions;
export default searchModel.reducer;
