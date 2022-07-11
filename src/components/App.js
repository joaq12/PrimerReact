import React from "react";
import "../App.css";
import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
