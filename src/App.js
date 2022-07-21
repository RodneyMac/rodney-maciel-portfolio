import React from "react";
import HomeView from "./screens/HomeView/HomeView";
import { BrowserRouter } from "react-router-dom";
import "./theme/colors.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeView/>
      </BrowserRouter>
    </div>
  );
}

export default App;
