import React from "react";
import "./App.css";
import PhotoList from "../src/Components/PhotoList.js";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <PhotoList />
    </div>
  );
}

export default App;
