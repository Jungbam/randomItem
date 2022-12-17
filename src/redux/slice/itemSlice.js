import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("done")) ?? {};

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

client.interceptors.request.use(function (config) {
  config.headers.authorization = token;
  return config;
});

client.interceptors.response.use(
  function (response) {
    // 로직 을 401에 URL이 이거면 return
    // 정상처리
    if (response.status !== 401) {
      return response;
    } else {
      return 401;
    }
  }
  // function (error) {
  //   //=> redirect
  //   return Promise.reject(error);
  // }
);

const initialState = {
  isloading: false,
  error: false,
  auth: false,
  items: [],
};

export const getItem = createAsyncThunk(
  "itemSlice/getItem",
  async (response, thunkAPI) => {
    try {
      if (response !== 401) {
        const items = await client.get("/items");
        const auth = await client.get("/posts");
        await new Promise((resolve) => setTimeout(resolve, 500));
        const data = { items: items.data, auth: auth.data };
        return { ...data };
      } else {
        return 401;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const postItem = createAsyncThunk(
  "itemSlice/postItem",
  async (data, thunkAPI) => {
    try {
      let result;
      const response = await client.post("/items", data);
      if (response.status === 201) result = await client.get("/items");
      return result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteItem = createAsyncThunk(
  "itemSlice/deleteItem",
  async (id, thunkAPI) => {
    try {
      let result;
      const response = await client.delete(`/items/${id}`);
      if (response.status === 201) result = await client.get("/items");
      return result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateItem = createAsyncThunk(
  "itemSlice/updateItem",
  async (idInput, thunkAPI) => {
    try {
      let result;
      const { id, input } = idInput;
      const response = await client.patch(`/items/${id}`, input);
      if (response.status === 201) result = await client.get("/items");
      return result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducer: {
    addlist: (state, action) => {},
  },
  extraReducers: {
    [getItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [getItem.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.items = [...payload.items.items];
    },
    [getItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },

    [postItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [postItem.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.items = payload.items;
    },
    [postItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },

    [deleteItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [deleteItem.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.items = payload.items;
    },
    [deleteItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },

    [updateItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [updateItem.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.items = payload.items;
    },
    [updateItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },
  },
});

export const { addlist } = itemSlice.actions;
export default itemSlice.reducer;
