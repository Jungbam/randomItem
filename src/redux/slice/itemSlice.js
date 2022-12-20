import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: 1,
  reducer: {
    addlist: (state, action) => { },
  },
});

export const { addlist } = itemSlice.actions;

//서버에 댓글 추가
// export const __addEmail = createAsyncThunk(
//   "ADD_COMMENT",
//   async (arg, thunkAPI) => {
//     try {
//       // console.log("서버에 이메일을 등록 합니다")
//       // console.log("arg:", arg)
//       // console.log("thunkAPI:", thunkAPI)
//       const email = await axios.post(`http://localhost:3001/auth/signup`, arg)

//       // console.log("addData:", addData.data)
//       return thunkAPI.fulfillWithValue(email);

//     } catch (e) {

//       // console.log("e:", e)
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );




export default itemSlice.reducer;
