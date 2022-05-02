import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Bookstore from './components/BookStore';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Bookstore />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
