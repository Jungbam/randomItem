import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { client } from "../../api/axios";

const initialState = {
  itemlist: [],
  detail: {
    itemid: "",
    title: "",
    price: "",
    content: "",
    images: {
      src: "",
    },
    comments: [
      {
        content: "",
        User: {
          nickname: "",
        },
      },
    ],
  },
  isLoading: false,
  error: null,
};

export const __getItems = createAsyncThunk(
  "itemlist/getitems",
  async (payload, thunkAPI) => {
    // console.log("페이로드다", payload);
    try {
      const itemlist = await client.get(`/api/items/detail/${payload}`);
      // console.log("아이템", itemlist);

      return thunkAPI.fulfillWithValue(itemlist.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "itemlist/addComment",
  async (payload, thunkAPI) => {
    // console.log("serverpayload", payload);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/comments/${payload.itemid}`,
        payload.content,
        { Authorization: `Bearer ${payload.token}` }
      );
      console.log("res", payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//삭제
export const __deleteComment = createAsyncThunk(
  "todos/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_SERVER}/api/comments/`,
        payload
      );
      return thunkAPI.fulfillWithValue(res.data);
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
    [__getItems.pending]: (state) => {
      state.isLoading = true;
    },
    [__getItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      // state.itemlist = action.payload;
      // console.log("list", state.itemlist);
    },
    [__getItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail.comment = action.payload.content;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },

    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// const detailSlice = createSlice({
//   name: "itemlist",
//   initialState,
//   reducers: {
//     // getItem: (state, action) => {
//     //  state.mokData = action.payload
//     // },

//     getComment: (state, action) => {
//       return {
//         ...state,
//         mokData: state.mokData.find((commentid) => {
//           return commentid.comments === action.payload;
//         }),
//       };
//     },

//     addComment: (state, action) => {
//       return {
//         ...state,
//         mokData: [...state.mokData, action.payload],
//       };
//     },

//     deleteComment: (state, action) => {
//       return {
//         mokData: state.mokData.filter(
//           (comment) => comment.id !== action.payload
//         ),
//       };
//     },
//   },
// });

export default detailSlice.reducer;
