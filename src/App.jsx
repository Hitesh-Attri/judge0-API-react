import "./App.css";
import "./component/CodeStyles.scss";
import Home from "./component/Home";
import CodeEditor from "./component/CodeEditor";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/code-editor" Component={CodeEditor} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
