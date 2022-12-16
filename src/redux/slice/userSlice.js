import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: 1,
  reducer: {
    addlist: (state, action) => {
      return state;
    },
  },
});

export const { addlist } = userSlice.actions;
export default userSlice.reducer;
