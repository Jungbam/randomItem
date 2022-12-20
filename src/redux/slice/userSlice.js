import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

//    <  토큰이 필요한 API에 post,delete 요청을 할때 header 작성 양식  >
// headers: {
//   Authorization: `Bearer ${token}`
// } // Bearer하고 띄어쓰기 있음


//    <  로그인 thunk 함수  >
export const __postSignin = createAsyncThunk(
  "POST_SIGNIN",//액션 벨류
  async (arg, thunkAPI) => {
    console.log("로그인 thunk 함수작동")
    // const cookie = new Cookies();
    try {
      const signinData = await axios.post(`http://koyunhyeok.shop/api/auth/login`, arg);
      // console.log("서버로 부터 response를 받아옴")
      console.log("signInResponse:", signinData.data.result)
      //쿠키에 토큰 저장
      // cookie.set('token', signinData.data.result.token)

      return thunkAPI.fulfillWithValue(signinData.data.result);

    } catch (e) {
      return thunkAPI.rejectWithValue(e);

    }
  }
);

//    <  회원가입 thunk 함수  >
export const __postSignup = createAsyncThunk(
  "POST_SIGNUP",
  async (arg, thunkAPI) => {
    console.log('thunk 함수 작동함')
    const cookie = new Cookies()
    try {
      //form data형식으로 header에 설정
      const signupData = await axios({
        method: 'post',
        url: 'http://koyunhyeok.shop/api/auth/signup',
        data: arg,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      // console.log('서버로 부터 response가 넘어옴')
      // console.log("signupResponse:", signupData.data)
      cookie.set('isLogedin', signupData.data.result)
      return thunkAPI.fulfillWithValue(signupData.data);
    }
    //isLogedin
    catch (e) {
      return thunkAPI.rejectWithValue(e);

    }
  }

)
// const initialState = {
//   message: '',
//   result: true,
//   error: null
// }
const initialState = {
  user: [], isLogedIn: false

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
      state.bool = action.payload
    },
    logedOut: (state, action) => {
      console.log('bool작동')
      state.bool = action.payload
    }
  },
  extraReducers: {
    //     <  회원가입  >
    [__postSignup.pending]: (state) => { },
    [__postSignup.fulfilled]: (state, action) => {
      console.log("action:", action)
      state.user = action.payload.result
    },
    [__postSignup.rejected]: (state, action) => {
      console.log("회원가입 에러:", action)
      // state.error = action
    },

    //    <  로그인  >
    [__postSignin.pending]: (state) => { },
    [__postSignin.fulfilled]: (state, action) => {
      console.log("로그인 fulfilled ,action:", action)
      state.user = action.payload
      // state = action

    },
    [__postSignin.rejected]: (state, action) => {
      console.log("로그인 에러:", action.payload)
      state.error = action.payload
    },
  }
}

);

export const { addlist, logedIn, logedOut } = userSlice.actions;
export default userSlice.reducer;
