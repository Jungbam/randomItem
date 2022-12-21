import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { client } from "../../api/axios";

const cookie = new Cookies();
export const __authSing = createAsyncThunk(
  "userSlice/__authSing",
  async (arg, thunkAPI) => {
    try {
      const signInData = await client.get(`/api/auth`);
      if (signInData.status !== 401) {
        return thunkAPI.fulfillWithValue(signInData.data.result);
      } else {
        return thunkAPI.rejectWithValue(401);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postSignin = createAsyncThunk(
  "userSlice/__postSignin",
  async (arg, thunkAPI) => {
    try {
      const signInData = await client.post(`/api/auth/login`, arg);
      return thunkAPI.fulfillWithValue(signInData.data.result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postSignup = createAsyncThunk(
  "userSlice/__postSignup",
  async (arg, thunkAPI) => {
    try {
      const signupData = await client.post("/api/auth/signup", arg);
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

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    logOut: (state, action) => {
      state.isLogedIn = false;
      cookie.remove("token");
    },
  },

  extraReducers: {
    [__authSing.pending]: (state) => {},
    [__authSing.fulfilled]: (state, action) => {
      const { result, ...user } = action.payload;
      state.user = user;
      state.isLogedIn = true;
    },
    [__authSing.rejected]: (state, action) => {
      state.user = {};
      state.isLogedIn = false;
    },

    [__postSignup.pending]: (state) => {},
    [__postSignup.fulfilled]: (state, action) => {
      state.user = action.payload.result;
    },
    [__postSignup.rejected]: (state, action) => {
      state.isLogedIn = false;
    },

    [__postSignin.pending]: (state) => {},
    [__postSignin.fulfilled]: (state, action) => {
      const { token, ...user } = action.payload;
      cookie.set("token", token);
      state.user = user;
      state.isLogedIn = true;
    },
    [__postSignin.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLogedIn = false;
    },
  },
});
console.log(userSlice);

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
