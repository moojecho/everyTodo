import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "../components/list/List";
import Detail from "../components/detail/Detail";
import Edit from "../components/edit/Edit";
import Layout from "../components/layout/Layout";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} exact />
      <Route path="/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default Pages;
