import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bookstore from './components/bookstore';
// import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Bookstore />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
