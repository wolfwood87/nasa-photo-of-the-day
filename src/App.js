import React from "react";
import "./App.css";
import PhotoList from "../src/Components/PhotoList.js";
import MonthButton from "../src/Components/MonthButton";
import DayButton from "../src/Components/DayButton";
import YearButton from "../src/Components/YearButton";

function App() {
  
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <PhotoList />
    </div>
  );
}

export default App;
