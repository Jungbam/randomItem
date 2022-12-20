import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      const itemlist = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/items/detail/${payload}`
      );
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
    console.log("serverpayload", payload);
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_SERVER}/api/comments/${payload.itemid}`,
        payload.comments
      );
      // console.log("res", res);
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
      state.detail.comment = action.payload.comment;
    },
    [__addComment.rejected]: (state, action) => {
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
