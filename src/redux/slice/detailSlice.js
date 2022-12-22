import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { client } from "../../api/axios";
import { Cookies } from "react-cookie";

const initialState = {
  itemlist: [],
  detail: {},
  isLoading: false,
  error: false,
};

export const __getItems = createAsyncThunk(
  "itemlist/getitems",
  async (payload, thunkAPI) => {
    try {
      const response = await client.get(`/api/items/detail/${payload}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "commentlist/addComment",
  async (payload, thunkAPI) => {
    try {
      const res = await client.post(`/api/comments/${payload.itemId}`, {
        content: payload.content,
      });
      if (res.status === 201) {
        const result = await client.get(`api/items/detail/${payload.itemId}`);
        return thunkAPI.fulfillWithValue(result?.data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//삭제
export const __deleteComment = createAsyncThunk(
  "commentlist/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const { commentId, itemId } = payload;

      const res = await client.delete(`/api/comments/${commentId}`);
      if (res.status === 200) {
        const result = await client.get(`/api/items/detail/${itemId}`);

        return thunkAPI.fulfillWithValue(result.data);
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "commentlist/__updateComment",
  async (payload, thunkAPI) => {
    try {
      const { commentId, itemId, content } = payload;
      const res = await client.patch(`/api/comments/${commentId}`, { content });
      if (res.status === 200) {
        const result = await client.get(`/api/items/detail/${itemId}`);
        return thunkAPI.fulfillWithValue(result.data);
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const detailSlice = createSlice({
  name: "itemlist",
  initialState,
  reducers: {},
  extraReducers: {
    //get items
    [__getItems.pending]: (state) => {
      state.isLoading = true;
    },
    [__getItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__getItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add comment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete comment
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },

    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    // updateComment
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.detail = action.payload;
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;
