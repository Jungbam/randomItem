import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: 1,
  reducer: {
    addlist: (state, action) => {},
  },
});

export const { addlist } = itemSlice.actions;
export default itemSlice.reducer;
