import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './booksPage';
import CategoryPage from './categoryPage';
import Navbar from './navbar';
import '../index.css';

function Bookstore() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default Bookstore;
