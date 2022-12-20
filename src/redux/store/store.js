import { configureStore } from "@reduxjs/toolkit";
// import detailSlice from "../slice/detailSlice";
// import itemSlice from "../slice/itemSlice";
// import userSlice from "../slice/userSlice";
import itemReducer from "../slice/detailSlice";

const store = configureStore({
  reducer: { itemlist: itemReducer },
  devTools: false,
});

export default store;
