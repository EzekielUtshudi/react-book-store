import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook.js';
import Books from './Books.js';

function BooksPage() {
  const bookList = [
    {
      booktitle: ' The Journey to Triumph in Australia',
      author: ' R. Kaushik',
      category: ' History',
      id: uuidv4(),
    },
  ];
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
}

export default BooksPage;
