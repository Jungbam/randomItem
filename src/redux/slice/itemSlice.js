import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/axios";

const initialState = {
  isloading: false,
  error: false,
  auth: false,
  items: [],
  famous: [],
  search: [],
  last: false,
};

export const getMain = createAsyncThunk(
  "itemSlice/getMain",
  async (response, thunkAPI) => {
    try {
      if (response !== 401) {
        const items = await client.get("/api/items/main");
        await new Promise((resolve) => setTimeout(resolve, 500));
        const data = { items: items.data.data };
        return { ...data };
      } else {
        return 401;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getItem = createAsyncThunk(
  "itemSlice/getItem",
  async (lastId, thunkAPI) => {
    try {
      const items = await client.get(`/api/items?lastId=${lastId}`);
      const data = [...items.data.data];
      const lastValue = thunkAPI.getState().itemSlice.last;
      if (!lastValue) {
        if (data.length === 20) {
          return { data: [...data], last: false };
        } else {
          return { data: [...data], last: true };
        }
      } else return "stop";
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const searchLabel = createAsyncThunk(
  "itemSlice/searchLabel",
  async (category, thunkAPI) => {
    try {
      const items = await client.get(`/api/items/category/${category}`);
      if (items.status === 200) return items.data;
      else return thunkAPI.rejectWithValue(items.result);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const searchItem = createAsyncThunk(
  "itemSlice/searchItem",
  async (searchValue, thunkAPI) => {
    try {
      const items = await client.get(`/api/items/search?title=${searchValue}`);
      if (items.status === 200) return items.data;
      else return thunkAPI.rejectWithValue();
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
      const response = await client.post("/api/items", data);
      if (response.status === 201) {
        result = await client.get("/api/items");
        return result.data;
      } else {
        return thunkAPI.rejectWithValue({ message: "등록 실패  :: 서버오류" });
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: "등록 실패 :: 서버오류" });
    }
  }
);

export const deleteItem = createAsyncThunk(
  "itemSlice/deleteItem",
  async (id, thunkAPI) => {
    try {
      let result;
      const response = await client.delete(`/api/items/${id}`);
      if (response.status === 200) result = await client.get("/api/items");
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
      const response = await client.patch(`/api/items/${id}`, input);
      if (response.status === 201) result = await client.get("/api/items");
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
    [getMain.pending]: (state, action) => {
      state.isloading = true;
    },
    [getMain.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.famous = [...payload.items];
    },
    [getMain.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },

    [searchLabel.pending]: (state, action) => {
      state.isloading = true;
    },
    [searchLabel.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.search = [...payload?.data];
    },
    [searchLabel.rejected]: (state, action) => {
      state.isloading = false;
      alert(action.error.message);
      state.error = true;
    },

    [searchItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [searchItem.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.search = [...payload?.data];
    },
    [searchItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },

    [getItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [getItem.fulfilled]: (state, { payload }) => {
      if (payload !== "stop") {
        state.isloading = false;
        state.auth = true;
        state.last = payload?.last;
        state.items = [...state.items, ...payload?.data];
      }
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
      state.items = payload.data;
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
      state.items = payload.data;
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
      state.items = payload.data;
    },
    [updateItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },
  },
});

export const { addlist } = itemSlice.actions;

export default itemSlice.reducer;
