import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detailSlice",
  initialState: 1,
  reducer: {
    addlist: (state, action) => {},
  },
});

export const { addlist } = detailSlice.actions;
export default detailSlice.reducer;
