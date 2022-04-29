import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navigation">
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
