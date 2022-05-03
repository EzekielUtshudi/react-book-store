import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './BooksPage.js';
import CategoryPage from './CategoryPage.js';
import Navbar from './Navbar.js';
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
