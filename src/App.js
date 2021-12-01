import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContextFun from "./context/ContextProvider";
import "./App.css";
import Messages from "./components/Messages";
function App() {
  return (
    <ContextFun>
      <Navbar />
    <Home/>
    {/* <Messages/> */}
    </ContextFun>
  );
}

export default App;

