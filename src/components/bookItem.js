import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ book }) {
  const {
    booktitle, author, id, category,
  } = book;
  return (
    <li key={id}>
      <p>
        Book:
        {booktitle}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" itemID={id}>Remove</button>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      booktitle: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
