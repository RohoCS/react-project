import React from "react";
import logo from "./logo.svg";
import vite from "./Vitejs-logo.svg";
import "./App.css";
import Input from "./components/inputs/Input";
import Slider from "./components/slider/slider";

const imgArr = [logo, vite];

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Slider images={imgArr}></Slider>

        <div className="App-inputs">
          <Input placeholder="Type something" />
        </div>
      </header>
    </div>
  );
};

export default App;
