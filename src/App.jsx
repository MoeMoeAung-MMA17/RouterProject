import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.Service";
import useFetch from "./hook/useFetch";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "../NotFound";
import DetailBookPage from "./page/book/DetailBook.page";


const App = () => {
  const { loading, error, data } = useFetch(GetBookData, "author");

  return (
    <div className="main">
      <NavComponents/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
