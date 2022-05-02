import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/books';

function AddNewBook() {
  const [inputValues, setInputValues] = useState({
    booktitle: '',
    category: '',
  });
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { booktitle, category } = inputValues;
    const newBook = {
      booktitle,
      id,
      category,
    };
    dispatch(addBook(newBook));
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="add-book-section" onSubmit={submitBookToStore}>
      <h1>ADD NEW BOOK</h1>
      <input
        type="text"
        placeholder="Book title"
        name="booktitle"
        onChange={onChange}
        required
      />
      <select placeholder="categories" name="category" onChange={onChange} required>
        <option>Category</option>
        <option value="Romance">Romance</option>
        <option value="Documentary">Documentary</option>
        <option value="Fiction">Fiction</option>
        <option value="Crime">Crime</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>Add Book</button>
    </form>
  );
}

export default AddNewBook;
