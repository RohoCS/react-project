import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root") as HTMLElement;
const virtualRoot = ReactDOM.createRoot(root);

virtualRoot.render(<App />);

reportWebVitals();
