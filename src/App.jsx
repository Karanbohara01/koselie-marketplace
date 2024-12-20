// App.js
import React from "react";
import Carousel from "./components/userComponents/Carousel";
import "./index.css";
import MyRoute from "./MyRoute";
// Polyfill `global` for browser environments
window.global = window.global || window;

function App() {
  return (
    <div className="App">
      <MyRoute />
    </div>
  );
}

export default App;
