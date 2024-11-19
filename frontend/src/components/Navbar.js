import React from 'react';
import './Navbar.css';

const Navbar = ({ onAddClick }) => (
  <nav className="navbar">
    <h1 className="navbar-title">Student Management</h1>
    <button className="navbar-btn" onClick={onAddClick}>Add Student</button>
  </nav>
);

export default Navbar;
