import "./App.css";
import Router from "./Router";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __authSing } from "./redux/slice/userSlice";
if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__authSing());
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
