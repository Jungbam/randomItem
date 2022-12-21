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
  const cookie = new Cookies();
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
