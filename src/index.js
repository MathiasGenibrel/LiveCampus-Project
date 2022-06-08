import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { themeConfig } from "./styles/theme.config";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {" "}
            {/* <Home /> */}
            <Route path="albums" element={<App />} /> {/* <Album /> */}
            <Route path="photos" element={<App />} /> {/* <PhotoList /> */}
          </Route>
          <Route path="/login" element={<App />} />
          <Route path="/register" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
