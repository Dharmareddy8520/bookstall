import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Createbooks,
  Deletebooks,
  Edit,
  Showbooks,
} from "./components/pages";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<Createbooks />} />
      <Route path="/books/delete/:id" element={<Deletebooks />} />
      <Route path="/books/edit/:id" element={<Edit />} />
      <Route path="/books/show/:id" element={<Showbooks />} />
    </Routes>
  );
};

export default App;
