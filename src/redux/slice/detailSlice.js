import { createSlice } from "@reduxjs/toolkit";
import { mokData } from "../../pages/Detail/mok";

const initialState = {
  mokData: mokData,
  detail: {},
};
console.log(initialState.mokData);

const detailSlice = createSlice({
  name: "detailSlice",
  initialState: 1,
  reducer: {
    addlist: (state, action) => {},
  },
});

export const { addlist } = detailSlice.actions;
export default detailSlice.reducer;
