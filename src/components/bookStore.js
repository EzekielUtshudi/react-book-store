import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './BooksPage';
import CategoryPage from './CategoryPage';
import Navbar from './NavBar';
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
