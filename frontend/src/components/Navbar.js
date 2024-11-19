import React from 'react';

const Navbar = ({ onAddClick }) => (
  <nav>
    <h1>Student Management</h1>
    <button onClick={onAddClick}>Add Student</button>
  </nav>
);

export default Navbar;
