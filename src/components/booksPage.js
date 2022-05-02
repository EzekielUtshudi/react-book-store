import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import Books from './Books';

function BooksPage() {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
}

export default BooksPage;
