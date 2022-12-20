import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

//    <  로그인 thunk 함수  >
export const __postSignin = createAsyncThunk(
  "POST_SIGNIN", //액션 벨류
  async (arg, thunkAPI) => {
    const cookie = new Cookies();
    try {
      const signinData = await axios.post(
        `http://koyunhyeok.shop/api/auth/login`,
        arg
      );
      //콘솔에서 토큰위치 찾고 데이터 뽑아오기
      //const token = postData.Response.result.token
      //쿠키에 토큰 저장
      // cookie.set('token', token)
      return thunkAPI.fulfillWithValue(signinData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//    <  회원가입 thunk 함수  >
export const __postSignup = createAsyncThunk(
  "POST_SIGNUP",
  async (arg, thunkAPI) => {
    const cookie = new Cookies();
    try {
      //form data형식으로 header에 설정
      const signupData = await axios({
        method: "post",
        url: "http://koyunhyeok.shop/api/auth/signup",
        data: arg,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      cookie.set("isLogedin", signupData.data.result);
      return thunkAPI.fulfillWithValue(signupData.data);
    } catch (e) {
      //isLogedin
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// const initialState = {
//   message: '',
//   result: true,
//   error: null
// }
const initialState = {
  user: [],
};

//리듀서
const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducer: {
    addlist: (state, action) => {
      return state;
    },
  },
  extraReducers: {
    //     <  회원가입  >
    [__postSignup.pending]: (state) => {},
    [__postSignup.fulfilled]: (state, action) => {
      state.user = action.payload.result;
    },
    [__postSignup.rejected]: (state, action) => {
      // state.error = action
    },

    //    <  로그인  >
    [__postSignin.pending]: (state) => {},
    [__postSignin.fulfilled]: (state, action) => {
      // state = action
    },
    [__postSignin.rejected]: (state, action) => {
      console.log("로그인 에러:", action.payload);
      state.error = action.payload;
    },
  },
});

////////////img
// const [imgArr, setImgArr] = useState([]);
// const convertToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// };
// const handleFileUpload = async (e) => {
//   const file = e.target.files[0];
//   const fileName = e.target.files[0].name;
//   const base64 = await convertToBase64(file);
//   setImgArr([...imgArr, { fileSeq: undefined, fileName, fileData: base64 }]);
// };
// const deleteImg = (fileName) => {
//   const res = imgArr.filter((item) => {
//     return item.fileName !== fileName;
//   });
//   setImgArr(res);
// };

export const { addlist } = userSlice.actions;
export default userSlice.reducer;
