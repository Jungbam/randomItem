import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { client } from "../../api/axios";

const cookie = new Cookies();
export const __postSignin = createAsyncThunk(
  "POST_SIGNIN",
  async (arg, thunkAPI) => {
    try {
      const signinData = await client.post(`/api/auth/login`, arg);
      return thunkAPI.fulfillWithValue(signinData.data.result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postSignup = createAsyncThunk(
  "POST_SIGNUP",
  async (arg, thunkAPI) => {
    try {
      const signupData = await client.post("/api/auth/signup", arg);
      cookie.set("isLogedin", signupData.data.result);
      return thunkAPI.fulfillWithValue(signupData.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  user: {},
  isLogedIn: false,
  error: "",
};

//리듀서
const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducer: {
    addlist: (state, action) => {
      return state;
    },
    logedIn: (state, action) => {
      state.bool = action.payload;
    },
    logedOut: (state, action) => {
      state.bool = action.payload;
    },
  },
  extraReducers: {
    [__postSignup.pending]: (state) => {},
    [__postSignup.fulfilled]: (state, action) => {
      state.user = action.payload.result;
    },
    [__postSignup.rejected]: (state, action) => {},

    [__postSignin.pending]: (state) => {},
    [__postSignin.fulfilled]: (state, action) => {
      console.log(action.payload);
      const { token, ...user } = action.payload;
      cookie.set("token", token);
      state.user = user;
    },
    [__postSignin.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addlist, logedIn, logedOut } = userSlice.actions;
export default userSlice.reducer;
