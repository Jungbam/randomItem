import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// css
import styled from "styled-components";
// sub, ui
import FixBox from "./components/sub/FixBox";
import Footer from "./components/sub/Footer";
import Header from "./components/sub/Header";
import Detail from "./pages/Detail/Detail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Intro from "./pages/Intro/Intro";
import Item from "./pages/Item/Item";
import NewItem from "./pages/Item/newItem";
import UpdateItemPage from "./pages/UpdateItemPage/UpdateItemPage";

const Router = () => {
  return (
    <BrowserRouter>
      <StHeader>
        <Header />
      </StHeader>
      <FixBox />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/item" element={<Item />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/updateItem/:itemId" element={<UpdateItemPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;

const StHeader = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #ffffffd5;
`;
