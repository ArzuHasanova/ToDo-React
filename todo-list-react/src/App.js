//@ts-check
import ToDo from "./Components/ToDo";
import Header from "./Components/Header";
import React from "react";
import './Components/CSS/ToDo.css';

function App() {
  return (
      <div className={"text-center mt-5"}>
          <Header />
          <ToDo />
      </div>
  );
}

export default App;
