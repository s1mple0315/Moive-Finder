import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} /> */}
    <App />
  </React.StrictMode>
);
