import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../slice/detailSlice";
import itemSlice from "../slice/itemSlice";
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: { detailSlice, itemSlice, userSlice },
});
