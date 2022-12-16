import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixBox from "./components/sub/FixBox";
import Footer from "./components/sub/Footer";
import Header from "./components/sub/Header";
import Detail from "./pages/Detail/Detail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Intro from "./pages/Intro/Intro";
import Item from "./pages/Item/Item";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <FixBox />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/item" element={<Item />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
