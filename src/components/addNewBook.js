import React from 'react';

function AddNewBook() {
  return (
    <form className="add-book-section">
      <h1>ADD NEW BOOK</h1>
      <input type="text" placeholder="Book title" />
      <select>
        <option value="">Category</option>
        <option value="Romance">Romance</option>
        <option value="Documentary">Documentary</option>
        <option value="Fiction">Fiction</option>
        <option value="Crime">History</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNewBook;
