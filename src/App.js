import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
          <footer>
        This weather app was coded by Tia Ferguson and is {" "}
            <a href="https://github.com/Jusferg/react-weather-apps" 
            target="_blank">open-sourced on GitHub</a>
          </footer>
      </div>
    </div>
  );
}
