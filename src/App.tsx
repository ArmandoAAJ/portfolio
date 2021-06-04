import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/index";
import { Routes } from "./routes/index";
import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};
