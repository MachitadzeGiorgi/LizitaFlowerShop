import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Home.css";
import "./styles/Header.css";
import "./styles/IntroSection.css";
import "./styles/Middle.css";
import "./styles/OwnFlower.css";
import "./styles/Footer.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
