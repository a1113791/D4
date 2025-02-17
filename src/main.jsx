import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./assets/scss/all.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 CSS
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
