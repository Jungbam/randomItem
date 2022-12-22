import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../slice/detailSlice";
import itemSlice from "../slice/itemSlice";
import userSlice from "../slice/userSlice";

const store = configureStore({
  reducer: { itemSlice, userSlice, detailSlice },
});

export default store;
