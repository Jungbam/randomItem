import "./App.css";
import Router from "./Router";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logedIn } from "./redux/slice/userSlice";
if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}
function App() {
  // const cookie = new Cookies()
  // const dispatch = useDispatch()
  // // const checkToken = useSelector((state) => state.userSlice.isLogedIn)
  // const giveToken = useSelector((state) => state.userSlice.user.token)
  // if (checkToken == true) {
  //   cookie.set('token', giveToken)
  // }
  // const checkTokeno = useSelector((state) => console.log('여기야', state.userSlice.isLogedIn))
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
