import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';

function Books({ bookList }) {
  return (
    <ul className="books-list-section">
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

Books.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape(
    {
      booktitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Books;
